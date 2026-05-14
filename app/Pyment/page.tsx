"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";

export default function PymentPage() {
  const { t } = useLocale();
  return (
    <main className="min-h-screen bg-[#f5f5f5] px-6 py-16">
      <div className="mx-auto max-w-4xl rounded-2xl border border-[#ded7ca] bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-[#1c1c1c]">{t("legacy.paymentTitle")}</h1>
        <p className="mt-3 text-base text-[#575757]">{t("legacy.paymentBody")}</p>
        <Link
          href="/donations/payment"
          className="mt-6 inline-block rounded-full bg-[#f8b400] px-6 py-2 text-sm font-bold text-white"
        >
          Go to Donations Payment
        </Link>
      </div>
    </main>
  );
}
