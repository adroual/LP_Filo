import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Filo",
  description: "Filo's Privacy Policy",
};

export default function Privacy() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-12">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Introduction
            </h2>
            <p>
              At Filo, your privacy is our priority. This Privacy Policy explains
              how we handle your data when you use our iOS meeting assistant app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              On-Device Processing
            </h2>
            <p>
              Filo uses on-device AI processing for all meeting recordings,
              transcriptions, and summaries. This means:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Your audio recordings are processed entirely on your iPhone
              </li>
              <li>Meeting transcripts and summaries are generated locally</li>
              <li>
                No audio, transcript, or summary data is sent to external servers
                for processing
              </li>
              <li>You maintain complete control over your meeting data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Data Collection
            </h2>
            <p>We collect minimal data to provide and improve our service:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Account Information:</strong> Email address for account
                creation and support
              </li>
              <li>
                <strong>Usage Data:</strong> Anonymous analytics about feature
                usage and app performance
              </li>
              <li>
                <strong>Payment Information:</strong> Processed securely through
                Apple's App Store (we don't store payment details)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Data Storage
            </h2>
            <p>
              All meeting recordings, transcripts, and summaries are stored
              locally on your iPhone. This data is:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Protected by your device's security features</li>
              <li>Backed up to iCloud if you have iCloud backup enabled</li>
              <li>
                Never transmitted to our servers or any third-party services
              </li>
              <li>Deleted when you delete the app or individual recordings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Third-Party Services
            </h2>
            <p>Filo integrates with the following Apple services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Apple Reminders:</strong> When you choose to send action
                items to Reminders, data is synced through Apple's ecosystem
              </li>
              <li>
                <strong>iCloud:</strong> Optional backup of your local data
                through your iCloud account
              </li>
              <li>
                <strong>App Store:</strong> For app distribution and in-app
                purchases
              </li>
            </ul>
            <p className="mt-4">
              We do not use any third-party analytics, advertising, or tracking
              services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your data stored in the app</li>
              <li>Delete your account and all associated data</li>
              <li>Export your meeting summaries</li>
              <li>Opt out of anonymous analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Data Security
            </h2>
            <p>
              We implement industry-standard security measures including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>On-device encryption for all meeting data</li>
              <li>Secure HTTPS connections for any server communication</li>
              <li>Regular security audits and updates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Children's Privacy
            </h2>
            <p>
              Filo is not intended for use by children under 13. We do not
              knowingly collect data from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you of any changes by posting the new policy on this page and
              updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact us
              at:
            </p>
            <p className="mt-4">
              <a
                href="mailto:privacy@usefilo.app"
                className="text-[#0F4631] hover:text-[#004730] font-medium"
              >
                privacy@usefilo.app
              </a>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
