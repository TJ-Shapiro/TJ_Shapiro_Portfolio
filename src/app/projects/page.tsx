import Link from 'next/link';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/solid';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 2,
    title: 'Apple Vision Pro Tumor Detection',
    description: 'Medical device that allows surgeons to identify tumors in augmented reality in realtime.',
    tags: ['C++', 'Swift', 'VR/AR'],
    link: '/projects/vision',
  },
  {
    id: 3,
    title: 'STM32 Digital Guitar Effects Pedal',
    description: 'Project combining analog and digital signal processing techniques to create guitar effects in an embedded device.',
    tags: ['C', 'I2C/I2S', 'SPI', 'RTOS'],
    link: '/projects/guitar',
  },
  {
    id: 1,
    title: 'Reactive LED',
    description: 'Project combining audio processing and LED control to create a professional DJ lighting system.',
    tags: ['RaspberryPi', 'Python', 'I2C/PWM', 'UDP', 'Audio DSP'],
    link: '/projects/LED',
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/projects/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--background)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Animated header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-primary-gradient animate-gradient">Projects</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Things I&apos;ve built to solve real-world problems, blending engineering with creativity
          </p>
          <SparklesIcon className="h-8 w-8 text-[var(--primary)] mx-auto mt-4 animate-pulse" />
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-[var(--primary)] transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 h-full flex flex-col">
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-gradient transition-all">
                  {project.title}
                </h2>
                <p className="text-white/70 mb-5 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-white/10 text-white text-xs rounded-full backdrop-blur-sm hover:bg-[var(--primary)] hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-[var(--primary)] hover:text-white group/link mt-auto"
                >
                  <span className="group-hover/link:underline">Explore project</span>
                  <ArrowRightIcon className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Floating decorative elements */}
        <div className="hidden lg:block absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[var(--primary)] opacity-5 -z-10 animate-float"></div>
        <div className="hidden lg:block absolute bottom-10 -right-20 w-48 h-48 rounded-full bg-[var(--primary)] opacity-10 -z-10 animate-float-delay"></div>
      </div>
    </div>
  );
}