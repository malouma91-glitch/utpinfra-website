import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import ContactForm from '../components/ContactForm'
import { services } from '../data/services'
import { HeroGeometric } from '../components/ui/shape-landing-hero'

/* ── USP features ── */
const features = [
  {
    title: 'Transparant',
    desc: 'Geen verrassingen. Duidelijke offertes, heldere communicatie en eerlijke prijzen. U weet altijd waar u aan toe bent.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Totaaloplossing',
    desc: 'Van advies en ontwerp tot installatie en nazorg. UTPinfra ontzorgt u volledig — van A tot Z.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Gecertificeerd leverancier',
    desc: 'Officieel leverancier van topmerken als Ubiquiti, Extreme Networks, HIKVISION en meer. Getest en beproefd.',
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
  { num: '03', title: 'Installatie',       desc: 'Professionele uitvoering door gecertificeerde monteurs.' },
  { num: '04', title: 'Oplevering & nazorg', desc: 'Overdracht, documentatie en doorlopende support.' },
]

/* ── Sections ── */
function ServicesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container-main">
        <div className="text-center mb-14">
          <span className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3 block">Wat wij doen</span>
          <h2 className="text-3xl md:text-4xl font-black font-raleway text-slate-900 mb-4">Onze diensten</h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            Complete IT-infrastructuuroplossingen voor bedrijven in het MKB en grotere organisaties.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/diensten" className="btn-primary">Bekijk alle diensten →</Link>
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
                alt="UTPinfra team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
              <div className="text-4xl font-black text-slate-900 mb-0.5">15<span className="text-blue-600">+</span></div>
              <div className="text-slate-500 text-sm font-medium">Jaar ervaring</div>
            </div>
          </div>
          <div>
            <span className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3 block">Over ons</span>
            <h2 className="text-3xl md:text-4xl font-black font-raleway text-slate-900 mb-6 leading-tight">Wie zijn wij?</h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              UTPinfra is een dynamische IT-infrastructuur onderneming gevestigd in Nieuwegein. Wij zijn gespecialiseerd in het realiseren van complete data-infrastructuren — van advies en ontwerp tot installatie en beheer.
            </p>
            <p className="text-slate-500 leading-relaxed mb-6">
              Of het nu gaat om nieuwbouw, uitbreiding of renovatie — de specialisten van UTPinfra denken graag met u mee. Uw project zien we als ons project.
            </p>
            <ul className="space-y-3 mb-8">
              {['Gecertificeerde monteurs', 'Eigen voorraad & snelle levering', 'Geen verborgen kosten', 'Doorlopende service en onderhoud'].map((item) => (
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
              <Link to="/wie-zijn-wij" className="btn-primary">Meer over ons →</Link>
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
          <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-3 block">Waarom UTPinfra</span>
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
              UTPinfra levert passende en hoogwaardige maatwerkoplossingen voor de zorg, het onderwijs, MKB, retail, hospitality, warehousing, recreatie, office en overheid.
            </p>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card mb-8">
              <div className="text-4xl font-black text-blue-600 leading-none mb-2">"</div>
              <p className="text-slate-600 italic text-sm leading-relaxed">
                Wij werken niet voor u, maar met u. Uw project is ons project — van eerste adviesgesprek tot en met de oplevering en nazorg.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)' }}>
                  UTP
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">UTPinfra</p>
                  <p className="text-slate-400 text-xs">Nieuwegein, Nederland</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: '📞', label: 'Telefoon', value: '030 237 4 005', href: 'tel:0302374005' },
                { icon: '✉️', label: 'E-mail',   value: 'info@utpinfra.nl', href: 'mailto:info@utpinfra.nl' },
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

/* ── Page ── */
function Home() {
  return (
    <div>
      <HeroGeometric
        badge="IT Infrastructuur Specialist"
        title1="Toekomstbestendige"
        title2="IT-Infrastructuur"
        description="Van glasvezel en bekabeling tot Wi-Fi, beveiliging en netwerk oplossingen. UTPinfra ontzorgt u volledig en werkt niet voor u, maar met u."
        ctaPrimary={{ label: 'Vrijblijvend gesprek →', href: '/contact' }}
        ctaSecondary={{ label: 'Onze diensten', href: '/diensten' }}
      />
      <ServicesSection />
      <AboutSection />
      <FeaturesSection />
      <ProcessSection />
      <ContactSection />
    </div>
  )
}

export default Home
