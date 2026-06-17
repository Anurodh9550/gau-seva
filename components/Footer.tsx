"use client";

import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const quickLinks = [
    { label: "About Us", href: "/About" },
    { label: "Our News", href: "/blog" },
    { label: "Our Campaign", href: "/#objectives" },
    { label: "Contact Us", href: "/contact" },
  ];

  const serviceLinks = [
    { label: "Give Donation", href: "/donations" },
    { label: "Strengthening Gausala", href: "/objectives/gaushala-development" },
    { label: "Building network Gausewak", href: "/objectives/become-gaurakshak" },
    { label: "Our Team", href: "/blog" },
    { label: "All India Office's", href: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[var(--color-footer-bg)]">
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-[var(--color-primary)]/20 blur-[120px]"></div>
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[var(--color-accent)]/10 blur-[120px]"></div>
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background:radial-gradient(circle_at_top,rgba(200,163,90,0.35),transparent_55%)]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className=" overflow-hidden rounded-full   ">
              <SafeImage src="/gu2.png" alt="logo" width={220} height={220} className="object-cover" />
            </div>
            <p className="-mt-10 text-sm leading-6 text-white/70">
              Our secure online donation platform allows you to make contributions quickly and
              safely. Choose from various.
            </p>
            <motion.button
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.dispatchEvent(new Event("open-auth-register"))}
              className="btn-premium mt-6 flex items-center gap-3 rounded-full px-7 py-3 text-sm font-bold text-white transition [background:var(--grad-primary)]"
            >
              🤍 Donate Now
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-extrabold text-white">Quick Links</h3>
            <div className="mt-5 h-[3px] w-20 rounded-full bg-[var(--color-accent)]"></div>
            <ul className="mt-6 space-y-4">
              {quickLinks.map((item) => (
                <motion.li
                  key={item.href}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 text-sm text-white/70 transition hover:text-[var(--color-accent)]"
                >
                  <span className="text-xl text-[var(--color-accent)]">›</span>
                  <Link href={item.href}>{item.label}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-extrabold text-white">Our Service</h3>
            <div className="mt-5 h-[3px] w-20 rounded-full bg-[var(--color-accent)]"></div>
            <ul className="mt-6 space-y-4">
              {serviceLinks.map((item) => (
                <motion.li
                  key={item.href}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 text-sm text-white/70 transition hover:text-[var(--color-accent)]"
                >
                  <span className="text-xl text-[var(--color-accent)]">›</span>
                  <Link href={item.href}>{item.label}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="relative rounded-[26px] border border-white/10 bg-[var(--color-footer-card)] shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
          >
            <div className="p-6">
              <h3 className="text-2xl font-extrabold text-white">Contact Us</h3>
              <div className="mt-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-2xl text-white shadow-xl">
                  ☎
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-white/60">Call us any time:</p>
                  <a href="tel:+919919161119" className="mt-1 block text-lg font-bold text-white hover:text-[var(--color-accent)] transition break-all">
                    +919919161119
                  </a>
                </div>
              </div>
              <div className="mt-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-2xl text-white shadow-xl">
                  ✉
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-white/60">Email us any time:</p>
                  <a
                    href="mailto:support@rastriyagauseva.com"
                    className="mt-1 block text-base sm:text-lg font-bold text-white hover:text-[var(--color-accent)] transition [overflow-wrap:anywhere] break-words"
                  >
                    support@rastriyagauseva.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 bg-[var(--color-footer-bottom)] py-4 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-sm text-white"
        >
         
        </motion.p>
      </div>
    </footer>
  );
}
