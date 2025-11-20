import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support - Filo",
  description: "Get help with Filo.",
};

export default function Support() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
          Support
        </h1>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          We're here to help. Find answers to common questions or get in touch.
        </p>

        <div className="space-y-12">
          {/* Common Questions */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Common Questions
            </h2>
            <div className="space-y-4">
              <details className="group bg-gray-50 rounded-xl p-6">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                  How do I record a meeting?
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
                <p className="mt-4 text-gray-600">
                  Open Filo, join your meeting, and tap the record button. Filo
                  will capture the audio and automatically generate a summary
                  when you stop recording.
                </p>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                  How long does it take to get a summary?
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
                <p className="mt-4 text-gray-600">
                  Summaries are generated on-device within seconds after your
                  meeting ends. Processing time depends on the length of your
                  meeting and your device model.
                </p>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                  Can I edit summaries?
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
                <p className="mt-4 text-gray-600">
                  Summaries and action items aren’t editable for now.
However, you can update your meeting details at any time — including the meeting title and attendee list — to keep everything accurate and organized.
                </p>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                  What's the difference between Auto and Sales mode?
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
                <p className="mt-4 text-gray-600">
                  Auto mode provides clean, structured summaries for general
                  meetings. Sales mode (Pro only) is optimized for client
                  conversations and highlights key sales insights like
                  objections, next steps, and decisions.
                </p>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                  How do I send action items to Apple Reminders?
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
                <p className="mt-4 text-gray-600">
                  After your summary is ready, select the action items you want to keep and tap “Add to Reminders.”
Filo creates tasks directly in Apple Reminders — using your default list or a dedicated list you’ve set in Filo’s settings. You can then manage due dates and notifications from Reminders.
                </p>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                  Is my data secure?
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
                <p className="mt-4 text-gray-600">
                  Yes. Filo uses on-device AI processing, which means your
                  recordings, transcripts, and summaries never leave your
                  iPhone. We don't send your data to external servers.
                </p>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                  Can I use Filo offline?
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
                <p className="mt-4 text-gray-600">
                  Yes! Since all processing happens on your device, you can
                  record meetings and generate summaries without an internet
                  connection.
                </p>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                  How do I upgrade to Filo Pro?
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
                <p className="mt-4 text-gray-600">
                  Open Filo, go to Settings, and tap "Upgrade to Pro." You can
                  choose between monthly (€3.99/month) or yearly (€39.99/year)
                  billing.
                </p>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                  Can I cancel my Pro subscription anytime?
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
                <p className="mt-4 text-gray-600">
                  Yes. You can cancel your Pro subscription anytime through your
                  iPhone's App Store subscription settings. You'll continue to
                  have Pro access until the end of your billing period.
                </p>
              </details>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still need help?
            </h2>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Send us a message and we'll
              get back to you as soon as possible.
            </p>
            <a
              href="mailto:support@usefilo.app"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0F4631] text-white text-base font-medium rounded-lg hover:bg-[#004730] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact Support
            </a>
          </div>

          {/* Additional Resources */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Additional Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="/guide"
                className="block border border-gray-200 rounded-xl p-6 hover:border-[#0F4631] transition-colors group"
              >
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#0F4631] transition-colors">
                  Getting Started Guide
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn how to use Filo effectively and make the most of its
                  features.
                </p>
              </a>

              <a
                href="/pricing"
                className="block border border-gray-200 rounded-xl p-6 hover:border-[#0F4631] transition-colors group"
              >
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#0F4631] transition-colors">
                  Pricing & Plans
                </h3>
                <p className="text-gray-600 text-sm">
                  Compare Free and Pro plans to find the right fit for your
                  needs.
                </p>
              </a>

              <a
                href="/legal/privacy"
                className="block border border-gray-200 rounded-xl p-6 hover:border-[#0F4631] transition-colors group"
              >
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#0F4631] transition-colors">
                  Privacy Policy
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn about how we protect your data and privacy.
                </p>
              </a>

              <a
                href="/legal/terms"
                className="block border border-gray-200 rounded-xl p-6 hover:border-[#0F4631] transition-colors group"
              >
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#0F4631] transition-colors">
                  Terms of Service
                </h3>
                <p className="text-gray-600 text-sm">
                  Review our terms and conditions for using Filo.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
