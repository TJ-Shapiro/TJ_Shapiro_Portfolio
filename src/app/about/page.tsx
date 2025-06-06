import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, CodeBracketIcon, CpuChipIcon, MusicalNoteIcon } from "@heroicons/react/24/solid";

export default function AboutPage() {
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
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Profile Image with decorative elements */}
          <div className="relative lg:w-1/3">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-white/30 shadow-xl mx-auto lg:mx-0 group">
              <Image
                src="/profile.jpg"
                alt="Profile picture"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
            
            {/* Animated decorative elements */}
            <div className="hidden lg:block absolute -top-8 -left-8 w-32 h-32 rounded-full bg-[var(--primary)] opacity-10 -z-10 animate-float"></div>
            <div className="hidden lg:block absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[var(--primary)] opacity-5 -z-10 animate-float-delay"></div>
          </div>
          
          {/* About Content */}
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-bold text-white mb-6">
              About <span className="text-primary-gradient animate-gradient">Me</span>
            </h1>
            
            <div className="prose prose-invert max-w-none text-white/80 mb-8">
              <p className="text-lg mb-4 animate-fade-in">
                I&apos;m TJ Shapiro, a recent Computer Engineering graduate from UIUC specializing in embedded systems and creating interactive experiences. 
                With a background in both hardware and software, I strive to bridge the gap between digital and physical worlds.
              </p>
              <p className="text-lg mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                My journey in tech began in San Diego, where I interned at the UCSD Supercomputing Center. There, I worked with a research team exploring the frontiers of 
                immersive VR—a formative experience that sparked my passion for designing systems that are not only functional, but genuinely fun to interact with.
              </p>
              <p className="text-lg mb-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                Since then, I&apos;ve been dedicated to developing interactive devices and creative applications that blend engineering precision with playful innovation. 
                Whether it&apos;s crafting custom audio effects pedals or prototyping gesture-based interfaces, I love pushing the boundaries of what embedded systems can do.
              </p>
              <p className="text-lg mb-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                When I&apos;m not creating interactive devices and experiences, you can find me playing guitar, DJing, tutoring students in STEM, or going to the beach!
              </p>
              <p className="text-lg animate-fade-in" style={{ animationDelay: "0.8s" }}>
                I&apos;m currently seeking opportunities to work on innovative projects that challenge conventions and elevate how people engage with technology. 
                If your team is looking for an Embedded Systems Engineer or a similar role, I&apos;d love to connect! 
              </p>
            </div>
            
            {/* Skills & Interests */}
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "1s" }}>
              <h2 className="text-2xl font-bold text-white mb-6">
                Skills & <span className="text-primary-gradient">Expertise</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Technical Skills */}
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-primary-gradient transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-center mb-4">
                    <CpuChipIcon className="h-6 w-6 text-[var(--primary)] mr-2" />
                    <h3 className="text-xl font-semibold text-white">Technical Skills</h3>
                  </div>
                  <ul className="space-y-2">
                    {["Embedded Systems Development (C/C++)", "FPGA", "Digital Signal Processing", 
                      "RTOS & Bare Metal Programming", "IoT", "AI/ML", "VR/AR", 
                      "Web Development (Next.js, React)"].map((skill, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-2"></span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Interests */}
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-primary-gradient transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-center mb-4">
                    <MusicalNoteIcon className="h-6 w-6 text-[var(--primary)] mr-2" />
                    <h3 className="text-xl font-semibold text-white">Interests</h3>
                  </div>
                  <ul className="space-y-2">
                    {["Audio Engineering & DSP", "Spatial Computing", "Augmented Reality Applications", 
                      "Human-Computer Interaction", "Open Source Hardware", "Real-Time Graphics", 
                      "Sound Design"].map((interest, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-2"></span>
                        <span>{interest}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "1.2s" }}>
              <Link 
                href="/projects" 
                className="flex items-center justify-center px-8 py-3 bg-primary-gradient text-white rounded-lg font-medium hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg hover:shadow-primary/30"
              >
                <CodeBracketIcon className="h-5 w-5 mr-2" />
                View My Projects
              </Link>
              <Link 
                href="/contact" 
                className="flex items-center justify-center px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-medium hover:bg-white/20 transition-all hover:scale-[1.02]"
              >
                Get In Touch <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}