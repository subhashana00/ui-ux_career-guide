import { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

const initialVotes = { never: 1, curious: 4, tried: 3, working: 1 }

export default function Hero() {
  const [votes, setVotes] = useState({ ...initialVotes })

  const total = Object.values(votes).reduce((a, b) => a + b, 0)

  const chartData = {
    labels: ['Never heard it', 'Curious about it', 'Tried Figma', 'Already working'],
    datasets: [
      {
        label: 'Audience',
        data: [votes.never, votes.curious, votes.tried, votes.working],
        backgroundColor: ['#e7e5e4', '#fdba74', '#fb923c', '#f97316'],
        borderRadius: 8,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 1 } },
      x: { grid: { display: false }, ticks: { font: { size: 10 } } },
    },
  }

  const options = [
    { key: 'never', emoji: '🙈', label: "Never heard of UI/UX before today" },
    { key: 'curious', emoji: '🤔', label: "Heard of it — curious to explore" },
    { key: 'tried', emoji: '🎨', label: "Tried Figma or designed something" },
    { key: 'working', emoji: '🚀', label: "Already working / freelancing in it" },
  ]

  return (
    <section id="hero" className="text-center space-y-8 section-fade">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold tracking-wide uppercase">
          <i className="fas fa-microphone-alt"></i>
          TechTalk · Higher Diploma in Software Engineering
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-stone-900 leading-tight">
          So You Want to<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">
            Design the Future?
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-stone-600">
          A no-fluff, honest conversation about the UI/UX &amp; Product Design industry —
          from understanding the roles, surviving the AI wave, to actually making money from it.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-stone-500">
          <span className="flex items-center gap-1.5">
            <i className="fas fa-user-tie text-orange-400"></i>
            UI/UX Designer &amp; Engineer · Freelance Product Designer
          </span>
          <span className="hidden md:inline text-stone-300">|</span>
          <span className="flex items-center gap-1.5">
            <i className="fas fa-comments text-orange-400"></i>
            Relaxed talk + open Q&amp;A at the end
          </span>
        </div>
      </div>

      {/* Live Icebreaker Poll */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 max-w-3xl mx-auto text-left">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">Live Poll — Quick Icebreaker</span>
        </div>
        <h3 className="text-xl font-serif font-semibold mb-1">
          Where are you right now with UI/UX?
        </h3>
        <p className="text-stone-400 mb-5 text-sm">Tap a card to vote — let's see the room 👇</p>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
          <div className="space-y-2.5">
            {options.map(({ key, emoji, label }) => (
              <button
                key={key}
                onClick={() => setVotes((p) => ({ ...p, [key]: p[key] + 1 }))}
                className="w-full text-left px-4 py-3 rounded-xl border border-stone-200 hover:bg-orange-50 hover:border-orange-300 transition-all flex justify-between items-center group text-sm"
              >
                <span className="font-medium">{emoji} &nbsp;{label}</span>
                <span className="text-stone-300 group-hover:text-orange-400 font-bold text-lg leading-none">+</span>
              </button>
            ))}
          </div>
          <div>
            <div className="chart-container" style={{ height: '200px' }}>
              <Bar data={chartData} options={chartOptions} />
            </div>
            <p className="text-xs text-stone-400 text-center mt-1">{total} votes so far</p>
          </div>
        </div>
      </div>

      {/* What we cover today */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
        {[
          { icon: 'fa-sitemap', label: 'The Roles & Differences' },
          { icon: 'fa-chart-line', label: 'SL & Global Market' },
          { icon: 'fa-robot', label: 'AI Impact & Survival' },
          { icon: 'fa-briefcase', label: 'Careers & Freelancing' },
        ].map(({ icon, label }) => (
          <div key={label} className="bg-white border border-stone-200 rounded-xl p-3 flex items-center gap-2 text-stone-600 hover:border-orange-200 transition-colors">
            <i className={`fas ${icon} text-orange-400 flex-shrink-0`}></i>
            <span className="text-xs font-medium">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
