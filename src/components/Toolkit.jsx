import { useState } from 'react'

const toolsData = [
  // Design
  { name: 'Figma', category: 'design', icon: 'fa-pen-nib', desc: 'Primary design tool — frames, components, prototypes, all in one', note: '⭐ Must Learn First' },
  { name: 'FigJam', category: 'design', icon: 'fa-project-diagram', desc: 'Online whiteboard for brainstorming, user flows, workshops', note: 'Free with Figma' },
  { name: 'Framer', category: 'design', icon: 'fa-layer-group', desc: 'Interactive prototypes + real website publishing. Design meets code.', note: 'Free tier available' },
  { name: 'Adobe Illustrator', category: 'design', icon: 'fa-vector-square', desc: 'Vector illustrations, icons, and logo design', note: 'Paid — use when needed' },
  // Code
  { name: 'VS Code', category: 'code', icon: 'fa-code', desc: 'The designer-friendly code editor. Extensions for everything.', note: 'Free' },
  { name: 'React + Vite', category: 'code', icon: 'fa-atom', desc: 'Build interactive UIs — what this very page is made with', note: 'Learn after HTML/CSS' },
  { name: 'Tailwind CSS', category: 'code', icon: 'fa-wind', desc: 'Design-first CSS framework. Write UI in class names.', note: 'Pairs perfectly with React' },
  { name: 'GitHub', category: 'code', icon: 'fa-code-branch', desc: 'Version control + portfolio hosting via GitHub Pages', note: 'Free. Get on it today.' },
  // AI Tools
  { name: 'ChatGPT / Claude', category: 'ai', icon: 'fa-robot', desc: 'UX writing, research analysis, proposal drafts, client emails', note: '10× your output' },
  { name: 'Midjourney', category: 'ai', icon: 'fa-image', desc: 'Moodboards, concept art, hero images for client presentations', note: '$10/mo' },
  { name: 'v0.dev', category: 'ai', icon: 'fa-magic', desc: 'Describe a UI → get working React/Tailwind code. Instant prototypes.', note: 'Free tier available' },
  { name: 'Locofy.ai', category: 'ai', icon: 'fa-bolt', desc: 'Convert Figma designs → production-ready code (React, HTML)', note: 'Game-changer for handoff' },
  // Productivity
  { name: 'Notion', category: 'productivity', icon: 'fa-file-alt', desc: 'Client docs, project management, case study writing, personal wiki', note: 'Free for personal' },
  { name: 'Linear', category: 'productivity', icon: 'fa-tasks', desc: 'Sprint planning and issue tracking — used by most SL software companies', note: 'Free tier' },
  { name: 'Loom', category: 'productivity', icon: 'fa-video', desc: 'Record screen + face to walk clients through your designs async', note: 'Replaces long meetings' },
  { name: 'Payoneer / Wise', category: 'productivity', icon: 'fa-money-bill-wave', desc: 'Receive USD payments from international freelance clients', note: 'Set up before first project' },
]

const filters = [
  { key: 'all', label: 'All Tools' },
  { key: 'design', label: '🎨 Design' },
  { key: 'code', label: '💻 Engineering' },
  { key: 'ai', label: '🤖 AI' },
  { key: 'productivity', label: '⚡ Productivity' },
]

const learnSources = [
  {
    category: 'YouTube',
    icon: 'fa-youtube',
    color: 'bg-red-50 border-red-100',
    titleColor: 'text-red-700',
    items: [
      { name: 'Flux Academy', desc: 'Best for web UI/UX, real-world freelancing advice' },
      { name: 'Malewicz (Hype4)', desc: 'Brutally honest design reviews and tutorials' },
      { name: 'The Futur', desc: 'Business of design — pricing, clients, mindset' },
      { name: 'DesignCourse', desc: 'UI design + CSS/HTML bridge for developers' },
      { name: 'Kevin Powell', desc: 'CSS mastery — essential for UI engineers' },
    ],
  },
  {
    category: 'Reading & Deep Learning',
    icon: 'fa-book-open',
    color: 'bg-blue-50 border-blue-100',
    titleColor: 'text-blue-700',
    items: [
      { name: 'Nielsen Norman Group', desc: 'The gold standard of UX research and articles (nngroup.com)' },
      { name: 'Medium / UX Collective', desc: 'Community UX articles from practitioners' },
      { name: '"Don\'t Make Me Think"', desc: 'Steve Krug — #1 recommended UX book for beginners' },
      { name: '"The Design of Everyday Things"', desc: 'Don Norman — understand WHY bad design exists' },
      { name: 'Laws of UX', desc: 'lawsofux.com — psychology principles in design, beautifully presented' },
    ],
  },
  {
    category: 'Practice & Community',
    icon: 'fa-hands-helping',
    color: 'bg-green-50 border-green-100',
    titleColor: 'text-green-700',
    items: [
      { name: 'Daily UI Challenge', desc: 'dailyui.co — one design prompt per day for 100 days' },
      { name: 'Dribbble & Behance', desc: 'Study what good design looks like. Build your portfolio here.' },
      { name: 'ADPList.org', desc: 'Free 1-on-1 mentorship from senior designers worldwide. Seriously, use this.' },
      { name: 'Google UX Design Certificate', desc: 'Coursera — best free structured beginner course (~6 months)' },
      { name: 'Figma Community', desc: 'figma.com/community — free templates, plugins, design systems to learn from' },
    ],
  },
]

const roadmap = [
  { phase: 'Month 0–1', title: 'Learn Figma Basics', items: ['Frames, Auto-layout, Components', 'Watch: Figma official tutorials + Flux Academy', 'Recreate 3 existing app UIs from scratch'], color: 'border-stone-300 bg-stone-50' },
  { phase: 'Month 2–3', title: 'Build First Projects', items: ['Daily UI Challenge (do 30 days)', 'Design a local business website concept', 'Start a Behance/Dribbble profile'], color: 'border-orange-300 bg-orange-50' },
  { phase: 'Month 4–6', title: 'Learn UX Fundamentals', items: ['Google UX Certificate (free on Coursera)', 'Conduct 3 user interviews with anyone', 'Read "Don\'t Make Me Think"'], color: 'border-amber-300 bg-amber-50' },
  { phase: 'Month 6–12', title: 'Get Real Experience', items: ['Apply for internships OR first freelance client', 'Contribute to open-source projects (UI)', 'Study AI tools — integrate into workflow'], color: 'border-green-300 bg-green-50' },
]

