export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-24">
      
      {/* Hero Section (No Picture) */}
      <div className="max-w-4xl w-full flex flex-col items-start justify-center gap-6 mb-24">
        <div className="space-y-6 text-left">
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight">
            Arda Emirhan Kinc
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 font-light">
            Sales Development Representative &amp; Go-To-Market Operations
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <a 
              href="/resume.pdf" 
              download="Arda_Kinc_Resume.pdf"
              className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors w-full sm:w-auto text-center"
            >
              Download CV
            </a>
            <a 
              href="#demos"
              className="px-6 py-3 bg-neutral-900 text-white font-medium rounded-full border border-neutral-700 hover:border-neutral-500 transition-colors w-full sm:w-auto text-center"
            >
              Watch Cold Call Demos
            </a>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="max-w-4xl w-full text-left space-y-12 mb-24">
        <h2 className="text-2xl font-serif border-b border-neutral-800 pb-4 text-neutral-200">
          Experience
        </h2>
        
        <div className="space-y-12">
          {/* Armeda Studios */}
          <div className="group flex items-start gap-5">
            <div className="relative w-16 h-16 min-w-[64px] min-h-[64px] flex-none bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center p-2">
              <img src="/armeda.png" alt="Armeda Studios" className="max-w-full max-h-full object-contain opacity-90" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white group-hover:text-neutral-300 transition-colors">
                Founder &amp; Product Manager
              </h3>
              <p className="text-sm text-neutral-500 mb-2 font-mono tracking-wide mt-1">
                Armeda Studios
              </p>
              <p className="text-neutral-400 font-light leading-relaxed">
                Directed end-to-end mobile software go-to-market lifecycles and application distribution. Managed a global localization architecture across 14 languages and successfully integrated external revenue reward blocks.
              </p>
            </div>
          </div>

          {/* English Time */}
          <div className="group flex items-start gap-5">
            <div className="relative w-16 h-16 min-w-[64px] min-h-[64px] flex-none bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center p-2">
              <img src="/englishtime.png" alt="English Time" className="max-w-full max-h-full object-contain opacity-90" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white group-hover:text-neutral-300 transition-colors">
                Communication &amp; Client Enablement Specialist
              </h3>
              <p className="text-sm text-neutral-500 mb-2 font-mono tracking-wide mt-1">
                English Time
              </p>
              <p className="text-neutral-400 font-light leading-relaxed">
                Facilitated comprehensive enablement and instruction for varied client tiers. Leveraged active listening strategies, group communication frameworks, and structured instructional design to drive client success.
              </p>
            </div>
          </div>

          {/* Sarbas AS */}
          <div className="group flex items-start gap-5">
            <div className="relative w-16 h-16 min-w-[64px] min-h-[64px] flex-none bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center p-2">
              <img src="/sarbas.png" alt="Sarbas AS" className="max-w-full max-h-full object-contain opacity-90" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white group-hover:text-neutral-300 transition-colors">
                Operations &amp; Customer Relations Specialist
              </h3>
              <p className="text-sm text-neutral-500 mb-2 font-mono tracking-wide mt-1">
                Sarbas AS
              </p>
              <p className="text-neutral-400 font-light leading-relaxed">
                Managed high-volume B2C customer service channels across municipal facilities, ensuring rapid bottleneck resolution and maintaining strict operational satisfaction standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Education Section */}
      <div className="max-w-4xl w-full text-left space-y-12 mb-24">
        <h2 className="text-2xl font-serif border-b border-neutral-800 pb-4 text-neutral-200">
          Certifications &amp; Education
        </h2>
        
        <div className="space-y-8">
          
          {/* Salesforce Badge */}
          <div className="group flex items-start gap-5">
            <div className="relative w-16 h-16 min-w-[64px] min-h-[64px] flex-none bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center p-2">
              <img src="/salesforce.png" alt="Salesforce" className="max-w-full max-h-full object-contain opacity-90" />
            </div>
            <div>
              <a href="https://www.salesforce.com/trailblazer/n5ft2fa7lkrc4rondn" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-neutral-300 transition-colors flex items-center gap-2">
                Learn CRM Fundamentals for Lightning Experience
                <span className="text-neutral-500 text-sm">↗</span>
              </a>
              <p className="text-sm text-neutral-500 font-mono tracking-wide mt-1">Salesforce Trailhead</p>
            </div>
          </div>

          {/* HubSpot Sales Hub */}
          <div className="group flex items-start gap-5">
            <div className="relative w-16 h-16 min-w-[64px] min-h-[64px] flex-none bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center p-2">
              <img src="/hubspot.png" alt="HubSpot" className="max-w-full max-h-full object-contain opacity-90" />
            </div>
            <div>
              <a href="https://app-eu1.hubspot.com/academy/achievements/c6k0xx0p/en/1/arda-emirhan-kinc/hubspot-sales-hub-software" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-neutral-300 transition-colors flex items-center gap-2">
                Sales Hub Software Certification
                <span className="text-neutral-500 text-sm">↗</span>
              </a>
              <p className="text-sm text-neutral-500 font-mono tracking-wide mt-1">HubSpot Academy</p>
            </div>
          </div>

          {/* HubSpot Inbound */}
          <div className="group flex items-start gap-5">
            <div className="relative w-16 h-16 min-w-[64px] min-h-[64px] flex-none bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center p-2">
              <img src="/hubspot.png" alt="HubSpot" className="max-w-full max-h-full object-contain opacity-90" />
            </div>
            <div>
              <a href="https://app-eu1.hubspot.com/academy/achievements/vfwbx1w3/en/1/arda-emirhan-kinc/inbound-sales" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-neutral-300 transition-colors flex items-center gap-2">
                Inbound Sales Certification
                <span className="text-neutral-500 text-sm">↗</span>
              </a>
              <p className="text-sm text-neutral-500 font-mono tracking-wide mt-1">HubSpot Academy</p>
            </div>
          </div>

          {/* University Degree */}
          <div className="group flex items-start gap-5 pt-6 border-t border-neutral-900 mt-6">
            <div className="relative w-16 h-16 min-w-[64px] min-h-[64px] flex-none bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center p-2">
              <img src="/kocaeli.png" alt="Kocaeli University" className="max-w-full max-h-full object-contain opacity-90" />
            </div>
            <div>
              <a href="https://bde.kocaeli.edu.tr/en" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-neutral-300 transition-colors flex items-center gap-2">
                Bachelor of Arts, English Language and Literature
                <span className="text-neutral-500 text-sm">↗</span>
              </a>
              <p className="text-sm text-neutral-500 mb-2 font-mono tracking-wide mt-1">
                Kocaeli University
              </p>
              <p className="text-neutral-400 font-light leading-relaxed">
                Completed an integrated Pedagogical Formation Certification focusing on advanced instructional design and active group communication protocols.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Demo Video Section (Placeholder) */}
      <div id="demos" className="max-w-4xl w-full text-left space-y-12 mb-24">
        <h2 className="text-2xl font-serif border-b border-neutral-800 pb-4 text-neutral-200">
          Sales Execution &amp; Demos
        </h2>
        <div className="w-full h-64 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center">
          <p className="text-neutral-500 font-mono text-sm">Video Player Component Loading...</p>
        </div>
      </div>

    </main>
  );
}