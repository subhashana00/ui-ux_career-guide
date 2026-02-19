import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Landscape from './components/Landscape'
import Market from './components/Market'
import AIImpact from './components/AIImpact'
import CareerPaths from './components/CareerPaths'
import Toolkit from './components/Toolkit'
import Footer from './components/Footer'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.section-fade').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="antialiased">
      <Navbar />
      <main className="pt-20 pb-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-24">
        <Hero />
        <Landscape />
        <Market />
        <AIImpact />
        <CareerPaths />
        <Toolkit />
        <Footer />
      </main>
    </div>
  )
}

export default App
