import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import { divisions } from '../data/services'
import { HeroGeometric } from '../components/ui/shape-landing-hero'

/* ── Divisie kleuren ── */
const divColors = { transport: '#10B981', infra: '#2563EB', security: '#EF4444' }

/* ── USP features ── */
const features = [
  {
    title: 'Drie Divisies, Één Partner',
    desc: 'Transport, IT-infrastructuur en beveiliging — alles onder één dak. Geen gedoe met meerdere leveranciers.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Betrouwbaar & Transparant',
    desc: 'Geen verrassingen. Duidelijke offertes, heldere communicatie en eerlijke prijzen. U weet altijd waar u aan toe bent.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Gecertificeerd & Ervaren',
    desc: 'Sinds 2016 actief. Gecertificeerde medewerkers, eigen voorraad en snelle levering. Partner van topmerken.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
]

/* ── Process steps ── */
const steps = [
  { num: '01', title: 'Adviesgesprek',    desc: 'Kosteloos kennismaken en uw wensen inventariseren.' },
  { num: '02', title: 'Ontwerp & offerte', desc: 'Op maat gemaakte oplossing met transparante prijsopgave.' },
  { num: '03', title: 'Uitvoering',       desc: 'Professionele uitvoering door ervaren vakmensen.' },
  { num: '04', title: 'Oplevering & nazorg', desc: 'Overdracht, documentatie en doorlopende support.' },
]

/* ── Divisies Sectie ── */
function DivisionsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container-main">
        <div className="text-center mb-14">
          <span className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3 block">Onze Divisies</span>
          <h2 className="text-3xl md:text-4xl font-black font-raleway text-slate-900 mb-4">Drie pijlers, één groep</h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            MK CoreLink Group bedient u vanuit drie gespecialiseerde divisies. Elk met hun eigen expertise, samen sterk.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {divisions.map((div) => (
            <div key={div.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              {/* Color bar top */}
              <div className="h-1.5" style={{ background: divColors[div.id] }} />
              <div className="p-8">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `linear-gradient(135deg, ${divColors[div.id]}, ${divColors[div.id]}cc)` }}>
                  {div.id === 'transport' && (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                  )}
                  {div.id === 'infra' && (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  )}
                  {div.id === 'security' && (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{div.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: divColors[div.id] }}>{div.tagline}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{div.description}</p>
                <ul className="space-y-2 mb-6">
                  {div.services.map((s) => (
                    <li key={s.id} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: divColors[div.id] }} />
                      {s.title}
                    </li>
                  ))}
                </ul>
                <Link to="/diensten" className="text-sm font-bold hover:underline transition-colors" style={{ color: divColors[div.id] }}>
                  Meer informatie &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative hidden md:block">
            <div className="rounded-2xl overflow-hidden shadow-xl h-96">
              <img
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80"
                alt="MK CoreLink Group team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
              <div className="text-4xl font-black text-slate-900 mb-0.5">2016<span className="text-blue-600">+</span></div>
              <div className="text-slate-500 text-sm font-medium">Sinds opgericht</div>
            </div>
          </div>
          <div>
            <span className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3 block">Over ons</span>
            <h2 className="text-3xl md:text-4xl font-black font-raleway text-slate-900 mb-6 leading-tight">Wie is MK CoreLink Group?</h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              MK CoreLink Group B.V. is een dynamische onderneming gevestigd in Bilthoven. Wij zijn gespecialiseerd in drie kerngebieden: medisch transport, IT-infrastructuur en beveiliging.
            </p>
            <p className="text-slate-500 leading-relaxed mb-6">
              Met onze drie divisies — MK Transport, MK Infra en MK Security — bieden wij een totaaloplossing. Uw project is ons project.
            </p>
            <ul className="space-y-3 mb-8">
              {['Gecertificeerde vakmensen', 'Drie divisies onder één dak', 'Geen verborgen kosten', 'Doorlopende service en onderhoud'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)' }}>
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-slate-700 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <Link to="/wie-zijn-wij" className="btn-primary">Meer over ons &rarr;</Link>
              <Link to="/contact" className="btn-outline !text-slate-700 !border-slate-300 hover:!border-blue-500 hover:!text-blue-600">Contact opnemen</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0F2044 100%)' }}>
      <div className="container-main">
        <div className="text-center mb-14">
          <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-3 block">Waarom MK CoreLink Group</span>
          <h2 className="text-3xl md:text-4xl font-black font-raleway text-white mb-4">Onze kernwaarden</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)' }}>
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-main">
        <div className="text-center mb-14">
          <span className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3 block">Hoe wij werken</span>
          <h2 className="text-3xl md:text-4xl font-black font-raleway text-slate-900 mb-4">Van idee tot oplevering</h2>
          <p className="text-slate-500 max-w-lg mx-auto">Een gestructureerd proces dat u volledig ontzorgt en het beste resultaat garandeert.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-30" />
          {steps.map((step, i) => (
            <div key={step.num} className="relative text-center">
              <div className="w-20 h-20 rounded-2xl mx-auto mb-5 flex items-center justify-center text-2xl font-black text-white shadow-blue relative z-10"
                style={{ background: `linear-gradient(135deg, #2563EB ${i * 15}%, #06B6D4 100%)` }}>
                {step.num}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3 block">Contact</span>
            <h2 className="text-3xl md:text-4xl font-black font-raleway text-slate-900 mb-6 leading-tight">
              Neem vrijblijvend<br />contact op
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              MK CoreLink Group levert passende en hoogwaardige maatwerkoplossingen. Of het nu gaat om transport, IT-infrastructuur of beveiliging — wij denken graag met u mee.
            </p>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card mb-8">
              <div className="text-4xl font-black text-blue-600 leading-none mb-2">&ldquo;</div>
              <p className="text-slate-600 italic text-sm leading-relaxed">
                Wij werken niet voor u, maar met u. Uw project is ons project — van eerste adviesgesprek tot en met de oplevering en nazorg.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)' }}>
                  MK
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">MK CoreLink Group</p>
                  <p className="text-slate-400 text-xs">Bilthoven, Nederland</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: '\u{1F4DE}', label: 'Telefoon', value: '06 148 909 15', href: 'tel:0614890915' },
                { icon: '\u{2709}\u{FE0F}', label: 'E-mail',   value: 'mkgroup@corelink.nl', href: 'mailto:mkgroup@corelink.nl' },
              ].map((c) => (
                <a key={c.label} href={c.href} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-card transition-all duration-200 group">
                  <span className="text-xl">{c.icon}</span>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">{c.label}</p>
                    <p className="text-slate-700 font-semibold group-hover:text-blue-600 transition-colors">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

function Home() {
  return (
    <div>
      <HeroGeometric
        badge="Transport · Infra · Security"
        title1="MK CoreLink"
        title2="Group"
        description="Drie divisies, één partner. Van medisch transport en IT-infrastructuur tot beveiligingsoplossingen — MK CoreLink Group ontzorgt u volledig."
        ctaPrimary={{ label: 'Vrijblijvend gesprek \u2192', href: '/contact' }}
        ctaSecondary={{ label: 'Onze diensten', href: '/diensten' }}
      />
      <DivisionsSection />
      <AboutSection />
      <FeaturesSection />
      <ProcessSection />
      <ContactSection />
    </div>
  )
}

export default Home
