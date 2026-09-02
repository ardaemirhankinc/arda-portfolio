export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 pt-10 pb-2">
      
      {/* Hero Section */}
      <div className="max-w-4xl w-full flex flex-col items-start justify-center gap-6 mb-24">
        <div className="space-y-6 text-left">
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight">
            Arda Emirhan Kinc
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 font-light">
            Adaptable, bilingual (English &amp; Turkish) Operations &amp; Communications Specialist bridging stakeholder communication, process coordination, and digital execution.
          </p>
          
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-mono text-neutral-500 mb-8">
            <a href="mailto:kincardaemirhan@gmail.com" className="hover:text-white transition-colors">kincardaemirhan@gmail.com</a>
            <span className="hidden md:inline">|</span>
            <a href="tel:+905385636107" className="hover:text-white transition-colors">+90 538 563 61 07</a>
            <span className="hidden md:inline">|</span>
            <a href="https://linkedin.com/in/arda-emirhan-kinc" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">linkedin.com/in/arda-emirhan-kinc</a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="https://calendly.com/kincardaemirhan/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span className="text-lg">🗓</span> Book an Interview
            </a>
            <a 
              href="/Arda_Emirhan_Kinc_CV.pdf" 
              download="Arda_Emirhan_Kinc_CV.pdf"
              className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors w-full sm:w-auto text-center whitespace-nowrap"
            >
              Download CV
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
            <div className="w-full">
              <div className="flex items-start md:items-center justify-between gap-4 mb-1">
                <h3 className="text-lg font-medium text-white group-hover:text-neutral-300 transition-colors">
                  Project Lead &amp; Independent Developer
                </h3>
                <span className="text-xs text-neutral-500 font-mono whitespace-nowrap">Jan 2026 - Present</span>
              </div>
              <p className="text-sm text-neutral-500 mb-4 font-mono tracking-wide">
                Armeda Studios
              </p>
              <ul className="space-y-3 text-neutral-400 font-light text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-700 mt-1">▹</span> 
                  <span>
                    Spearheaded the end-to-end product and operational lifecycle for the mobile application{" "}
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.armedastudios.mummyswing" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white border-b border-neutral-600 hover:border-white transition-colors"
                    >
                      &quot;Mummy Swing&quot;
                    </a>
                    , driving the project from initial concept to live release on the Google Play Store.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-700 mt-1">▹</span> 
                  <span>Managed strict platform compliance, quality assurance testing, localization pipelines, and release integrations via Google Play Console.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-700 mt-1">▹</span> 
                  <span>Executed a zero-budget Go-To-Market (GTM) strategy targeting a global audience, demonstrating high autonomy, technical problem-solving, and cross-functional execution.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* English Time */}
          <div className="group flex items-start gap-6">
            <div className="relative w-20 h-20 min-w-[80px] min-h-[80px] flex-none bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center p-2.5 mt-1">
              <img src="/englishtime.png" alt="English Time" className="max-w-full max-h-full object-contain opacity-90" />
            </div>
            <div className="w-full">
              <div className="flex items-start md:items-center justify-between gap-4 mb-1">
                <h3 className="text-lg font-medium text-white group-hover:text-neutral-300 transition-colors">
                  Communication &amp; Training Specialist
                </h3>
                <span className="text-xs text-neutral-500 font-mono whitespace-nowrap">Jun 2024 - Apr 2026</span>
              </div>
              <p className="text-sm text-neutral-500 mb-4 font-mono tracking-wide">
                English Time
              </p>
              <ul className="space-y-3 text-neutral-400 font-light text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-700 mt-1">▹</span> 
                  <span>Facilitated structured instructional sessions and presentations for diverse cohorts of 30+ adult learners, translating complex linguistic concepts into clear, engaging, and actionable training modules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-700 mt-1">▹</span> 
                  <span>Facilitated client onboarding, monitored learner progression, and de-escalated stakeholder concerns, substantially improving participant retention and course completion rates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-700 mt-1">▹</span> 
                  <span>Analyzed performance metrics and adapted delivery methodologies to meet organizational service and learner satisfaction benchmarks.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sarbas AS */}
          <div className="group flex items-start gap-6">
            <div className="relative w-20 h-20 min-w-[80px] min-h-[80px] flex-none bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center p-2.5 mt-1">
              <img src="/sarbas.png" alt="Sarbas AS" className="max-w-full max-h-full object-contain opacity-90" />
            </div>
            <div className="w-full">
              <div className="flex items-start md:items-center justify-between gap-4 mb-1">
                <h3 className="text-lg font-medium text-white group-hover:text-neutral-300 transition-colors">
                  Operations &amp; Customer Relations Specialist
                </h3>
                <span className="text-xs text-neutral-500 font-mono whitespace-nowrap">Aug 2022 - Apr 2024</span>
              </div>
              <p className="text-sm text-neutral-500 mb-4 font-mono tracking-wide">
                Sarbas AS
              </p>
              <ul className="space-y-3 text-neutral-400 font-light text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-700 mt-1">▹</span> 
                  <span>Supervised daily operational workflows and public-facing transactions for 100+ daily stakeholders across municipal facilities under strict service-level agreements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-700 mt-1">▹</span> 
                  <span>Resolved real-time operational bottlenecks, managed high-stress customer interactions with tact and diplomacy, and maintained comprehensive daily transaction logs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-700 mt-1">▹</span> 
                  <span>Optimized frontline communication channels between customers and administrative personnel, driving higher service efficiency and stakeholder satisfaction.</span>
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
                Inbound Certification
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
                Kocaeli University
              </p>
              <p className="text-neutral-400 font-light leading-relaxed text-sm">
                Graduated on-time with a focus on advanced group communication, instructional design, cross-cultural analysis, and persuasive presentation strategies.
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
            <h3 className="text-lg font-medium text-white mb-4">Operations &amp; Process Management</h3>
            <ul className="space-y-3 text-neutral-400 font-light text-sm">
              <li className="flex items-center gap-2"><span className="text-neutral-700">▹</span> Workflow Coordination &amp; Tracking</li>
              <li className="flex items-center gap-2"><span className="text-neutral-700">▹</span> Operational Bottleneck Resolution</li>
              <li className="flex items-center gap-2"><span className="text-neutral-700">▹</span> Documentation &amp; Quality Compliance</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-4">Communication &amp; Enablement</h3>
            <ul className="space-y-3 text-neutral-400 font-light text-sm">
              <li className="flex items-center gap-2"><span className="text-neutral-700">▹</span> Cross-Functional Stakeholder Alignment</li>
              <li className="flex items-center gap-2"><span className="text-neutral-700">▹</span> Public Speaking, Coaching &amp; Training</li>
              <li className="flex items-center gap-2"><span className="text-neutral-700">▹</span> Conflict De-escalation &amp; Client Relations</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Systems &amp; Digital Tools</h3>
            <ul className="space-y-3 text-neutral-400 font-light text-sm">
              <li className="flex items-center gap-2"><span className="text-neutral-700">▹</span> Salesforce Lightning &amp; HubSpot</li>
              <li className="flex items-center gap-2"><span className="text-neutral-700">▹</span> Google Workspace &amp; MS Office (Excel/Word/PPT)</li>
              <li className="flex items-center gap-2"><span className="text-neutral-700">▹</span> Notion &amp; Task Management Systems</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-4">Technical Aptitude &amp; AI</h3>
            <ul className="space-y-3 text-neutral-400 font-light text-sm">
              <li className="flex items-start gap-2">
                <span className="text-neutral-700 mt-1">▹</span> 
                <span>Engineered and deployed this responsive portfolio from scratch utilizing Next.js, React, and Tailwind CSS.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-700 mt-1">▹</span> 
                <span>Utilizing premium AI models (Claude, ChatGPT, Gemini) for workflow acceleration, research, and data processing.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-4">Languages</h3>
            <ul className="space-y-3 text-neutral-400 font-light text-sm">
              <li className="flex items-center gap-2"><span className="text-neutral-700">▹</span> English (Advanced / Bilingual Academic Proficiency — C2 Level)</li>
              <li className="flex items-center gap-2"><span className="text-neutral-700">▹</span> Turkish (Native)</li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="w-full text-center text-neutral-600 text-xs py-8 mt-16 border-t border-neutral-900">
        © {new Date().getFullYear()} Arda Emirhan Kinc. All rights reserved.
      </footer>
    </main>
  );
}