export default function Toolkit() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [showRoadmap, setShowRoadmap] = useState(false)

  const visible = toolsData.filter(
    (t) => activeFilter === 'all' || t.category === activeFilter
  )

  return (
    <section id="toolkit" className="scroll-mt-24 section-fade">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-2">5. Tools I Use &amp; How to Self-Learn</h2>
        <p className="text-stone-500 text-sm">My personal toolkit as a UI/UX Designer &amp; Engineer — and exactly where to start learning.</p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveFilter(key)}
            className={`px-4 py-1.5 rounded-full text-sm border transition-colors font-medium ${
              activeFilter === key
                ? 'bg-stone-800 text-white border-stone-800'
                : 'border-stone-300 hover:bg-stone-800 hover:text-white hover:border-stone-800'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {visible.map((tool) => (
          <div
            key={tool.name}
            className="bg-white p-4 rounded-xl border border-stone-200 hover:border-orange-200 transition-colors group"
          >
            <div className="flex items-start gap-3 mb-2">
              <div className="w-9 h-9 bg-stone-100 rounded-lg flex items-center justify-center text-stone-600 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors flex-shrink-0">
                <i className={`fas ${tool.icon} text-sm`}></i>
              </div>
              <div className="min-w-0">
                <h5 className="font-bold text-sm text-stone-800 leading-tight">{tool.name}</h5>
                <span className="text-xs text-orange-600 font-medium">{tool.note}</span>
              </div>
            </div>
            <p className="text-xs text-stone-500 leading-relaxed">{tool.desc}</p>
          </div>
        ))}
      </div>

      {/* Featured AI Tools Section */}
      <div className="mb-12 bg-stone-50 rounded-2xl p-6 md:p-8 border border-stone-200">
        <h3 className="text-2xl font-bold text-stone-800 mb-3">6 Best AI Tools for UI Design: Detailed Overview</h3>
        <p className="text-stone-600 mb-6 max-w-3xl">
          Modern AI UI tools vary widely in depth, flexibility, and production readiness. Some focus on rapid concept generation, while others are built to integrate directly into real product development workflows. The tools listed below represent the most capable and practical options available today.
          Here’s the list of 6 best AI tools for UI design that actually work in 2026:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { 
              name: 'Emergent', 
              desc: 'A "vibe coding" platform that builds production-ready, full-stack web and mobile apps from natural language prompts. Handles frontend, backend, and deployment via AI agents.' 
            },
            { 
              name: 'Banani', 
              desc: 'AI UI design copilot tailored for rapid prototyping. Generates editable, multi-screen user interfaces and wireframes directly from text descriptions at high speed.' 
            },
            { 
              name: 'Framer', 
              desc: 'The bridge between design and code. Uses AI to generate entire interactive websites from a single prompt, producing publishable React-based sites instantly.' 
            },
            { 
              name: 'Google Stitch', 
              desc: 'Gemini 2.5-powered design tool. Converts text prompts, sketches, or screenshots into responsive UI layouts with iterative refinement. Exports directly to Figma.' 
            },
            { 
              name: 'Galileo AI', 
              desc: 'Leading text-to-UI platform generating high-fidelity, editable interface designs in Figma. Perfect for creating instant design variations and complex dashboards.' 
            },
            { 
              name: 'UX Pilot', 
              desc: 'Comprehensive AI platform for the entire UX workflow: requirements gathering, workshops, wireframing, and high-fidelity prototyping with strong Figma integration.' 
            }
          ].map((tool) => (
            <div key={tool.name} className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
              <h4 className="font-bold text-lg text-stone-800 mb-2">{tool.name}</h4>
              <p className="text-sm text-stone-600 leading-relaxed">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Self-Learning Roadmap toggle */}
      <div className="mb-6">
        <button
          onClick={() => setShowRoadmap((v) => !v)}
          className="flex items-center gap-2 text-stone-700 font-bold hover:text-orange-500 transition-colors"
        >
          <i className={`fas fa-chevron-${showRoadmap ? 'down' : 'right'} text-orange-400 text-sm`}></i>
          <span className="text-lg">Self-Learning Roadmap (0 → Job-ready in 12 months)</span>
        </button>
      </div>

      {showRoadmap && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {roadmap.map(({ phase, title, items, color }) => (
            <div key={phase} className={`border-2 ${color} rounded-2xl p-4`}>
              <div className="text-xs font-bold text-stone-400 uppercase tracking-wide mb-1">{phase}</div>
              <h5 className="font-bold text-stone-800 mb-3">{title}</h5>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex gap-2 text-xs text-stone-600">
                    <i className="fas fa-check text-orange-400 mt-0.5 flex-shrink-0"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Learning sources */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-stone-800 flex items-center gap-2">
          <i className="fas fa-book-reader text-orange-400"></i>
          Where I Actually Learned — My Sources
        </h3>
        <div className="grid md:grid-cols-3 gap-5">
          {learnSources.map(({ category, icon, color, titleColor, items }) => (
            <div key={category} className={`${color} border rounded-2xl p-5`}>
              <h4 className={`font-bold mb-3 flex items-center gap-2 ${titleColor}`}>
                <i className={`fas ${icon}`}></i> {category}
              </h4>
              <ul className="space-y-3">
                {items.map(({ name, desc }) => (
                  <li key={name} className="text-xs">
                    <p className="font-bold text-stone-700">{name}</p>
                    <p className="text-stone-500 mt-0.5">{desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Final callout */}
      <div className="mt-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 text-white">
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div>
            <h4 className="text-xl font-bold mb-2">🎯 Your Homework After This Talk</h4>
            <ol className="space-y-1 text-sm text-orange-100">
              <li>1. Download Figma (free) and do the official tutorial today</li>
              <li>2. Sign up for ADPList — book a free mentor session this week</li>
              <li>3. Start the Google UX Design Certificate on Coursera (free + audit)</li>
              <li>4. Follow: Flux Academy, Malewicz, The Futur on YouTube</li>
            </ol>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold">🚀</p>
            <p className="text-sm text-orange-100 mt-2">The best time to start was yesterday.<br />The second best time is right now.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
