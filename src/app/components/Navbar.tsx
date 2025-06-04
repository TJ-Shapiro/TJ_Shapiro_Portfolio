"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-primary-gradient">
              TJ Shapiro
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`transition-colors font-medium ${
                pathname === "/" ? "text-[var(--primary)]" : "text-[var(--foreground)] hover:text-[var(--primary)]"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/projects"
              className={`transition-colors font-medium ${
                pathname === "/projects" ? "text-[var(--primary)]" : "text-[var(--foreground)] hover:text-[var(--primary)]"
              }`}
            >
              Projects
            </Link>
            <Link 
              href="/about"
              className={`transition-colors font-medium ${
                pathname === "/about" ? "text-[var(--primary)]" : "text-[var(--foreground)] hover:text-[var(--primary)]"
              }`}
            >
              About
            </Link>
            <Link 
              href="/contact"
              className={`transition-colors font-medium ${
                pathname === "/contact" ? "text-[var(--primary)]" : "text-[var(--foreground)] hover:text-[var(--primary)]"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[var(--foreground)] hover:text-[var(--primary)]">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}