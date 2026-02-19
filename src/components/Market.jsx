import { Bar, Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Filler, Tooltip, Legend)

const trendData = {
  labels: ['2021', '2022', '2023', '2024', '2025', '2026→'],
  datasets: [
    {
      label: 'Global UX Demand',
      data: [65, 75, 72, 86, 93, 98],
      borderColor: '#2563eb',
      backgroundColor: 'rgba(37, 99, 235, 0.08)',
      tension: 0.4,
      fill: true,
      pointRadius: 4,
    },
    {
      label: 'Sri Lanka Tech Growth',
      data: [38, 52, 64, 76, 87, 92],
      borderColor: '#16a34a',
      backgroundColor: 'rgba(22, 163, 74, 0.08)',
      tension: 0.4,
      fill: true,
      pointRadius: 4,
    },
  ],
}

const trendOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'bottom', labels: { font: { size: 11 } } },
    tooltip: { mode: 'index', intersect: false },
  },
  scales: { y: { display: false } },
}

const slSalaryData = {
  labels: ['Intern', 'Junior', 'Mid', 'Senior', 'Lead / Head'],
  datasets: [
    {
      label: 'Avg LKR/month (thousands)',
      data: [40, 85, 160, 250, 380],
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
    tooltip: {
      callbacks: { label: (ctx) => `LKR ${ctx.raw}k/mo` },
    },
  },
  scales: {
    x: { grid: { display: false } },
    y: { display: false },
  },
}

const slCompanies = [
  { name: '99x Technology', type: 'Product Engineering', note: 'Active UI/UX hiring' },
  { name: 'WSO2', type: 'Open Source Platform', note: 'Strong design culture' },
  { name: 'Sysco Labs', type: 'F&B Tech Products', note: 'Product design focused' },
  { name: 'Orion City startups', type: 'Startup Ecosystem', note: 'Multiple design roles' },
  { name: 'IronOne Technologies', type: 'Digital Products', note: 'Fintech design' },
  { name: 'Payhere / Frimi', type: 'Fintech', note: 'Growing product teams' },
]

export default function Market() {
  return (
    <section id="market" className="scroll-mt-24 section-fade">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-3">2. The Market — SL &amp; Worldwide</h2>
        <p className="text-stone-600 max-w-3xl">
          Understanding the market before you enter it is smart. Here's what the landscape actually looks like in 2025–2026.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { num: '+23%', label: 'UX job growth (US BLS)', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-100' },
          { num: '$95k', label: 'Avg UX salary in US/yr', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-100' },
          { num: 'LKR 160k', label: 'Avg mid-level SL', color: 'text-green-700', bg: 'bg-green-50 border-green-100' },
          { num: '$25–50/hr', label: 'SL freelance to global', color: 'text-orange-600', bg: 'bg-orange-50 border-orange-100' },
        ].map(({ num, label, color, bg }) => (
          <div key={label} className={`${bg} border rounded-xl p-4 text-center`}>
            <div className={`text-2xl font-bold ${color} mb-1`}>{num}</div>
            <div className="text-xs text-stone-500">{label}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: SL + Global context */}
        <div className="space-y-6">
          {/* Sri Lanka */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <i className="fas fa-flag"></i>
              </div>
              <div>
                <h4 className="font-bold text-stone-800">Sri Lanka</h4>
                <p className="text-xs text-stone-400">Evolving fast, opportunities are real</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-stone-600 mb-4">
              <li className="flex gap-2"><i className="fas fa-check text-green-500 mt-0.5 flex-shrink-0"></i> Shift from outsourcing to product-based companies</li>
              <li className="flex gap-2"><i className="fas fa-check text-green-500 mt-0.5 flex-shrink-0"></i> USD freelance earnings = massive LKR advantage</li>
              <li className="flex gap-2"><i className="fas fa-check text-green-500 mt-0.5 flex-shrink-0"></i> Colombo startup scene growing (Orion City, Trace Expert City)</li>
              <li className="flex gap-2"><i className="fas fa-check text-green-500 mt-0.5 flex-shrink-0"></i> Remote work for EU/US companies from SL is increasingly normal</li>
            </ul>
            <div>
              <h5 className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">SL Companies Actively Hiring Designers</h5>
              <div className="flex flex-wrap gap-2">
                {slCompanies.map((c) => (
                  <span key={c.name} className="px-2 py-1 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-600 font-medium">
                    {c.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Global */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <i className="fas fa-globe"></i>
              </div>
              <div>
                <h4 className="font-bold text-stone-800">Worldwide</h4>
                <p className="text-xs text-stone-400">Remote-first, product-mindset driven</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-stone-600">
              <li className="flex gap-2"><i className="fas fa-check text-blue-500 mt-0.5 flex-shrink-0"></i> <span><strong>US:</strong> UX Designer avg $95k–$120k/yr (BLS 2025)</span></li>
              <li className="flex gap-2"><i className="fas fa-check text-blue-500 mt-0.5 flex-shrink-0"></i> <span><strong>EU:</strong> Senior Product Designer €70k–€100k in tech hubs</span></li>
              <li className="flex gap-2"><i className="fas fa-check text-blue-500 mt-0.5 flex-shrink-0"></i> Companies want designers who <em>understand code</em> — hybrid roles pay 30–50% more</li>
              <li className="flex gap-2"><i className="fas fa-check text-blue-500 mt-0.5 flex-shrink-0"></i> Big tech (Apple, Google, Meta) have dedicated design systems teams</li>
            </ul>
          </div>
        </div>

        {/* Right: Charts */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200">
            <h4 className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-4 text-center">Industry Growth Trend (Index)</h4>
            <div className="chart-container" style={{ height: '200px' }}>
              <Line data={trendData} options={trendOptions} />
            </div>
            <p className="text-center text-xs text-stone-400 mt-2">*Based on job posting & industry report data 2021–2026</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200">
            <h4 className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-4 text-center">SL Salary Range — LKR/month</h4>
            <div className="chart-container" style={{ height: '160px' }}>
              <Bar data={slSalaryData} options={salaryOptions} />
            </div>
            <p className="text-center text-xs text-stone-400 mt-2">Approximate ranges across SL tech companies (2025)</p>
          </div>
        </div>
      </div>

      {/* Key insight */}
      <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 items-start">
        <i className="fas fa-lightbulb text-amber-500 mt-0.5 flex-shrink-0"></i>
        <p className="text-sm text-amber-800">
          <strong>The real opportunity for you:</strong> As software engineering students, you already understand how products are built.
          Adding UI/UX skills makes you a <strong>hybrid designer-engineer</strong> — the most in-demand profile in 2025.
          Companies will fight over you.
        </p>
      </div>
    </section>
  )
}
