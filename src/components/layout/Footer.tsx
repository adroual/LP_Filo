import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FBFAF9] border-t border-gray-200/50">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-8">
          {/* Primary Links */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4">Primary</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                >
                  iOS App
                </Link>
              </li>
              <li>
                <Link
                  href="/guide"
                  className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4">Other</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/pricing"
                  className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacy"
                  className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/terms"
                  className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block"></div>

          {/* Social Links */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <p className="text-sm font-medium text-gray-500 mb-4 max-w-xs">
              Want to follow along as I build Filo? I share my progress publicly
              👇
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://x.com/adroual"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
              >
                <div className="w-5 h-5 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <span>@adroual</span>
              </a>
              <a
                href="www.youtube.com/@AlexandreDroual"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
              >
                <div className="w-5 h-5 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <span>@adroual</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200/70">
          <p className="text-xs font-medium text-gray-400 text-center">
            © {new Date().getFullYear()} Filo. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
