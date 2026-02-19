export default function Footer() {
  const takeaways = [
    'UI, UX, Product Designer, and UI/UX Engineer are different — pick the one that fits you.',
    'The market is growing. SL + global remote = massive opportunity.',
    'AI is your co-pilot, not your replacement. Learn to use it now.',
    'Job first to learn the craft → Freelance when you\'re ready.',
    'Figma + ADPList + Daily UI = start tomorrow. It\'s all free.',
  ]

  return (
    <footer className="pt-12 pb-8 border-t border-stone-200">
      {/* Key takeaways */}
      <div className="bg-stone-800 rounded-2xl p-8 mb-10 text-stone-200">
        <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
          <i className="fas fa-clipboard-list text-orange-400"></i>
          TL;DR — 5 Things to Remember
        </h3>
        <ol className="space-y-3">
          {takeaways.map((t, i) => (
            <li key={i} className="flex gap-3 text-sm">
              <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-stone-300 leading-relaxed">{t}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Q&A */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-serif text-stone-800">Q &amp; A</h2>
        <p className="text-stone-500 max-w-lg mx-auto">
          Nothing is off-limits — ask about specific tools, how to price your first project,
          how I got started, or what I wish I knew at your age.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {[
            { icon: 'fab fa-linkedin', label: 'LinkedIn', color: 'hover:text-blue-500' },
            { icon: 'fab fa-dribbble', label: 'Dribbble', color: 'hover:text-pink-500' },
            { icon: 'fab fa-behance', label: 'Behance', color: 'hover:text-blue-600' },
            { icon: 'fas fa-envelope', label: 'Email', color: 'hover:text-orange-500' },
          ].map(({ icon, label, color }) => (
            <a
              key={label}
              href="#"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-stone-200 text-stone-400 transition-colors ${color} hover:border-current text-sm`}
            >
              <i className={icon}></i> {label}
            </a>
          ))}
        </div>
        <p className="text-xs text-stone-300 mt-8">TechTalk · UI/UX &amp; Product Design Industry Preparation · 2026</p>
      </div>
    </footer>
  )
}
