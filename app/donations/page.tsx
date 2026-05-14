"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "@/components/LocaleProvider";

export default function DonationPage() {
  const router = useRouter();
  const { t } = useLocale();
  const [showDonationFlow] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState("500");
  const [donationStep, setDonationStep] = useState<1 | 2 | 3>(1);

  const openDonationFlow = () => {
    router.push("/donations/amount");
  };
  const openLoginModal = () => {
    window.dispatchEvent(new Event("open-auth-register"));
  };

  return (
    <main className="bg-[#f5f5f5] overflow-hidden">

      {/* ================= HERO TEXT SECTION ================= */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: "url('/pattern-bg.png')",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#f6ede3]/95"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-4xl font-bold text-[#111] leading-tight"
          >
            {t("donations.heroTitle")}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-[#6d7685] text-sm md:text-base leading-7 md:leading-8 max-w-6xl mx-auto"
          >
            {t("donations.heroP")}
          </motion.p>

          {/* Bottom Text */}
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-7 text-[#6d7685] text-lg md:text-xl font-bold"
          >
            {t("donations.heroSub")}
          </motion.h3>
        </div>
      </section>

      {showDonationFlow && (
        <section id="donation-flow" className="scroll-mt-32 pb-8 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 overflow-hidden border border-[#ded7ca] bg-[#f8f8f8] shadow-[0_12px_30px_rgba(0,0,0,0.1)]">
            <div className="p-6 md:p-8">
              {donationStep === 1 && (
                <>
                  <p className="text-sm md:text-base leading-8 text-[#575757]">
                    Every cow deserves a safe, loving home, yet many gausalas struggle
                    with broken shelters, scarce food, and no medical help. Some
                    underprivileged gausalas are fighting just to survive. With your
                    support, we can rebuild these shelters, provide nutritious fodder,
                    clean water, and urgent care, and give cows the dignity and comfort
                    they deserve.
                    <br />
                    Your kindness can turn their struggle into safety, and their
                    suffering into peace. Donate today and be their voice and their hope.
                  </p>
                  <p className="mt-5 text-base font-semibold text-[#555]">
                    Tax exempted under section 80G(5)(iii) of Income tax vide
                    registration No AAFTG0477NF20251
                  </p>
                </>
              )}

              <div className="mt-8">
                <div className="flex items-center gap-2">
                  <div className="flex items-center flex-1">
                    <span className={`h-6 w-6 rounded-full text-white text-xs font-bold flex items-center justify-center ${
                      donationStep === 1 ? "bg-[#2f2f2f]" : "bg-[#2ac18b]"
                    }`}>1</span>
                    <div className="h-1 flex-1 bg-[#2ac18b]"></div>
                  </div>
                  <div className="flex items-center flex-1">
                    <span className={`h-6 w-6 rounded-full text-white text-xs font-bold flex items-center justify-center ${
                      donationStep === 2 ? "bg-[#2f2f2f]" : "bg-[#2ac18b]"
                    }`}>2</span>
                    <div className="h-1 flex-1 bg-[#2ac18b]"></div>
                  </div>
                  <span className={`h-6 w-6 rounded-full text-white text-xs font-bold flex items-center justify-center ${
                    donationStep === 3 ? "bg-[#2f2f2f]" : "bg-[#2ac18b]"
                  }`}>3</span>
                </div>
                <div className="mt-2 grid grid-cols-3 text-center text-sm text-[#555]">
                  <span>Amount</span>
                  <span>Details</span>
                  <span>Payment</span>
                </div>
              </div>

              {donationStep === 1 ? (
                <>
                  <p className="mt-4 text-lg font-semibold text-[#2e2e2e]">Choose an amount *</p>
                  <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["500", "1500", "2000", "5000", "10000", "50000", "other"].map((amount) => (
                      <label key={amount} className="flex items-center gap-2 border border-[#d4d4d4] bg-white px-3 py-2 text-sm text-[#2a2a2a]">
                        <input
                          type="radio"
                          name="amount"
                          checked={selectedAmount === amount}
                          onChange={() => setSelectedAmount(amount)}
                        />
                        {amount === "other" ? "Other" : `Rs.${Number(amount).toLocaleString("en-IN")}.00`}
                      </label>
                    ))}
                  </div>

                  <button
                    onClick={() => setDonationStep(2)}
                    className="mt-6 bg-[#f8b400] hover:bg-[#df9f00] text-white px-8 py-3 rounded-full text-sm font-bold transition"
                  >
                    Next »
                  </button>
                </>
              ) : donationStep === 2 ? (
                <>
                  <h3 className="mt-5 text-5xl font-bold text-[#1c1c1c]">Donor details</h3>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#2b2b2b] mb-2">First name *</label>
                      <input className="w-full border border-[#bbbbbb] bg-white px-3 py-2.5 text-sm outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2b2b2b] mb-2">Last name *</label>
                      <input className="w-full border border-[#bbbbbb] bg-white px-3 py-2.5 text-sm outline-none" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-[#2b2b2b] mb-1">Country / Region *</label>
                    <p className="text-sm text-[#555]">India</p>
                  </div>

                  <div className="mt-3">
                    <label className="block text-sm font-medium text-[#2b2b2b] mb-2">Street address *</label>
                    <input
                      placeholder="House number and street name"
                      className="w-full border border-[#bbbbbb] bg-white px-3 py-2.5 text-sm outline-none"
                    />
                  </div>

                  <div className="mt-3">
                    <input
                      placeholder="Apartment, suite, unit, etc. (optional)"
                      className="w-full border border-[#bbbbbb] bg-white px-3 py-2.5 text-sm outline-none"
                    />
                  </div>

                  <div className="mt-3">
                    <label className="block text-sm font-medium text-[#2b2b2b] mb-2">Town / City *</label>
                    <input className="w-full border border-[#bbbbbb] bg-white px-3 py-2.5 text-sm outline-none" />
                  </div>

                  <div className="mt-3">
                    <label className="block text-sm font-medium text-[#2b2b2b] mb-2">State *</label>
                    <select className="w-full rounded-full border border-[#e4e4e4] bg-[#f5f5f5] px-5 py-2.5 text-sm outline-none">
                      <option>Punjab</option>
                      <option>Uttar Pradesh</option>
                      <option>Rajasthan</option>
                      <option>Delhi</option>
                    </select>
                  </div>

                  <div className="mt-3">
                    <label className="block text-sm font-medium text-[#2b2b2b] mb-2">PIN Code *</label>
                    <input className="w-full border border-[#bbbbbb] bg-white px-3 py-2.5 text-sm outline-none" />
                  </div>

                  <div className="mt-3">
                    <label className="block text-sm font-medium text-[#2b2b2b] mb-2">Phone (optional)</label>
                    <input className="w-full border border-[#bbbbbb] bg-white px-3 py-2.5 text-sm outline-none" />
                  </div>

                  <div className="mt-3">
                    <label className="block text-sm font-medium text-[#2b2b2b] mb-2">Email address *</label>
                    <input type="email" className="w-full border border-[#bbbbbb] bg-white px-3 py-2.5 text-sm outline-none" />
                  </div>

                  <p className="mt-4 text-sm text-[#444]">Create an account?</p>

                  <div className="mt-6 flex items-center justify-between">
                    <button
                      onClick={() => setDonationStep(1)}
                      className="bg-[#f8b400] hover:bg-[#df9f00] text-white px-8 py-3 rounded-full text-sm font-bold transition"
                    >
                      « Back
                    </button>
                    <button
                      onClick={() => setDonationStep(3)}
                      className="bg-[#f8b400] hover:bg-[#df9f00] text-white px-8 py-3 rounded-full text-sm font-bold transition"
                    >
                      Next »
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="mt-5 text-5xl font-bold text-[#1c1c1c]">Your Donation</h3>

                  <div className="mt-5 border border-[#d8d8d8] bg-white">
                    <div className="grid grid-cols-[1fr_auto] border-b border-[#d8d8d8]">
                      <p className="px-4 py-3 text-lg text-[#575757]">Support for Gau Seva</p>
                      <p className="px-4 py-3 text-lg font-semibold text-[#575757]">
                        {selectedAmount === "other" ? "Other" : `Rs.${Number(selectedAmount).toLocaleString("en-IN")}.00`}
                      </p>
                    </div>
                    <div className="px-4 py-3 border-b border-[#d8d8d8]">
                      <label className="flex items-center gap-2 border border-[#444] rounded px-3 py-2 text-base text-[#222]">
                        <input type="checkbox" />
                        Yes, I want to cover the transaction fee.
                      </label>
                    </div>
                    <div className="grid grid-cols-[1fr_auto]">
                      <p className="px-4 py-3 text-lg font-semibold text-[#2a2a2a]">Donation Amount</p>
                      <p className="px-4 py-3 text-lg font-semibold text-[#575757]">
                        {selectedAmount === "other" ? "Other" : `Rs.${Number(selectedAmount).toLocaleString("en-IN")}.00`}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 border border-[#d8d8d8] bg-[#f9f9ff]">
                    <div className="border-b border-[#d8d8d8] px-4 py-4 text-xl font-semibold text-[#0a6a62]">
                      Razorpay
                    </div>
                    <div className="px-4 py-4 text-base text-[#444]">
                      <label className="flex items-center justify-between gap-3">
                        <span className="flex items-center gap-2">
                          <input type="radio" name="payment-method" defaultChecked />
                          Credit Card/Debit Card/NetBanking
                        </span>
                        <span className="text-xl font-semibold text-[#2b2b2b]">Pay by Razorpay</span>
                      </label>
                    </div>
                    <div className="border-t border-[#d8d8d8] px-4 py-4 text-sm leading-7 text-[#666]">
                      Your personal data will be used to process your order, support your
                      experience throughout this website, and for other purposes described
                      in our privacy policy.
                    </div>
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
                    <button
                      onClick={() => setDonationStep(2)}
                      className="bg-[#f8b400] hover:bg-[#df9f00] text-white px-8 py-3 rounded-full text-sm font-bold transition"
                    >
                      « Back
                    </button>
                  </div>
                </>
              )}

              <div className="mt-5 rounded-sm bg-[#0f7f72] px-4 py-2 text-sm text-white">
                Returning donor? <button onClick={openLoginModal} className="underline underline-offset-2">Click here to login</button>
              </div>
            </div>

            <div className="bg-[#ead9bc]">
              <Image
                src="/cow2.jpg"
                alt="donation"
                width={900}
                height={780}
                className="w-full h-[360px] md:h-[420px] object-cover"
              />
              <div className="px-8 py-6">
                <h3 className="text-[#3f2b1a] text-5xl md:text-6xl font-extrabold leading-none">DONATION</h3>
                <p className="mt-2 text-[#3f2b1a] text-3xl md:text-4xl font-extrabold uppercase">
                  For Gausala Support
                </p>
                <div className="mt-5 flex justify-center">
                  <div className="h-24 w-24 rounded-full border-4 border-[#5c4430] flex items-center justify-center text-4xl text-[#5c4430]">
                    🐄
                  </div>
                </div>
                <button
                  onClick={openDonationFlow}
                  className="mt-5 w-full rounded-xl bg-[#4e3625] py-4 text-4xl font-extrabold tracking-wide text-white hover:bg-[#3f2b1d] transition"
                >
                  DONATE NOW
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= DONATION CARD SECTION ================= */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0"
          >

            {/* ================= LEFT IMAGE ================= */}
            <div className="relative">

              <Image
                src="/ambulance-cow.png"
                alt="ambulance"
                width={900}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>

            {/* ================= RIGHT CONTENT BOX ================= */}
            <div className="bg-[#e7dbcc] px-10 md:px-14 py-14 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

              {/* Heading */}
              <h2 className="text-[#111] text-3xl md:text-4xl italic font-semibold">
                {t("donations.supportBlockH")}
              </h2>

              {/* Description */}
              <p className="mt-6 text-[#6d7685] text-sm md:text-base leading-7 md:leading-8">
                {t("donations.supportBlockP")}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-8 mt-12">

                {/* Detail Link */}
                <button
                  onClick={() => router.push("/objectives/gau-raksha")}
                  className="flex items-center gap-2 text-[#00695c] text-sm md:text-base font-medium hover:text-[#c97d00] transition"
                >

                  Go to Detail

                  <ArrowRight size={28} />
                </button>

                {/* Donate Button */}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={openDonationFlow}
                  className="bg-[#5d6a75] hover:bg-[#49535c] transition text-white px-7 py-3 text-sm md:text-base font-bold shadow-lg"
                >
                  DONATE NOW
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
 <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0"
          >

            {/* ================= LEFT IMAGE ================= */}
            <div className="relative">

              <Image
                src="/ambulance-cow.png"
                alt="ambulance"
                width={900}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>

            {/* ================= RIGHT CONTENT BOX ================= */}
            <div className="bg-[#e7dbcc] px-10 md:px-14 py-14 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

              {/* Heading */}
              <h2 className="text-[#111] text-3xl md:text-4xl italic font-semibold">
                {t("donations.ambulanceBlockH")}
              </h2>

              {/* Description */}
              <p className="mt-6 text-[#6d7685] text-sm md:text-base leading-7 md:leading-8">
                {t("donations.cardAmbP")}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-8 mt-12">

                {/* Detail Link */}
                <button
                  onClick={() => router.push("/objectives/gau-ambulance")}
                  className="flex items-center gap-2 text-[#00695c] text-sm md:text-base font-medium hover:text-[#c97d00] transition"
                >

                  Go to Detail

                  <ArrowRight size={28} />
                </button>

                {/* Donate Button */}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={openDonationFlow}
                  className="bg-[#5d6a75] hover:bg-[#49535c] transition text-white px-7 py-3 text-sm md:text-base font-bold shadow-lg"
                >
                  DONATE NOW
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ================= DONATION CARDS SECTION ================= */}

<section className="bg-[#f5f5f5] py-20 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

    {/* ================= CARD 1 ================= */}
    <div className="bg-[#f6ede3] rounded-[30px] overflow-hidden shadow-xl hover:-translate-y-2 transition duration-500">

      {/* IMAGE */}
      <div className="relative h-[260px] overflow-hidden">
        <Image
          src="/ambulance.jpg"
          alt="ambulance"
          fill
          className="object-cover hover:scale-110 transition duration-700"
        />
      </div>

      {/* CONTENT */}
      <div className="p-8">

        <h2 className="text-2xl font-bold text-[#111] mb-4">
          {t("donations.cardAmbH")}
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-7">
          {t("donations.cardAmbP")}
        </p>

        {/* BUTTONS */}
        <div className="flex items-center justify-between mt-8">

          <button
            onClick={() => router.push("/objectives/gau-ambulance")}
            className="text-[#0d6b5c] text-sm md:text-base font-bold hover:text-[#f8b400] transition"
          >
            Go to Detail →
          </button>

          <button onClick={openDonationFlow} className="bg-[#0d6b5c] hover:bg-[#09463c] text-white px-5 py-2.5 rounded-xl text-sm md:text-base font-bold transition">
            DONATE NOW
          </button>
        </div>
      </div>
    </div>

    {/* ================= CARD 2 ================= */}
    <div className="bg-[#f6ede3] rounded-[30px] overflow-hidden shadow-xl hover:-translate-y-2 transition duration-500">

      {/* IMAGE */}
      <div className="relative h-[260px] overflow-hidden">
        <Image
          src="/gau-seva.jpg"
          alt="gau seva"
          fill
          className="object-cover hover:scale-110 transition duration-700"
        />
      </div>

      {/* CONTENT */}
      <div className="p-8">

        <h2 className="text-2xl font-bold text-[#111] mb-4">
          {t("donations.cardSevaH")}
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-7">
          {t("donations.cardSevaP")}
        </p>

        {/* BUTTONS */}
        <div className="flex items-center justify-between mt-8">

          <button
            onClick={() => router.push("/objectives/gau-raksha")}
            className="text-[#0d6b5c] text-sm md:text-base font-bold hover:text-[#f8b400] transition"
          >
            Go to Detail →
          </button>

          <button onClick={openDonationFlow} className="bg-[#0d6b5c] hover:bg-[#09463c] text-white px-5 py-2.5 rounded-xl text-sm md:text-base font-bold transition">
            DONATE NOW
          </button>
        </div>
      </div>
    </div>

    {/* ================= CARD 3 ================= */}
    <div className="bg-[#f6ede3] rounded-[30px] overflow-hidden shadow-xl hover:-translate-y-2 transition duration-500">

      {/* IMAGE */}
      <div className="relative h-[260px] overflow-hidden">
        <Image
          src="/cow-food.jpg"
          alt="cow food"
          fill
          className="object-cover hover:scale-110 transition duration-700"
        />
      </div>

      {/* CONTENT */}
      <div className="p-8">

        <h2 className="text-2xl font-bold text-[#111] mb-4">
          {t("donations.cardFoodH")}
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-7">
          {t("donations.cardFoodP")}
        </p>

        {/* BUTTONS */}
        <div className="flex items-center justify-between mt-8">

          <button
            onClick={() => router.push("/objectives/cow-feeding")}
            className="text-[#0d6b5c] text-sm md:text-base font-bold hover:text-[#f8b400] transition"
          >
            Go to Detail →
          </button>

          <button onClick={openDonationFlow} className="bg-[#f8b400] hover:bg-[#d99800] text-white px-5 py-2.5 rounded-xl text-sm md:text-base font-bold transition">
            FEED A COW
          </button>
        </div>
      </div>
    </div>

  </div>
</section>
      {/* ================= FLOATING TOP BUTTON ================= */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full border-2 border-[#00695c] bg-white text-[#00695c] text-3xl shadow-lg hover:scale-110 transition z-50"
      >
        ↑
      </button>
    </main>
  );
}