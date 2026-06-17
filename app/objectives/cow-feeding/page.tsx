"use client";

import SafeImage from "@/components/SafeImage";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { Heart, HandHelping, Users, ArrowRight } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";

export default function CowFeedingProgram() {
  const router = useRouter();
  const { t } = useLocale();

  const impactCards = useMemo(
    () => [
      { icon: <Heart size={42} />, title: t("obj.feed.i1t"), desc: t("obj.feed.i1d") },
      { icon: <HandHelping size={42} />, title: t("obj.feed.i2t"), desc: t("obj.feed.i2d") },
      { icon: <Users size={42} />, title: t("obj.feed.i3t"), desc: t("obj.feed.i3d") },
    ],
    [t],
  );

  return (
    <main className="bg-[#f8f5ef] overflow-hidden">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <SafeImage src="/foodbg.jpg" alt="Cow Feeding" fill priority className="object-cover" />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
          >
            {t("obj.feed.hero1")}
            <span className="text-yellow-400">{t("obj.feed.hero2")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/90 text-lg md:text-2xl mt-8 leading-9"
          >
            {t("obj.feed.heroP")}
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            onClick={() => router.push("/donations/amount")}
            className="mt-10 bg-yellow-500 hover:bg-yellow-600 transition text-white px-10 py-4 rounded-full text-lg font-bold shadow-2xl"
          >
            Donate For Feeding
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
              src="/foodcard.jpg"
              alt="feeding"
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
            <h5 className="text-yellow-500 text-2xl font-bold mb-5">{t("obj.feed.initiative")}</h5>

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111] leading-tight">
              {t("obj.feed.aboutH")}
            </h2>

            <p className="text-gray-600 text-lg leading-9 mt-8">{t("obj.feed.aboutP1")}</p>

            <p className="text-gray-600 text-lg leading-9 mt-6">{t("obj.feed.aboutP2")}</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-[#111]">{t("obj.feed.impactH")}</h2>

            <p className="text-gray-600 text-lg mt-5">{t("obj.feed.impactP")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactCards.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[30px] p-10 shadow-[0_15px_45px_rgba(0,0,0,0.08)] text-center"
              >
                <div className="w-24 h-24 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mx-auto">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-bold mt-8">{item.title}</h3>

                <p className="text-gray-600 mt-5 leading-8">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-[#111]">{t("obj.feed.galleryH")}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["/fooditem1.jpg", "/fooditem2.jpg", "/fooditem3.jpg", "/fooditem4.jpg"].map((img, index) => (
              <motion.div key={index} whileHover={{ scale: 1.04 }} className="overflow-hidden rounded-[28px]">
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
        <SafeImage src="/help.jpg" alt="cta" fill className="object-cover" />

        <div className="absolute inset-0 bg-[#000]/65"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">{t("obj.feed.ctaH")}</h2>

          <p className="text-white/80 text-xl leading-9 mt-8">{t("obj.feed.ctaP")}</p>

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
