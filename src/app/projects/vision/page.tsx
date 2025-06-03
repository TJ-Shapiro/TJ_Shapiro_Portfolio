import { ArrowLeftIcon, ArrowTopRightOnSquareIcon, CodeBracketIcon} from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectDetail {
  id: number;
  title: string;
  description: string;
  detailedDescription: string[];
  tags: string[];
  link: string;
  media: {
    type: 'image' | 'video';
    url: string;
    caption?: string;
  }[];
  features: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
}

// Sample project data - you'll want to fetch this dynamically based on the route
const project: ProjectDetail = {
  id: 1,
  title: 'STM32 Digital Guitar Effects Pedal',
  description: 'Project combining analog and digital signal processing techniques to create guitar effects in an embedded device.',
  detailedDescription: [
    'This project involved designing a digital guitar effects pedal using an STM32 microcontroller. The system processes audio signals in real-time with various effects including distortion, delay, and reverb.',
    'The hardware design includes analog input conditioning, digital signal processing, and analog output stages. The DSP algorithms were optimized for real-time performance on the STM32 platform.',
    'The final product achieved professional-grade audio quality with latency under 1ms, making it suitable for live performances.'
  ],
  tags: ['C', 'I2C/I2S', 'SPI', 'RTOS', 'DSP', 'STM32'],
  link: 'guitar',
  media: [
    { type: 'image', url: '/projects/pedal1.jpg', caption: 'Front panel design' },
    { type: 'image', url: '/projects/pedal2.jpg', caption: 'Internal PCB layout' },
    { type: 'video', url: 'https://youtube.com/embed/demo', caption: 'Demo in action' }
  ],
  features: [
    'Real-time audio processing with <1ms latency',
    'Multiple effect algorithms implemented in C',
    'Custom PCB design with proper grounding techniques',
    'I2S audio interface with 24-bit resolution',
    'USB configuration interface'
  ],
  githubUrl: 'https://github.com/yourusername/guitar-pedal',
  liveDemoUrl: 'https://yourwebsite.com/demo'
};

export default function ProjectDetailPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Back navigation */}
      <div className="sticky top-0 z-10 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/projects" className="inline-flex items-center text-[var(--primary)] hover:underline group">
            <ArrowLeftIcon className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Project header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-[color:rgba(var(--foreground),0.7)] max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Tags and links */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-[color:rgba(var(--background),0.5)] text-[var(--foreground)] text-sm rounded-full"
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
                className="flex items-center text-[var(--primary)] hover:underline group"
              >
                <CodeBracketIcon className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                Source Code
              </a>
            )}
            {project.liveDemoUrl && (
              <a 
                href={project.liveDemoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-[var(--primary)] hover:underline group"
              >
                <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Main content with smooth scrolling sections */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-20">
        {/* Media gallery */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
          <div className="space-y-12">
            {project.media.map((item, index) => (
              <div key={index} className="scroll-mt-20" id={`media-${index}`}>
                {item.type === 'image' ? (
                  <div className="rounded-xl overflow-hidden shadow-xl bg-[var(--muted)]">
                    <Image
                      src={item.url}
                      alt={item.caption || `${project.title} image ${index + 1}`}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-cover"
                    />
                    {item.caption && (
                      <p className="text-sm text-[color:rgba(var(--foreground),0.6)] mt-2 px-4 py-2">
                        {item.caption}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="aspect-w-16 aspect-h-9 bg-black rounded-xl overflow-hidden shadow-xl">
                    <iframe 
                      src={item.url} 
                      className="w-full h-full"
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      title={item.caption || `${project.title} video`}
                    ></iframe>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Project details */}
        <section className="scroll-mt-20" id="details">
          <h2 className="text-2xl font-bold mb-6">Project Details</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {project.detailedDescription.map((paragraph, index) => (
                <p key={index} className="text-[color:rgba(var(--foreground),0.8)] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Features list */}
            <div className="lg:col-span-1">
              <div className="bg-[var(--muted)] rounded-xl p-6 shadow-sm sticky top-24">
                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="h-2 w-2 bg-[var(--primary)] rounded-full"></div>
                      </div>
                      <span className="ml-3 text-[color:rgba(var(--foreground),0.8)]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical implementation */}
        <section className="scroll-mt-20" id="technical">
          <h2 className="text-2xl font-bold mb-6">Technical Implementation</h2>
          <div className="bg-[var(--muted)] rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Architecture Diagram</h3>
            <div className="aspect-w-16 aspect-h-9 bg-[var(--background)] rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/projects/architecture-diagram.jpg"
                alt="System architecture diagram"
                width={800}
                height={450}
                className="object-contain p-4"
              />
            </div>
            <div className="mt-6 space-y-4">
              <h4 className="font-medium">Challenges & Solutions</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span><strong>Latency issues:</strong> Optimized DSP algorithms and used DMA for audio transfer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span><strong>Noise reduction:</strong> Implemented proper PCB grounding and shielding techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span><strong>Real-time control:</strong> Developed a custom RTOS task scheduler for effect switching</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Call to action */}
      <section className="bg-[var(--muted)] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to know more?</h2>
          <p className="text-[color:rgba(var(--foreground),0.7)] mb-6 max-w-2xl mx-auto">
            Interested in the technical details or have a similar project in mind?
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-[var(--primary)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}