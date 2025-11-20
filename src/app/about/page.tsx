import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Filo",
  description: "Learn about Filo and why we built it.",
};

export default function About() {
  return (
    <section className="bg-white py-12 sm:py-20 lg:py-24">
      <div className="max-w-[900px] mx-auto px-5 sm:px-10">
        <h1 className="text-[33px] sm:text-[41px] lg:text-[65px] font-black text-[#121212] leading-[1.1] tracking-tight mb-8 sm:mb-12 text-center">
          About Filo
        </h1>

        <div className="space-y-10 sm:space-y-12">
          <div className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium text-[#303030] leading-relaxed space-y-6">
            <p className="text-[16px] sm:text-[18px] lg:text-[20px]">
              Filo is an AI meeting assistant for iPhone that helps busy
              professionals turn every conversation into clear, actionable next
              steps — fast, private, and mobile-first.
            </p>

            <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-gray-900 mt-10 mb-4">
              Our Mission
            </h2>
            <p>
              We believe meetings should lead to action, not administrative
              burden. Filo exists to help you capture what matters, process it
              instantly on your device, and turn conversations into outcomes.
            </p>

            <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-gray-900 mt-10 mb-4">
              Privacy-First
            </h2>
            <p>
              Your conversations are private. Filo runs AI processing directly
              on your iPhone, which means your audio recordings, transcripts,
              and summaries never leave your device. We don't send your data to
              cloud servers for processing.
            </p>

            <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-gray-900 mt-10 mb-4">
              Built for iPhone
            </h2>
            <p>
              Unlike desktop-first tools, Filo is designed from the ground up
              for how you actually work: on the move, between meetings, and
              always on your iPhone. Record, review, and act — all in one place.
            </p>
          </div>

          <div className="bg-[#FBFAF9] rounded-2xl p-8 sm:p-10 mt-12">
            <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-gray-900 mb-6">
              From the Founder
            </h2>
            <div className="text-[14px] sm:text-[15px] font-medium text-[#303030] leading-relaxed space-y-4">
              <p>
                Hi, I'm Alex. After years of back-to-back meetings, I was
                constantly losing track of decisions and next steps. Desktop
                tools and cloud note-takers never really fit how I actually
                work: on my iPhone, between calls, on the move.
              </p>
              <p>
                I wanted something fast, private, and focused on outcomes — not
                endless transcripts.
              </p>
              <p>
                Filo is my attempt at building the meeting assistant I always
                wished I had: mobile-first, on-device, and obsessed with turning
                conversations into clear next steps.
              </p>
            </div>
            <p className="mt-6 text-sm font-semibold text-gray-900">
              Alex – Founder of Filo
            </p>
          </div>

          <div className="text-center pt-8">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0F4631] text-white text-sm font-semibold rounded-[40px] hover:bg-[#0D3727] transition-all hover:shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Download Filo on iOS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
