"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  User,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import { useEffect, useState, type FormEvent } from "react";

import { getPublicApiBaseUrl } from "@/lib/apiBase";
import { EVENT_REGISTRATION_UPDATED, REGISTRATION_STORAGE_KEY } from "@/lib/rgssAdminSync";
import { useLocale } from "@/components/LocaleProvider";

type RegisteredUser = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: string;
  photoName: string;
  registeredAt: string;
};

export default function Header() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileObjectivesOpen, setMobileObjectivesOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [authStep, setAuthStep] = useState<"role" | "form">("form");
  const [selectedRole, setSelectedRole] = useState("");

  const objectiveLinks = [
    { href: "/objectives/gau-raksha", label: "🐄 Gau Raksha Mission" },
    { href: "/objectives/gau-ambulance", label: "🚑 Gau Ambulance Service" },
    { href: "/objectives/cow-feeding", label: "🌿 Cow Feeding Program" },
    { href: "/objectives/gaushala-development", label: "🏡 Gaushala Development" },
    { href: "/objectives/become-gaurakshak", label: "🛡️ Become Gaurakshak" },
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About Us" },
    { href: "/donations", label: "Donations" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ];

  const registerRoles = [
    { name: "Gaushala", desc: "Run and support a Gaushala network." },
    { name: "Gausevak", desc: "Serve cows and help welfare grants." },
    { name: "GauRakshak", desc: "Work actively for cow protection." },
    { name: "Supplier", desc: "Provide products and service support." },
    { name: "Mentor", desc: "Guide volunteers with experience." },
  ];

  useEffect(() => {
    const openRegisterModal = () => {
      setAuthMode("register");
      setAuthStep("role");
      setSelectedRole("");
      setAuthModalOpen(true);
    };

    window.addEventListener("open-auth-register", openRegisterModal);

    return () => {
      window.removeEventListener("open-auth-register", openRegisterModal);
    };
  }, []);

  const handleAuthSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (authMode === "register") {
      const formData = new FormData(event.currentTarget);
      const fullName = String(formData.get("fullName") ?? "").trim();
      const email = String(formData.get("email") ?? "").trim();
      const phone = String(formData.get("phone") ?? "").trim();
      const role = String(formData.get("role") ?? selectedRole).trim();
      const photoFile = formData.get("photo");
      const photoName = photoFile instanceof File ? photoFile.name : "";

      if (!fullName || !email || !phone || !role) {
        alert("Please fill all required registration fields.");
        return;
      }

      const newRegistration: RegisteredUser = {
        id: `RG-${Date.now()}`,
        fullName,
        email,
        phone,
        role,
        photoName,
        registeredAt: new Date().toISOString(),
      };

      const apiBaseUrl = getPublicApiBaseUrl();

      try {
        void (async () => {
          let entry: RegisteredUser = newRegistration;
          try {
            const res = await fetch(`${apiBaseUrl}/registrations/`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                full_name: fullName,
                email,
                phone,
                role,
                photo_name: photoName,
                registered_at: newRegistration.registeredAt,
              }),
            });
            if (!res.ok) {
              throw new Error("registration-api");
            }
            try {
              const body = (await res.json()) as { id?: number | string };
              if (body?.id != null) {
                entry = { ...newRegistration, id: String(body.id) };
              }
            } catch {
              /* keep client-generated id */
            }
          } catch {
            /* API failed; still mirror below for admin panel */
          }
          const existingRaw = window.localStorage.getItem(REGISTRATION_STORAGE_KEY);
          const existing = existingRaw ? (JSON.parse(existingRaw) as RegisteredUser[]) : [];
          const updated = [entry, ...existing];
          window.localStorage.setItem(REGISTRATION_STORAGE_KEY, JSON.stringify(updated));
          window.dispatchEvent(new Event(EVENT_REGISTRATION_UPDATED));
        })();
      } catch {
        alert("Registration saved failed. Please try again.");
        return;
      }
    }

    alert(authMode === "login" ? "Login request submitted." : "Registration request submitted.");
    setAuthModalOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 w-full bg-[var(--color-header-bg)] z-50 shadow-sm">
      <div className="hidden md:flex relative h-[44px] bg-[var(--color-primary)] items-center">
        <div className="absolute left-0 top-0 h-full w-[310px] bg-[var(--color-header-bg)] custom-shape z-10" />
        <div className="ml-auto pr-8 flex items-center gap-5 text-white text-[15px] font-medium">
          <button
            type="button"
            onClick={() => {
              setAuthMode("login");
              setAuthStep("form");
              setAuthModalOpen(true);
            }}
            className="flex items-center gap-2 cursor-pointer hover:text-orange-200 transition"
          >
            <User size={18} />
            <span>Login</span>
          </button>
          <div className="w-[1px] h-5 bg-white/40" />
          <div className="flex items-center gap-2">
            <Phone size={18} />
            <span>+91 9919161119</span>
          </div>
          <div className="w-[1px] h-5 bg-white/40" />
          <div className="flex items-center gap-2">
            <Mail size={18} />
            <span>mail: support@rastriyagauseva.com</span>
          </div>
          <div className="w-[1px] h-5 bg-white/40" />
          <select
            value={locale}
            onChange={(event) => {
              const value = event.target.value;
              if (value === "hi" || value === "en") {
                setLocale(value);
              }
            }}
            className="bg-white text-black px-4 py-2 rounded-md outline-none text-sm font-medium"
            aria-label="Site language"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
        </div>
      </div>

      <div className="h-[72px] md:h-[82px] bg-[var(--color-header-bg)] border-b border-gray-200 flex items-center justify-between md:justify-end px-4 md:px-10">
        <Link href="/" className="z-50 md:absolute md:left-[20px] md:top-[2px] md:-mt-7 overflow-hidden">
          <Image
            src="/gu2.png"
            alt="Logo"
            width={180}
            height={180}
            className="object-contain w-[120px] h-[120px] md:w-[180px] md:h-[180px]"
            priority
          />
        </Link>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[var(--brown)]"
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <nav className="hidden md:flex items-center gap-10 text-[18px] font-semibold text-[var(--brown)]">
          {navLinks.slice(0, 3).map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-orange-500 transition duration-300">
              {link.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              className="flex items-center gap-1 hover:text-orange-500 transition duration-300"
            >
              Our Objectives
              <ChevronDown size={17} className={`transition duration-300 ${open ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`absolute top-[45px] left-0 w-[320px] bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100 z-50 transition-all duration-300 ${
                open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-3"
              }`}
            >
              {objectiveLinks.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-6 py-4 hover:bg-[#fff8e6] transition group ${
                    index !== objectiveLinks.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <span className="font-semibold text-[#111] group-hover:text-[#0d6b5c]">{item.label}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition">→</span>
                </Link>
              ))}
            </div>
          </div>

          {navLinks.slice(3).map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-orange-500 transition duration-300">
              {link.label}
            </Link>
          ))}

          <Link
            href="/donations"
            className="bg-[var(--color-accent)] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[var(--color-accent-hover)] hover:scale-105 transition duration-300"
          >
            Donate Now
          </Link>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-200 bg-[var(--color-header-bg)] px-4 pb-5">
          <div className="flex flex-col gap-1 text-[var(--brown)] font-semibold">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 hover:bg-white/70"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <button
              className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-white/70"
              onClick={() => setMobileObjectivesOpen((prev) => !prev)}
            >
              <span>Our Objectives</span>
              <ChevronDown className={`transition ${mobileObjectivesOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileObjectivesOpen && (
              <div className="ml-3 flex flex-col rounded-lg border border-gray-200 bg-white/60 p-2">
                {objectiveLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-2 py-2 text-sm hover:bg-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 hover:bg-white/70"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/donations"
              className="mt-2 inline-flex justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Donate Now
            </Link>

            <div className="mt-3 rounded-lg border border-gray-200 bg-white/60 p-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91-9211472800</span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <Mail size={16} />
                <span>rgsshq@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {authModalOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/55 px-4">
          <div className="w-full max-w-xl rounded-3xl bg-white p-6 md:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#111]">
                  {authStep === "role"
                    ? "Select Your Role"
                    : authMode === "login"
                    ? "Welcome Back"
                    : "Create Account"}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {authStep === "role"
                    ? "Choose your role to continue registration."
                    : authMode === "login"
                    ? "Login to continue with RGSS services."
                    : "Fill your details to register with RGSS."}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setAuthModalOpen(false)}
                className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition"
                aria-label="Close auth popup"
              >
                <X size={20} />
              </button>
            </div>

            {authStep === "form" && (
              <div className="mt-6 inline-flex rounded-full bg-[#f5f3ee] p-1">
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode("login");
                    setAuthStep("form");
                  }}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    authMode === "login"
                      ? "bg-[var(--color-primary)] text-white shadow-md"
                      : "text-[var(--brown)]"
                  }`}
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode("register");
                    setAuthStep("form");
                  }}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    authMode === "register"
                      ? "bg-[var(--color-accent)] text-white shadow-md"
                      : "text-[var(--brown)]"
                  }`}
                >
                  Register
                </button>
              </div>
            )}

            {authStep === "role" ? (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {registerRoles.map((role) => (
                  <button
                    key={role.name}
                    type="button"
                    onClick={() => {
                      setSelectedRole(role.name);
                      setAuthMode("register");
                      setAuthStep("form");
                    }}
                    className="rounded-xl border border-green-700 bg-green-600 px-4 py-4 text-left text-white shadow-[0_12px_30px_rgba(22,101,52,0.28)] hover:bg-green-700 transition"
                  >
                    <p className="text-base font-bold">{role.name}</p>
                    <p className="mt-1 text-xs text-white/90">{role.desc}</p>
                  </button>
                ))}
              </div>
            ) : (
              <form onSubmit={handleAuthSubmit} className="mt-6 space-y-4">
              {authMode === "register" && (
                <div>
                  <label className="mb-1 block text-sm font-semibold text-[#222]">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)]"
                    required={authMode === "register"}
                  />
                </div>
              )}

              <div>
                <label className="mb-1 block text-sm font-semibold text-[#222]">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)]"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-[#222]">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)]"
                  required
                />
              </div>

              {authMode === "register" && (
                <div>
                  <label className="mb-1 block text-sm font-semibold text-[#222]">Selected Role</label>
                  <input
                    type="text"
                    name="role"
                    value={selectedRole}
                    readOnly
                    placeholder="Choose role from register now button"
                    className="w-full rounded-xl border border-gray-200 bg-[#f8f8f8] px-4 py-3 text-sm outline-none"
                    required={authMode === "register"}
                  />
                </div>
              )}

              {authMode === "register" && (
                <div>
                  <label className="mb-1 block text-sm font-semibold text-[#222]">Photo</label>
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    className="w-full rounded-xl border border-gray-200 bg-[#fafafa] px-4 py-3 text-sm outline-none file:mr-4 file:rounded-md file:border-0 file:bg-[var(--color-primary)] file:px-3 file:py-2 file:text-white"
                  />
                </div>
              )}

              <button
                type="submit"
                className={`mt-2 w-full rounded-xl px-5 py-3 text-sm font-bold text-white transition ${
                  authMode === "login"
                    ? "bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)]"
                    : "bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)]"
                }`}
              >
                {authMode === "login" ? "Login" : "Register"}
              </button>
              {authMode === "register" && (
                <button
                  type="button"
                  onClick={() => setAuthStep("role")}
                  className="w-full rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-[#333] hover:bg-gray-50 transition"
                >
                  Change Role
                </button>
              )}
            </form>
            )}
          </div>
        </div>
      )}

      {/* ================= CUSTOM CSS ================= */}
      <style jsx>{`
        .custom-shape {
          clip-path: polygon(0 0, 82% 0, 100% 100%, 0% 100%);
        }
      `}</style>

    </header>
  );
}