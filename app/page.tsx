const credentials = [
  {
    name: 'HubSpot Sales Hub Software Certification',
    issuer: 'HubSpot Academy',
    href: 'https://app-eu1.hubspot.com/academy/achievements/c6k0xx0p/en/1/arda-emirhan-kinc/hubspot-sales-hub-software',
  },
  {
    name: 'Inbound Sales Certification',
    issuer: 'HubSpot Academy',
    href: 'https://app-eu1.hubspot.com/academy/achievements/vfwbx1w3/en/1/arda-emirhan-kinc/inbound-sales',
  },
  {
    name: 'CRM Fundamentals / Lightning Experience',
    issuer: 'Salesforce Trailhead',
    href: 'https://www.salesforce.com/trailblazer/n5ft2fa7lkrc4rondn',
  },
  {
    name: 'SAP S/4HANA Sourcing & Procurement — Innovations',
    issuer: 'SAP Learning',
    href: 'https://badger.learning.sap.com/verify/xokyp-kynog-henaf-nucol-mihog',
  },
  {
    name: 'SAP S/4HANA Cloud — Sales Configuration',
    issuer: 'SAP Learning',
    href: 'https://badger.learning.sap.com/verify/xecyb-sycap-pyhav-dugyh-pipop',
  },
  {
    name: 'SQL (Intermediate) Verified Skill',
    issuer: 'HackerRank',
    href: 'https://www.hackerrank.com/certificates/e147e2c637b7',
  },
]

