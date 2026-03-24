import { useState, useEffect } from 'react'

/* ── AVG Cookie Banner — wettelijk verplicht in NL ── */
function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('mk_cookies_accepted')
    if (!accepted) setTimeout(() => setShow(true), 1500)
  }, [])

  function accept() {
    localStorage.setItem('mk_cookies_accepted', 'true')
    setShow(false)
  }

  function decline() {
    localStorage.setItem('mk_cookies_accepted', 'functional')
    setShow(false)
  }

  if (!show) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-0"
      style={{ animation: 'fadeUp 0.5s ease-out' }}
    >
      <div className="max-w-4xl mx-auto md:mb-6">
        <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 md:flex md:items-center md:gap-6">
          <div className="flex-1 mb-4 md:mb-0">
            <p className="text-white font-bold text-sm mb-1">Cookies & Privacy</p>
            <p className="text-slate-400 text-xs leading-relaxed">
              Wij gebruiken cookies om uw ervaring op onze website te verbeteren en ons websiteverkeer te analyseren.
              Door op &quot;Accepteren&quot; te klikken gaat u akkoord met ons cookiebeleid conform de AVG/GDPR-wetgeving.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={decline}
              className="px-5 py-2.5 text-xs font-bold text-slate-400 border border-slate-600 rounded-xl hover:bg-slate-800 hover:text-white transition-all"
            >
              Alleen noodzakelijk
            </button>
            <button
              onClick={accept}
              className="px-5 py-2.5 text-xs font-bold text-white rounded-xl transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)' }}
            >
              Accepteren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
