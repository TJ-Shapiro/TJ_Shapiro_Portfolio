import { ArrowLeftIcon, ArrowTopRightOnSquareIcon, CodeBracketIcon, SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import PDFViewer from '@/app/components/PDFViewer';

const project = {
  id: 1,
  title: 'Apple Vision Pro Tumor Detection System',
  description: 'Combining RGB and Near Infrared sensors with immersive 3D visualization to identify tumors in augmented reality in real-time. Created at the UIUC Electrical and Computer Engineering department.',
  detailedDescription: [
    'This tumor diagnostic system was created by myself and a dedicated team of engineers at the University of Illinois at Urbana-Champaign. It leverages the Apple Vision Pro\'s advanced sensors alongside a Nvidia Jetson Nano to detect tumors with unprecedented accuracy. By combining RGB and NIR imaging with machine learning algorithms, we can highlight potential tumor regions in real-time AR overlays.',
    'The system was developed in collaboration with leading oncologists to ensure clinical relevance. Our custom algorithms process the sensor data with sub-millisecond latency, enabling seamless AR visualization during surgical procedures.',
    'Initial clinical trials showed a 92% detection accuracy for tumors larger than 2mm, significantly improving on existing techniques. The system integrates with existing hospital DICOM systems for seamless workflow integration.'
  ],
  tags: ['SwiftUI', 'ARKit', 'Computer Vision', 'CoreML', 'HealthKit'],
  media: [
    { type: 'image', url: '/projects/vision1.jpg', caption: 'System Design Overview', layout: 'full' },
    { type: 'image', url: '/projects/vision2.jpg', caption: 'Surgeon using Vision Pro in OR', layout: 'half' },
    { type: 'image', url: '/projects/vision3.jpg', caption: 'Sensor Housing and Components', layout: 'half' },
    { type: 'image', url: '/projects/vision4.jpg', caption: 'Hardware Design Block Diagram', layout: 'full' }
  ],
  features: [
    'Real-time tumor detection with <1ms latency',
    'Multi-spectral imaging combining RGB and NIR',
    '3D tumor visualization with depth mapping',
    'HIPAA-compliant data processing',
    'Surgical navigation integration'
  ],
  githubUrl: 'https://github.com/example/vision-pro-tumor-detection',
  liveDemoUrl: 'https://demo.example.com/vision-pro'
};

export default function VisionProProjectPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900 text-gray-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/projects/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
        <div className="hidden lg:block absolute -top-20 -left-20 w-64 h-64 rounded-full bg-violet-600 opacity-5 animate-float"></div>
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
            <SparklesIcon className="h-8 w-8 text-violet-500 mr-3 animate-pulse" />
            <span className="text-sm font-medium bg-violet-900/30 text-violet-400 px-3 py-1 rounded-full">
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
                className="px-4 py-1.5 bg-gray-800 text-gray-300 text-sm rounded-full hover:bg-violet-600 hover:text-white transition-colors"
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
            {project.liveDemoUrl && (
              <a 
                href={project.liveDemoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:text-white group transition-colors"
              >
                <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                Live Demo
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
            Project <span className="text-primary-gradient">Details</span>
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
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-lg sticky top-24 hover:border-violet-500 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  <span className="text-primary-gradient">Key</span> Features
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="h-2 w-2 bg-violet-500 rounded-full group-hover:bg-blue-400 transition-colors"></div>
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
            <div className="group relative rounded-2xl overflow-hidden shadow-2xl bg-gray-800 border border-gray-700 hover:border-violet-500 transition-all duration-500">
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

            <div className="group relative rounded-2xl overflow-hidden shadow-2xl bg-gray-800 border border-gray-700 hover:border-violet-500 transition-all duration-500">
              <Image
                src={project.media[3].url}
                alt={project.media[3].caption}
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
          
          </div>
        </section>

        {/* Technical implementation */}
        <section className="animate-fade-in" id="technical" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-3xl font-bold mb-8 text-white">
            Technical <span className="text-primary-gradient">Implementation</span>
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-400 transition-all duration-300 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-white">
              Design Process and Research Documentation
            </h3>
            
            <PDFViewer 
              filePath="visionpro.pdf"
              height="800px"
              width="100%"
              className="my-8 rounded-lg overflow-hidden shadow-lg border border-gray-700" 
            />
            
            <div className="mt-8 space-y-6">
              <h4 className="text-lg font-medium text-white mb-4">
                Technical Challenges & Solutions
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <span className="text-violet-500 mr-3 mt-1">•</span>
                  <div>
                    <strong className="text-white group-hover:text-blue-400 transition-colors">Real-time processing:</strong>
                    <span className="text-gray-300"> Developed custom Metal shaders for GPU acceleration of image processing pipelines</span>
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="text-violet-500 mr-3 mt-1">•</span>
                  <div>
                    <strong className="text-white group-hover:text-blue-400 transition-colors">Sensor fusion:</strong>
                    <span className="text-gray-300"> Created novel algorithms to combine RGB and NIR data with sub-millisecond synchronization</span>
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="text-violet-500 mr-3 mt-1">•</span>
                  <div>
                    <strong className="text-white group-hover:text-blue-400 transition-colors">Privacy compliance:</strong>
                    <span className="text-gray-300"> Implemented on-device processing with zero PHI data leaving the Vision Pro</span>
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
            Interested in the technical details or exploring how these skills could translate to your team?
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-primary-gradient text-white rounded-xl font-medium hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg hover:shadow-violet-500/30"
          >
            Contact Me!
          </Link>
        </div>
      </section>
    </div>
  );
}