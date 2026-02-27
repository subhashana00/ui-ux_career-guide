import { useState, useCallback } from 'react'

// Read the active language from the googtrans cookie set by Google Translate
function getActiveLang() {
  if (typeof window === 'undefined') return 'en'
  if (typeof window.getCurrentLang === 'function') return window.getCurrentLang()
  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/en\/([^;]+)/)
  if (match && match[1] && match[1] !== 'en') return match[1]
  return 'en'
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  // Initialise from cookie so button label is correct after page reload
  const [lang, setLang] = useState(() => getActiveLang())

  const links = [
    { href: '#landscape', label: 'The Roles' },
    { href: '#market', label: 'Market' },
    { href: '#ai-impact', label: 'AI Impact' },
    { href: '#career', label: 'Career & Freelance' },
    { href: '#toolkit', label: 'Tools & Learning' },
  ]

  const toggleLanguage = useCallback(() => {
    const next = lang === 'en' ? 'si' : 'en'
    setLang(next)
    if (typeof window.setPageLanguage === 'function') {
      window.setPageLanguage(next)
    }
  }, [lang])

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
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-stone-600 hover:text-orange-500 transition-colors text-sm font-medium"
              >
                {l.label}
              </a>
            ))}

            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              title={lang === 'en' ? 'Switch to Sinhala' : 'Switch to English'}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-300 hover:border-orange-400 hover:text-orange-500 text-stone-600 text-xs font-semibold transition-all duration-200 select-none"
            >
              <i className="fas fa-language text-sm"></i>
              <span>{lang === 'en' ? 'සිං' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile right side: language toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              title={lang === 'en' ? 'Switch to Sinhala' : 'Switch to English'}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-stone-300 hover:border-orange-400 hover:text-orange-500 text-stone-600 text-xs font-semibold transition-all duration-200 select-none"
            >
              <i className="fas fa-language text-sm"></i>
              <span>{lang === 'en' ? 'සිං' : 'EN'}</span>
            </button>

            <button
              className="text-stone-600 hover:text-stone-900 focus:outline-none"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
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
