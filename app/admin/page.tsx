"use client";

import { useEffect, useMemo, useState } from "react";
import { BarChart3, FileText, HeartHandshake, LayoutDashboard, LogOut, Mail, Settings, ShieldCheck, Users } from "lucide-react";

import { getPublicApiBaseUrl } from "@/lib/apiBase";
import {
  CONTACT_STORAGE_KEY,
  EVENT_CONTACTS_UPDATED,
  EVENT_REGISTRATION_UPDATED,
  REGISTRATION_STORAGE_KEY,
} from "@/lib/rgssAdminSync";
import { useLocale } from "@/components/LocaleProvider";

type DonationStatus = "pending" | "received" | "failed";
type ContactStatus = "new" | "in-progress" | "closed";

type Donation = {
  id: string;
  donor: string;
  amount: number;
  purpose: string;
  status: DonationStatus;
  date: string;
};

type ContactLead = {
  id: string;
  name: string;
  email: string;
  subject: string;
  status: ContactStatus;
};

type BlogPost = {
  id: string;
  title: string;
  author: string;
  publishDate: string;
  published: boolean;
};

type ObjectiveItem = {
  id: string;
  name: string;
  active: boolean;
};

type RegisteredUser = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: string;
  photoName: string;
  registeredAt: string;
};

type RegistrationApiRow = {
  id: number | string;
  full_name: string;
  email: string;
  phone: string;
  role: string;
  photo_name?: string;
  registered_at: string;
};

type ContactApiRow = {
  id: number | string;
  name: string;
  email: string;
  subject: string;
  status: ContactStatus;
};

type DonationApiRow = {
  id: number | string;
  donor: string;
  amount: string;
  purpose: string;
  status: DonationStatus;
  donation_date: string;
};

type PanelTab = "dashboard" | "registrations" | "donations" | "contacts" | "blogs" | "objectives" | "settings";

function normalizeApiList<T>(data: unknown): T[] {
  if (Array.isArray(data)) {
    return data as T[];
  }
  if (data && typeof data === "object" && "results" in data) {
    const results = (data as { results?: unknown }).results;
    if (Array.isArray(results)) {
      return results as T[];
    }
  }
  return [];
}

function mapRegistrationFromApi(row: RegistrationApiRow): RegisteredUser {
  return {
    id: String(row.id),
    fullName: row.full_name,
    email: row.email,
    phone: row.phone,
    role: row.role,
    photoName: row.photo_name ?? "",
    registeredAt: row.registered_at,
  };
}

function mapContactFromApi(row: ContactApiRow): ContactLead {
  return {
    id: String(row.id),
    name: row.name,
    email: row.email,
    subject: row.subject,
    status: row.status,
  };
}

function mapDonationFromApi(row: DonationApiRow): Donation {
  return {
    id: String(row.id),
    donor: row.donor,
    purpose: row.purpose,
    status: row.status,
    date: row.donation_date,
    amount: Number(row.amount),
  };
}

const defaultDonations: Donation[] = [
  { id: "DN-1001", donor: "Rohit Sharma", amount: 5000, purpose: "Gau Ambulance", status: "received", date: "2026-05-08" },
  { id: "DN-1002", donor: "Priya Verma", amount: 1500, purpose: "Cow Feeding", status: "pending", date: "2026-05-09" },
  { id: "DN-1003", donor: "Ankit Singh", amount: 10000, purpose: "Gaushala Development", status: "received", date: "2026-05-09" },
];

const defaultContacts: ContactLead[] = [
  { id: "CT-201", name: "Vikram", email: "vikram@mail.com", subject: "Volunteer join request", status: "new" },
  { id: "CT-202", name: "Meera", email: "meera@mail.com", subject: "Cow ambulance emergency", status: "in-progress" },
  { id: "CT-203", name: "Rahul", email: "rahul@mail.com", subject: "Partnership inquiry", status: "closed" },
];

const defaultBlogs: BlogPost[] = [
  { id: "BL-1", title: "How Gau Seva Helps Rural Communities", author: "Admin", publishDate: "2026-05-12", published: true },
  { id: "BL-2", title: "Emergency Rescue Operations For Injured Cows", author: "RGS Team", publishDate: "2026-05-18", published: false },
];

const defaultObjectives: ObjectiveItem[] = [
  { id: "OBJ-1", name: "Gau Raksha Mission", active: true },
  { id: "OBJ-2", name: "Gau Ambulance Service", active: true },
  { id: "OBJ-3", name: "Cow Feeding Program", active: true },
  { id: "OBJ-4", name: "Gaushala Development", active: true },
  { id: "OBJ-5", name: "Become Gaurakshak", active: true },
];

