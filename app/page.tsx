export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-24">
      
      {/* Hero Section */}
      <div className="max-w-3xl w-full text-left space-y-6 mb-24">
        <h1 className="text-5xl md:text-7xl font-serif tracking-tight">
          Arda Emirhan Kinc
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 font-light">
          Outbound Sales Development &amp; Go-To-Market Operations
        </p>
      </div>

      {/* Experience Section */}
      <div className="max-w-3xl w-full text-left space-y-12">
        <h2 className="text-2xl font-serif border-b border-neutral-800 pb-4 text-neutral-200">
          Experience
        </h2>
        
        <div className="space-y-12">
          {/* Armeda Studios */}
          <div className="group">
            <h3 className="text-lg font-medium text-white group-hover:text-neutral-300 transition-colors">
              Founder &amp; Product Manager
            </h3>
            <p className="text-sm text-neutral-500 mb-3 font-mono tracking-wide">
              Armeda Studios
            </p>
            <p className="text-neutral-400 font-light leading-relaxed">
              Directed end-to-end mobile software go-to-market lifecycles and application distribution. Managed a global localization architecture across 14 languages and successfully integrated external revenue reward blocks.
            </p>
          </div>

          {/* English Time */}
          <div className="group">
            <h3 className="text-lg font-medium text-white group-hover:text-neutral-300 transition-colors">
              Communication &amp; Client Enablement Specialist
            </h3>
            <p className="text-sm text-neutral-500 mb-3 font-mono tracking-wide">
              English Time
            </p>
            <p className="text-neutral-400 font-light leading-relaxed">
              Facilitated comprehensive enablement and instruction for varied client tiers. Leveraged active listening strategies, group communication frameworks, and structured instructional design to drive client success.
            </p>
          </div>

          {/* Sarbaş AŞ */}
          <div className="group">
            <h3 className="text-lg font-medium text-white group-hover:text-neutral-300 transition-colors">
              Operations &amp; Customer Relations Specialist
            </h3>
            <p className="text-sm text-neutral-500 mb-3 font-mono tracking-wide">
              Sarbaş AŞ
            </p>
            <p className="text-neutral-400 font-light leading-relaxed">
              Managed high-volume B2C customer service channels across municipal facilities, ensuring rapid bottleneck resolution and maintaining strict operational satisfaction standards.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}