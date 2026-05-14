"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import {
  CalendarDays,
  ArrowRight,
  User,
} from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";

export default function BlogPage() {
  const router = useRouter();
  const { t } = useLocale();

  const blogs = useMemo(
    () => [
      {
        image: "/blog1.jpg",
        title: t("blog.card1Title"),
        date: "12 May 2026",
        author: "Admin",
        desc: t("blog.card1Desc"),
      },
      {
        image: "/blog2.jpg",
        title: t("blog.card2Title"),
        date: "18 May 2026",
        author: "RGS Team",
        desc: t("blog.card2Desc"),
      },
      {
        image: "/blog3.jpg",
        title: t("blog.card3Title"),
        date: "25 May 2026",
        author: "Admin",
        desc: t("blog.card3Desc"),
      },
      {
        image: "/blog4.jpg",
        title: t("blog.card4Title"),
        date: "30 May 2026",
        author: "Volunteer",
        desc: t("blog.card4Desc"),
      },
      {
        image: "/blog5.jpg",
        title: t("blog.card5Title"),
        date: "02 June 2026",
        author: "RGS Team",
        desc: t("blog.card5Desc"),
      },
      {
        image: "/blog6.jpg",
        title: t("blog.card6Title"),
        date: "10 June 2026",
        author: "Admin",
        desc: t("blog.card6Desc"),
      },
    ],
    [t],
  );

  return (
    <main className="bg-[#f8f6ef] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">

        {/* Background */}
        <Image
          src="/blog-banner.jpg"
          alt="blog"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-white"
          >
            {t("blog.heroTitle")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/90 text-xl mt-8 max-w-3xl mx-auto leading-9"
          >
            {t("blog.heroSub")}
          </motion.p>
        </div>
      </section>

      {/* ================= BLOG SECTION ================= */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="flex items-center justify-between flex-wrap gap-5 mb-16">

            <div>
              <p className="text-yellow-500 text-2xl font-bold">
                {t("blog.postsEyebrow")}
              </p>

              <h2 className="text-5xl font-extrabold text-[#111] mt-3">
                {t("blog.postsTitle")}
              </h2>
            </div>

            {/* Search */}
            <input
              type="text"
              placeholder={t("blog.searchPlaceholder")}
              className="bg-white border border-gray-200 rounded-full px-6 py-4 outline-none w-[320px] shadow-sm"
            />
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {blogs.map((blog, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="bg-white rounded-[32px] overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.08)] border border-gray-100"
              >

                {/* Image */}
                <div className="relative overflow-hidden">

                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={600}
                    height={400}
                    className="w-full h-[260px] object-cover hover:scale-110 transition duration-700"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-5 left-5 bg-[#0d6b5c] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {t("blog.categoryBadge")}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">

                  {/* Meta */}
                  <div className="flex items-center gap-5 text-gray-500 text-sm">

                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      {blog.date}
                    </div>

                    <div className="flex items-center gap-2">
                      <User size={16} />
                      {blog.author}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-extrabold text-[#111] mt-6 leading-snug hover:text-[#0d6b5c] transition cursor-pointer">
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-8 mt-5">
                    {blog.desc}
                  </p>

                  {/* Read More */}
                  <Link
                    href="/"
                    className="inline-flex items-center gap-3 mt-8 text-[#0d6b5c] font-bold hover:text-yellow-500 transition"
                  >
                    Read More

                    <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="relative py-24 overflow-hidden">

        {/* Background */}
        <Image
          src="/newsletter-bg.jpg"
          alt="newsletter"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0d6b5c]/90"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            {t("blog.newsletterTitle")}
          </h2>

          <p className="text-white/80 text-xl mt-8 leading-9">
            {t("blog.newsletterSub")}
          </p>

          {/* Input */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-12">

            <input
              type="email"
              placeholder={t("blog.emailPlaceholder")}
              className="w-full md:w-[420px] px-7 py-5 rounded-full outline-none text-lg"
            />

            <button
              onClick={() => router.push("/contact")}
              className="bg-yellow-500 hover:bg-yellow-600 transition text-white px-10 py-5 rounded-full text-lg font-bold shadow-xl"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}