export default function AdminPanelPage() {
  const { t } = useLocale();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [djangoApiToken, setDjangoApiToken] = useState<string | null>(null);
  const [showLoginError, setShowLoginError] = useState(false);
  const [tab, setTab] = useState<PanelTab>("dashboard");

  const [donations, setDonations] = useState<Donation[]>(defaultDonations);
  const [contacts, setContacts] = useState<ContactLead[]>(defaultContacts);
  const [blogs, setBlogs] = useState<BlogPost[]>(defaultBlogs);
  const [objectives, setObjectives] = useState<ObjectiveItem[]>(defaultObjectives);
  const [registrations, setRegistrations] = useState<RegisteredUser[]>([]);
  const [selectedRole, setSelectedRole] = useState("all");
  const [settingsSaved, setSettingsSaved] = useState(false);

  const totalDonation = useMemo(
    () => donations.filter((d) => d.status === "received").reduce((sum, d) => sum + d.amount, 0),
    [donations]
  );
  const registrationRoleCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const item of registrations) {
      counts[item.role] = (counts[item.role] ?? 0) + 1;
    }
    return counts;
  }, [registrations]);
  const availableRoles = useMemo(() => Object.keys(registrationRoleCounts), [registrationRoleCounts]);
  const filteredRegistrations = useMemo(
    () => registrations.filter((item) => selectedRole === "all" || item.role === selectedRole),
    [registrations, selectedRole]
  );

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }

    const apiBaseUrl = getPublicApiBaseUrl();
    const authHeaders = djangoApiToken
      ? { Authorization: `Token ${djangoApiToken}`, "Content-Type": "application/json" }
      : undefined;

    const loadFromLocalRegistrations = () => {
      try {
        const raw = window.localStorage.getItem(REGISTRATION_STORAGE_KEY);
        const parsed = raw ? (JSON.parse(raw) as RegisteredUser[]) : [];
        setRegistrations(parsed);
      } catch {
        setRegistrations([]);
      }
    };

    const loadDemoContacts = () => {
      try {
        const raw = window.localStorage.getItem(CONTACT_STORAGE_KEY);
        const stored = raw ? (JSON.parse(raw) as ContactLead[]) : [];
        setContacts([...stored, ...defaultContacts]);
      } catch {
        setContacts(defaultContacts);
      }
    };

    const reloadContactsFromApi = async () => {
      if (!authHeaders) {
        return;
      }
      try {
        const contactsRes = await fetch(`${apiBaseUrl}/contacts/?ordering=-created_at`, { headers: authHeaders });
        if (contactsRes.ok) {
          const rawJson: unknown = await contactsRes.json();
          const rows = normalizeApiList<ContactApiRow>(rawJson);
          setContacts(rows.map(mapContactFromApi));
        }
      } catch {
        /* ignore */
      }
    };

    const loadRegistrations = async () => {
      if (!authHeaders) {
        loadFromLocalRegistrations();
        return;
      }

      try {
        const apiResponse = await fetch(`${apiBaseUrl}/registrations/?ordering=-registered_at`, {
          headers: authHeaders,
        });
        if (apiResponse.ok) {
          const rawJson: unknown = await apiResponse.json();
          const rows = normalizeApiList<RegistrationApiRow>(rawJson);
          setRegistrations(rows.map(mapRegistrationFromApi));
          return;
        }
        loadFromLocalRegistrations();
      } catch {
        loadFromLocalRegistrations();
      }
    };

    const loadContactsAndDonations = async () => {
      if (!authHeaders) {
        return;
      }

      try {
        const [contactsRes, donationsRes] = await Promise.all([
          fetch(`${apiBaseUrl}/contacts/?ordering=-created_at`, { headers: authHeaders }),
          fetch(`${apiBaseUrl}/donations/?ordering=-donation_date`, { headers: authHeaders }),
        ]);

        if (contactsRes.ok) {
          const rawJson: unknown = await contactsRes.json();
          const rows = normalizeApiList<ContactApiRow>(rawJson);
          setContacts(rows.map(mapContactFromApi));
        }

        if (donationsRes.ok) {
          const rawJson: unknown = await donationsRes.json();
          const rows = normalizeApiList<DonationApiRow>(rawJson);
          setDonations(rows.map(mapDonationFromApi));
        }
      } catch {
        /* keep demo seed data */
      }
    };

    const reloadContacts = () => {
      if (!authHeaders) {
        loadDemoContacts();
        return;
      }
      void reloadContactsFromApi();
    };

    void (async () => {
      await loadRegistrations();
      if (!authHeaders) {
        loadDemoContacts();
      } else {
        await loadContactsAndDonations();
      }
    })();

    const reloadRegistrations = () => {
      void loadRegistrations();
    };

    const onStorage = () => {
      void loadRegistrations();
      reloadContacts();
    };

    window.addEventListener(EVENT_REGISTRATION_UPDATED, reloadRegistrations);
    window.addEventListener(EVENT_CONTACTS_UPDATED, reloadContacts);
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener(EVENT_REGISTRATION_UPDATED, reloadRegistrations);
      window.removeEventListener(EVENT_CONTACTS_UPDATED, reloadContacts);
      window.removeEventListener("storage", onStorage);
    };
  }, [isLoggedIn, djangoApiToken]);

  const handleLogin = async (formData: FormData) => {
    const username = String(formData.get("username") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    const apiBaseUrl = getPublicApiBaseUrl();

    try {
      const tokenResponse = await fetch(`${apiBaseUrl}/auth/token/`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ username, password }).toString(),
      });

      if (tokenResponse.ok) {
        const body = (await tokenResponse.json()) as { token?: string };
        if (body.token) {
          setDjangoApiToken(body.token);
          setIsLoggedIn(true);
          setShowLoginError(false);
          return;
        }
      }
    } catch {
      /* fall through to demo login */
    }

    if (username === "admin" && password === "admin123") {
      setDjangoApiToken(null);
      setIsLoggedIn(true);
      setShowLoginError(false);
      return;
    }

    setShowLoginError(true);
  };

  if (!isLoggedIn) {
    return (
      <section className="mx-auto max-w-md px-6 py-20">
        <div className="rounded-3xl border border-[var(--color-border)] bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
          <h1 className="text-3xl font-extrabold text-[#111]">{t("admin.loginTitle")}</h1>
          <p className="mt-2 text-sm text-gray-600">{t("admin.loginSubtitle")}</p>

          <form
            className="mt-8 space-y-4"
            onSubmit={async (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              await handleLogin(formData);
            }}
          >
            <input
              name="username"
              placeholder="Username"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[var(--color-accent)]"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[var(--color-accent)]"
              required
            />
            {showLoginError && <p className="text-sm text-red-600">{t("admin.loginErrorInvalid")}</p>}
            <button className="w-full rounded-xl bg-[var(--color-primary)] px-4 py-3 font-bold text-white hover:bg-[var(--color-primary-dark)] transition">
              Login
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
      <div className="grid gap-5 md:grid-cols-[250px_1fr]">
        <aside className="rounded-3xl border border-[var(--color-border)] bg-white p-4 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
          <p className="px-3 text-sm font-semibold text-gray-500">{t("admin.adminMenu")}</p>
          <nav className="mt-3 space-y-1">
            <SidebarButton icon={<LayoutDashboard size={18} />} label="Dashboard" active={tab === "dashboard"} onClick={() => setTab("dashboard")} />
            <SidebarButton icon={<Users size={18} />} label="Registrations" active={tab === "registrations"} onClick={() => setTab("registrations")} />
            <SidebarButton icon={<HeartHandshake size={18} />} label="Donations" active={tab === "donations"} onClick={() => setTab("donations")} />
            <SidebarButton icon={<Mail size={18} />} label="Contacts" active={tab === "contacts"} onClick={() => setTab("contacts")} />
            <SidebarButton icon={<FileText size={18} />} label="Blogs" active={tab === "blogs"} onClick={() => setTab("blogs")} />
            <SidebarButton icon={<ShieldCheck size={18} />} label="Objectives" active={tab === "objectives"} onClick={() => setTab("objectives")} />
            <SidebarButton icon={<Settings size={18} />} label="Settings" active={tab === "settings"} onClick={() => setTab("settings")} />
          </nav>
          <button
            onClick={() => {
              setIsLoggedIn(false);
              setDjangoApiToken(null);
            }}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50"
          >
            <LogOut size={16} />
            Logout
          </button>
        </aside>

        <main className="rounded-3xl border border-[var(--color-border)] bg-white p-5 shadow-[0_15px_40px_rgba(0,0,0,0.08)] md:p-6">
          {tab === "dashboard" && (
            <div>
              <h2 className="text-2xl font-extrabold text-[#111]">{t("admin.dashboardTitle")}</h2>
              <p className="mt-1 text-sm text-gray-600">{t("admin.dashboardSubtitle")}</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard title={t("admin.statTotalReceived")} value={`Rs. ${totalDonation.toLocaleString("en-IN")}`} icon={<BarChart3 size={18} />} />
                <StatCard title={t("admin.statTotalRegistrations")} value={String(registrations.length)} icon={<Users size={18} />} />
                <StatCard title={t("admin.statDonations")} value={String(donations.length)} icon={<HeartHandshake size={18} />} />
                <StatCard title={t("admin.statContactLeads")} value={String(contacts.length)} icon={<Mail size={18} />} />
              </div>

              <h3 className="mt-8 text-lg font-bold text-[#111]">{t("admin.recentDonationsHeading")}</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full min-w-[620px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 text-gray-500">
                      <th className="py-3">{t("admin.thId")}</th>
                      <th>{t("admin.thDonor")}</th>
                      <th>{t("admin.thPurpose")}</th>
                      <th>{t("admin.thAmount")}</th>
                      <th>{t("admin.thStatus")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donations.map((d) => (
                      <tr key={d.id} className="border-b border-gray-100">
                        <td className="py-3">{d.id}</td>
                        <td>{d.donor}</td>
                        <td>{d.purpose}</td>
                        <td>Rs. {d.amount.toLocaleString("en-IN")}</td>
                        <td className="capitalize">{d.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {tab === "registrations" && (
            <div>
              <h2 className="text-2xl font-extrabold text-[#111]">{t("admin.registrationsTitle")}</h2>
              <p className="mt-1 text-sm text-gray-600">{t("admin.registrationsSubtitle")}</p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard title={t("admin.statTotalRegistered")} value={String(registrations.length)} icon={<Users size={18} />} />
                {availableRoles.slice(0, 3).map((role) => (
                  <StatCard key={role} title={role} value={String(registrationRoleCounts[role])} icon={<ShieldCheck size={18} />} />
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <label className="text-sm font-semibold text-gray-700">{t("admin.filterByRole")}</label>
                <select
                  value={selectedRole}
                  onChange={(event) => setSelectedRole(event.target.value)}
                  className="rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none"
                >
                  <option value="all">All Roles</option>
                  {availableRoles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[800px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 text-gray-500">
                      <th className="py-3">{t("admin.thName")}</th>
                      <th>{t("admin.thEmail")}</th>
                      <th>{t("admin.thPhone")}</th>
                      <th>{t("admin.thRole")}</th>
                      <th>{t("admin.thPhoto")}</th>
                      <th>{t("admin.thRegisteredAt")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRegistrations.length === 0 ? (
                      <tr>
                        <td className="py-5 text-gray-500" colSpan={6}>
                          {t("admin.noRegistrationsRow")}
                        </td>
                      </tr>
                    ) : (
                      filteredRegistrations.map((entry) => (
                        <tr key={entry.id} className="border-b border-gray-100">
                          <td className="py-3 font-semibold text-[#111]">{entry.fullName}</td>
                          <td>{entry.email}</td>
                          <td>{entry.phone}</td>
                          <td>{entry.role}</td>
                          <td>{entry.photoName || "-"}</td>
                          <td>{new Date(entry.registeredAt).toLocaleString("en-IN")}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {tab === "donations" && (
            <div>
              <h2 className="text-2xl font-extrabold text-[#111]">{t("admin.manageDonationsTitle")}</h2>
              <p className="mt-1 text-sm text-gray-600">{t("admin.manageDonationsSubtitle")}</p>
              <div className="mt-4 space-y-3">
                {donations.map((d) => (
                  <div key={d.id} className="grid gap-3 rounded-2xl border border-gray-200 p-4 md:grid-cols-[1fr_150px] md:items-center">
                    <div>
                      <p className="font-bold text-[#111]">{d.donor} - Rs. {d.amount.toLocaleString("en-IN")}</p>
                      <p className="text-sm text-gray-600">{d.id} | {d.purpose} | {d.date}</p>
                    </div>
                    <select
                      value={d.status}
                      onChange={(event) =>
                        setDonations((prev) =>
                          prev.map((item) => (item.id === d.id ? { ...item, status: event.target.value as DonationStatus } : item))
                        )
                      }
                      className="rounded-xl border border-gray-200 px-3 py-2 outline-none"
                    >
                      <option value="pending">Pending</option>
                      <option value="received">Received</option>
                      <option value="failed">Failed</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "contacts" && (
            <div>
              <h2 className="text-2xl font-extrabold text-[#111]">{t("admin.manageContactsTitle")}</h2>
              <p className="mt-1 text-sm text-gray-600">{t("admin.manageContactsSubtitle")}</p>
              <div className="mt-4 space-y-3">
                {contacts.map((lead) => (
                  <div key={lead.id} className="grid gap-3 rounded-2xl border border-gray-200 p-4 md:grid-cols-[1fr_150px] md:items-center">
                    <div>
                      <p className="font-bold text-[#111]">{lead.name} ({lead.email})</p>
                      <p className="text-sm text-gray-600">{lead.subject}</p>
                    </div>
                    <select
                      value={lead.status}
                      onChange={(event) =>
                        setContacts((prev) =>
                          prev.map((item) => (item.id === lead.id ? { ...item, status: event.target.value as ContactStatus } : item))
                        )
                      }
                      className="rounded-xl border border-gray-200 px-3 py-2 outline-none"
                    >
                      <option value="new">New</option>
                      <option value="in-progress">In Progress</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "blogs" && (
            <div>
              <h2 className="text-2xl font-extrabold text-[#111]">{t("admin.manageBlogsTitle")}</h2>
              <p className="mt-1 text-sm text-gray-600">{t("admin.manageBlogsSubtitle")}</p>
              <div className="mt-4 space-y-3">
                {blogs.map((blog) => (
                  <div key={blog.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-gray-200 p-4">
                    <div>
                      <p className="font-bold text-[#111]">{blog.title}</p>
                      <p className="text-sm text-gray-600">{blog.author} | {blog.publishDate}</p>
                    </div>
                    <button
                      onClick={() => setBlogs((prev) => prev.map((b) => (b.id === blog.id ? { ...b, published: !b.published } : b)))}
                      className={`rounded-xl px-4 py-2 text-sm font-semibold text-white ${
                        blog.published ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"
                      }`}
                    >
                      {blog.published ? "Published" : "Draft"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "objectives" && (
            <div>
              <h2 className="text-2xl font-extrabold text-[#111]">{t("admin.manageObjectivesTitle")}</h2>
              <p className="mt-1 text-sm text-gray-600">{t("admin.manageObjectivesSubtitle")}</p>
              <div className="mt-4 space-y-3">
                {objectives.map((objective) => (
                  <div key={objective.id} className="flex items-center justify-between rounded-2xl border border-gray-200 p-4">
                    <p className="font-semibold text-[#111]">{objective.name}</p>
                    <button
                      onClick={() =>
                        setObjectives((prev) =>
                          prev.map((item) => (item.id === objective.id ? { ...item, active: !item.active } : item))
                        )
                      }
                      className={`rounded-xl px-4 py-2 text-sm font-semibold text-white ${
                        objective.active ? "bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)]" : "bg-gray-500 hover:bg-gray-600"
                      }`}
                    >
                      {objective.active ? "Active" : "Disabled"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "settings" && (
            <div>
              <h2 className="text-2xl font-extrabold text-[#111]">{t("admin.settingsTitle")}</h2>
              <p className="mt-1 text-sm text-gray-600">{t("admin.settingsSubtitle")}</p>
              <form
                className="mt-5 space-y-4 max-w-xl"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSettingsSaved(true);
                  setTimeout(() => setSettingsSaved(false), 2500);
                }}
              >
                <div>
                  <label className="mb-1 block text-sm font-semibold">{t("admin.labelSupportEmail")}</label>
                  <input className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none" defaultValue="rgsshq@gmail.com" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold">{t("admin.labelSupportPhone")}</label>
                  <input className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none" defaultValue="+91 9211472800" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold">{t("admin.labelDefaultCurrency")}</label>
                  <select className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none" defaultValue="INR">
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
                <button className="rounded-xl bg-[var(--color-accent)] px-6 py-3 font-bold text-white hover:bg-[var(--color-accent-hover)]">
                  Save Settings
                </button>
                {settingsSaved && <p className="text-sm font-semibold text-green-700">{t("admin.settingsSaved")}</p>}
              </form>
            </div>
          )}
        </main>
      </div>
    </section>
  );
}

function SidebarButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition ${
        active ? "bg-[var(--color-primary)] text-white" : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-[#fafafa] p-4">
      <div className="flex items-center justify-between text-gray-500">
        <p className="text-xs font-semibold uppercase tracking-wide">{title}</p>
        {icon}
      </div>
      <p className="mt-2 text-2xl font-extrabold text-[#111]">{value}</p>
    </div>
  );
}
