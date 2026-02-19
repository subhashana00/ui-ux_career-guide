import { useState } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { href: '#landscape', label: 'The Roles' },
    { href: '#market', label: 'Market' },
    { href: '#ai-impact', label: 'AI Impact' },
    { href: '#career', label: 'Career & Freelance' },
    { href: '#toolkit', label: 'Tools & Learning' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-[#fafaf9]/90 backdrop-blur-md z-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-bold text-xl tracking-tight text-stone-800">
              TechTalk<span className="text-orange-400">.design</span>
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-stone-600 hover:text-orange-500 transition-colors text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden text-stone-600 hover:text-stone-900 focus:outline-none"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#fafaf9] border-b border-stone-200 px-4 py-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 text-stone-600 hover:text-orange-500 border-b border-stone-100 last:border-0 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
