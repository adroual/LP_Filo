import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10 py-5 sm:py-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-8">
              <div className="lg:ml-auto lg:max-w-[500px]">
                <h1 className="text-[33px] sm:text-[41px] lg:text-[65px] font-black text-[#121212] leading-[1.1] tracking-tight mb-5 sm:mb-7">
                  A meeting assistant you'll actually use
                </h1>
                <h2 className="text-[13px] sm:text-[15px] lg:text-[20px] font-medium text-[#5e5e5e] leading-[1.4] tracking-[-0.5px] mb-7 sm:mb-9">
                  A simple and beautiful meeting assistant
                  <br />
                  designed to help you turn calls into clear next steps
                </h2>

                {/* CTA Button */}
                <div className="flex flex-col items-center lg:items-start gap-2.5 mb-1">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0F4631] text-white text-sm font-semibold rounded-[40px] hover:bg-[#0D3727] transition-all hover:shadow-lg"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    <span>Download on iOS</span>
                  </a>
                  <p className="text-[10px] sm:text-xs text-center text-gray-400 font-medium">
                    No credit card required
                  </p>
                </div>
              </div>
            </div>

            {/* iPhone Mockup */}
            <div className="w-full lg:w-[27%] flex justify-center lg:justify-start lg:pl-8">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[0.507/1]">
                <Image
                  src="/screenshots/hero-main.png"
                  alt="Filo App"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Basics Section */}
      <section className="bg-white py-10 sm:py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
          <div className="w-[90%] mx-auto flex flex-col items-center gap-8 sm:gap-12">
            {/* Section Header */}
            <div className="w-full">
              <div className="flex flex-col gap-3">
                <h1 className="text-[23px] sm:text-[36px] lg:text-[44px] font-bold text-[#030303] leading-[1.4]">
                  The basics, but better ✨
                </h1>
                <h2 className="text-[14px] sm:text-[16px] lg:text-[20px] font-medium text-[#1c1c1c] leading-[1.4] tracking-[-0.5px] max-w-2xl">
                  Built so you'll want to open it and track every meeting
                </h2>
              </div>
            </div>

            {/* Feature Cards with App Screenshots */}
            <div className="flex flex-col sm:flex-row gap-9 justify-start flex-wrap w-full">
              {/* Card 1 - Recording */}
              <div className="flex-1 min-w-[250px] max-w-[275px]">
                <div className="flex flex-col gap-4">
                  {/* Screenshot Container */}
                  <div className="bg-[#F4FBF8] rounded-xl overflow-hidden pt-5 h-[320px] flex flex-col items-center justify-start">
                    <div className="w-[80%] max-w-[220px] aspect-[0.507/1] relative">
                      <Image
                        src="/screenshots/recording-screen.png"
                        alt="Recording"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  {/* Card Text */}
                  <div className="px-2.5">
                    <h3 className="text-xl font-semibold text-[#001122] text-center">
                      Quick recording
                    </h3>
                  </div>
                </div>
              </div>

              {/* Card 2 - Summaries */}
              <div className="flex-1 min-w-[250px] max-w-[275px]">
                <div className="flex flex-col gap-4">
                  <div className="bg-[#F4FBF8] rounded-xl overflow-hidden pt-5 h-[320px] flex flex-col items-center justify-start">
                    <div className="w-[80%] max-w-[220px] aspect-[0.507/1] relative">
                      <Image
                        src="/screenshots/summary-view.png"
                        alt="AI Summaries"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="px-2.5">
                    <h3 className="text-xl font-semibold text-[#001122] text-center">
                      AI summaries
                    </h3>
                  </div>
                </div>
              </div>

              {/* Card 3 - Reminders */}
              <div className="flex-1 min-w-[250px] max-w-[275px]">
                <div className="flex flex-col gap-4">
                  <div className="bg-[#F4FBF8] rounded-xl overflow-hidden pt-5 h-[320px] flex flex-col items-center justify-start">
                    <div className="w-[80%] max-w-[220px] aspect-[0.507/1] relative">
                      <Image
                        src="/screenshots/reminders-integration.png"
                        alt="Reminders"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="px-2.5">
                    <h3 className="text-xl font-semibold text-[#001122] text-center">
                      Reminders sync
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple but Powerful Section */}
      <section className="bg-white py-10 sm:py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
          <div className="w-[90%] mx-auto flex flex-col items-center gap-8 sm:gap-12">
            {/* Section Header */}
            <div className="w-full">
              <div className="flex flex-col gap-3">
                <h1 className="text-[23px] sm:text-[36px] lg:text-[44px] font-bold text-[#030303] leading-[1.4]">
                  Simple, but powerful 😮‍💨
                </h1>
                <h2 className="text-[14px] sm:text-[16px] lg:text-[20px] font-medium text-[#1c1c1c] leading-[1.4] tracking-[-0.5px] max-w-3xl">
                  Filo keeps things minimal — but the features that matter hit hard. Built for professionals who want speed, clarity, and zero friction.
                </h2>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="flex flex-col sm:flex-row gap-9 justify-start flex-wrap w-full">
              {/* Card 1 - Auto or Sales Meeting Analysis */}
              <div className="flex-1 min-w-[250px] max-w-[275px]">
                <div className="flex flex-col gap-4">
                  <div className="bg-[#F4FBF8] rounded-xl overflow-hidden pt-5 h-[320px] flex flex-col items-center justify-start">
                    <div className="w-[80%] max-w-[220px] aspect-[0.507/1] relative">
                      <Image
                        src="/screenshots/auto-mode-summary.png"
                        alt="Auto or Sales Meeting Analysis"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="px-2.5 flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-[#001122] text-center">
                      Auto or Sales Meeting Analysis
                    </h3>
                    <p className="text-sm text-[#5e5e5e] text-center leading-relaxed">
                      Let Filo adapt to your workflow. Choose between effortless "Auto" mode or a more structured sales-focused analysis to capture next steps with precision.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - On-device AI */}
              <div className="flex-1 min-w-[250px] max-w-[275px]">
                <div className="flex flex-col gap-4">
                  <div className="bg-[#F4FBF8] rounded-xl overflow-hidden pt-5 h-[320px] flex flex-col items-center justify-start">
                    <div className="w-[80%] max-w-[220px] aspect-[0.507/1] relative">
                      <Image
                        src="/screenshots/on-device-ai.png"
                        alt="On-device AI"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="px-2.5 flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-[#001122] text-center">
                      On-device AI, powered by Apple Intelligence
                    </h3>
                    <p className="text-sm text-[#5e5e5e] text-center leading-relaxed">
                      Everything is processed securely on your iPhone. No cloud, no waiting — just instant insights, fully private and lightning-fast.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Instant Follow-up Emails */}
              <div className="flex-1 min-w-[250px] max-w-[275px]">
                <div className="flex flex-col gap-4">
                  <div className="bg-[#F4FBF8] rounded-xl overflow-hidden pt-5 h-[320px] flex flex-col items-center justify-start">
                    <div className="w-[80%] max-w-[220px] aspect-[0.507/1] relative">
                      <Image
                        src="/screenshots/email-draft.png"
                        alt="Instant Follow-up Emails"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="px-2.5 flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-[#001122] text-center">
                      Instant Follow-up Emails
                    </h3>
                    <p className="text-sm text-[#5e5e5e] text-center leading-relaxed">
                      Turn every meeting into momentum. Filo drafts the perfect follow-up email in seconds so you save hours every week and stay one step ahead.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story Section - Luna Style */}
      <section className="bg-white py-10 sm:py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
          <div className="bg-[#FBFAF9] rounded-[20px] overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Text Content */}
              <div className="w-full lg:w-[60%] p-8 sm:p-10 lg:p-12 flex flex-col gap-8 lg:gap-9">
                <div className="flex flex-col gap-4">
                  <p className="text-[19px] sm:text-[23px] lg:text-[30px] font-semibold text-gray-900">
                    Hi, I'm Alex 👋
                  </p>
                  <div className="text-[12px] sm:text-[13px] lg:text-[15px] font-medium text-[#303030] leading-relaxed space-y-4">
                    <p>
                      I built Filo to help me curb my post-meeting chaos and
                      push myself to be a better product builder.
                    </p>
                    <p>
                      I wanted to build a meeting experience that felt{" "}
                      <strong>incredible</strong> to use so great design and
                      on-device privacy was something I put a lot of time into.
                    </p>
                    <p>
                      Hopefully you feel that when you use it and my app helps
                      you as much as it's helped me :)
                    </p>
                  </div>
                </div>

                {/* Founder Info */}
                <div className="flex items-center gap-6 sm:gap-12">
                  <div className="flex flex-col gap-2.5">
                    <div className="flex flex-col gap-0">
                      <p className="text-sm font-medium text-gray-900">
                        Alex
                      </p>
                      <p className="text-[11px] text-gray-500">
                        Filo developer
                      </p>
                    </div>
                    <div className="w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-full bg-gray-200 overflow-hidden relative">
                      <Image
                        src="/founder-photo..png"
                        alt="Alex - Founder"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2.5">
                    <div className="flex items-center gap-0">
                      <div className="flex flex-col gap-0">
                        <p className="text-sm font-medium text-gray-900">
                          Filo
                        </p>
                        <p className="text-[11px] text-gray-500">
                          The helper
                        </p>
                      </div>
                    </div>
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden relative">
                      <Image
                        src="/founder-avatar.png"
                        alt="Filo Mascot"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Side Image - Hidden on mobile */}
              <div className="hidden lg:block w-[40%] relative opacity-50">
                <Image
                  src="/founder-photo..png"
                  alt="Filo Background"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes Section - Hidden until YouTube/X accounts are ready */}
      {/* <section className="bg-white py-10 sm:py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
          <div className="w-[90%] mx-auto flex flex-col items-center gap-8 sm:gap-12">
            <div className="w-full">
              <div className="flex flex-col gap-3">
                <h1 className="text-[23px] sm:text-[36px] lg:text-[44px] font-bold text-[#030303] leading-[1.4]">
                  Behind the scenes 👀
                </h1>
                <h2 className="text-[14px] sm:text-[16px] lg:text-[20px] font-medium text-[#1c1c1c] leading-[1.4] tracking-[-0.5px] max-w-2xl">
                  Want to see me build Filo? I make videos documenting my
                  progress 👀
                </h2>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-7 w-full">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#FBFAF9] rounded-xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <div className="w-[60px] h-[60px] sm:w-[60px] sm:h-[60px] bg-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-[35px] h-[35px] text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-0">
                    <p className="text-[18px] sm:text-[23px] font-semibold text-gray-900">
                      YouTube
                    </p>
                    <p className="text-sm text-gray-500">Your Channel</p>
                  </div>
                </div>
                <div className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold self-start sm:self-center">
                  Open
                </div>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#FBFAF9] rounded-xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <div className="w-[60px] h-[60px] sm:w-[60px] sm:h-[60px] bg-black rounded-2xl flex items-center justify-center shadow-lg border border-gray-200">
                    <svg
                      className="w-[30px] h-[30px] text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-0">
                    <p className="text-[18px] sm:text-[23px] font-semibold text-gray-900">
                      X / Twitter
                    </p>
                    <p className="text-sm text-gray-500">@yourhandle</p>
                  </div>
                </div>
                <div className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold self-start sm:self-center">
                  Open
                </div>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 w-full">
              <div className="aspect-video bg-gray-100 rounded-[20px] overflow-hidden">
              </div>
              <div className="aspect-video bg-gray-100 rounded-[20px] overflow-hidden">
              </div>
              <div className="aspect-video bg-gray-100 rounded-[20px] overflow-hidden">
              </div>
              <div className="aspect-video bg-gray-100 rounded-[20px] overflow-hidden">
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
