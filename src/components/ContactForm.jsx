import { useState } from 'react'

const checkboxOptions = [
  'Netwerk oplossingen',
  'Glasvezel',
  'Data Bekabeling',
  'Wi-Fi Oplossingen',
  'Inbraak preventie',
  'Service & Support',
]

function ContactForm() {
  const [form, setForm] = useState({ naam: '', telefoon: '', email: '', toelichting: '', onderwerpen: [] })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setForm((prev) => ({
        ...prev,
        onderwerpen: checked ? [...prev.onderwerpen, value] : prev.onderwerpen.filter((o) => o !== value),
      }))
    } else {
      setForm((prev) => ({ ...prev, [name]: value }))
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 text-center shadow-card">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)' }}>
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Bedankt voor uw bericht!</h3>
        <p className="text-slate-500 text-sm">Wij nemen zo spoedig mogelijk contact met u op.</p>
      </div>
    )
  }

  const inputClass = "w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-slate-50 focus:bg-white"

  return (
    <div className="bg-white rounded-2xl p-8 shadow-card">
      <h3 className="text-2xl font-bold text-slate-900 mb-1 font-raleway">Neem contact op</h3>
      <p className="text-sm text-slate-500 mb-6">Wij reageren binnen één werkdag.</p>
      <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Naam *</label>
            <input type="text" name="naam" value={form.naam} onChange={handleChange} required placeholder="Uw naam" className={inputClass} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Telefoon</label>
            <input type="tel" name="telefoon" value={form.telefoon} onChange={handleChange} placeholder="Uw nummer" className={inputClass} />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">E-mailadres *</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="uw@email.nl" className={inputClass} />
        </div>

        <div>
          <p className="text-xs font-semibold text-slate-600 mb-2.5 uppercase tracking-wide">Betreft</p>
          <div className="grid grid-cols-2 gap-2">
            {checkboxOptions.map((option) => (
              <label key={option} className="flex items-center gap-2.5 cursor-pointer group/cb">
                <div className="relative">
                  <input
                    type="checkbox"
                    value={option}
                    checked={form.onderwerpen.includes(option)}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all duration-200 ${form.onderwerpen.includes(option) ? 'bg-blue-600 border-blue-600' : 'border-slate-300 group-hover/cb:border-blue-400'}`}>
                    {form.onderwerpen.includes(option) && (
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-xs text-slate-600 group-hover/cb:text-slate-800">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Toelichting</label>
          <textarea name="toelichting" value={form.toelichting} onChange={handleChange} rows={4} placeholder="Beschrijf uw vraag of situatie..." className={`${inputClass} resize-none`} />
        </div>

        <button type="submit" className="w-full btn-primary justify-center text-center py-3.5">
          Bericht versturen →
        </button>
      </form>
    </div>
  )
}

export default ContactForm
