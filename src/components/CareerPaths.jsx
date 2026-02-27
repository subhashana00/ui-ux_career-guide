import { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

// SL salary data with realistic 2025 figures
const salaryData = {
  labels: ['Intern', 'Junior', 'Mid-Level', 'Senior', 'Lead/Head'],
  datasets: [
    {
      label: 'LKR/month (k)',
      data: [40, 80, 160, 250, 380],
      backgroundColor: ['#e7e5e4', '#d6d3d1', '#a8a29e', '#78716c', '#fb923c'],
      borderRadius: 6,
    },
  ],
}

const salaryOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { callbacks: { label: (ctx) => `LKR ${ctx.raw}k/month` } },
  },
  scales: {
    x: { grid: { display: false } },
    y: { display: false },
  },
}

const jobSteps = [
  {
    icon: 'fa-folder-open',
    title: 'Build a Case Study Portfolio',
    desc: "Don't just screenshot screens. Show the problem, your thinking, the process, and the measurable result. Use Notion or a personal website.",
  },
  {
    icon: 'fa-linkedin',
    title: 'Optimise LinkedIn & Behance',
    desc: 'Connect with HR Managers and Senior Designers at 99x, WSO2, Sysco Labs. Your profile IS your first impression.',
  },
  {
    icon: 'fa-figma',
    title: 'Master Figma Deeply',
    desc: 'Auto-layout, components, variables, prototyping. Most companies test these in interviews. Know them cold.',
  },
  {
    icon: 'fa-comments',
    title: 'Ace the Design Challenge',
    desc: 'Most SL companies give a take-home design task. Treat it like a real project — research first, iterate, document your rationale.',
  },
]

const freelanceSteps = [
  {
    icon: 'fa-crosshairs',
    title: 'Step 1: Pick Your Niche',
    desc: "Don't say \"I design anything\". Say \"I design mobile apps for e-commerce startups\" or \"Landing pages for SaaS products\". Specialists get hired faster and paid more.",
    tip: 'Starting niches that work: Landing pages, Mobile app UI, Dashboard design, Shopify stores',
  },
  {
    icon: 'fa-briefcase',
    title: 'Step 2: Build 3 Portfolio Pieces',
    desc: "No clients yet? Create concept projects. Redesign a bad app. Design a local restaurant's website. Quality > quantity — 3 excellent case studies beat 20 screenshots.",
    tip: 'Use Behance, Dribbble, or a free Framer/Webflow site as your portfolio',
  },
  {
    icon: 'fa-user-circle',
    title: 'Step 3: Set Up Your Profiles',
    desc: 'Create accounts on Upwork and Fiverr. Write a compelling bio. Set your starting rate — not too low ($10/hr is a red flag, try $15–20 to start).',
    tip: 'Upwork is better for long-term clients. Fiverr is good for fixed-price quick jobs.',
  },
  {
    icon: 'fa-handshake',
    title: 'Step 4: Land Your First Client',
    desc: "Start with your network. A local business, a friend's startup, a uni project. Do excellent work. Get a testimonial. That first review unlocks everything.",
    tip: 'Cold email 10 businesses in your target niche per day. Personalise each one.',
  },
  {
    icon: 'fa-file-contract',
    title: 'Step 5: Use Contracts Always',
    desc: 'Never start work without a signed contract. Include scope, deliverables, payment terms, and revision limits. 50% upfront is standard. No exceptions.',
    tip: 'Free template: Bonsai.com or AND.CO have beginner-friendly contracts',
  },
  {
    icon: 'fa-money-bill-wave',
    title: 'Step 6: Get Paid in USD',
    desc: 'Use Payoneer, Wise (TransferWise), or Paypal. Payoneer is most popular in SL and has very low fees. Set up before you need it.',
    tip: 'LKR advantage: $500 = ~LKR 160,000+. This is 2× a local mid-level salary.',
  },
]

const platforms = [
  { name: 'Upwork', desc: 'Hourly or fixed. Best for ongoing clients', icon: 'fa-briefcase', best: true },
  { name: 'Fiverr', desc: 'Gig-based. Great for fixed-scope projects', icon: 'fa-tag', best: false },
  { name: 'Toptal', desc: 'Top 3% only. High pay, tough to get in', icon: 'fa-crown', best: false },
  { name: 'LinkedIn', desc: 'Direct outreach to founders & PMs', icon: 'fa-linkedin', best: true },
  { name: 'contra.com', desc: 'Commission-free freelance platform', icon: 'fa-star', best: false },
  { name: 'Cold Email', desc: 'Find a business with a bad site. Offer to fix it.', icon: 'fa-envelope', best: false },
]

