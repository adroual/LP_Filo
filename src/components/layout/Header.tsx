import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-[1200px] mx-auto px-5 sm:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-14 h-8">
              <Image
                src="/filo-icon.png"
                alt="Filo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-black text-[#030303]">Filo</span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-0 absolute left-1/2 -translate-x-1/2">
            <Link
              href="/pricing"
              className="px-6 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="px-6 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="/guide"
              className="px-6 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Guide
            </Link>
            <Link
              href="/support"
              className="px-6 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Support
            </Link>
          </div>

          {/* CTA Button */}
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0F4631] text-white text-sm font-semibold rounded-[40px] hover:bg-[#0D3727] transition-all hover:shadow-lg"
          >
            <span>Download Filo</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
