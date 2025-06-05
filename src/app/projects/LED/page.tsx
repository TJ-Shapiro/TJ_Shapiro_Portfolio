import { ArrowLeftIcon, ArrowTopRightOnSquareIcon, CodeBracketIcon, CpuChipIcon, ServerIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

const project = {
  id: 2,
  title: 'Raspberry Pi DJ Lighting System',
  description: 'Full-stack hardware/software solution for club-grade audio-reactive lighting synchronized with DJ software via Ableton Link',
  detailedDescription: [
    'This professional DJ lighting system combines Raspberry Pi hardware with advanced audio processing to create stunning visual synchronization for live performances. The system uses rpi_ws281x for microsecond-precision LED control and integrates with industry-standard DJ software via Ableton Link.',
    'The architecture features a custom UDP server with JSON protocol for low-latency communication between the audio analysis engine (running on a performance PC) and the Raspberry Pi LED controllers. This enables real-time visualization while keeping audio processing separate from lighting control.',
    'Deployed in multiple club installations, this system provides reliable, high-performance lighting that stays perfectly synchronized with the music while reacting dynamically to audio input. The hardware design includes custom power regulation and signal boosting for large LED installations.'
  ],
  tags: [
    'Raspberry Pi', 
    'Python', 
    'Ableton Link', 
    'rpi_ws281x', 
    'I2C/PWM', 
    'UDP Server',
    'Audio DSP'
  ],
  media: [
    { type: 'image', url: '/projects/led1.jpg', caption: 'Club installation with 300-LED array', layout: 'full' },
    { type: 'image', url: '/projects/led2.jpg', caption: 'Raspberry Pi control unit with I2C interface', layout: 'half' },
    { type: 'image', url: '/projects/led3.jpg', caption: 'Custom power distribution board', layout: 'half' },
    { type: 'video', url: 'https://youtube.com/embed/DbGv20EPAq0', caption: 'Simple LED Bedroom DJ Set Demo', layout: 'full' }
  ],
  features: [
    'Hardware-level LED control via rpi_ws281x library',
    'Microsecond-precision timing using Raspberry Pi PWM',
    'UDP server architecture with JSON protocol',
    'Ableton Link integration for DJ software sync',
    'Multi-zone control via I2C expanders',
    'Kick/snare detection with 10ms latency',
    'Automatic gain control for different venues'
  ],
  githubUrl: 'https://github.com/TJ-Shapiro/DJReactiveLED',
  demoVideoUrl: 'https://youtube.com/watch?v=dj-light-demo'
};

export default function DJLightControllerPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Back navigation */}
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/projects" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline group">
            <ArrowLeftIcon className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Project header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center">
            <CpuChipIcon className="h-10 w-10 mr-4 text-purple-500" />
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Tags and links */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4 ml-auto">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 dark:text-blue-400 hover:underline group"
              >
                <CodeBracketIcon className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                Source Code
              </a>
            )}
            {project.demoVideoUrl && (
              <a 
                href={project.demoVideoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 dark:text-blue-400 hover:underline group"
              >
                <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                Performance Demo
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-20">

        {/* Project details */}
        <section className="scroll-mt-20" id="details">
          <h2 className="text-2xl font-bold mb-6">System Details</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {project.detailedDescription.map((paragraph, index) => (
                <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Features list */}
            <div className="lg:col-span-1">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-sm sticky top-24">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <ServerIcon className="h-5 w-5 mr-2 text-purple-500" />
                  Technical Highlights
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                      </div>
                      <span className="ml-3 text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Media gallery */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold mb-6">System Gallery</h2>
          <div className="space-y-12">
            <div className="scroll-mt-20">
              <div className="rounded-xl overflow-hidden shadow-xl bg-gray-100 dark:bg-gray-800">
                <Image
                  src={project.media[0].url}
                  alt={project.media[0].caption}
                  width={1600}
                  height={900}
                  className="w-full h-auto object-cover"
                  priority
                />
                {project.media[0].caption && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 px-4 py-2">
                    {project.media[0].caption}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 scroll-mt-20">
              {project.media.slice(1, 3).map((item, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-xl bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={item.url}
                    alt={item.caption}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                  {item.caption && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 px-4 py-2">
                      {item.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {project.media[3] && (
              <div className="scroll-mt-20 w-full">
                <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-xl"> 
                  <iframe 
                    src={project.media[3].url}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                    title={project.media[3].caption}
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="bg-gray-100 dark:bg-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Want to know more?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Get the full build guide or ask how these skills can be applied to your team!
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href={project.githubUrl}
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                <CodeBracketIcon className="h-5 w-5 mr-2" />
                View Build Guide
              </a>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                <CpuChipIcon className="h-5 w-5 mr-2" />
                Contact me!
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}