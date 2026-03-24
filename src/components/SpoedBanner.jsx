/* ── Spoed/Storing banner voor in TopBar ── */
function SpoedBanner() {
  return (
    <a
      href="tel:0614890915"
      className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 hover:scale-105"
      style={{
        background: 'linear-gradient(135deg, rgba(239,68,68,0.25), rgba(239,68,68,0.10))',
        border: '1px solid rgba(239,68,68,0.35)',
        color: '#FCA5A5',
      }}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
      </span>
      Storing? Bel direct!
    </a>
  )
}

export default SpoedBanner
