"use client";

import SafeImage from "@/components/SafeImage";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

import { ChevronLeft, ChevronRight, CheckCircle, QrCode, Smartphone, ShieldCheck } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";

export default function AboutPage() {
  const router = useRouter();
  const { t } = useLocale();
  const newsData = useMemo(
    () => [
      {
        image: "/news1.jpg",
        title: t("about.news1Title"),
        desc: t("about.news1Desc"),
      },
      {
        image: "/news2.jpg",
        title: t("about.news2Title"),
        desc: t("about.news2Desc"),
      },
      {
        image: "/news3.jpg",
        title: t("about.news3Title"),
        desc: t("about.news3Desc"),
      },
    ],
    [t],
  );

  return (
    <main className="bg-[#f7f7f7]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[360px] overflow-hidden">

        {/* Background Image */}
        <SafeImage
          src="/aboutbg.jpg"
          alt="about"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute   "></div>

        {/* Title */}
        
      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <h2 className="text-[#0056b8] text-2xl md:text-4xl font-extrabold">
              {t("about.storyTitle")}
            </h2>

            <p className="mt-4 text-base md:text-lg text-[#222] font-medium">
              {t("about.storyTagline")}
            </p>
          </motion.div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mt-16">

            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >

              <p className="text-sm md:text-base leading-7 md:leading-8 text-[#333]">
                {t("about.storyP1")}
              </p>

              <p className="text-sm md:text-base leading-7 md:leading-8 text-[#333] mt-5 md:mt-7">
                {t("about.storyP2")}
              </p>

              <p className="text-sm md:text-base leading-7 md:leading-8 text-[#333] mt-5 md:mt-7 font-medium">
                {t("about.storyP3")}
              </p>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >

              <div className="overflow-hidden rounded-[28px] border-[5px] border-[#f4a300] shadow-[0_20px_60px_rgba(0,0,0,0.2)]">

                <SafeImage
                  src="/cow2.jpg"
                  alt="cow"
                  width={800}
                  height={700}
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    



    <section className="relative bg-[#f5f5f5] py-20 overflow-hidden">

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ================= LEFT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <div className="overflow-hidden rounded-[8px] border-2 border-[#0056b8] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">

              <SafeImage
                src="/aboutbg1.png"
                alt="mission"
                width={900}
                height={700}
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            {/* Heading */}
            <h2 className="text-[#0056b8] text-2xl md:text-4xl font-extrabold">
              {t("about.missionTitle")}
            </h2>

            {/* Description */}
            <p className="mt-5 text-[#222] text-sm md:text-base leading-7 md:leading-8">
              {t("about.missionP")}
            </p>

            {/* Points */}
            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <CheckCircle
                  size={30}
                  className="text-green-600 fill-green-600 text-white"
                />

                <p className="text-base md:text-lg text-[#111] font-medium">
                  {t("about.missionPt1")}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <CheckCircle
                  size={30}
                  className="text-green-600 fill-green-600 text-white"
                />

                <p className="text-base md:text-lg text-[#111] font-medium">
                  {t("about.missionPt2")}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <CheckCircle
                  size={30}
                  className="text-green-600 fill-green-600 text-white"
                />

                <p className="text-base md:text-lg text-[#111] font-medium">
                  {t("about.missionPt3")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= BOTTOM CTA ================= */}
        
      </div>
    </section>

    <section className="relative bg-[#eef3f7] py-20 overflow-hidden">

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-[#0056b8] text-5xl md:text-6xl font-extrabold">
            {t("about.newsTitle")}
          </h2>
        </motion.div>

        {/* ================= NEWS CARDS ================= */}
        <div className="relative mt-16">

          {/* Left Arrow */}
          <button
            onClick={() => alert("News slider feature is coming soon.")}
            className="absolute -left-10 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center shadow-xl hover:scale-110 transition"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => alert("News slider feature is coming soon.")}
            className="absolute -right-10 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center shadow-xl hover:scale-110 transition"
          >
            <ChevronRight size={28} />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

            {newsData.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="bg-white rounded-[12px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.08)]"
              >

                {/* Image */}
                <div className="relative overflow-hidden">
                  <SafeImage
                    src={item.image}
                    alt="news"
                    width={700}
                    height={450}
                    className="w-full h-[280px] object-cover hover:scale-105 transition duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6">

                  {/* Title */}
                  <h3 className="text-[22px] font-extrabold text-[#333] leading-[38px] uppercase">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-[18px] leading-[36px] mt-4">
                    {item.desc}
                  </p>

                  {/* Read More */}
                  <button
                    onClick={() => router.push("/blog")}
                    className="mt-5 text-[#0056b8] text-xl font-medium underline hover:text-[#f4a300] transition"
                  >
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}
        
      </div>
    </section>
  
  <section className="relative overflow-hidden">

      {/* ================= TOP BUTTON ================= */}
      <div className="bg-[#eef3f7] py-20 flex justify-center">

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => router.push("/blog")}
          className="bg-gradient-to-r from-[#f4a300] to-[#e63946] text-white px-10 py-5 rounded-md text-2xl font-bold shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center gap-4"
        >
          VIEW MORE

          <span className="text-3xl">→</span>
        </motion.button>
      </div>

      {/* ================= MAIN SECTION ================= */}
      <section className="relative overflow-hidden py-20">

        {/* Background Image */}
        <SafeImage
          src="/about22.jpg"
          alt="background"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.62)_45%,rgba(0,0,0,0.45)_100%)]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* ================= LEFT CONTENT ================= */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >

              {/* Heading */}
              <h2 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
                {t("about.ctaTitle")}
              </h2>

              {/* Subheading */}
              <h3 className="mt-5 text-white text-2xl md:text-3xl font-semibold leading-snug">
                {t("about.ctaSubtitle")}
              </h3>

              {/* Description */}
              <p className="mt-6 text-white text-sm md:text-base leading-7 md:leading-8 max-w-4xl">
                {t("about.ctaP")}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-6 mt-10">

                {/* JOIN BUTTON */}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => window.dispatchEvent(new Event("open-auth-register"))}
                  className="bg-[#f4a300] hover:bg-[#dd9500] transition text-white px-9 py-4 rounded-md text-lg md:text-xl font-bold shadow-lg"
                >
                  JOIN RGSS
                </motion.button>

                {/* MEMBER BUTTON */}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => window.dispatchEvent(new Event("open-auth-register"))}
                  className="bg-[#7a2f1c] hover:bg-[#5d2214] transition text-white px-9 py-4 rounded-md text-lg md:text-xl font-bold shadow-lg"
                >
                  BECOME A MEMBER
                </motion.button>
              </div>
            </motion.div>

            {/* ================= RIGHT QR BOX ================= */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >

              <div className="relative bg-white/10 backdrop-blur-md border-[3px] border-white rounded-[24px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">

                {/* QR Image */}
                <SafeImage
                  src="/gu2.png"
                  alt="qr"
                  width={380}
                  height={520}
                  className="object-contain"
                />

                {/* Decorative Ribbon */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white px-8 py-4 rounded-full shadow-xl">

                  <p className="text-[#7a2f1c] text-lg md:text-xl font-bold whitespace-nowrap">
                    {t("about.qrRibbon")}
                  </p>
                </div>

                {/* QR Features */}
                <div className="mt-8 grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3 rounded-xl border border-white/35 bg-black/30 px-4 py-3 text-white">
                    <QrCode size={18} className="text-[#f4a300]" />
                    <p className="text-xs md:text-sm font-semibold">{t("about.qrLine1")}</p>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-white/35 bg-black/30 px-4 py-3 text-white">
                    <Smartphone size={18} className="text-[#f4a300]" />
                    <p className="text-xs md:text-sm font-semibold">{t("about.qrLine2")}</p>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-white/35 bg-black/30 px-4 py-3 text-white">
                    <ShieldCheck size={18} className="text-[#f4a300]" />
                    <p className="text-xs md:text-sm font-semibold">{t("about.qrLine3")}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA BAR ================= */}
      <div className="relative bg-[#f0d28a] px-6 py-5 overflow-hidden">

        {/* Left Decorative */}
        

        {/* Content */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 relative z-10">

          {/* Left */}
          <div className="flex items-center gap-5">

            

            <p className="text-[#222] text-lg md:text-2xl font-medium">
              {t("about.barP")}
            </p>
          </div>

          {/* Button */}
          <button
            onClick={() => window.dispatchEvent(new Event("open-auth-register"))}
            className="bg-[#f4a300] hover:bg-[#dd9500] transition text-white px-8 py-4 rounded-md text-xl font-bold shadow-lg"
          >
            JOIN RGSS
          </button>
        </div>

        {/* Right Decorative */}
        
      </div>
    </section>

    </main>
  );
}