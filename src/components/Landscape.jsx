import { useState } from 'react'

const roles = [
  {
    id: 'ui',
    icon: 'fa-paint-brush',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    badge: null,
    title: 'UI Designer',
    subtitle: 'The Visual Craftsman',
    clickColor: 'text-blue-500',
    detail: {
      focus: 'Typography, colour systems, spacing, component libraries, visual hierarchy & brand identity.',
      tools: 'Figma, Adobe Illustrator, Photoshop.',
      salary: 'SL: LKR 60k–120k/mo · Global freelance: $15–30/hr',
      dayInLife: 'Building design systems, refining micro-interactions, handing off to devs via Figma.',
      reality:
        '"Making it pretty" is only 10% of it. 90% is consistency, accessibility (WCAG), and defending your decisions with data.',
    },
  },
  {
    id: 'ux',
    icon: 'fa-brain',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    badge: null,
    title: 'UX Designer',
    subtitle: 'The Empathy Engineer',
    clickColor: 'text-purple-500',
    detail: {
      focus: 'User research, wireframing, information architecture, user flows, usability testing.',
      tools: 'FigJam, Miro, Maze, Hotjar, Google Forms.',
      salary: 'SL: LKR 80k–160k/mo · Global freelance: $25–50/hr',
      dayInLife: 'Interviewing users, analysing pain points, wireframing solutions, running A/B tests.',
      reality:
        'Part psychologist, part detective. You ask "Why?" 100 times a day until you find the real problem — which is almost never the obvious one.',
    },
  },
  {
    id: 'pd',
    icon: 'fa-rocket',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    badge: null,
    title: 'Product Designer',
    subtitle: 'The Strategic Owner',
    clickColor: 'text-orange-500',
    detail: {
      focus: 'Business goals + user needs + technical feasibility. Owns the full product experience.',
      tools: 'Everything above + Amplitude, Mixpanel, Linear, data dashboards.',
      salary: 'SL: LKR 150k–300k/mo · Global: $60–120/hr (very high demand)',
      dayInLife: 'Sprint planning, prioritising features, aligning with engineering & business, reviewing metrics.',
      reality:
        'You are the bridge between users, business, and tech. Senior companies pay the most for this role globally.',
    },
  },
  {
    id: 'uieng',
    icon: 'fa-code',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-700',
    badge: "👋 That's me",
    title: 'UI/UX Engineer',
    subtitle: 'The Designer Who Codes',
    clickColor: 'text-green-600',
    detail: {
      focus: 'Bridges design and engineering — designs in Figma AND implements in React/Tailwind.',
      tools: 'Figma, VS Code, React, Tailwind CSS, Framer, GitHub.',
      salary: 'SL: LKR 120k–250k/mo · Global freelance: $35–80/hr',
      dayInLife: 'Design a component in Figma, implement it in code, review accessibility, ship it.',
      reality:
        'The unicorn role. Companies love hybrid people. As a software engineering student, you are already halfway there — you just need to add the design layer.',
    },
  },
]

const overlaps = [
  { from: 'UI', to: 'UX', note: 'Both use Figma — UI makes it look good, UX makes it work well.' },
  { from: 'UX', to: 'Product', note: 'Product Designer = Senior UX + business strategy.' },
  { from: 'UI/UX', to: 'Engineer', note: 'UI/UX Engineer = designer + frontend developer.' },
]

export default function Landscape() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section id="landscape" className="scroll-mt-24 section-fade">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-3">1. The Roles — What's the Difference?</h2>
        <p className="text-stone-600 leading-relaxed max-w-3xl">
          The biggest confusion in this industry is the job titles. People use "UI", "UX", and "Product Design"
          interchangeably — but they're actually different layers.{' '}
          <span className="font-semibold text-orange-600">Click any card to go deeper.</span>
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {roles.map((role) => (
          <div
            key={role.id}
            className={`bg-white p-5 rounded-xl border-2 card-hover cursor-pointer transition-all ${
              openId === role.id ? 'border-orange-300 shadow-md' : 'border-stone-200'
            }`}
            onClick={() => toggle(role.id)}
          >
            <div className="flex items-start justify-between mb-3">
              <div
                className={`w-11 h-11 ${role.iconBg} ${role.iconColor} rounded-full flex items-center justify-center`}
              >
                <i className={`fas ${role.icon} text-lg`}></i>
              </div>
              {role.badge && (
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">
                  {role.badge}
                </span>
              )}
            </div>
            <h3 className="text-lg font-bold mb-1">{role.title}</h3>
            <p className="text-stone-400 text-xs mb-3 font-medium">{role.subtitle}</p>

            {openId === role.id && (
              <div className="text-xs text-stone-600 border-t border-stone-100 pt-3 space-y-2.5 animate-pulse-once">
                <p><strong className="text-stone-700">Focus:</strong> {role.detail.focus}</p>
                <p><strong className="text-stone-700">Tools:</strong> {role.detail.tools}</p>
                <p><strong className="text-stone-700">Day in Life:</strong> {role.detail.dayInLife}</p>
                <p className="bg-green-50 border border-green-100 rounded-lg px-2 py-1.5">
                  <strong className="text-green-700">💰 Salary:</strong> {role.detail.salary}
                </p>
                <p className="bg-orange-50 border border-orange-100 rounded-lg px-2 py-1.5">
                  <strong className="text-orange-700">💡 Reality:</strong> {role.detail.reality}
                </p>
              </div>
            )}
            <p className={`text-xs ${role.clickColor} font-semibold mt-3`}>
              {openId === role.id ? '▲ Collapse' : '▼ See details'}
            </p>
          </div>
        ))}
      </div>

      {/* Venn-style overlap explainer */}
      <div className="mt-8 bg-stone-50 border border-stone-200 rounded-2xl p-6">
        <h4 className="font-bold text-stone-700 mb-4 flex items-center gap-2">
          <i className="fas fa-circle-nodes text-orange-400"></i>
          How these roles overlap in real life
        </h4>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {overlaps.map(({ from, to, note }) => (
            <div key={from + to} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-stone-100">
              <div className="flex-shrink-0 text-stone-400 font-bold text-xs text-center">
                <span className="block text-stone-700">{from}</span>
                <i className="fas fa-arrow-right text-orange-300 my-0.5"></i>
                <span className="block text-stone-700">{to}</span>
              </div>
              <p className="text-xs text-stone-500">{note}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-4 italic">
          Pro tip: In most Sri Lankan companies below 50 people, one person does all three. That's actually a great learning opportunity.
        </p>
      </div>
    </section>
  )
}
