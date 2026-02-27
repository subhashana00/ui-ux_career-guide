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
      focus: 'Visual hierarchy, typography, color theory, spacing systems, micro-interactions, accessibility (WCAG).',
      deliverables: 'High-fidelity mockups, UI component libraries, iconography sets, interaction prototypes.',
      tools: 'Figma, Adobe Illustrator, Photoshop, Rive (animations).',
      salary: 'SL: LKR 60k–120k/mo · Global freelance: $15–30/hr',
      dayInLife: 'Building design systems, refining pixel-perfect layouts, handing off specs to developers.',
      reality:
        '"Making it pretty" is only 10% of it. 90% is consistency, scalability, and defending your decisions.',
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
      focus: 'User research, information architecture, user flows, wireframing, usability testing.',
      deliverables: 'User personas, journey maps, low-fidelity wireframes, research reports, sitemaps.',
      tools: 'FigJam, Miro, Maze, Hotjar, Google Analytics, Typeform.',
      salary: 'SL: LKR 80k–160k/mo · Global freelance: $25–50/hr',
      dayInLife: 'Interviewing users, analyzing session recordings, facilitating workshops, testing prototypes.',
      reality:
        'Part psychologist, part detective. You ask "Why?" until you find the real problem — rarely the obvious one.',
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
      focus: 'Business goals + user needs + technical feasibility. End-to-end product ownership.',
      deliverables: 'Product strategy, feature roadmaps, high-fidelity prototypes, design system governance.',
      tools: 'Figma, Amplitude, Mixpanel, Linear/Jira, Notion.',
      salary: 'SL: LKR 150k–300k/mo · Global: $60–120/hr (Strategic roles pay highest)',
      dayInLife: 'Sprint planning with PMs, prioritizing features, aligning stakeholders, tracking success metrics.',
      reality:
        'You bridge the gap between "what users want" and "what makes money". Heavy on communication & strategy.',
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
      focus: 'Seamlessly bridging design & code. Prototyping in code for realistic interactions.',
      deliverables: 'Production-ready React components, fully responsive front-end code, interactive prototypes.',
      tools: 'Figma, VS Code, React, Tailwind CSS, GitHub, Framer Motion.',
      salary: 'SL: LKR 120k–250k/mo · Global freelance: $35–80/hr',
      dayInLife: 'Designing a component in Figma, coding it in React, ensuring accessibility, shipping it.',
      reality:
        'The "unicorn" role. You save teams time by skipping the "handoff" friction. High value in startups.',
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
            <p className="text-stone-500 text-sm mb-3 font-medium">{role.subtitle}</p>

            {openId === role.id && (
              <div className="text-sm text-stone-600 border-t border-stone-100 pt-3 space-y-2.5 animate-pulse-once">
                <p><strong className="text-stone-700">Focus:</strong> {role.detail.focus}</p>
                <p><strong className="text-stone-700">Deliverables:</strong> {role.detail.deliverables}</p>
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
            <p className={`text-sm ${role.clickColor} font-semibold mt-3`}>
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
              <div className="flex-shrink-0 text-stone-400 font-bold text-sm text-center">
                <span className="block text-stone-700">{from}</span>
                <i className="fas fa-arrow-right text-orange-300 my-0.5"></i>
                <span className="block text-stone-700">{to}</span>
              </div>
              <p className="text-sm text-stone-500">{note}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-stone-400 mt-4 italic">
          Pro tip: In most Sri Lankan companies below 50 people, one person does all three. That's actually a great learning opportunity.
        </p>
      </div>

      {/* Revisions & Workflow Section */}
      <div className="mt-12 pt-8 border-t border-stone-100">
        <h3 className="text-2xl font-bold text-stone-800 mb-6">The Reality of Revisions (V1 to V10)</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
            <h4 className="font-bold text-lg text-red-800 mb-4 flex items-center gap-2">
              <i className="fas fa-exclamation-triangle"></i>
              Having "So Many" Revisions
            </h4>
            
            <div className="space-y-4">
              <div>
                <h5 className="font-bold text-red-700 text-sm mb-2 uppercase tracking-wide">The Good (Pros)</h5>
                <ul className="text-sm text-stone-600 space-y-2 list-disc list-inside">
                  <li><strong>Refinement:</strong> Sometimes V10 is actually cleaner and more usable than V1.</li>
                  <li><strong>Stakeholder Safety:</strong> Clients feel heard and involved in the process.</li>
                  <li><strong>Detail:</strong> Catches edge cases you missed (e.g., "what happens if the name is 50 chars long?").</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-bold text-red-700 text-sm mb-2 uppercase tracking-wide">The Bad (Cons)</h5>
                <ul className="text-sm text-stone-600 space-y-2 list-disc list-inside">
                  <li><strong>Diminishing Returns:</strong> V20 is rarely better than V3. It's just "different".</li>
                  <li><strong>Loss of Vision:</strong> The design becomes a "Frankenstein" of everyone's opinions.</li>
                  <li><strong>Burnout:</strong> It kills your enthusiasm. You stop caring about quality and just want it "done".</li>
                  <li><strong>Budget/Timeline Blowout:</strong> Reduces your effective hourly rate drastically.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
            <h4 className="font-bold text-lg text-green-800 mb-4 flex items-center gap-2">
              <i className="fas fa-check-circle"></i>
              How to Avoid Revisions in V1
            </h4>
            <p className="text-sm text-stone-600 mb-4">
              You can't eliminate feedback, but you can kill 80% of <em>pointless</em> revisions before you design a single pixel.
            </p>
            
            <ul className="space-y-3">
              {[
                { title: 'Align Early (Moodboards)', desc: "Don't design full screens yet. Show 3 distinct visual styles/moodboards first to agree on the 'vibe'." },
                { title: 'Wireframe Logic First', desc: "Get sign-off on the structure (grey boxes) before adding color. If they change layout in high-fidelity, it's 10x more work." },
                { title: 'Explain the "Why"', desc: "Don't just send a JPG. Present it live. Explain 'I put this button here because user testing showed...' Data is harder to argue with than opinions." },
                { title: 'The "Must-Have" List', desc: "Force stakeholders to list 'Non-negotiables' before you start. If they add new ones later, that's a change request (extra $), not a revision." },
                { title: 'Show "Crazy" vs "Safe"', desc: "Give them choices. Show one safe option and one bold one. They will usually pick the middle, which is what you wanted anyway." }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm">
                  <span className="flex-shrink-0 w-7 h-7 bg-green-200 text-green-700 rounded-full flex items-center justify-center font-bold text-sm mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <strong className="text-green-900 block">{item.title}</strong>
                    <span className="text-stone-600 leading-relaxed">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
