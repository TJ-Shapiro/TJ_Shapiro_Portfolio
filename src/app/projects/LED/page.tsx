import { ArrowLeftIcon, ArrowTopRightOnSquareIcon, CodeBracketIcon, CpuChipIcon, SparklesIcon } from '@heroicons/react/24/solid';
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
    <div className="relative min-h-screen overflow-hidden bg-gray-900 text-gray-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/projects/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
        <div className="hidden lg:block absolute -top-20 -left-20 w-64 h-64 rounded-full bg-purple-600 opacity-5 animate-float"></div>
        <div className="hidden lg:block absolute bottom-10 -right-20 w-48 h-48 rounded-full bg-blue-500 opacity-10 animate-float-delay"></div>
      </div>

      {/* Header */}
      <div className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/projects" className="inline-flex items-center text-blue-400 hover:text-white group transition-colors">
            <ArrowLeftIcon className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center mb-4">
            <SparklesIcon className="h-8 w-8 text-purple-500 mr-3 animate-pulse" />
            <span className="text-sm font-medium bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full">
              Featured Project
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary-gradient animate-gradient">{project.title}</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 mb-16">
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-4 py-1.5 bg-gray-800 text-gray-300 text-sm rounded-full hover:bg-purple-600 hover:text-white transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex gap-6 ml-auto">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:text-white group transition-colors"
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
                className="flex items-center text-blue-400 hover:text-white group transition-colors"
              >
                <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                Performance Demo
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-20">

        {/* Project details */}
        <section className="scroll-mt-20 animate-fade-in" id="details" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-3xl font-bold mb-8 text-white">
            System <span className="text-primary-gradient">Architecture</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {project.detailedDescription.map((paragraph, index) => (
                <p key={index} className="text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Features list */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-lg sticky top-24 hover:border-purple-500 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  <span className="text-primary-gradient">Technical</span> Highlights
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="h-2 w-2 bg-purple-500 rounded-full group-hover:bg-blue-400 transition-colors"></div>
                      </div>
                      <span className="ml-3 text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Media gallery */}
        <section className="space-y-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-3xl font-bold mb-8 text-white">
            Project <span className="text-primary-gradient">Gallery</span>
          </h2>
          <div className="space-y-12">
            <div className="group relative rounded-2xl overflow-hidden shadow-2xl bg-gray-800 border border-gray-700 hover:border-purple-500 transition-all duration-500">
              <Image
                src={project.media[0].url}
                alt={project.media[0].caption}
                width={1600}
                height={900}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg font-medium">
                  {project.media[0].caption}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.media.slice(1, 3).map((item, index) => (
                <div 
                  key={index} 
                  className="group relative rounded-xl overflow-hidden shadow-xl bg-gray-800 border border-gray-700 hover:border-blue-400 transition-all duration-500"
                >
                  <Image
                    src={item.url}
                    alt={item.caption}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {project.media[3] && (
              <div className="group relative rounded-2xl overflow-hidden shadow-2xl bg-gray-800 border border-gray-700 hover:border-purple-500 transition-all duration-500">
                <div className="relative pb-[56.25%] h-0">
                  <iframe 
                    src={project.media[3].url}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                    title={project.media[3].caption}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-lg font-medium">
                    {project.media[3].caption}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Technical implementation */}
        <section className="animate-fade-in" id="technical" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-3xl font-bold mb-8 text-white">
            Technical <span className="text-primary-gradient">Implementation</span>
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-400 transition-all duration-300 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-white">
              System Design & Performance Metrics
            </h3>
            
            <div className="mt-8 space-y-6">
              <h4 className="text-lg font-medium text-white mb-4">
                Key Innovations & Solutions
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <span className="text-purple-500 mr-3 mt-1">•</span>
                  <div>
                    <strong className="text-white group-hover:text-blue-400 transition-colors">Low-latency audio processing:</strong>
                    <span className="text-gray-300"> Optimized FFT analysis achieving 10ms response time for beat detection</span>
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="text-purple-500 mr-3 mt-1">•</span>
                  <div>
                    <strong className="text-white group-hover:text-blue-400 transition-colors">Network synchronization:</strong>
                    <span className="text-gray-300"> Custom UDP protocol maintains &lt;5ms sync across multiple Raspberry Pi controllers</span>
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="text-purple-500 mr-3 mt-1">•</span>
                  <div>
                    <strong className="text-white group-hover:text-blue-400 transition-colors">Power management:</strong>
                    <span className="text-gray-300"> Designed custom power distribution system supporting up to 1000 LEDs per controller</span>
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="text-purple-500 mr-3 mt-1">•</span>
                  <div>
                    <strong className="text-white group-hover:text-blue-400 transition-colors">DJ integration:</strong>
                    <span className="text-gray-300"> Implemented Ableton Link protocol for seamless synchronization with professional DJ software</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* CTA section */}
      <section className="relative z-10 bg-gray-800/50 backdrop-blur-sm border-t border-gray-700 py-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Want to know more?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
            Get the full build guide or discuss how these skills can apply to your team!
          </p>
          <div className="flex gap-6 justify-center">
            <a 
              href={project.githubUrl}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl font-medium hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg hover:shadow-purple-500/30"
            >
              <CodeBracketIcon className="h-5 w-5 mr-2" />
              View Build Guide
            </a>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-xl font-medium transition-all hover:scale-[1.02] shadow-lg"
            >
              <CpuChipIcon className="h-5 w-5 mr-2" />
              Contact me!
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}