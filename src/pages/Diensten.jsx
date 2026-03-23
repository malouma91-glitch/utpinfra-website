import { Link } from 'react-router-dom'
import { services } from '../data/services'
import ContactForm from '../components/ContactForm'

function ServiceDetail({ service, index }) {
  const isEven = index % 2 === 0
  return (
    <div id={`dienst-${service.id}`} className={`py-20 ${isEven ? 'bg-white' : 'bg-slate-50'}`}>
      <div className="container-main">
        <div className={`grid md:grid-cols-2 gap-14 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
          {/* Image */}
          <div className={isEven ? '' : 'md:order-2'}>
            <div className="rounded-2xl overflow-hidden shadow-xl h-72 relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,22,40,0.3), transparent)' }} />
            </div>
          </div>

          {/* Content */}
          <div className={isEven ? '' : 'md:order-1'}>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-white mb-5"
              style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)' }}>
              <span className="text-xs font-black">0{service.id}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black font-raleway text-slate-900 mb-4">{service.title}</h2>
            <p className="text-slate-500 leading-relaxed mb-6">{service.longDesc}</p>
            <Link to="/contact" className="btn-primary">
              Meer informatie →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function Diensten() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #020817 0%, #0A1628 55%, #0F2044 100%)' }}>
        <div className="absolute inset-0 dot-pattern" />
        <div className="container-main relative z-10">
          <span className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-4 block">
            <Link to="/" className="hover:text-white transition-colors">Home</Link> / Diensten
          </span>
          <h1 className="text-4xl md:text-5xl font-black font-raleway text-white mb-4">Onze diensten</h1>
          <p className="text-slate-300 max-w-xl leading-relaxed">
            Complete IT-infrastructuuroplossingen — van glasvezel en bekabeling tot Wi-Fi, beveiliging en netwerk. UTPinfra is uw totaalpartner.
          </p>
        </div>
      </section>

      {/* Quick links */}
      <section className="bg-white py-6 border-b border-slate-200 sticky top-[108px] z-40 shadow-sm">
        <div className="container-main">
          <div className="flex flex-wrap gap-2 justify-center">
            {services.map((s) => (
              <a key={s.id} href={`#dienst-${s.id}`}
                className="text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-full transition-all duration-200">
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service details */}
      {services.map((service, i) => (
        <ServiceDetail key={service.id} service={service} index={i} />
      ))}

      {/* CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3 block">Offerte</span>
              <h2 className="text-3xl font-black font-raleway text-slate-900 mb-4">Interesse in een dienst?</h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Wilt u meer weten over een van onze diensten of een vrijblijvende offerte aanvragen? Wij helpen u graag verder en reageren binnen één werkdag.
              </p>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
                {[
                  { label: 'Telefoon', val: '030 237 4 005', href: 'tel:0302374005' },
                  { label: 'E-mail', val: 'info@utpinfra.nl', href: 'mailto:info@utpinfra.nl' },
                ].map((c) => (
                  <a key={c.label} href={c.href} className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                    <span className="text-blue-600 font-bold text-sm w-16">{c.label}:</span>
                    <span className="font-semibold">{c.val}</span>
                  </a>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Diensten
