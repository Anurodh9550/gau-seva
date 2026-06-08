"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  Send,
} from "lucide-react";

import { getPublicApiBaseUrl } from "@/lib/apiBase";
import { CONTACT_STORAGE_KEY, EVENT_CONTACTS_UPDATED } from "@/lib/rgssAdminSync";
import { useLocale } from "@/components/LocaleProvider";

type ContactLeadLocal = {
  id: string;
  name: string;
  email: string;
  subject: string;
  status: "new" | "in-progress" | "closed";
};

export default function ContactPage() {
  const { t } = useLocale();
  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email) {
      alert("Please enter your name and email.");
      return;
    }

    const subject =
      message.length > 0 ? message.slice(0, 200) : "Website contact form";

    const apiBaseUrl = getPublicApiBaseUrl();

    try {
      const res = await fetch(`${apiBaseUrl}/contacts/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          message,
        }),
      });
      if (!res.ok) {
        throw new Error("contact-api");
      }
    } catch {
      alert("Message could not be sent. Please try again later.");
      return;
    }

    try {
      const entry = {
        id: `CT-${Date.now()}`,
        name,
        email,
        subject,
        status: "new" as const,
      };
      const raw = window.localStorage.getItem(CONTACT_STORAGE_KEY);
      const existing = raw ? (JSON.parse(raw) as ContactLeadLocal[]) : [];
      window.localStorage.setItem(
        CONTACT_STORAGE_KEY,
        JSON.stringify([entry, ...existing]),
      );
      window.dispatchEvent(new Event(EVENT_CONTACTS_UPDATED));
    } catch {
      /* still submitted to API */
    }

    alert("Thanks! Your message has been submitted.");
    form.reset();
  };

  return (
    <main className="bg-[#f8f6ef] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">

        {/* Background */}
        <Image
          src="/contectus2.png"
          alt="contact"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 "></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-white"
          >
            {t("contact.heroTitle")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/90 text-xl mt-8 max-w-3xl mx-auto leading-9"
          >
            {t("contact.heroSub")}
          </motion.p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT INFO ================= */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <h5 className="text-yellow-500 text-2xl font-bold mb-5">
              {t("contact.getInTouch")}
            </h5>

            <h2 className="text-5xl font-extrabold text-[#111] leading-tight">
              {t("contact.readyTitle")}
            </h2>

            <p className="text-gray-600 text-lg leading-9 mt-8">
              {t("contact.readyP")}
            </p>

            {/* Contact Cards */}
            <div className="space-y-6 mt-12">

              {/* PHONE */}
              <div className="relative overflow-hidden rounded-[28px] border border-[#d8c07a] bg-[linear-gradient(145deg,#fffaf0_0%,#f7ebcf_55%,#f3dfb0_100%)] p-7 shadow-[0_20px_55px_rgba(100,72,20,0.22)] flex items-center gap-5">
                <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-yellow-300/35 blur-3xl"></div>
                <div className="pointer-events-none absolute -left-10 -bottom-12 h-32 w-32 rounded-full bg-amber-400/25 blur-3xl"></div>

                <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Phone
                    size={34}
                    className="text-yellow-600"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#111]">
                    {t("contact.phoneTitle")}
                  </h3>

                  <p className="text-gray-600 mt-2">
                    +91 9919161119
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="bg-white rounded-[28px] p-7 shadow-[0_15px_45px_rgba(0,0,0,0.08)] flex items-center gap-5">

                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                  <Mail
                    size={34}
                    className="text-green-600"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#111]">
                    {t("contact.emailTitle")}
                  </h3>

                  <p className="text-gray-600 mt-2">
                    rgsshq@gmail.com
                  </p>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="bg-white rounded-[28px] p-7 shadow-[0_15px_45px_rgba(0,0,0,0.08)] flex items-center gap-5">

                <div className="relative z-10 w-20 h-20 rounded-full bg-white/85 border border-[#d8c07a] flex items-center justify-center shadow-[0_10px_30px_rgba(140,101,32,0.25)]">
                  <MapPin
                    size={34}
                    className="text-amber-700"
                  />
                </div>

                <div className="relative z-10">
                  <p className="text-xs md:text-sm uppercase tracking-[0.18em] text-amber-700 font-semibold">
                    {t("contact.officeLabel")}
                  </p>
                  <h3 className="text-2xl font-bold text-[#111] mt-1">
                    {t("contact.officeTitle")}
                  </h3>

                  <p className="text-[#5f4b25] mt-2 font-medium">
                    C77, Sector 63A, Noida, Uttar Pradesh
                  </p>
                </div>
              </div>

              {/* HOURS */}
              <div className="bg-white rounded-[28px] p-7 shadow-[0_15px_45px_rgba(0,0,0,0.08)] flex items-center gap-5">

                <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
                  <Clock3
                    size={34}
                    className="text-red-600"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#111]">
                    {t("contact.hoursTitle")}
                  </h3>

                  <p className="text-gray-600 mt-2">
                    {t("contact.hoursP")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-[35px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.10)]"
          >

            <h3 className="text-4xl font-extrabold text-[#111]">
              {t("contact.formTitle")}
            </h3>

            <p className="text-gray-600 mt-4 leading-8">
              {t("contact.formLead")}
            </p>

            {/* FORM */}
            <form onSubmit={handleContactSubmit} className="space-y-6 mt-10">

              <input
                name="name"
                type="text"
                placeholder={t("contact.phName")}
                className="w-full bg-[#f8f6ef] border border-gray-200 rounded-2xl px-6 py-5 outline-none"
              />

              <input
                name="email"
                type="email"
                placeholder={t("contact.phEmail")}
                className="w-full bg-[#f8f6ef] border border-gray-200 rounded-2xl px-6 py-5 outline-none"
              />

              <input
                name="phone"
                type="text"
                placeholder={t("contact.phPhone")}
                className="w-full bg-[#f8f6ef] border border-gray-200 rounded-2xl px-6 py-5 outline-none"
              />

              <textarea
                name="message"
                rows={5}
                placeholder={t("contact.phMessage")}
                className="w-full bg-[#f8f6ef] border border-gray-200 rounded-2xl px-6 py-5 outline-none resize-none"
              ></textarea>

              {/* BUTTON */}
              <button className="bg-yellow-500 hover:bg-yellow-600 transition text-white px-10 py-5 rounded-full text-lg font-bold shadow-xl inline-flex items-center gap-3">
                Send Message
                <Send size={22} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="pb-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="overflow-hidden rounded-[35px] shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
            <iframe
              title={t("contact.mapTitle")}
              src="https://www.google.com/maps?q=C77,+Sector+63A,+Noida,+Uttar+Pradesh&output=embed"
              className="w-full h-[450px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}