export default function ContactPage() {
    return (
      <div className="min-h-screen bg-[var(--background)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-2">Contact Me</h1>
          <p className="text-xl text-[color:rgba(var(--foreground),0.7)] mb-12">
            Get in touch for collaborations or opportunities
          </p>
          
          <div className="bg-muted rounded-xl p-8 shadow-md max-w-2xl mx-auto">
            <a 
              href="mailto:tj.shapiro193@gmail.com" 
              className="inline-flex items-center px-6 py-3 bg-[var(--primary)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-lg"
            >
              Email Me Directly
            </a>
            
            <div className="mt-8 text-[color:rgba(var(--foreground),0.7)]">
              <p className="mb-4">Or connect with me on:</p>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/tj-shapiro" className="hover:text-[var(--primary)]">LinkedIn</a>
                <a href="https://github.com/TJ-Shapiro" className="hover:text-[var(--primary)]">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }