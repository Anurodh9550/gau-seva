"use client";

import SafeImage from "@/components/SafeImage";
import { useMemo, useState, useEffect } from "react";
import { Play } from "lucide-react";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { useLocale } from "@/components/LocaleProvider";

export default function HomePage() {
  const { t } = useLocale();
  const [active, setActive] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const faqs = useMemo(
    () => [
      {
        question: "What is Gauraksha?",
        answer: t("home.faq1a"),
      },
      {
        question: "Why is cow protection important?",
        answer: t("home.faq2a"),
      },
      {
        question: "What are the ecological benefits of cow protection?",
        answer: t("home.faq3a"),
      },
      {
        question: "How does cow protection help farmers?",
        answer: t("home.faq4a"),
      },
    ],
    [t],
  );

  const serviceCards = useMemo(
    () => [
      {
        icon: "🐄",
        title: t("home.service1Title"),
        desc: t("home.service1Desc"),
      },
      {
        icon: "🏡",
        title: t("home.service2Title"),
        desc: t("home.service2Desc"),
      },
      {
        icon: "🤝",
        title: t("home.service3Title"),
        desc: t("home.service3Desc"),
      },
    ],
    [t],
  );
  return (
    <div className="w-full overflow-hidden bg-white text-[90%]">
      {/* Header is rendered in app/layout.tsx */}

      {/* ================= HERO ================= */}
      <section id="home" className="relative h-screen overflow-hidden">

        {/* Background */}
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <SafeImage
            src="/cow_bg1.jpg"
            alt="cow"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Floating Blur */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-accent)]/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[var(--color-primary)]/30 blur-[120px] rounded-full"></div>

        {/* Content */}
        <div className="relative z-20 flex items-center justify-center h-full px-6">
          <div className="text-center max-w-6xl">

            {/* Small Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <div className="w-16 h-[2px] bg-[var(--color-accent)]"></div>

              <p className="text-[var(--color-accent)] text-lg md:text-2xl font-bold drop-shadow-lg">
                {t("home.heroTagline")}
              </p>

              <div className="w-16 h-[2px] bg-[var(--color-accent)]"></div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-white font-extrabold leading-tight text-3xl md:text-5xl drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
            >
              {t("home.heroTitle")}
            </motion.h1>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >

              {/* Discover */}
              <motion.button
                whileHover={{
                  scale: 1.08,
                  y: -5,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => scrollToSection("services")}
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-4 rounded-full text-base md:text-lg font-bold shadow-[0_15px_40px_rgba(31,58,138,0.45)] transition"
              >
                Discover Now →
              </motion.button>

              {/* Watch */}
              <motion.button
                whileHover={{
                  scale: 1.08,
                  y: -5,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => scrollToSection("blog")}
                className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-full text-base md:text-lg font-bold flex items-center gap-3 shadow-[0_15px_40px_rgba(232,74,95,0.45)] transition"
              >
                <Play size={22} fill="white" />
                Watch Video
              </motion.button>

              {/* Register */}
              <motion.button
                whileHover={{
                  scale: 1.08,
                  y: -5,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => window.dispatchEvent(new Event("open-auth-register"))}
                className="bg-white/90 hover:bg-white text-[var(--color-primary)] px-8 py-4 rounded-full text-base md:text-lg font-bold flex items-center gap-3 shadow-[0_15px_35px_rgba(255,255,255,0.25)] transition"
              >
                Register Now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="relative overflow-hidden pt-16 pb-14 bg-center"
        style={{
          backgroundImage: `
      linear-gradient(
        rgba(255,253,248,0.92),
        rgba(248,244,234,0.92)
      ),
      url('/bgpc.png')
    `,
        }}>

        {/* Background Blur */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--color-primary)]/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[var(--color-accent)]/20 blur-[120px] rounded-full"></div>

        {/* Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Small Title */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-20 h-[2px] bg-[var(--color-accent)]"></div>

              <p className="text-[var(--color-accent)] text-2xl font-bold tracking-wide">
                {t("home.servicesEyebrow")}
              </p>

              <div className="w-20 h-[2px] bg-[var(--color-accent)]"></div>
            </div>

            {/* Main Title */}
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--color-heading)] leading-tight max-w-5xl mx-auto drop-shadow-sm">
              {t("home.servicesTitle")}
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-16">

            {serviceCards.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="relative h-full bg-white/80 backdrop-blur-xl rounded-[28px] p-7 shadow-[0_16px_42px_rgba(0,0,0,0.12)] border border-white overflow-hidden flex flex-col"
              >

                {/* Floating Gradient */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-accent)]/10 blur-[80px] rounded-full"></div>

                {/* Icon Circle */}
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                  }}
                  className="relative mx-auto w-24 h-24 rounded-full bg-[#fff8e6] border-[7px] border-[#fde7b2] flex items-center justify-center text-4xl shadow-lg"
                >
                  {item.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-extrabold text-center text-[#111] mt-7 leading-snug min-h-[64px]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center text-base leading-7 mt-4 flex-1">
                  {item.desc}
                </p>

                {/* Button */}
                <div className="flex justify-center mt-7 pt-2">
                  <motion.button
                    whileHover={{
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    onClick={() => scrollToSection("objectives")}
                    className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] transition text-white px-6 py-3 rounded-full font-bold text-base shadow-[0_8px_24px_rgba(200,163,90,0.32)]"
                  >
                    Learn More →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="relative bg-[#f5f5f5] pt-14 pb-20 overflow-hidden">

        {/* Background Shape */}
        <div className="absolute top-0 left-0 opacity-10">
          <SafeImage
            src="/bgpc.png"
            alt="shape"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        {/* Right Icon */}
        <div className="absolute top-28 right-24 hidden md:block opacity-10 text-[180px]">
          🤍
        </div>

        {/* Blur Effects */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--color-primary)]/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[var(--color-accent)]/20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">

            {/* ================= IMAGE SIDE ================= */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative flex justify-center lg:py-8"
            >
              {/* Image + Decorative Frame */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                  rotate: 1,
                }}
                className="relative z-10 w-full max-w-[420px] lg:ml-2"
              >
                {/* Border Box */}
                <div className="pointer-events-none absolute hidden lg:block inset-0 translate-x-5 translate-y-5 border-[10px] border-[var(--color-primary)] rounded-[32px] shadow-[0_20px_80px_rgba(15,61,62,0.25)]"></div>

                {/* Top Line */}
                <div className="pointer-events-none absolute hidden lg:block -top-3 left-10 right-10 h-3.5 bg-[var(--color-accent)] rounded-full z-20 shadow-lg"></div>

                <div className="relative overflow-hidden rounded-[30px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
                <SafeImage
                  src="/aboutbg1.png"
                  alt="about"
                  width={600}
                  height={700}
                  className="w-full h-[520px] object-cover rounded-[30px]"
                />
                </div>
              </motion.div>
            </motion.div>

            {/* ================= CONTENT SIDE ================= */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >

              {/* Small Heading */}
              <div className="flex items-center gap-4 mb-6">
                <p className="text-[var(--color-accent)] text-3xl font-bold">
                  {t("home.aboutEyebrow")}
                </p>

                <div className="w-20 h-[3px] bg-[var(--color-accent)]"></div>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--color-heading)] leading-tight">
                {t("home.aboutTitle")}
              </h2>

              {/* Description */}
              <p className="mt-6 text-sm leading-7 text-gray-600 md:mt-8 md:text-base md:leading-8">
                {t("home.aboutBody")}
              </p>

              {/* Points */}
              <div className="mt-10 space-y-6">

                {/* Point 1 */}
                <motion.div
                  whileHover={{ x: 10 }}
                className="flex items-start gap-4 md:items-center md:gap-5"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0d6b5c] text-white flex items-center justify-center text-xl shadow-lg">
                    ✓
                  </div>

                  <h4 className="text-base font-bold text-[#111] md:text-xl">
                    {t("home.aboutPoint1")}
                  </h4>
                </motion.div>

                {/* Point 2 */}
                <motion.div
                  whileHover={{ x: 10 }}
                className="flex items-start gap-4 md:items-center md:gap-5"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0d6b5c] text-white flex items-center justify-center text-xl shadow-lg">
                    ✓
                  </div>

                  <h4 className="text-base md:text-xl font-bold text-[#111]">
                    {t("home.aboutPoint2")}
                  </h4>
                </motion.div>
              </div>

              {/* Button */}
              <motion.button
                whileHover={{
                  scale: 1.08,
                  y: -5,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => router.push("/About")}
                className="mt-10 bg-[#0d6b5c] hover:bg-[#08453a] text-white px-10 py-4 rounded-full text-base md:text-lg font-bold shadow-[0_20px_50px_rgba(13,107,92,0.4)] transition"
              >
                About More →
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ================= VOLUNTEER SECTION ================= */}
      <section id="donations" className="relative overflow-hidden py-14 md:py-16 bg-[radial-gradient(circle_at_15%_10%,rgba(15,63,47,0.14),transparent_34%),radial-gradient(circle_at_85%_90%,rgba(200,134,47,0.2),transparent_38%),linear-gradient(180deg,#fdfaf1_0%,#f3ebdd_100%)]">

        {/* Blur Effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0d6b5c]/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#f8b400]/20 blur-[120px] rounded-full"></div>

        {/* Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {/* ================= CARD 1 ================= */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="relative overflow-hidden rounded-[26px] border border-white/30 shadow-[0_20px_55px_rgba(0,0,0,0.24)] group"
            >

              {/* Background Image */}
              <SafeImage
                src="/volenterbg.jpg"
                alt="volunteer"
                width={800}
                height={600}
                className="w-full h-[240px] md:h-[270px] object-cover "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,24,24,0.7)_0%,rgba(24,24,24,0.82)_100%)]"></div>

              {/* Yellow Brush */}
              <div className="absolute -bottom-8 right-0 w-72 h-36 bg-[#f8b400]/65 blur-[18px] rounded-full"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 md:px-10">

                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-white text-lg md:text-2xl font-extrabold leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] max-w-[95%]"
                >
                  Join Us as a Volunteer and Make a Difference!
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-white/90 text-[11px] md:text-xs leading-5 md:leading-6 mt-2.5 max-w-[90%]"
                >
                  We&apos;re looking for enthusiastic and dedicated volunteers to join our team! Whether you have a few hours to spare or want to commit to a larger project, your skills and time can create meaningful change.
                </motion.p>

                {/* Button */}
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    y: -5,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => window.dispatchEvent(new Event("open-auth-register"))}
                  className="mt-5 bg-[#f8b400] hover:bg-[#e0a000] text-white px-6 py-2 rounded-full text-xs md:text-sm font-bold shadow-[0_12px_28px_rgba(248,180,0,0.45)] transition"
                >
                  Join Us Now →
                </motion.button>
              </div>
            </motion.div>

            {/* ================= CARD 2 ================= */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="relative overflow-hidden rounded-[26px] border border-white/30 shadow-[0_20px_55px_rgba(0,0,0,0.24)] group"
            >

              {/* Background */}
              <SafeImage
                src="/volenterbg.jpg"
                alt="gaurakshak"
                width={800}
                height={600}
                className="w-full h-[240px] md:h-[270px] object-cover "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,24,24,0.7)_0%,rgba(24,24,24,0.82)_100%)]"></div>

              {/* Yellow Brush */}
              <div className="absolute -bottom-8 left-0 w-72 h-36 bg-[#f8b400]/65 blur-[18px] rounded-full"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 md:px-10">

                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-white text-lg md:text-2xl font-extrabold leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] max-w-[95%]"
                >
                  Step toward meaningful change — become a Gaurakshak!
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-white/90 text-[11px] md:text-xs leading-5 md:leading-6 mt-2.5 max-w-[90%]"
                >
                  The cow has symbolized life, sustenance, and harmony in our culture. Protecting this sacred bond is not just an act of duty but a commitment to nurturing tradition, ecology, and kindness.
                </motion.p>

                {/* Button */}
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    y: -5,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => window.dispatchEvent(new Event("open-auth-register"))}
                  className="mt-5 bg-[#f8b400] hover:bg-[#e0a000] text-white px-6 py-2 rounded-full text-xs md:text-sm font-bold shadow-[0_12px_28px_rgba(248,180,0,0.45)] transition"
                >
                  Join Us Now →
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ================= CTA SECTION ================= */}
      <section id="objectives" className="relative overflow-hidden bg-[#063b33] py-10 md:py-12">

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#022f29] via-[#063b33] to-[#022f29]"></div>

        {/* Blur Effects */}
        <div className="absolute top-8 left-14 w-56 h-56 bg-[#f8b400]/18 blur-[90px] rounded-full"></div>

        <div className="absolute bottom-8 right-14 w-56 h-56 bg-[#0d6b5c]/28 blur-[90px] rounded-full"></div>

        {/* Decorative hands removed — asset files were missing (caused image 400). */}

        {/* Center Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">

          {/* Decorative Line */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-20 h-[2px] bg-[#f8b400] rounded-full"></div>

            <div className="w-4 h-4 border-[3px] border-[#f8b400] rounded-full"></div>

            <div className="w-20 h-[2px] bg-[#f8b400] rounded-full"></div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-white text-2xl md:text-4xl font-extrabold leading-tight drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          >
            Be A Guardian Of Compassion And Heritage —
            <br />
            Become A Gaurakshak Today!
          </motion.h2>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <motion.button
              whileHover={{
                scale: 1.08,
                y: -5,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => router.push("/objectives/become-gaurakshak")}
              className="bg-[#f8b400] hover:bg-[#e0a000] text-white px-8 py-2.5 rounded-full text-sm md:text-base font-bold shadow-[0_16px_36px_rgba(248,180,0,0.45)] transition"
            >
              Get Involved →
            </motion.button>
          </motion.div>
        </div>
      </section>
      {/* ================= STORY SECTION ================= */}
      <section className="relative bg-[#f5f5f5] py-12 overflow-hidden">

        {/* Background Blur */}
        <div className="absolute top-0 left-10 w-72 h-72 bg-[#f8b400]/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-10 w-72 h-72 bg-[#0d6b5c]/10 blur-[120px] rounded-full"></div>

        {/* Brush Shape */}
        <div className="absolute top-0 right-20 opacity-10">
          <SafeImage
            src="/bgpc.png"
            alt="brush"
            width={500}
            height={500}
          />
        </div>

        {/* Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* ================= LEFT CONTENT ================= */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >

              {/* Small Heading */}
              <div className="flex items-center gap-4 mb-5">

                <h5 className="text-[#f8b400] text-2xl md:text-3xl font-bold leading-tight">
                  A Journey of Compassion and Impact
                </h5>

                <div className="w-20 h-[3px] bg-[#f8b400] rounded-full"></div>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-[#111]">
                Founded With The Vision Of Protecting And Nurturing Cows
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-base md:text-lg leading-7 mt-6">
                The Rashtriya Gau Sewa Gaushala Sangh has grown into a shining example
                of dedication, service, and impact. Over the years, our mission has
                touched countless lives—providing shelter, food, and medical care to
                abandoned and injured cows while inspiring communities across the nation
                to embrace the spirit of Gausewa.
              </p>

              <p className="text-gray-600 text-base md:text-lg leading-7 mt-4">
                Through tireless efforts, innovative initiatives, and the unwavering
                support of our volunteers and donors, we have established a network
                of gaushalas that stand as sanctuaries of hope and care. Each milestone
                we’ve achieved is a testament to the power of collective compassion and
                the belief that every life matters.
              </p>

              {/* Button */}
              <motion.button
                whileHover={{
                  scale: 1.08,
                  y: -5,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => router.push("/About")}
                className="mt-8 border-2 border-black text-black hover:bg-black hover:text-white transition px-8 py-3 rounded-full text-base font-bold shadow-[0_12px_28px_rgba(0,0,0,0.15)]"
              >
                Our Story →
              </motion.button>
            </motion.div>

            {/* ================= RIGHT SIDE ================= */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >

              {/* Years */}
              

              {/* Main Image Card */}
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="relative rounded-[28px] overflow-hidden shadow-[0_22px_55px_rgba(0,0,0,0.2)]"
              >
                <SafeImage
                  src="/postbg.png"
                  alt="story"
                  width={700}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Quote Card */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="absolute -bottom-8 -left-10 bg-white p-6 rounded-[24px] shadow-[0_16px_40px_rgba(0,0,0,0.15)] max-w-sm"
              >

                {/* Quote Icon */}
                <div className="absolute top-5 right-5 text-[#f8b400] text-5xl font-bold">
                  ”
                </div>

                <h3 className="text-2xl font-extrabold text-[#111]">
                  sir
                </h3>

                <p className="text-gray-600 text-base leading-7 mt-3">
                  This is our story—a story of service, resilience, and the
                  unyielding commitment to the well-being of our sacred cows.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ================= VOLUNTEERS SECTION ================= */}
      <section className="relative bg-[#f5f5f5] py-16 overflow-hidden">

        {/* Blur Effects */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#f8b400]/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#0d6b5c]/10 blur-[120px] rounded-full"></div>

        {/* Left Arrow */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => alert("Volunteer slider feature is coming soon.")}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#0d6b5c] text-white text-2xl shadow-[0_10px_26px_rgba(13,107,92,0.35)] flex items-center justify-center"
        >
          ←
        </motion.button>

        {/* Right Arrow */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => alert("Volunteer slider feature is coming soon.")}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#0d6b5c] text-white text-2xl shadow-[0_10px_26px_rgba(13,107,92,0.35)] flex items-center justify-center"
        >
          →
        </motion.button>

        {/* Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >

            {/* Small Heading */}
            <div className="flex items-center justify-center gap-4 mb-4">

              <div className="w-20 h-[3px] bg-[#f8b400] rounded-full"></div>

              <h5 className="text-[#f8b400] text-2xl md:text-3xl font-bold">
                Our Volunteer
              </h5>

              <div className="w-20 h-[3px] bg-[#f8b400] rounded-full"></div>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-[#111] max-w-5xl mx-auto">
              Join Hands With Us To Serve, Heal, And Nurture. Together, We Can Make A Difference.
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-14">

            {[
              {
                name: "Joseph Alexander",
                role: "Volunteer",
                image: "/v1.jpg",
                active: false,
              },

              {
                name: "Jessica Lauren",
                role: "Volunteer",
                image: "/v2.jpg",
                active: true,
              },

              {
                name: "Daniel Thomas",
                role: "Volunteer",
                image: "/v3.jpg",
                active: false,
              },

              {
                name: "Michel Connor",
                role: "Volunteer",
                image: "/v4.jpg",
                active: false,
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className={`relative rounded-[26px] overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.15)] transition ${item.active
                  ? "bg-[#063b33]"
                  : "bg-[#dfe8e6]"
                  }`}
              >

                {/* Top Image */}
                <div className="relative">

                  <div className="overflow-hidden rounded-b-[90px]">
                    <SafeImage
                      src={item.image}
                      alt={item.name}
                      width={500}
                      height={500}
                      className="w-full h-[240px] object-cover hover:scale-105 transition duration-700"
                    />
                  </div>

                  {/* Plus Icon */}
                  <motion.div
                    whileHover={{
                      rotate: 90,
                      scale: 1.1,
                    }}
                    className={`absolute left-1/2 -bottom-7 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold shadow-xl ${item.active
                      ? "bg-[#f8b400] text-white"
                      : "bg-[#0d6b5c] text-white"
                      }`}
                  >
                    +
                  </motion.div>
                </div>

                {/* Content */}
                <div className="pt-12 pb-7 text-center">

                  <h3
                    className={`text-2xl font-extrabold ${item.active
                      ? "text-white"
                      : "text-[#111]"
                      }`}
                  >
                    {item.name}
                  </h3>

                  <p
                    className={`text-base mt-2 ${item.active
                      ? "text-[#f8b400]"
                      : "text-gray-500"
                      }`}
                  >
                    {item.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= IMPACT SECTION ================= */}
      <section id="blog" className="relative overflow-hidden bg-[var(--color-footer-bg)]/95">

        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative bg-[linear-gradient(145deg,#0b3a31_0%,#0a2e27_100%)] px-5 md:px-8 py-7 md:py-8 overflow-hidden"
          >

            {/* Blur Effect */}
            <div className="absolute top-0 left-0 w-56 h-56 bg-[#f8b400]/15 blur-[90px] rounded-full"></div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white text-xl md:text-2xl font-extrabold leading-tight"
            >
              Together, We Can Make A Difference
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-white/85 text-sm leading-6 mt-3 max-w-lg"
            >
              At Rashtriya Gau Seva Gausala Sangh, Our dedicated team is the
              driving force behind every step we take toward the well-being and
              care of cows. With a shared vision of compassion, responsibility,
              and service, we work tirelessly to protect and nurture these gentle
              beings.
            </motion.p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-y-5 gap-x-5 mt-5">

              {/* Stat 1 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="border-r border-white/15 pr-4"
              >
                <h3 className="text-[#f8b400] text-2xl md:text-3xl font-extrabold">
                  1800+
                </h3>

                <p className="text-white text-sm font-semibold mt-1">
                  Gaushala
                </p>
              </motion.div>

              {/* Stat 2 */}
              <motion.div whileHover={{ scale: 1.05 }}>
                <h3 className="text-white text-2xl md:text-3xl font-extrabold">
                  144000+
                </h3>

                <p className="text-white text-sm font-semibold mt-1">
                  Gausewak
                </p>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="border-r border-white/15 pr-4 pt-3 border-t border-white/15"
              >
                <h3 className="text-white text-2xl md:text-3xl font-extrabold">
                  400+
                </h3>

                <p className="text-white text-sm font-semibold mt-1">
                  Monthly Donors
                </p>
              </motion.div>

              {/* Stat 4 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="pt-3 border-t border-white/15"
              >
                <h3 className="text-[#f8b400] text-2xl md:text-3xl font-extrabold">
                  35k+
                </h3>

                <p className="text-white text-sm font-semibold mt-1">
                  Team Support
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden min-h-[280px] md:min-h-[320px]"
          >

            {/* Image */}
            <SafeImage
              src="/cow2.jpg"
              alt="impact"
              width={1000}
              height={1000}
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Play Button */}
            <motion.div
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3"
            >
              <div className="relative flex items-center justify-center">

                {/* Outer Circle */}

              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section id="contact" className="relative bg-[#f5f5f5] py-8 md:py-10 overflow-hidden mt-0">

        {/* Blur Effects */}
        <div className="absolute top-10 left-10 w-72 h-30 bg-[#f8b400]/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-72 h-30 bg-[#0d6b5c]/10 blur-[120px] rounded-full"></div>

        {/* Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* ================= LEFT IMAGE ================= */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >

              {/* Main Image */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                className="relative overflow-hidden rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.15)]"
              >
                <SafeImage
                  src="/coww.jpg"
                  alt="faq"
                  width={700}
                  height={700}
                  className="w-full h-[520px] object-cover hover:scale-105 transition duration-700"
                />
              </motion.div>

              {/* Floating Small Image */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="absolute bottom-2 right-6 bg-white p-2 rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.18)]"
              >
                <SafeImage
                  src="/cowww.jpg"
                  alt="small"
                  width={250}
                  height={170}
                  className="rounded-[18px] object-cover"
                />
              </motion.div>
            </motion.div>

            {/* ================= RIGHT CONTENT ================= */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >

              {/* Small Heading */}
              <div className="flex items-center gap-4 mb-4">

                <h5 className="text-[#f8b400] text-2xl md:text-3xl font-bold">
                  {t("home.faqSectionSmall")}
                </h5>

                <div className="w-16 h-[3px] bg-[#f8b400] rounded-full"></div>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] leading-tight">
                {t("home.faqSectionTitle")}
              </h2>

              {/* FAQ List */}
              <div className="mt-8 space-y-5">

                {faqs.map((faq, index) => (

                  <motion.div
                    key={index}
                    whileHover={{
                      y: -3,
                    }}
                    className="bg-white border border-gray-200 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.07)] overflow-hidden"
                  >

                    {/* Question */}
                    <button
                      onClick={() =>
                        setActive(active === index ? -1 : index)
                      }
                      className="w-full flex items-center justify-between px-6 py-5 text-left"
                    >

                      <h3 className="text-xl md:text-2xl font-bold text-[#111]">
                        {faq.question}
                      </h3>

                      <div className="text-[#0d6b5c] text-3xl font-bold">
                        {active === index ? "⌃" : "⌄"}
                      </div>
                    </button>

                    {/* Answer */}
                    {active === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="px-6 pb-6"
                      >

                        <div className="border-t border-gray-200 pt-5">
                          <p className="text-gray-600 text-base leading-7">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}