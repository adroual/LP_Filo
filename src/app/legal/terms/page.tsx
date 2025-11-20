import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Filo",
  description: "Filo's Terms of Service",
};

export default function Terms() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-12">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, or using Filo ("the App"), you agree to
              be bound by these Terms of Service ("Terms"). If you do not agree
              to these Terms, do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Description of Service
            </h2>
            <p>
              Filo is an AI-powered meeting assistant for iPhone that helps you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Record meetings</li>
              <li>Generate AI summaries and action items</li>
              <li>Sync tasks to Apple Reminders</li>
              <li>Draft follow-up emails (Pro plan)</li>
              <li>Access advanced features like Sales Mode (Pro plan)</li>
            </ul>
            <p className="mt-4">
              All AI processing is performed on your device. We offer both free
              and paid subscription plans.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. User Accounts
            </h2>
            <p>
              You may need to create an account to use certain features. You are
              responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Subscription Plans
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Filo Free
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>4 meetings per month</li>
              <li>7-day access to summaries and action items</li>
              <li>Auto mode only</li>
              <li>Free forever, no credit card required</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Filo Pro
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>€3.99/month or €39.99/year</li>
              <li>Unlimited meetings</li>
              <li>Unlimited access to summaries and action items</li>
              <li>Sales mode and follow-up email generation</li>
              <li>Billed through the App Store</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Payment and Billing
            </h2>
            <p>
              Filo Pro subscriptions are billed through Apple's App Store. By
              subscribing, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Pay the subscription fee at the beginning of each billing period
              </li>
              <li>
                Automatic renewal unless canceled at least 24 hours before the
                end of the current period
              </li>
              <li>Apple's payment terms and refund policies</li>
            </ul>
            <p className="mt-4">
              You can cancel your subscription anytime through your iPhone's App
              Store subscription settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Acceptable Use
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Use the App for any illegal purpose or in violation of any laws
              </li>
              <li>Record conversations without proper consent</li>
              <li>Attempt to reverse engineer or hack the App</li>
              <li>
                Use the App to infringe on intellectual property rights of others
              </li>
              <li>Abuse or overload our systems</li>
              <li>Share your account with others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Recording Consent
            </h2>
            <p>
              You are solely responsible for ensuring you have proper consent to
              record meetings in your jurisdiction. Laws regarding recording
              conversations vary by location. Some jurisdictions require
              all-party consent while others require only one-party consent.
            </p>
            <p className="mt-4 font-semibold">
              It is your responsibility to comply with all applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Intellectual Property
            </h2>
            <p>
              The App and all related materials are protected by copyright,
              trademark, and other intellectual property laws. You retain
              ownership of the content you create (recordings, summaries), but
              grant us a license to process this content to provide the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Disclaimers
            </h2>
            <p>
              THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. We do
              not guarantee:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>100% accuracy of AI-generated summaries</li>
              <li>Uninterrupted or error-free service</li>
              <li>Compatibility with all devices or iOS versions</li>
            </ul>
            <p className="mt-4">
              You should always review AI-generated content for accuracy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Limitation of Liability
            </h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR
              ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your access to the App
              at any time for violation of these Terms or for any other reason.
              You may terminate your account at any time by deleting the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Changes to Terms
            </h2>
            <p>
              We may modify these Terms at any time. We will notify you of
              material changes through the App or by email. Your continued use of
              the App after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              13. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of [Your Jurisdiction], without regard to its conflict of
              law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              14. Contact Us
            </h2>
            <p>
              If you have questions about these Terms, please contact us at:
            </p>
            <p className="mt-4">
              <a
                href="mailto:support@usefilo.app"
                className="text-[#0F4631] hover:text-[#004730] font-medium"
              >
                support@usefilo.app
              </a>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
