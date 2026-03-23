const usps = [
  { label: 'Transparant',     color: '#60A5FA' },
  { label: 'Totaaloplossing', color: '#34D399' },
  { label: 'Leverancier',     color: '#A78BFA' },
]

function TopBar() {
  return (
    <div
      className="topbar-scan relative overflow-hidden text-xs"
      style={{ background: 'linear-gradient(90deg, #020817 0%, #0a1628 50%, #020817 100%)', borderBottom: '1px solid rgba(37,99,235,0.18)' }}
    >
      {/* Bottom glow accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.5) 30%, rgba(6,182,212,0.5) 70%, transparent 100%)' }} />

      <div className="container-main flex justify-between items-center py-2">

        {/* Left — USP chips */}
        <div className="hidden md:flex items-center gap-3">
          {usps.map((item) => (
            <span key={item.label} className="usp-chip">
              {/* Pulsing dot */}
              <span
                className="glow-dot inline-block w-2 h-2 rounded-full shrink-0"
                style={{ background: item.color, boxShadow: `0 0 6px 1px ${item.color}99` }}
              />
              <span className="font-semibold tracking-wide" style={{ color: '#CBD5E1', letterSpacing: '0.04em' }}>
                {item.label}
              </span>
            </span>
          ))}
        </div>

        {/* Right — Contact pills */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Divider */}
          <div className="hidden md:block w-px h-4 bg-slate-700 mr-1" />

          <a href="tel:0302374005" className="contact-pill">
            <span
              className="flex items-center justify-center w-4 h-4 rounded-full shrink-0"
              style={{ background: 'rgba(37,99,235,0.25)' }}
            >
              <svg className="w-2.5 h-2.5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </span>
            030 237 4 005
          </a>

          <a href="mailto:info@utpinfra.nl" className="contact-pill">
            <span
              className="flex items-center justify-center w-4 h-4 rounded-full shrink-0"
              style={{ background: 'rgba(6,182,212,0.2)' }}
            >
              <svg className="w-2.5 h-2.5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </span>
            info@utpinfra.nl
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar
