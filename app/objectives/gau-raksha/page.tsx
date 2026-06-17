"use client";

import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useRef } from "react";
import {
  ShieldCheck,
  HeartHandshake,
  Ambulance,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";

export default function GauRakshaMissionPage() {
  const { t } = useLocale();
  const galleryRef = useRef<HTMLDivElement>(null);

  const galleryItems = useMemo(
    () => [
      {
        image: "/Gau1.png",
        title: t("obj.raksha.g1t"),
        description: t("obj.raksha.g1d"),
      },
      {
        image: "/Gau2.png",
        title: t("obj.raksha.g2t"),
        description: t("obj.raksha.g2d"),
      },
      {
        image: "/Gau3.png",
        title: t("obj.raksha.g3t"),
        description: t("obj.raksha.g3d"),
      },
      {
        image: "/Gau4.png",
        title: t("obj.raksha.g4t"),
        description: t("obj.raksha.g4d"),
      },
    ],
    [t],
  );

  const scrollGallery = (direction: "left" | "right") => {
    if (!galleryRef.current) return;
    const scrollAmount = 380;
    galleryRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-[#f8f5ef] overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[90vh] overflow-hidden">
        <SafeImage
          src="/bgrr.png"
          alt="Gau Raksha"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0d6b5c]/70 via-transparent to-[#f8b400]/30"></div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl"
            >
              <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
                {t("obj.raksha.heroTitle")}
              </h1>

              <p className="text-white/90 text-base md:text-xl leading-8 md:leading-10 mt-7 max-w-3xl">
                {t("obj.raksha.heroP")}
              </p>

              <div className="flex flex-wrap gap-6 mt-10">
                <Link
                  href="/donations"
                  className="bg-[#f8b400] hover:bg-[#df9f00] transition text-white px-9 py-4 rounded-full text-lg font-bold shadow-2xl"
                >
                  Donate Now
                </Link>

                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#111] transition px-9 py-4 rounded-full text-lg font-bold"
                >
                  Become Volunteer
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:scale-105 transition duration-700 ">
                <SafeImage
                  src="/cow22.png"
                  alt="About Gau Raksha"
                  width={800}
                  height={700}
                  className="w-full h-[600px] object-cover "
                />
              </div>

              <div className="absolute -bottom-10 -right-5 bg-white rounded-[24px] px-8 py-6 shadow-2xl">
                <h3 className="text-[#0d6b5c] text-4xl font-extrabold">5000+</h3>

                <p className="text-[#222] text-lg font-semibold mt-2">{t("obj.raksha.statLabel")}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-[#f8b400] text-xl font-bold">{t("obj.raksha.aboutLabel")}</p>

              <h2 className="text-3xl md:text-5xl font-extrabold text-[#111] leading-tight mt-4">
                {t("obj.raksha.aboutH2")}
              </h2>

              <p className="text-[#555] text-base md:text-lg leading-8 md:leading-9 mt-7">{t("obj.raksha.aboutP1")}</p>

              <p className="text-[#555] text-base md:text-lg leading-8 md:leading-9 mt-5">{t("obj.raksha.aboutP2")}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="text-[#0d6b5c]" size={38} />

                  <div>
                    <h4 className="text-lg font-bold text-[#111]">{t("obj.raksha.f1t")}</h4>

                    <p className="text-gray-600 mt-2">{t("obj.raksha.f1d")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Ambulance className="text-[#0d6b5c]" size={38} />

                  <div>
                    <h4 className="text-lg font-bold text-[#111]">{t("obj.raksha.f2t")}</h4>

                    <p className="text-gray-600 mt-2">{t("obj.raksha.f2d")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <HeartHandshake className="text-[#0d6b5c]" size={38} />

                  <div>
                    <h4 className="text-lg font-bold text-[#111]">{t("obj.raksha.f3t")}</h4>

                    <p className="text-gray-600 mt-2">{t("obj.raksha.f3d")}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section className="py-20 bg-[#fffdf8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-[#f8b400] text-xl font-bold">{t("obj.raksha.galleryTag")}</p>

            <h2 className="text-3xl md:text-5xl font-extrabold text-[#111] mt-4">{t("obj.raksha.galleryH")}</h2>
          </div>

          <div className="mt-10 flex items-center justify-end gap-3">
            <button
              onClick={() => scrollGallery("left")}
              className="h-11 w-11 rounded-full bg-[#0d6b5c] text-white flex items-center justify-center shadow-lg hover:bg-[#095346] transition"
              aria-label="Scroll gallery left"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => scrollGallery("right")}
              className="h-11 w-11 rounded-full bg-[#f8b400] text-white flex items-center justify-center shadow-lg hover:bg-[#df9f00] transition"
              aria-label="Scroll gallery right"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div
            ref={galleryRef}
            className="mt-6 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                className="min-w-[300px] md:min-w-[360px] max-w-[360px] flex-shrink-0 snap-start overflow-hidden rounded-[28px] shadow-xl bg-white border border-[#efe7d8]"
              >
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={500}
                  className="w-full h-[300px] object-cover"
                />

                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#111]">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-6">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-24 overflow-hidden">
        <SafeImage src="/card4.png" alt="cta" fill className="object-cover" />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">{t("obj.raksha.ctaH")}</h2>

          <p className="text-white/90 text-base md:text-xl leading-8 md:leading-10 mt-7">{t("obj.raksha.ctaP")}</p>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <Link
              href="/donations"
              className="bg-[#f8b400] hover:bg-[#df9f00] transition text-white px-9 py-4 rounded-full text-lg font-bold shadow-2xl"
            >
              Donate Now
            </Link>

            <Link
              href="/contact"
              className="bg-white text-[#0d6b5c] hover:bg-[#f5f5f5] transition px-9 py-4 rounded-full text-lg font-bold flex items-center gap-3"
            >
              Become Volunteer

              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
