import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-base">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-primary-gradient">
                MyPortfolio
              </span>
            </Link>

            {/* Navbar */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors font-medium">
                Home
              </Link>
              <Link href="/projects" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors font-medium">
                Projects
              </Link>
              <Link href="/about" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors font-medium">
                Contact
              </Link>
            </div>

            
            <button className="md:hidden text-[var(--foreground)] hover:text-[var(--primary)]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

      </nav>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-6">
            Hi, I'm <span className="text-primary-gradient">TJ Shapiro</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-[color:rgba(var(--foreground),0.7)] mb-8 max-w-2xl mx-auto md:mx-0">
            A passionate developer creating awesome interactive experiences with embedded systems.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              href="/projects" 
              className="px-8 py-3 bg-primary-gradient text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3 border border-base text-[var(--foreground)] rounded-lg font-medium hover:bg-[color:rgba(var(--background),0.5)] transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[var(--border)] shadow-xl">
            <Image
              src="/profile.jpg"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}