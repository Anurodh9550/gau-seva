"use client";

import SafeImage from "@/components/SafeImage";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import {
  Ambulance,
  Phone,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";

export default function GauAmbulancePage() {
  const router = useRouter();
  const { t } = useLocale();

  const serviceCards = useMemo(
    () => [
      { icon: Ambulance, title: t("obj.amb.c1t"), desc: t("obj.amb.c1d") },
      { icon: Stethoscope, title: t("obj.amb.c2t"), desc: t("obj.amb.c2d") },
      { icon: ShieldCheck, title: t("obj.amb.c3t"), desc: t("obj.amb.c3d") },
      { icon: HeartHandshake, title: t("obj.amb.c4t"), desc: t("obj.amb.c4d") },
    ],
    [t],
  );

  const steps = useMemo(() => [t("obj.amb.s1"), t("obj.amb.s2"), t("obj.amb.s3")], [t]);

  return (
    <main className="bg-[#f8f6ef] overflow-hidden">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <SafeImage
          src="/gauan.png"
          alt="gau ambulance"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
          >
            {t("obj.amb.heroTitle")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/90 text-xl md:text-2xl mt-6 leading-9"
          >
            {t("obj.amb.heroP")}
          </motion.p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <button
              onClick={() => window.open("tel:+919211472800", "_self")}
              className="bg-[#ffb300] hover:bg-[#f59e0b] transition px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl"
            >
              Call Ambulance
            </button>

            <button
              onClick={() => router.push("/donations/amount")}
              className="border border-white text-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full font-bold text-lg"
            >
              Donate Now
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-[#0d4d3c]">{t("obj.amb.sectionH")}</h2>

            <p className="text-gray-600 text-xl mt-5">{t("obj.amb.sectionP")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCards.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                className="bg-white rounded-[30px] p-8 shadow-xl border border-gray-100"
              >
                <div className="w-20 h-20 rounded-full bg-[#fff4d6] flex items-center justify-center mx-auto">
                  <item.icon size={40} className="text-[#ffb300]" />
                </div>

                <h3 className="text-2xl font-bold text-center mt-7">{item.title}</h3>

                <p className="text-gray-600 text-center leading-8 mt-4">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold text-[#0d4d3c]">{t("obj.amb.howH")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-[#f8f6ef] rounded-[30px] p-10 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-[#0d4d3c] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold mt-8">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-[#0d4d3c]">{t("obj.amb.galleryH")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["/amb1.jpg", "/amb2.jpg", "/ambu3.jpg", "/ambu4.jpg"].map((img, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.04,
                }}
                className="overflow-hidden rounded-[25px] shadow-xl"
              >
                <SafeImage
                  src={img}
                  alt="gallery"
                  width={400}
                  height={500}
                  className="w-full h-[350px] object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 overflow-hidden">
        <SafeImage src="/cta-bg.jpg" alt="cta" fill className="object-cover" />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">{t("obj.amb.ctaH")}</h2>

          <p className="text-white/90 text-xl mt-6 leading-9">{t("obj.amb.ctaP")}</p>

          <button
            onClick={() => router.push("/donations/amount")}
            className="mt-10 bg-[#ffb300] hover:bg-[#f59e0b] transition px-10 py-5 rounded-full text-white font-bold text-xl shadow-2xl"
          >
            Donate For Gau Ambulance
          </button>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-[#0d4d3c]">{t("obj.amb.contactH")}</h2>

          <div className="mt-12 bg-[#f8f6ef] rounded-[30px] p-10 shadow-xl">
            <Phone size={60} className="mx-auto text-[#ffb300]" />

            <h3 className="text-4xl font-bold mt-6">+91 9211472800</h3>

            <p className="text-gray-600 text-xl mt-4">{t("obj.amb.contactSub")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
