import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'STM32 Digital Guitar Effects Pedal',
    description: 'Project combining analog and digital signal processing techniques to create guitar effects in an embedded device.',
    tags: ['C', 'I2C/I2S', 'SPI', 'RTOS'],
    link: '#',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A responsive portfolio built with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 3,
    title: 'Apple Vision Pro Tumor Detection',
    description: 'Medical device that allows surgeons to identify tumors in augmented reality in realtime.',
    tags: ['C++', 'Swift', 'VR/AR'],
    link: '#',
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-[var(--foreground)] mb-2">My Projects</h1>
        <p className="text-xl text-[color:rgba(var(--foreground),0.7)] mb-12">
          Things I've built to solve real-world problems:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-muted rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                  {project.title}
                </h2>
                <p className="text-[color:rgba(var(--foreground),0.7)] mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-[color:rgba(var(--background),0.5)] text-[var(--foreground)] text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-[var(--primary)] hover:underline"
                >
                  View project <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}