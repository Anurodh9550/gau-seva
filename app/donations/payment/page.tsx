"use client";

import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";

export default function DonationPaymentPage() {
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
                <span className="h-6 w-6 rounded-full bg-[#2ac18b] text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <div className="h-1 flex-1 bg-[#2ac18b]"></div>
              </div>
              <span className="h-6 w-6 rounded-full bg-[#2f2f2f] text-white text-xs font-bold flex items-center justify-center">
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

          <h3 className="mt-5 text-5xl font-bold text-[#1c1c1c]">{t("don.payYour")}</h3>

          <div className="mt-5 border border-[#d8d8d8] bg-white">
            <div className="grid grid-cols-[1fr_auto] border-b border-[#d8d8d8]">
              <p className="px-4 py-3 text-lg text-[#575757]">{t("don.paySupportLine")}</p>
              <p className="px-4 py-3 text-lg font-semibold text-[#575757]">Rs.500.00</p>
            </div>
            <div className="px-4 py-3 border-b border-[#d8d8d8]">
              <label className="flex items-center gap-2 border border-[#444] rounded px-3 py-2 text-base text-[#222]">
                <input type="checkbox" />
                {t("don.payFee")}
              </label>
            </div>
            <div className="grid grid-cols-[1fr_auto]">
              <p className="px-4 py-3 text-lg font-semibold text-[#2a2a2a]">{t("don.payAmountLabel")}</p>
              <p className="px-4 py-3 text-lg font-semibold text-[#575757]">Rs.500.00</p>
            </div>
          </div>

          <div className="mt-6 border border-[#d8d8d8] bg-[#f9f9ff]">
            <div className="border-b border-[#d8d8d8] px-4 py-4 text-xl font-semibold text-[#0a6a62]">Razorpay</div>
            <div className="px-4 py-4 text-base text-[#444]">
              <label className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2">
                  <input type="radio" name="payment-method" defaultChecked />
                  Credit Card/Debit Card/NetBanking
                </span>
                <span className="text-xl font-semibold text-[#2b2b2b]">Pay by Razorpay</span>
              </label>
            </div>
            <div className="border-t border-[#d8d8d8] px-4 py-4 text-sm leading-7 text-[#666]">{t("don.payPrivacy")}</div>
            <div className="px-4 pb-4">
              <button
                onClick={() => alert("Payment gateway will be connected soon.")}
                className="w-full bg-[#6f49b5] hover:bg-[#5d3ca0] text-white py-3 text-lg font-semibold transition"
              >
                Proceed to Payment
              </button>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/donations/details"
              className="bg-[#f8b400] hover:bg-[#df9f00] text-white px-8 py-3 rounded-full text-sm font-bold transition"
            >
              « Back
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
              onClick={() => alert("Payment gateway will be connected soon.")}
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
