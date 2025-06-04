import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/video-poster.jpg" 
        >
          <source src="/projects/background-video.mp4" type="video/mp4" />
          <source src="/projects/background-video.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex flex-col justify-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Hey, I&apos;m <span className="text-primary-gradient">TJ Shapiro!</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto md:mx-0 drop-shadow-md">
            A passionate developer creating awesome interactive experiences with embedded systems.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              href="/projects" 
              className="px-8 py-3 bg-primary-gradient text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg"
            >
              View My Work
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-medium hover:bg-white/20 transition-colors shadow-lg"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm">
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