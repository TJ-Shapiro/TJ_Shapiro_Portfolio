import { ArrowLeftIcon, ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/solid';
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
    { type: 'image', url: '/projects/vision1.jpg', caption: 'Surgeon using Vision Pro in OR', layout: 'full' },
    { type: 'image', url: '/projects/vision2.jpg', caption: 'Sensor housing and components', layout: 'half' },
    { type: 'image', url: '/projects/vision3.jpg', caption: 'System block diagram', layout: 'half' }
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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/projects" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline group">
            <ArrowLeftIcon className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            {project.description}
          </p>
        </div>

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
            {project.liveDemoUrl && (
              <a 
                href={project.liveDemoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 dark:text-blue-400 hover:underline group"
              >
                <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-20">
        {/* Media gallery */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
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
              <div className="scroll-mt-20">
                <div className="aspect-w-16 aspect-h-9 bg-black rounded-xl overflow-hidden shadow-xl">
                  <iframe 
                    src={project.media[3].url} 
                    className="w-full h-full"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    title={project.media[3].caption}
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Project details */}
        <section className="scroll-mt-20" id="details">
          <h2 className="text-2xl font-bold mb-6">Project Details</h2>
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
                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="ml-3 text-gray-700 dark:text-gray-300">{feature}</span>
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
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Design Process and Research Documentation</h3>
            
            <PDFViewer 
              filePath="visionpro.pdf"
              height="800px"
              width="100%"
              className="my-8" 
            />
            
            <div className="mt-6 space-y-4">
              <h4 className="font-medium">Technical Challenges & Solutions</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Real-time processing:</strong> Developed custom Metal shaders for GPU acceleration of image processing pipelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Sensor fusion:</strong> Created novel algorithms to combine RGB and NIR data with sub-millisecond synchronization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Privacy compliance:</strong> Implemented on-device processing with zero PHI data leaving the Vision Pro</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to know more?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Interested in the technical details or exploring how these skills could translate to your team?
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Me!
          </Link>
        </div>
      </section>
    </div>
  );
}