const pricingTips = [
  { bad: 'I\'ll do it for LKR 5,000 for exposure', good: 'My rate is $25/hr based on the value I deliver' },
  { bad: 'How much do you pay?', good: 'For a project like this, I typically charge $300–$500' },
  { bad: 'Unlimited revisions!', good: '2 rounds of revisions included; additional at $50/round' },
]

export default function CareerPaths() {
  const [active, setActive] = useState('job')
  const [expandedStep, setExpandedStep] = useState(null)

  return (
    <section id="career" className="scroll-mt-24 section-fade">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-1">4. Choosing Your Path</h2>
          <p className="text-stone-500 text-sm">Both are valid — here's the honest breakdown of each.</p>
        </div>

        <div className="bg-stone-100 p-1 rounded-xl flex flex-shrink-0 w-full sm:w-fit">
          <button
            onClick={() => setActive('job')}
            className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-lg text-sm font-semibold transition-all text-center ${
              active === 'job' ? 'bg-white shadow text-stone-800' : 'text-stone-500 hover:text-stone-700'
            }`}
          >
            💼 Full-time Job
          </button>
          <button
            onClick={() => setActive('freelance')}
            className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-lg text-sm font-semibold transition-all text-center ${
              active === 'freelance' ? 'bg-white shadow text-stone-800' : 'text-stone-500 hover:text-stone-700'
            }`}
          >
            🚀 Freelancing
          </button>
        </div>
      </div>

      {active === 'job' ? (
        <div className="space-y-6">
          {/* Pros / Cons */}
          <div className="grid md:grid-cols-3 gap-5">
            <div className="md:col-span-1 bg-white rounded-2xl border border-stone-200 p-6">
              <h3 className="text-xl font-serif text-stone-800 mb-3">The Corporate Route</h3>
              <p className="text-stone-500 text-sm mb-4">Best for beginners who want structure, mentorship, and a clear learning path.</p>
              <ul className="space-y-2 mb-5">
                {[
                  { icon: 'fa-check', color: 'text-green-500', text: 'Stable monthly salary & EPF/ETF' },
                  { icon: 'fa-check', color: 'text-green-500', text: 'Learn from senior designers' },
                  { icon: 'fa-check', color: 'text-green-500', text: 'Real product experience fast' },
                  { icon: 'fa-check', color: 'text-green-500', text: 'Portfolio-building with actual projects' },
                  { icon: 'fa-times', color: 'text-red-400', text: 'Fixed schedule & less autonomy' },
                  { icon: 'fa-times', color: 'text-red-400', text: 'Salary growth is slower' },
                  { icon: 'fa-times', color: 'text-red-400', text: 'May work on things you don\'t love' },
                ].map(({ icon, color, text }) => (
                  <li key={text} className={`flex items-center text-sm ${color === 'text-green-500' ? 'text-stone-700' : 'text-stone-400'}`}>
                    <i className={`fas ${icon} ${color} mr-2 w-3 flex-shrink-0`}></i> {text}
                  </li>
                ))}
              </ul>
              <div className="bg-stone-50 rounded-xl border border-stone-100 p-3">
                <p className="text-xs font-semibold text-stone-500 mb-2 uppercase tracking-wide">SL Salary Range (2025)</p>
                <div style={{ height: '130px' }}>
                  <Bar data={salaryData} options={salaryOptions} />
                </div>
              </div>
            </div>

            <div className="md:col-span-2 bg-white rounded-2xl border border-stone-200 p-6">
              <h4 className="font-bold text-stone-700 mb-5">How to Land Your First Design Job in SL</h4>
              <div className="space-y-4">
                {jobSteps.map((s, i) => (
                  <div key={i} className="flex gap-4 items-start bg-stone-50 p-4 rounded-xl">
                    <div className="w-9 h-9 rounded-full bg-stone-200 flex-shrink-0 flex items-center justify-center text-stone-600 text-sm font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-stone-800 mb-1">{s.title}</p>
                      <p className="text-sm text-stone-600 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-blue-50 border border-blue-100 rounded-xl p-3 text-sm text-blue-700">
                <i className="fas fa-info-circle mr-1.5"></i>
                <strong>My advice:</strong> Get a job first. Work for 1–2 years. Learn the craft in a team environment.
                Then freelance on the side or go full freelance with real experience to back you up.
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Freelance intro */}
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl border border-stone-200 p-6">
              <h3 className="text-xl font-serif text-stone-800 mb-3">The Freelance Hustle</h3>
              <p className="text-stone-500 text-sm mb-4">Freedom + high earning potential — but you are the CEO, Sales, Designer, Finance, and Support all in one.</p>
              <ul className="space-y-2 mb-5">
                {[
                  { icon: 'fa-check', color: 'text-green-500', text: 'Work from anywhere, anytime' },
                  { icon: 'fa-check', color: 'text-green-500', text: 'Earn in USD (huge LKR advantage)' },
                  { icon: 'fa-check', color: 'text-green-500', text: 'Choose projects you care about' },
                  { icon: 'fa-check', color: 'text-green-500', text: 'No salary cap — scale up freely' },
                  { icon: 'fa-times', color: 'text-red-400', text: 'Inconsistent income at first' },
                  { icon: 'fa-times', color: 'text-red-400', text: 'You handle everything yourself' },
                  { icon: 'fa-times', color: 'text-red-400', text: 'No benefits (EPF, health, etc.)' },
                ].map(({ icon, color, text }) => (
                  <li key={text} className={`flex items-center text-sm ${color === 'text-green-500' ? 'text-stone-700' : 'text-stone-400'}`}>
                    <i className={`fas ${icon} ${color} mr-2 w-3 flex-shrink-0`}></i> {text}
                  </li>
                ))}
              </ul>
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-3">
                <p className="text-xs font-semibold text-orange-700 mb-2">💰 Earning Potential</p>
                <div className="space-y-1.5">
                  {[
                    { level: 'Beginner', range: '$15–25/hr', lkr: '~LKR 5k–8k/hr' },
                    { level: 'Intermediate', range: '$30–50/hr', lkr: '~LKR 10k–16k/hr' },
                    { level: 'Expert', range: '$60–120/hr', lkr: '~LKR 20k–40k/hr' },
                  ].map(({ level, range, lkr }) => (
                    <div key={level} className="flex justify-between text-xs">
                      <span className="text-stone-500">{level}</span>
                      <span className="font-bold text-orange-700">{range}</span>
                      <span className="text-stone-400">{lkr}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-2 bg-white rounded-2xl border border-stone-200 p-6">
              <h4 className="font-bold text-stone-700 mb-1">Beginner's Freelance Roadmap</h4>
              <p className="text-xs text-stone-400 mb-4">Click each step for details</p>
              <div className="space-y-2">
                {freelanceSteps.map((s, i) => (
                  <div
                    key={i}
                    className={`rounded-xl border cursor-pointer transition-all ${
                      expandedStep === i
                        ? 'border-orange-300 bg-orange-50'
                        : 'border-stone-200 bg-stone-50 hover:border-orange-200'
                    }`}
                    onClick={() => setExpandedStep(expandedStep === i ? null : i)}
                  >
                    <div className="flex items-center gap-3 p-3.5">
                      <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex-shrink-0 flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </div>
                      <p className="font-semibold text-sm text-stone-800 flex-1">{s.title}</p>
                      <i className={`fas fa-chevron-${expandedStep === i ? 'up' : 'down'} text-stone-300 text-xs`}></i>
                    </div>
                    {expandedStep === i && (
                      <div className="px-4 pb-4 pt-0 space-y-2">
                        <p className="text-sm text-stone-600 leading-relaxed">{s.desc}</p>
                        {s.tip && (
                          <p className="text-sm text-orange-700 bg-white border border-orange-100 rounded-lg px-3 py-2">
                            <i className="fas fa-lightbulb mr-1.5"></i>{s.tip}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Platforms */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6">
            <h4 className="font-bold text-lg text-stone-700 mb-4">Where to Find Clients</h4>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {platforms.map((p) => (
                <div key={p.name} className={`p-4 rounded-xl border flex gap-3 items-start ${p.best ? 'border-orange-200 bg-orange-50' : 'border-stone-200 bg-stone-50'}`}>
                  <i className={`fas ${p.icon} ${p.best ? 'text-orange-500' : 'text-stone-400'} mt-1 text-lg`}></i>
                  <div>
                    <p className="font-bold text-stone-800">
                      {p.name} {p.best && <span className="text-xs text-orange-600 ml-1">(Recommended)</span>}
                    </p>
                    <p className="text-sm text-stone-600">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing mindset */}
          <div className="bg-stone-800 rounded-2xl p-6 text-stone-200">
            <h4 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
              <i className="fas fa-coins text-orange-400"></i> Pricing Mindset — The Mistakes I See Beginners Make
            </h4>
            <div className="space-y-4">
              {pricingTips.map(({ bad, good }, i) => (
                <div key={i} className="grid md:grid-cols-2 gap-3">
                  <div className="bg-red-900/30 border border-red-800/40 rounded-xl p-4 text-sm">
                    <span className="text-red-400 font-bold block mb-1">✗ Don't say:</span>
                    <p className="text-stone-300 italic">"{bad}"</p>
                  </div>
                  <div className="bg-green-900/30 border border-green-800/40 rounded-xl p-4 text-sm">
                    <span className="text-green-400 font-bold block mb-1">✓ Say instead:</span>
                    <p className="text-stone-200">"{good}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* NEW: Portfolio & Case Study Guide (Universal for both paths) */}
      <div className="mt-16 pt-10 border-t border-stone-200">
        <h3 className="text-2xl font-bold text-stone-800 mb-6 text-center">
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            The Golden Ticket: Your Portfolio
          </span>
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 1. Where to Host */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200">
            <h4 className="font-bold text-lg text-stone-700 mb-4 flex items-center gap-2">
              <i className="fas fa-globe text-blue-500"></i> Where to Host Your Work?
            </h4>
            <div className="space-y-4">
              {[
                { 
                  name: 'Behance', 
                  tags: ['Free', 'Community', 'Discovery'], 
                  desc: 'Best for beginners. Free, easy to upload, and recruiters search here. Great for visual-heavy case studies.' 
                },
                { 
                  name: 'Dribbble', 
                  tags: ['Visuals', 'UI Focus', 'Invites'], 
                  desc: 'The "Instagram" for designers. Good for showing off single screens or "shots". Less focus on deep UX process.' 
                },
                { 
                  name: 'Custom Site (Framer/Webflow)', 
                  tags: ['Pro', 'Personal Brand', 'SEO'], 
                  desc: 'The ultimate goal. Total control over your story. Use Framer templates to launch in hours without coding.' 
                }
              ].map((p, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-center mb-1">
                    <h5 className="font-bold text-stone-800">{p.name}</h5>
                    <div className="flex gap-1">
                      {p.tags.map(t => (
                        <span key={t} className="text-xs uppercase font-bold bg-stone-100 text-stone-500 px-2 py-0.5 rounded">{t}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. How to Write a Case Study */}
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
            <h4 className="font-bold text-lg text-stone-700 mb-4 flex items-center gap-2">
              <i className="fas fa-book-open text-purple-500"></i> Anatomy of a Perfect Case Study
            </h4>
            <div className="space-y-0 relative">
              {/* Vertical line */}
              <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-stone-200"></div>

              {[
                { title: 'The Problem Statement', desc: '1 sentence. "Users couldn\'t find the checkout button, leading to a 40% drop-off."' },
                { title: 'My Role & Timeline', desc: 'UI Designer · 2 Weeks · Solo Project' },
                { title: 'Research & Discovery', desc: 'Show 2-3 key insights from user interviews or competitor analysis. No wall of text.' },
                { title: 'The Solution (Visuals)', desc: 'Before & After screenshots. High-fidelity prototypes. Show the "Happy Path".' },
                { title: 'The Impact', desc: 'Did conversions go up? Did users save time? If it\'s a concept, what did YOU learn?' }
              ].map((step, i) => (
                <div key={i} className="relative pl-10 pb-5 last:pb-0">
                  <div className="absolute left-0 top-0.5 w-7 h-7 rounded-full bg-white border-2 border-purple-200 text-purple-600 flex items-center justify-center text-sm font-bold z-10">
                    {i + 1}
                  </div>
                  <h5 className="font-semibold text-stone-800 text-sm mb-1">{step.title}</h5>
                  <p className="text-sm text-stone-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
