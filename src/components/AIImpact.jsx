import { useState } from 'react'

const aiTools = [
  { name: 'Figma AI', use: 'Auto-rename layers, generate variants, write copy in designs', tag: 'Design', color: 'bg-purple-100 text-purple-700 border-purple-200' },
  { name: 'v0.dev (Vercel)', use: 'Generate full React UI from a text prompt — instant prototypes', tag: 'Code+Design', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  { name: 'Galileo AI', use: 'Generate Figma screens from a text description', tag: 'Design', color: 'bg-purple-100 text-purple-700 border-purple-200' },
  { name: 'Framer AI', use: 'Build and publish websites with AI, no code needed', tag: 'Prototype', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
  { name: 'Midjourney', use: 'Create moodboards, concept art, hero images for clients', tag: 'Visual', color: 'bg-pink-100 text-pink-700 border-pink-200' },
  { name: 'ChatGPT / Claude', use: 'UX writing, research synthesis, client emails, proposals', tag: 'Productivity', color: 'bg-green-100 text-green-700 border-green-200' },
  { name: 'Adobe Firefly', use: 'Generative fill, background removal, AI asset editing', tag: 'Visual', color: 'bg-pink-100 text-pink-700 border-pink-200' },
  { name: 'Locofy.ai', use: 'Convert your Figma designs directly into React/HTML code', tag: 'Code', color: 'bg-orange-100 text-orange-700 border-orange-200' },
]

const canReplace = [
  'Generating generic UI layouts',
  'Writing placeholder microcopy',
  'Creating basic moodboards',
  'Producing first-draft wireframes',
  'Resizing and adapting assets',
]

const cannotReplace = [
  'Understanding WHY a user is frustrated',
  'Negotiating scope with a difficult client',
  'Making strategic product decisions under ambiguity',
  'Building real trust with stakeholders',
  'Your taste, judgment, and creative vision',
]

export default function AIImpact() {
  const [tab, setTab] = useState('tools')

  return (
    <section id="ai-impact" className="scroll-mt-24 section-fade">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-3">3. The AI Elephant in the Room</h2>
        <p className="text-stone-600 max-w-3xl">
          Everyone's panicking. Let me be real with you — AI will <strong>not</strong> replace designers.
          But a designer who uses AI effectively will replace one who doesn't. Here's exactly how.
        </p>
      </div>

      {/* Tab toggle */}
      <div className="bg-stone-100 p-1 rounded-xl flex flex-col sm:flex-row sm:w-fit mb-6">
        {[
          { key: 'tools', label: '🛠 AI Tools I Use' },
          { key: 'survive', label: '🛡 How to Survive' },
          { key: 'workflow', label: '⚡ My AI Workflow' },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all text-center whitespace-nowrap ${
              tab === key ? 'bg-white shadow text-stone-800' : 'text-stone-500 hover:text-stone-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'tools' && (
        <div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {aiTools.map((tool) => (
              <div key={tool.name} className="bg-white border border-stone-200 rounded-xl p-4 hover:border-orange-200 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h5 className="font-bold text-sm text-stone-800">{tool.name}</h5>
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${tool.color}`}>{tool.tag}</span>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">{tool.use}</p>
              </div>
            ))}
          </div>
          <div className="bg-stone-800 text-stone-200 rounded-2xl p-5 flex gap-3 items-start">
            <i className="fas fa-quote-left text-orange-400 text-xl flex-shrink-0 mt-0.5"></i>
            <p className="text-sm leading-relaxed">
              The designers getting left behind are those who still insist on doing manually what AI can do in 2 seconds.
              The designers thriving are those who use AI to <strong className="text-white">10× their output</strong> while focusing
              their human energy on strategy, relationships, and taste.
            </p>
          </div>
        </div>
      )}

      {tab === 'survive' && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
            <h3 className="font-bold mb-4 flex items-center gap-2 text-red-700">
              <i className="fas fa-robot"></i> What AI CAN replace
            </h3>
            <ul className="space-y-2.5">
              {canReplace.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-stone-700">
                  <i className="fas fa-times-circle text-red-400 mt-0.5 flex-shrink-0"></i>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-stone-400 mt-4 italic">If your entire job is just these things, yes — retrain immediately.</p>
          </div>

          <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
            <h3 className="font-bold mb-4 flex items-center gap-2 text-green-700">
              <i className="fas fa-shield-alt"></i> What AI CANNOT replace
            </h3>
            <ul className="space-y-2.5">
              {cannotReplace.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-stone-700">
                  <i className="fas fa-check-circle text-green-500 mt-0.5 flex-shrink-0"></i>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-stone-400 mt-4 italic">Invest heavily in these. This is your moat.</p>
          </div>

          <div className="md:col-span-2 bg-stone-800 text-stone-200 rounded-2xl p-6 grid md:grid-cols-3 gap-4">
            {[
              { icon: 'fa-user-friends', title: 'Soft Skills > Everything', body: 'Empathy, communication, and negotiation are skills AI has zero chance of replicating. A designer who can run a room is irreplaceable.' },
              { icon: 'fa-code', title: 'Learn the Frontend', body: 'As software engineering students, you have a massive head start. A designer who understands HTML/CSS/React writes better specs and earns more.' },
              { icon: 'fa-eye', title: 'Develop Your Taste', body: 'Your curation and creative judgment are your brand. Study what works, build an aesthetic opinion, and defend your decisions with reasoning.' },
            ].map(({ icon, title, body }) => (
              <div key={title} className="border-l-2 border-green-500 pl-4">
                <p className="font-bold text-white mb-1 flex items-center gap-2"><i className={`fas ${icon} text-green-400 text-sm`}></i>{title}</p>
                <p className="text-xs text-stone-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'workflow' && (
        <div>
          <div className="grid md:grid-cols-3 gap-5 mb-6">
            {[
              {
                phase: 'Discovery',
                icon: 'fa-search',
                color: 'bg-purple-100 text-purple-700',
                steps: [
                  'Use ChatGPT/Claude to analyse user interview transcripts',
                  'Prompt: "Find top 5 pain points from this user research..."',
                  'Generate user personas from survey data in seconds',
                  'Ask AI to map out a competitor analysis framework',
                ],
              },
              {
                phase: 'Design',
                icon: 'fa-pencil-ruler',
                color: 'bg-orange-100 text-orange-700',
                steps: [
                  'Use Galileo AI or v0.dev for first-draft UI generation',
                  'Midjourney for moodboards before opening Figma',
                  'Figma AI to rename layers and generate content variants',
                  'Refine and add YOUR taste — this is where humans win',
                ],
              },
              {
                phase: 'Deliver',
                icon: 'fa-paper-plane',
                color: 'bg-green-100 text-green-700',
                steps: [
                  'Locofy.ai or v0.dev to convert designs into code',
                  'Claude to write client update emails and proposals',
                  'ChatGPT to generate UX writing (microcopy, error messages)',
                  'Adobe Firefly for final asset polish and background generation',
                ],
              },
            ].map(({ phase, icon, color, steps }) => (
              <div key={phase} className="bg-white border border-stone-200 rounded-2xl p-5">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-3 ${color}`}>
                  <i className={`fas ${icon}`}></i> {phase} Phase
                </div>
                <ul className="space-y-2">
                  {steps.map((s) => (
                    <li key={s} className="text-xs text-stone-600 flex gap-2">
                      <i className="fas fa-circle text-stone-200 mt-1.5 text-[6px] flex-shrink-0"></i>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
            <i className="fas fa-lightbulb text-amber-500 flex-shrink-0 mt-0.5"></i>
            <p className="text-sm text-amber-800">
              <strong>My personal rule:</strong> AI handles the first 40% (grunt work). I own the last 60% (thinking, refinement, relationships).
              This means I deliver 3× faster without sacrificing quality.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
