import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Filo",
  description: "Start free. Upgrade when you need more power.",
};

export default function Pricing() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-12 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-[33px] sm:text-[41px] lg:text-[65px] font-black text-[#121212] leading-[1.1] tracking-tight mb-3 sm:mb-4">
              Pricing
            </h1>
            <p className="text-[13px] sm:text-[15px] lg:text-[20px] font-medium text-[#5e5e5e] leading-[1.4] tracking-[-0.5px] max-w-2xl mx-auto">
              Start free. Upgrade when you need more power.
            </p>
          </div>

          {/* Plan Cards */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-16 sm:mb-20">
            {/* Free Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-gray-300 transition-colors">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Filo
                </h2>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-black text-gray-900">
                    €0
                  </span>
                  <span className="text-gray-600 font-medium">/ forever</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  Light users and occasional meetings
                </p>
              </div>

              <ul className="space-y-3.5 mb-8">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#0F4631] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    4 meetings per month
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#0F4631] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    AI summary (Auto mode)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#0F4631] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    Action items extraction
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#0F4631] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    7-day summary access
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#0F4631] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    Apple Reminders sync
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#0F4631] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    On-device AI processing
                  </span>
                </li>
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="bg-white border-2 border-[#0F4631] rounded-2xl p-6 sm:p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-block px-4 py-1.5 bg-[#0F4631] text-white text-xs font-bold rounded-full">
                  Most popular
                </span>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Filo Pro
                </h2>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-black text-gray-900">
                    €3.99
                  </span>
                  <span className="text-gray-600 font-medium">/ month</span>
                </div>
                <p className="text-sm text-gray-600 font-medium mb-1">
                  or €39.99 / year (2 months free)
                </p>
              </div>

              <ul className="space-y-3.5 mb-8">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#0F4631] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-gray-900">
                    Unlimited meetings
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#0F4631] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-gray-900">
                    Unlimited summary access (no expiration)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#0F4631] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-gray-900">
                    Sales mode for meeting analysis
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#0F4631] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-gray-900">
                    Follow-up email generation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#0F4631] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    Full threads/history
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#0F4631] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    Apple Reminders sync
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#0F4631] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    On-device AI processing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#0F4631] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    Priority access to future features
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[23px] sm:text-[30px] lg:text-[36px] font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <details className="group bg-white border border-gray-200 rounded-xl p-5 sm:p-6 hover:border-gray-300 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900 text-sm sm:text-base">
                  Is Filo free?
                  <svg
                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                  Yes. Filo free version gives you 4 meetings per month, Auto-mode
                  summaries, 7-day access to your recaps and action items, and
                  Reminders sync.
                </p>
              </details>

              <details className="group bg-white border border-gray-200 rounded-xl p-5 sm:p-6 hover:border-gray-300 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900 text-sm sm:text-base">
                  What do I get with Filo Pro?
                  <svg
                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                  Filo Pro gives you unlimited meetings, unlimited access to all
                  past summaries, Sales mode for analysis, and follow-up email
                  generation — designed for people who rely on meetings to close
                  deals and run projects.
                </p>
              </details>

              <details className="group bg-white border border-gray-200 rounded-xl p-5 sm:p-6 hover:border-gray-300 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900 text-sm sm:text-base">
                  Is action item sync to Apple Reminders available on the free
                  plan?
                  <svg
                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                  Yes. Both Free and Pro let you send action items to Apple
                  Reminders.
                </p>
              </details>

              <details className="group bg-white border border-gray-200 rounded-xl p-5 sm:p-6 hover:border-gray-300 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900 text-sm sm:text-base">
                  Why do summaries expire after 7 days on the free plan?
                  <svg
                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                  On the free plan, summaries and action items are only
                  accessible for 7 days to keep the app sustainable. Filo Pro
                  unlocks unlimited history so you can revisit any meeting at
                  any time.
                </p>
              </details>

              <details className="group bg-white border border-gray-200 rounded-xl p-5 sm:p-6 hover:border-gray-300 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900 text-sm sm:text-base">
                  Do I need a credit card to start?
                  <svg
                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                  No. You can use Filo without adding a payment method.
                  You'll only be charged if you choose to upgrade to Filo Pro.
                </p>
              </details>

              <details className="group bg-white border border-gray-200 rounded-xl p-5 sm:p-6 hover:border-gray-300 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900 text-sm sm:text-base">
                  Is my data safe?
                  <svg
                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                  Filo uses on-device AI. Your audio, summaries, and analysis
                  stay on your iPhone and are not sent to external servers for
                  processing.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
