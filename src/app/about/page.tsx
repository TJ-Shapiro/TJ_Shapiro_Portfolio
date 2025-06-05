import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, CodeBracketIcon, CpuChipIcon, MusicalNoteIcon } from "@heroicons/react/24/solid";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Profile Image with decorative elements */}
          <div className="relative lg:w-1/3">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-[var(--border)] shadow-xl mx-auto lg:mx-0">
              <Image
                src="/profile.jpg"
                alt="Profile picture"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Decorative elements */}
            <div className="hidden lg:block absolute -top-8 -left-8 w-32 h-32 rounded-full bg-[var(--primary)] opacity-10 -z-10"></div>
            <div className="hidden lg:block absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[var(--primary)] opacity-5 -z-10"></div>
          </div>
          
          {/* About Content */}
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-bold text-[var(--foreground)] mb-6">
              About <span className="text-primary-gradient">Me</span>
            </h1>
            
            <div className="prose prose-invert max-w-none text-[color:rgba(var(--foreground),0.8)] mb-8">
              <p className="text-lg mb-4">
              I&apos;m TJ Shapiro, a recent Computer Engineering graduate from UIUC specializing in embedded systems and creating interactive experiences. 
                With a background in both hardware and software, I strive to bridge the gap between digital and physical worlds.
              </p>
              <p className="text-lg mb-4">
              My journey in tech began in San Diego, where I interned at the UCSD Supercomputing Center. There, I worked with a research team exploring the frontiers of 
              immersive VR—a formative experience that sparked my passion for designing systems that are not only functional, but genuinely fun to interact with.
              </p>
              <p className="text-lg mb-4">
              Since then, I’ve been dedicated to developing interactive devices and creative applications that blend engineering precision with playful innovation. 
              Whether it’s crafting custom audio effects pedals or prototyping gesture-based interfaces, I love pushing the boundaries of what embedded systems can do.
              </p>
              <p className="text-lg mb-4">
                When I&apos;m not creating interactive devices and experiences, you can find me playing guitar, DJing, tutoring students in STEM, or going to the beach!
              </p>
              <p className="text-lg">
              I&apos;m currently seeking opportunities to work on innovative projects that challenge conventions and elevate how people engage with technology. 
              If your team is looking for an Embedded Systems Engineer or a similar role, I&apos;d love to connect! 
              </p>
              
            </div>
            
            {/* Skills & Interests */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
                Skills & <span className="text-primary-gradient">Expertise</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Technical Skills */}
                <div className="bg-muted p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <CpuChipIcon className="h-6 w-6 text-[var(--primary)] mr-2" />
                    <h3 className="text-xl font-semibold text-[var(--foreground)]">Technical Skills</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-2"></span>
                      <span>Embedded Systems Development (C/C++)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-2"></span>
                      <span>FPGA</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-2"></span>
                      <span>Digital Signal Processing</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-2"></span>
                      <span>RTOS & Bare Metal Programming</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-2"></span>
                      <span>IoT</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-2"></span>
                      <span>AI/ML</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-2"></span>
                      <span>VR/AR</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-2"></span>
                      <span>Web Development (Next.js, React)</span>
                    </li>
                  </ul>
                </div>
                
                {/* Interests */}
                <div className="bg-muted p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <MusicalNoteIcon className="h-6 w-6 text-[var(--primary)] mr-2" />
                    <h3 className="text-xl font-semibold text-[var(--foreground)]">Interests</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-2"></span>
                      <span>Audio Engineering & DSP</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-2"></span>
                      <span>Spatial Computing</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-2"></span>
                      <span>Augmented Reality Applications</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-2"></span>
                      <span>Human-Computer Interaction</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-2"></span>
                      <span>Open Source Hardware</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-2"></span>
                      <span>Real-Time Graphics</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-2"></span>
                      <span>Sound Design</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/projects" 
                className="flex items-center justify-center px-8 py-3 bg-primary-gradient text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <CodeBracketIcon className="h-5 w-5 mr-2" />
                View My Projects
              </Link>
              <Link 
                href="/contact" 
                className="flex items-center justify-center px-8 py-3 border border-base text-[var(--foreground)] rounded-lg font-medium hover:bg-[color:rgba(var(--background),0.5)] transition-colors"
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