"use client";

import SafeImage from "@/components/SafeImage";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { Home, HeartHandshake, ShieldCheck, Wheat, ArrowRight } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";

export default function GaushalaDevelopmentPage() {
  const router = useRouter();
  const { t } = useLocale();

  const facilityCards = useMemo(
    () => [
      { icon: <Home size={42} />, title: t("obj.dev.f1") },
      { icon: <HeartHandshake size={42} />, title: t("obj.dev.f2") },
      { icon: <ShieldCheck size={42} />, title: t("obj.dev.f3") },
      { icon: <Wheat size={42} />, title: t("obj.dev.f4") },
    ],
    [t],
  );

  const stats = useMemo(
    () => [
      { number: "150+", title: t("obj.dev.stat1") },
      { number: "20K+", title: t("obj.dev.stat2") },
      { number: "500+", title: t("obj.dev.stat3") },
    ],
    [t],
  );

  return (
    <main className="bg-[#f8f5ef] overflow-hidden">
      <section className="relative h-[92vh] flex items-center justify-center overflow-hidden">
        <SafeImage src="/devopment.jpg" alt="Gaushala" fill priority className="object-cover" />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
          >
            {t("obj.dev.hero1")}
            <span className="text-yellow-400">{t("obj.dev.hero2")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/90 text-xl leading-9 mt-8"
          >
            {t("obj.dev.heroP")}
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            onClick={() => router.push("/donations/amount")}
            className="mt-10 bg-yellow-500 hover:bg-yellow-600 transition text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl"
          >
            Support Gaushala
          </motion.button>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <SafeImage
              src="/dev.jpg"
              alt="about"
              width={700}
              height={700}
              className="rounded-[35px] shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h5 className="text-yellow-500 text-2xl font-bold mb-5">{t("obj.dev.better")}</h5>

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111] leading-tight">
              {t("obj.dev.aboutH2")}
            </h2>

            <p className="text-gray-600 text-lg leading-9 mt-8">{t("obj.dev.aboutP1")}</p>

            <p className="text-gray-600 text-lg leading-9 mt-6">{t("obj.dev.aboutP2")}</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-[#111]">{t("obj.dev.facilitiesH")}</h2>

            <p className="text-gray-600 text-lg mt-5">{t("obj.dev.facilitiesP")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilityCards.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[30px] p-10 shadow-[0_15px_45px_rgba(0,0,0,0.08)] text-center"
              >
                <div className="w-24 h-24 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mx-auto">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mt-8">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-[#f8f5ef] rounded-[30px] p-12 text-center shadow-lg"
              >
                <h2 className="text-6xl font-extrabold text-yellow-500">{item.number}</h2>

                <p className="text-2xl font-bold mt-5 text-[#111]">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-[#111]">{t("obj.dev.galleryH")}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["/cons4.jpg", "/cons3.jpg", "/cons2.jpg", "/cons1.jpg"].map((img, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-[28px]">
                <SafeImage
                  src={img}
                  alt="gallery"
                  width={400}
                  height={500}
                  className="w-full h-[320px] object-cover hover:scale-110 transition duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 overflow-hidden">
        <SafeImage src="/dvbg.jpg" alt="cta" fill className="object-cover" />

        <div className="absolute inset-0 bg-[#000]/70"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">{t("obj.dev.ctaH")}</h2>

          <p className="text-white/80 text-xl leading-9 mt-8">{t("obj.dev.ctaP")}</p>

          <button
            onClick={() => router.push("/donations/amount")}
            className="mt-10 bg-yellow-500 hover:bg-yellow-600 transition text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl inline-flex items-center gap-3"
          >
            Donate Now
            <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </main>
  );
}
