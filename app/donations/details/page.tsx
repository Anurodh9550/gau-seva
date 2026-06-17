"use client";

import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale } from "@/components/LocaleProvider";

export default function DonationDetailsPage() {
  const router = useRouter();
  const { t } = useLocale();
  const openLoginModal = () => {
    window.dispatchEvent(new Event("open-auth-register"));
  };
  return (
    <main className="bg-[#f5f5f5] px-6 py-10">
      <section className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden border border-[#ded7ca] bg-[#f8f8f8] shadow-[0_12px_30px_rgba(0,0,0,0.1)] lg:grid-cols-2">
        <div className="p-6 md:p-8">
          <div className="mt-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center flex-1">
                <span className="h-6 w-6 rounded-full bg-[#2ac18b] text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <div className="h-1 flex-1 bg-[#2ac18b]"></div>
              </div>
              <div className="flex items-center flex-1">
                <span className="h-6 w-6 rounded-full bg-[#2f2f2f] text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <div className="h-1 flex-1 bg-[#2ac18b]"></div>
              </div>
              <span className="h-6 w-6 rounded-full bg-[#2ac18b] text-white text-xs font-bold flex items-center justify-center">
                3
              </span>
            </div>
            <div className="mt-2 grid grid-cols-3 text-center text-sm text-[#555]">
              <span>{t("don.flowAmount")}</span>
              <span>{t("don.flowDetails")}</span>
              <span>{t("don.flowPayment")}</span>
            </div>
          </div>

          <div className="mt-5 rounded-sm bg-[#0f7f72] px-4 py-2 text-sm text-white">
            {t("don.amtReturning")}{" "}
            <button onClick={openLoginModal} className="underline underline-offset-2">
              Click here to login
            </button>
          </div>

          <h3 className="mt-5 text-5xl font-bold text-[#1c1c1c]">{t("don.detDonorTitle")}</h3>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-[#2b2b2b] mb-2">{t("don.detFirstName")}</label>
              <input className="w-full border border-[#bbbbbb] bg-white px-3 py-2.5 text-sm outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2b2b2b] mb-2">{t("don.detLastName")}</label>
              <input className="w-full border border-[#bbbbbb] bg-white px-3 py-2.5 text-sm outline-none" />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-[#2b2b2b] mb-1">{t("don.detCountry")}</label>
            <p className="text-sm text-[#555]">{t("don.detCountryVal")}</p>
          </div>

          <div className="mt-3">
            <label className="block text-sm font-medium text-[#2b2b2b] mb-2">{t("don.detStreet")}</label>
            <input
              placeholder={t("don.detStreetPh")}
              className="w-full border border-[#bbbbbb] bg-white px-3 py-2.5 text-sm outline-none"
            />
          </div>

          <div className="mt-3">
            <input
              placeholder={t("don.detAptPh")}
              className="w-full border border-[#bbbbbb] bg-white px-3 py-2.5 text-sm outline-none"
            />
          </div>

          <div className="mt-3">
            <label className="block text-sm font-medium text-[#2b2b2b] mb-2">{t("don.detCity")}</label>
            <input className="w-full border border-[#bbbbbb] bg-white px-3 py-2.5 text-sm outline-none" />
          </div>

          <div className="mt-3">
            <label className="block text-sm font-medium text-[#2b2b2b] mb-2">{t("don.detState")}</label>
            <select className="w-full rounded-full border border-[#e4e4e4] bg-[#f5f5f5] px-5 py-2.5 text-sm outline-none">
              <option>Punjab</option>
              <option>Uttar Pradesh</option>
              <option>Rajasthan</option>
              <option>Delhi</option>
            </select>
          </div>

          <div className="mt-3">
            <label className="block text-sm font-medium text-[#2b2b2b] mb-2">{t("don.detPin")}</label>
            <input className="w-full border border-[#bbbbbb] bg-white px-3 py-2.5 text-sm outline-none" />
          </div>

          <div className="mt-3">
            <label className="block text-sm font-medium text-[#2b2b2b] mb-2">{t("don.detPhoneOpt")}</label>
            <input className="w-full border border-[#bbbbbb] bg-white px-3 py-2.5 text-sm outline-none" />
          </div>

          <div className="mt-3">
            <label className="block text-sm font-medium text-[#2b2b2b] mb-2">{t("don.detEmail")}</label>
            <input type="email" className="w-full border border-[#bbbbbb] bg-white px-3 py-2.5 text-sm outline-none" />
          </div>

          <p className="mt-4 text-sm text-[#444]">{t("don.detAccountQ")}</p>

          <div className="mt-6 flex items-center justify-between">
            <Link
              href="/donations/amount"
              className="bg-[#f8b400] hover:bg-[#df9f00] text-white px-8 py-3 rounded-full text-sm font-bold transition"
            >
              « Back
            </Link>
            <Link
              href="/donations/payment"
              className="bg-[#f8b400] hover:bg-[#df9f00] text-white px-8 py-3 rounded-full text-sm font-bold transition"
            >
              Next »
            </Link>
          </div>
        </div>

        <div className="bg-[#ead9bc]">
          <SafeImage src="/cow2.jpg" alt="donation" width={900} height={780} className="w-full h-[360px] md:h-[420px] object-cover" />
          <div className="px-8 py-6">
            <h3 className="text-[#3f2b1a] text-5xl md:text-6xl font-extrabold leading-none">{t("don.sideDonation")}</h3>
            <p className="mt-2 text-[#3f2b1a] text-3xl md:text-4xl font-extrabold uppercase">{t("don.sideFor")}</p>
            <div className="mt-5 flex justify-center">
              <div className="h-24 w-24 rounded-full border-4 border-[#5c4430] flex items-center justify-center text-4xl text-[#5c4430]">
                🐄
              </div>
            </div>
            <button
              onClick={() => router.push("/donations/payment")}
              className="mt-5 w-full rounded-xl bg-[#4e3625] py-4 text-4xl font-extrabold tracking-wide text-white"
            >
              DONATE NOW
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