const tags = [
  'Customer Success',
  'Customer Support',
  'Operations',
  'Sales Operations',
  'Business Development',
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none">
      <path d="M5 3h8v8M13 3 3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-blue-400" fill="none">
      <path d="m3 8.5 3 3 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-blue-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-neutral-400">{description}</p> : null}
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3 text-sm leading-6 text-neutral-300">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="font-medium tracking-[-0.02em] text-white" aria-label="Back to top">
            Arda Emirhan Kinç
          </a>
          <nav className="hidden items-center gap-6 text-sm text-neutral-400 sm:flex" aria-label="Primary navigation">
            <a className="transition-colors hover:text-white" href="#experience">Experience</a>
            <a className="transition-colors hover:text-white" href="#projects">Projects</a>
            <a className="transition-colors hover:text-white" href="#credentials">Credentials</a>
            <a className="transition-colors hover:text-white" href="mailto:kincardaemirhan@gmail.com">Contact</a>
          </nav>
          <a
            href="/Arda_Emirhan_Kinc_CV.pdf"
            download="Arda_Emirhan_Kinc_CV.pdf"
            className="rounded-md bg-white px-3.5 py-2 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Download CV
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_15%,rgba(37,99,235,0.18),transparent_34%)]" />
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
            <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
              Kocaeli, Türkiye · Open to on-site, hybrid and remote roles
            </p>
            <h1 className="max-w-5xl break-words text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl sm:leading-[0.98] sm:tracking-[-0.055em] lg:text-7xl">
              Customer-focused operations, communication and growth.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400 sm:text-xl">
              I bring hands-on experience in high-volume customer service, structured record tracking, issue resolution and needs-based communication—supported by full professional English and practical CRM and workflow automation skills.
            </p>

            <div className="mt-8 flex flex-wrap gap-2" aria-label="Target roles">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300 ring-1 ring-inset ring-blue-400/20">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:kincardaemirhan@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                Contact me
                <ArrowIcon />
              </a>
              <a
                href="https://linkedin.com/in/arda-emirhan-kinc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white/[0.04] px-5 py-3 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.14)] transition-colors hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                LinkedIn
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section aria-label="Profile highlights" className="border-b border-white/10">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-white/10 px-5 sm:px-8 lg:grid-cols-4 lg:divide-y-0">
            {[
              ['100+', 'daily aquapark visitors supported'],
              ['400+', 'customers served by the café team on busy days'],
              ['50+', 'learners taught on a busy weekend day'],
              ['A1–C2', 'English levels taught across varied formats'],
            ].map(([metric, label]) => (
              <div key={metric} className="px-4 py-8 first:pl-0 lg:px-8 lg:first:pl-0">
                <p className="text-3xl font-semibold tracking-[-0.04em] text-white">{metric}</p>
                <p className="mt-2 max-w-[13rem] text-sm leading-5 text-neutral-400">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 border-b border-white/10">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <SectionHeading
              eyebrow="Experience"
              title="Customer-facing work built on consistency and trust."
              description="Role descriptions use clear, functional wording and focus on the work I actually performed and can substantiate."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-xl bg-white/[0.025] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_12px_40px_-24px_rgba(0,0,0,0.9)] sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]">
                    <img src="/englishtime.png" alt="English Time logo" className="max-h-full max-w-full object-contain" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-neutral-400">June 2024 – April 2026 · Part-time</p>
                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em]">English Teacher</h3>
                    <p className="mt-1 text-sm text-neutral-400">English Time İzmit · Kocaeli</p>
                  </div>
                </div>
                <BulletList items={[
                  'Delivered group, one-to-one and remote lessons to children and adults across A1–C2 levels, reaching more than 50 learners on busy weekend days.',
                  'Prepared lesson plans, materials and assessments; recorded examination results and learner progress in Excel and class records.',
                  'Communicated progress and development needs in parent meetings and supported course renewals through needs-based recommendations and learner satisfaction.',
                ]} />
              </article>

              <article className="rounded-xl bg-white/[0.025] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_12px_40px_-24px_rgba(0,0,0,0.9)] sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]">
                    <img src="/sarbas.png" alt="Sarbaş A.Ş. logo" className="max-h-full max-w-full object-contain" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-neutral-400">August 2021 – April 2024 · Part-time</p>
                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em]">Service Staff &amp; Customer Operations Support</h3>
                    <p className="mt-1 text-sm text-neutral-400">Sarbaş A.Ş. · Kocaeli</p>
                  </div>
                </div>
                <BulletList items={[
                  'Handled entry, cash/POS payments, Z reports, visitor counts and closing support for more than 100 daily aquapark visitors.',
                  'Supported ordering, service, floor readiness and opening/closing activities within a café team serving more than 400 customers on busy days.',
                  'Entered orders through Menulux and addressed delays and product-temperature complaints with prompt, proportionate service recovery.',
                ]} />
              </article>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 border-b border-white/10">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <SectionHeading
              eyebrow="Selected projects"
              title="Practical systems, built and tested end to end."
              description="These are independent projects—not corporate implementations. They demonstrate how I structure workflows, learn tools and take ownership of execution."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              <article className="rounded-xl bg-white/[0.025] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-blue-400">Workflow automation · 2026</p>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em]">Multi-channel outreach workflow</h3>
                <p className="mt-4 text-sm leading-6 text-neutral-400">
                  Built a 17-day, human-in-the-loop sequence across Notion, Make.com, Outlook and OneDrive. Seventeen modules and six conditional routes managed four emails, LinkedIn steps, status and next-action dates.
                </p>
              </article>

              <article className="rounded-xl bg-white/[0.025] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-blue-400">Product operations · Jan–Jun 2026</p>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em]">Mummy Swing</h3>
                <p className="mt-4 text-sm leading-6 text-neutral-400">
                  Took an AI-assisted mobile game from concept through a 20-person closed test to Google Play release, managing store assets, QA, compliance, AdMob integration and zero-budget organic promotion.
                </p>
                <div className="mt-6 flex gap-4 text-sm font-medium">
                  <a className="inline-flex items-center gap-1.5 text-white hover:text-blue-300" href="https://play.google.com/store/apps/details?id=com.armedastudios.mummyswing" target="_blank" rel="noopener noreferrer">Google Play <ArrowIcon /></a>
                  <a className="inline-flex items-center gap-1.5 text-white hover:text-blue-300" href="https://ardaoem.itch.io/mummy-swing" target="_blank" rel="noopener noreferrer">itch.io <ArrowIcon /></a>
                </div>
              </article>

              <article className="rounded-xl bg-white/[0.025] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-blue-400">AI prototype · 2026</p>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em]">Job discovery &amp; matching</h3>
                <p className="mt-4 text-sm leading-6 text-neutral-400">
                  Prototyped an n8n workflow that collected LinkedIn listings through Apify, scored profile fit with Gemini Flash and delivered structured results to Telegram and Notion.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="credentials" className="scroll-mt-24 border-b border-white/10">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <SectionHeading eyebrow="Education & credentials" title="Academic communication backed by practical business learning." />

            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <article className="rounded-xl bg-white/[0.025] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)] sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-neutral-400">September 2021 – July 2026</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">BA, English Language and Literature</h3>
                <p className="mt-2 text-neutral-400">Kocaeli University</p>
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-lg bg-white/[0.035] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
                    <p className="text-neutral-400">GPA</p>
                    <p className="mt-1 font-medium text-white">3.04 / 4.00</p>
                  </div>
                  <div className="rounded-lg bg-white/[0.035] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
                    <p className="text-neutral-400">Recognition</p>
                    <p className="mt-1 font-medium text-white">Honors graduate</p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-6 text-neutral-400">Completed pedagogical formation training and graduated on time.</p>
              </article>

              <div className="grid gap-3 sm:grid-cols-2">
                {credentials.map((credential) => (
                  <a
                    key={credential.name}
                    href={credential.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-28 items-start justify-between gap-4 rounded-xl bg-white/[0.025] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.10)] transition-colors hover:bg-white/[0.055] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <span>
                      <span className="block text-sm font-medium leading-5 text-white">{credential.name}</span>
                      <span className="mt-2 block font-mono text-xs uppercase tracking-[0.12em] text-neutral-400">{credential.issuer}</span>
                    </span>
                    <span className="text-neutral-400 transition-colors group-hover:text-white"><ArrowIcon /></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <SectionHeading eyebrow="Skills" title="Tools support the work; they do not replace it." />
            <div className="grid gap-px overflow-hidden rounded-xl bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.10)] sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['Customer & relationship', 'Needs assessment, structured follow-up, complaint resolution, service recovery, renewal and referral support'],
                ['CRM & sales', 'HubSpot Sales Hub, Notion-based tracking, foundational Salesforce practice through Trailhead'],
                ['Operations & data', 'Excel, Outlook, Google Workspace, SQL, POS/cash processes, Menulux and record tracking'],
                ['Automation & language', 'Make.com, n8n, Apify · Turkish (native) · English (full professional proficiency)'],
              ].map(([title, text]) => (
                <div key={title} className="bg-[#0c0c0c] p-6">
                  <h3 className="text-sm font-medium text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="rounded-2xl bg-white px-6 py-12 text-center text-neutral-950 sm:px-12 sm:py-16">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-neutral-600">Let&apos;s talk</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">Looking for a reliable early-career teammate?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-600">
              I am open to customer success, customer support, operations, sales operations and junior business development opportunities.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="mailto:kincardaemirhan@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-950 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                kincardaemirhan@gmail.com <ArrowIcon />
              </a>
              <a href="tel:+905385636107" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-neutral-950 shadow-[0_0_0_1px_rgba(0,0,0,0.14)] hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                +90 538 563 61 07
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-xs text-neutral-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Arda Emirhan Kinç</p>
          <p>Kocaeli · Available for İstanbul opportunities and relocation</p>
        </div>
      </footer>
    </div>
  )
}
