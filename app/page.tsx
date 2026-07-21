export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-24">
      
      {/* Hero Section */}
      <div className="max-w-4xl w-full flex flex-col items-start justify-center gap-6 mb-24">
        <div className="space-y-6 text-left">
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight">
            Arda Emirhan Kinc
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 font-light">
            High-energy SaaS professional transitioning into a global Sales Development Representative (SDR) role.
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm font-mono text-neutral-500 pt-2 pb-4">
            <a href="mailto:kincardaemirhan@outlook.com" className="hover:text-white transition-colors">kincardaemirhan@outlook.com</a>
            <span>|</span>
            <a href="tel:+905385636107" className="hover:text-white transition-colors">+90 538 563 61 07</a>
            <span>|</span>
            <a href="https://linkedin.com/in/arda-emirhan-kinc" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">linkedin.com/in/arda-emirhan-kinc</a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="YOUR_CALENDLY_LINK_HERE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors w-full sm:w-auto text-center"
            >
              Book an Interview
            </a>
            <a 
              href="/resume.pdf" 
              download="Arda_Kinc_Resume.pdf"
              className="px-6 py-3 bg-neutral-900 text-white font-medium rounded-full border border-neutral-700 hover:border-neutral-500 transition-colors w-full sm:w-auto text-center"
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
          Professional Experience
        </h2>
        
        <div className="space-y-12">
          {/* Armeda Studios */}
          <div className="group flex items-start gap-6">
            <div className="relative w-20 h-20 min-w-[80px] min-h-[80px] flex-none bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center p-2.5 mt-1">
              <img src="/armeda.png" alt="Armeda Studios" className="max-w-full max-h-full object-contain opacity-90" />
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                <h3 className="text-lg font-medium text-white group-hover:text-neutral-300 transition-colors">
                  Founder &amp; Independent Developer
                </h3>
                <span className="text-xs text-neutral-500 font-mono">Jan 2026 - Present</span>
              </div>
              <p className="text-sm text-neutral-500 mb-4 font-mono tracking-wide">
                Armeda Studios | Remote
              </p>
              <ul className="space-y-3 text-neutral-400 font-light text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-700 mt-1">▹</span> 
                  <span>Spearheaded the end-to-end product lifecycle for the mobile application "Mummy Swing," driving the project from initial concept to final deployment on the Google Play Store.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-700 mt-1">▹</span> 
                  <span>Managed strict platform compliance, technical quality assurance, and Google Play Console integrations to successfully ship a functional software product.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-700 mt-1">▹</span> 
                  <span>Architected a zero-budget Go-To-Market (GTM) strategy targeting a global audience, gaining hands-on experience with digital localization and App Store Optimization (ASO) mechanics.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* English Time */}
          <div className="group flex items-start gap-6">
            <div className="relative w-20 h-20 min-w-[80px] min-h-[80px] flex-none bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center p-2.5 mt-1">
              <img src="/englishtime.png" alt="English Time" className="max-w-full max-h-full object-contain opacity-90" />
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                <h3 className="text-lg font-medium text-white group-hover:text-neutral-300 transition-colors">
                  Communication &amp; Client Enablement Specialist
                </h3>
                <span className="text-xs text-neutral-500 font-mono">Jun 2024 - Apr 2026</span>
              </div>
              <p className="text-sm text-neutral-500 mb-4 font-mono tracking-wide">
                English Time
              </p>
              <ul className="space-y-3 text-neutral-400 font-light text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-700 mt-1">▹</span> 
                  <span>Facilitated high-impact presentations and daily educational sessions for diverse groups of 30+ clients, mastering the ability to simplify complex concepts and maintain continuous audience engagement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-700 mt-1">▹</span> 
                  <span>Engineered targeted objection-handling strategies during critical enrollment phases, effectively reducing churn and accelerating decision-making cycles for prospective clients.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-700 mt-1">▹</span> 
                  <span>Analyzed performance metrics and applied structured delivery methods to optimize client outcomes, consistently meeting institutional satisfaction and success targets.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sarbas AS */}
          <div className="group flex items-start gap-6">
            <div className="relative w-20 h-20 min-w-[80px] min-h-[80px] flex-none bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center p-2.5 mt-1">
              <img src="/sarbas.png" alt="Sarbas AS" className="max-w-full max-h-full object-contain opacity-90" />
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                <h3 className="text-lg font-medium text-white group-hover:text-neutral-300 transition-colors">
                  Operations &amp; Customer Relations Specialist
                </h3>
                <span className="text-xs text-neutral-500 font-mono">Aug 2022 - Apr 2024</span>
              </div>
              <p className="text-sm text-neutral-500 mb-4 font-mono tracking-wide">
                Sarbas AS
              </p>
              <ul className="space-y-3 text-neutral-400 font-light text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-700 mt-1">▹</span> 
                  <span>Managed high-volume B2C transactions, efficiently processing operations for 100+ daily customers across municipal facilities while maintaining strict service standards in high-stress environments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-700 mt-1">▹</span> 
                  <span>De-escalated real-time customer conflicts and resolved complex operational bottlenecks, optimizing communication channels to boost overall efficiency and client satisfaction.</span>
                </li>
              </ul>
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
          <div className="group flex items-start gap-6">
            <div className="relative w-20 h-20 min-w-[80px] min-h-[80px] flex-none bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center p-2.5">
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
          <div className="group flex items-start gap-6">
            <div className="relative w-20 h-20 min-w-[80px] min-h-[80px] flex-none bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center p-2.5">
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
          <div className="group flex items-start gap-6">
            <div className="relative w-20 h-20 min-w-[80px] min-h-[80px] flex-none bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center p-2.5">
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
          <div className="group flex items-start gap-6 pt-6 border-t border-neutral-900 mt-6">
            <div className="relative w-20 h-20 min-w-[80px] min-h-[80px] flex-none bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center p-2.5">
              <img src="/kocaeli.png" alt="Kocaeli University" className="max-w-full max-h-full object-contain opacity-90" />
            </div>
            <div>
              <a href="https://bde.kocaeli.edu.tr/en" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-neutral-300 transition-colors flex items-center gap-2">
                Bachelor of Arts, English Language and Literature
                <span className="text-neutral-500 text-sm">↗</span>
              </a>
              <p className="text-sm text-neutral-500 mb-2 font-mono tracking-wide mt-1">
                Kocaeli University (Graduating June 2026)
              </p>
              <p className="text-neutral-400 font-light leading-relaxed text-sm">
                Graduated on-time with a focus on advanced group communication, instructional design, and persuasive presentation strategies—skills directly transferable to client enablement and objection handling.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Core Competencies & Tech Stack */}
      <div className="max-w-4xl w-full text-left space-y-8 mb-24">
        <h2 className="text-2xl font-serif border-b border-neutral-800 pb-4 text-neutral-200">
          Core Competencies &amp; Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Sales &amp; Operations</h3>
            <ul className="space-y-3 text-neutral-400 font-light text-sm">
              <li className="flex items-center gap-2"><span className="text-neutral-700">▹</span> Outbound Prospecting &amp; Pipeline Generation</li>
              <li className="flex items-center gap-2"><span className="text-neutral-700">▹</span> Lead Qualification &amp; Objection Handling</li>
              <li className="flex items-center gap-2"><span className="text-neutral-700">▹</span> B2B/B2C Communication &amp; Churn Reduction</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-4">CRM &amp; Prospecting Stack</h3>
            <ul className="space-y-3 text-neutral-400 font-light text-sm">
              <li className="flex items-center gap-2"><span className="text-neutral-700">▹</span> Salesforce Lightning &amp; HubSpot Sales Hub</li>
              <li className="flex items-center gap-2"><span className="text-neutral-700">▹</span> LinkedIn Sales Navigator</li>
              <li className="flex items-center gap-2"><span className="text-neutral-700">▹</span> Apollo.io</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-4">AI-Driven Operations</h3>
            <ul className="space-y-3 text-neutral-400 font-light text-sm">
              <li className="flex items-start gap-2">
                <span className="text-neutral-700 mt-1">▹</span> 
                <span>Utilizing premium AI models (Claude Pro, ChatGPT Plus, Gemini Pro) for lead enrichment and personalized outreach sequencing.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-4">Languages</h3>
            <ul className="space-y-3 text-neutral-400 font-light text-sm">
              <li className="flex items-center gap-2"><span className="text-neutral-700">▹</span> English (Advanced / Bilingual Proficiency)</li>
              <li className="flex items-center gap-2"><span className="text-neutral-700">▹</span> Turkish (Native)</li>
            </ul>
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