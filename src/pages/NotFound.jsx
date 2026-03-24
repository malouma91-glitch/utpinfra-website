import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <div className="text-8xl font-black font-raleway mb-4"
          style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          404
        </div>
        <h1 className="text-2xl font-black font-raleway text-slate-900 mb-3">Pagina niet gevonden</h1>
        <p className="text-slate-500 mb-8 max-w-sm mx-auto">
          De pagina die u zoekt bestaat niet of is verplaatst. Ga terug naar de homepage.
        </p>
        <Link to="/" className="btn-primary">Terug naar home &rarr;</Link>
      </div>
    </div>
  )
}

export default NotFound
