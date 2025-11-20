import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide - Filo",
  description: "Learn how to use Filo effectively.",
};

export default function Guide() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
          Getting Started with Filo
        </h1>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Learn how to make the most of Filo's features and turn every meeting
          into actionable next steps.
        </p>

        <div className="space-y-12">
          {/* Quick Start */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Quick Start
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#0F4631] text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Download Filo
                    </h3>
                    <p className="text-gray-600">
                      Get Filo from the App Store and open it on your iPhone.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#0F4631] text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Start Recording
                    </h3>
                    <p className="text-gray-600">
                      Join your meeting and tap the record button to start
                      capturing.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#0F4631] text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Get Your Summary
                    </h3>
                    <p className="text-gray-600">
                      After the meeting, Filo processes your recording on-device
                      and generates a clear summary with action items.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#0F4631] text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Send to Reminders
                    </h3>
                    <p className="text-gray-600">
                      Tap to send action items directly to Apple Reminders with
                      due dates.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Key Features
            </h2>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Auto Mode (Free & Pro)
                </h3>
                <p className="text-gray-600">
                  Get clean, structured summaries automatically after each
                  meeting. Available on both Free and Pro plans.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Sales Mode
                  </h3>
                  <span className="px-2 py-0.5 bg-[#0F4631] text-white text-xs font-medium rounded">
                    PRO
                  </span>
                </div>
                <p className="text-gray-600">
                  Laser-focused summaries optimized for sales conversations,
                  highlighting key decisions, objections, and next steps.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Follow-up Email Drafts
                  </h3>
                  <span className="px-2 py-0.5 bg-[#0F4631] text-white text-xs font-medium rounded">
                    PRO
                  </span>
                </div>
                <p className="text-gray-600">
                  Generate ready-to-send follow-up emails based on your meeting
                  summary. Save time and close the loop faster.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Apple Reminders Integration (Free & Pro)
                </h3>
                <p className="text-gray-600">
                  Send action items directly to Apple Reminders with one tap.
                  Works seamlessly with your existing task workflow.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Privacy & Security
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <p className="text-gray-600 mb-4">
                Filo uses on-device AI processing, which means:
              </p>
              <ul className="space-y-3 text-gray-600">
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
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Your audio recordings never leave your iPhone
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
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Summaries are generated locally on your device
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
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  No data is sent to external servers for processing
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
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  You have complete control over your data
                </li>
              </ul>
            </div>
          </div>

          {/* Tips */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Tips for Better Results
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Record in a Quiet Space
                </h3>
                <p className="text-gray-600 text-sm">
                  For best results, record in a space with minimal background
                  noise.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Review Summaries Promptly
                </h3>
                <p className="text-gray-600 text-sm">
                  Check your summaries right after meetings to ensure accuracy
                  while details are fresh.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Use Sales Mode for Client Meetings
                </h3>
                <p className="text-gray-600 text-sm">
                  Switch to Sales Mode (Pro) for client conversations to get
                  insights tailored for sales follow-up.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Organize with Reminders
                </h3>
                <p className="text-gray-600 text-sm">
                  Set due dates when sending action items to Reminders to stay
                  on top of follow-ups.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-8">
            <a
              href="/support"
              className="text-[#0F4631] hover:text-[#004730] font-medium transition-colors"
            >
              Need more help? Visit our Support page →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
