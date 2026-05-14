"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { ShieldCheck, HeartHandshake, Users, HandHelping, ArrowRight } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";

export default function BecomeGaurakshakPage() {
  const router = useRouter();
  const { t } = useLocale();

  const responsibilityCards = useMemo(
    () => [
      { icon: <ShieldCheck size={42} />, title: t("obj.grk.c1") },
      { icon: <HeartHandshake size={42} />, title: t("obj.grk.c2") },
      { icon: <HandHelping size={42} />, title: t("obj.grk.c3") },
      { icon: <Users size={42} />, title: t("obj.grk.c4") },
    ],
    [t],
  );

  const stats = useMemo(
    () => [
      { number: "10K+", title: t("obj.grk.s1") },
      { number: "500+", title: t("obj.grk.s2") },
      { number: "100+", title: t("obj.grk.s3") },
    ],
    [t],
  );

  return (
    <main className="bg-[#f8f5ef] overflow-hidden">
      <section className="relative h-[92vh] flex items-center justify-center overflow-hidden">
        <Image src="/gaurakshak-hero.jpg" alt="Gaurakshak" fill priority className="object-cover" />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
          >
            {t("obj.grk.hero1")}
            <span className="text-yellow-400">{t("obj.grk.hero2")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/90 text-xl leading-9 mt-8"
          >
            {t("obj.grk.heroP")}
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            onClick={() => router.push("/contact")}
            className="mt-10 bg-yellow-500 hover:bg-yellow-600 transition text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl"
          >
            Join The Mission
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
            <Image
              src="/gaurakshak-about.jpg"
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
            <h5 className="text-yellow-500 text-2xl font-bold mb-5">{t("obj.grk.protect")}</h5>

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111] leading-tight">
              {t("obj.grk.aboutH2")}
            </h2>

            <p className="text-gray-600 text-lg leading-9 mt-8">{t("obj.grk.p1")}</p>

            <p className="text-gray-600 text-lg leading-9 mt-6">{t("obj.grk.p2")}</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-[#111]">{t("obj.grk.respH")}</h2>

            <p className="text-gray-600 text-lg mt-5">{t("obj.grk.respP")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {responsibilityCards.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[30px] p-10 text-center shadow-[0_15px_45px_rgba(0,0,0,0.08)]"
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
            <h2 className="text-5xl font-extrabold text-[#111]">{t("obj.grk.galleryH")}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["/gaur1.jpg", "/gaur2.jpg", "/gaur3.jpg", "/gaur4.jpg"].map((img, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-[28px]">
                <Image
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
        <Image src="/gaurakshak-cta.jpg" alt="cta" fill className="object-cover" />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">{t("obj.grk.ctaH")}</h2>

          <p className="text-white/80 text-xl leading-9 mt-8">{t("obj.grk.ctaP")}</p>

          <button
            onClick={() => router.push("/contact")}
            className="mt-10 bg-yellow-500 hover:bg-yellow-600 transition text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl inline-flex items-center gap-3"
          >
            Become Volunteer
            <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </main>
  );
}
