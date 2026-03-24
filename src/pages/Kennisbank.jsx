import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const articles = [
  {
    id: 'cat6-vs-cat6a',
    title: 'Cat6 vs Cat6A — Wat is het verschil en wat heeft u nodig?',
    category: 'Infra',
    color: '#2563EB',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    intro: 'Bij netwerkaanleg komt u al snel de keuze tegen: Cat6 of Cat6A? Het verschil lijkt klein, maar de impact op uw netwerk is groot.',
    content: [
      { type: 'h2', text: 'Wat is Cat6?' },
      { type: 'p', text: 'Cat6 (Category 6) is de standaard netwerkkabel die snelheden tot 1 Gbps ondersteunt over een afstand van maximaal 100 meter. Voor de meeste kantooromgevingen met minder dan 50 werkplekken is Cat6 nog steeds een prima keuze.' },
      { type: 'h2', text: 'Wat is Cat6A?' },
      { type: 'p', text: 'Cat6A (Category 6 Augmented) is de verbeterde versie. Het grote verschil: Cat6A ondersteunt snelheden tot 10 Gbps over 100 meter. De kabel is dikker, beter afgeschermd tegen interferentie en biedt betere toekomstbestendigheid.' },
      { type: 'h2', text: 'Wanneer kiest u voor Cat6A?' },
      { type: 'p', text: 'Wij adviseren Cat6A bij nieuwbouwprojecten, datacenters, zorginstellingen en bedrijven die toekomstbestendig willen bouwen. De meerkosten zijn beperkt (10-15%) maar de extra capaciteit betaalt zich terug zodra u meer bandbreedte nodig heeft.' },
      { type: 'h2', text: 'Onze aanbeveling' },
      { type: 'p', text: 'Bij MK CoreLink Group installeren wij standaard Cat6A. De reden is simpel: de bekabeling in uw pand gaat 25+ jaar mee, maar uw bandbreedtebehoefte groeit elk jaar. Met Cat6A bent u voorbereid op de toekomst — zonder opnieuw te hoeven investeren in bekabeling.' },
    ],
  },
  {
    id: 'gdp-transport',
    title: 'Wat is GDP-gecertificeerd transport en waarom is het belangrijk?',
    category: 'Transport',
    color: '#10B981',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    intro: 'GDP staat voor Good Distribution Practice — de Europese standaard voor het veilig transporteren van farmaceutische en medische producten.',
    content: [
      { type: 'h2', text: 'Wat houdt GDP in?' },
      { type: 'p', text: 'Good Distribution Practice (GDP) is een kwaliteitssysteem dat waarborgt dat geneesmiddelen en medische producten tijdens opslag en transport in goede staat blijven. Het is wettelijk verplicht voor iedereen die betrokken is bij de distributie van farmaceutische producten.' },
      { type: 'h2', text: 'Waarom is het belangrijk?' },
      { type: 'p', text: 'Medicijnen, vaccins en labmonsters zijn temperatuurgevoelig. Een onderbreking in de koelketen kan een heel batch waardeloos maken — of erger, gevaarlijk. GDP-certificering garandeert dat uw zending onder de juiste omstandigheden wordt vervoerd.' },
      { type: 'h2', text: 'Hoe werkt MK Transport hiermee?' },
      { type: 'p', text: 'Al onze chauffeurs zijn GDP-gecertificeerd. Wij rijden met temperatuurgecontroleerde voertuigen, documenteren elke stap en kunnen op verzoek de volledige keten traceren. Van ophalen bij het laboratorium tot afleveren bij de apotheek — alles conform GDP-richtlijnen.' },
    ],
  },
  {
    id: 'camerasysteem-avg',
    title: 'Camerabewaking en de AVG — Waar moet u op letten?',
    category: 'Security',
    color: '#EF4444',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    intro: 'Een camerasysteem installeren is technisch eenvoudig. Maar voldoen aan de AVG/GDPR-wetgeving? Daar gaat het vaak mis.',
    content: [
      { type: 'h2', text: 'De AVG en cameratoezicht' },
      { type: 'p', text: 'De Algemene Verordening Gegevensbescherming (AVG/GDPR) stelt strenge eisen aan het gebruik van camerabewaking. Camera\'s registreren persoonsgegevens (beelden), en daar zijn regels aan verbonden.' },
      { type: 'h2', text: 'Wat moet u regelen?' },
      { type: 'p', text: '1. Gerechtvaardigd belang — U moet een goede reden hebben (beveiliging, diefstalpreventie). 2. Informatieplicht — Duidelijke bordjes bij de ingang. 3. Bewaartermijn — Beelden maximaal 4 weken bewaren. 4. Toegangsbeleid — Alleen geautoriseerde personen mogen beelden bekijken. 5. DPIA — Bij grootschalige bewaking is een Data Protection Impact Assessment verplicht.' },
      { type: 'h2', text: 'Hoe helpt MK Security?' },
      { type: 'p', text: 'Wij leveren bij elke installatie een compleet AVG-pakket: camerabeleid document, waarschuwingsborden, bewaartermijn configuratie in de NVR en een gebruikershandleiding. Zo voldoet u direct aan de wet — zonder zelf alles uit te hoeven zoeken.' },
    ],
  },
  {
    id: 'wifi-site-survey',
    title: 'Wat is een Wi-Fi site survey en waarom heeft u het nodig?',
    category: 'Infra',
    color: '#2563EB',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    intro: 'Een Wi-Fi site survey is het verschil tussen een netwerk dat "wel werkt" en een netwerk dat overal perfect werkt.',
    content: [
      { type: 'h2', text: 'Wat is een site survey?' },
      { type: 'p', text: 'Een Wi-Fi site survey is een professionele meting van uw gebouw om de optimale plaatsing van access points te bepalen. Wij meten signaalsterkte, interferentie, obstakels (muren, metaal, glas) en het verwachte aantal gebruikers per zone.' },
      { type: 'h2', text: 'Waarom is het nodig?' },
      { type: 'p', text: 'Zonder site survey plaatst u access points op gevoel. Het gevolg: dode zones, overbelaste access points en frustratie bij medewerkers. Een site survey voorkomt dit — het is een investering van een paar uur die u jaren aan problemen bespaart.' },
      { type: 'h2', text: 'Hoe doen wij dit?' },
      { type: 'p', text: 'Wij voeren zowel passieve als actieve site surveys uit met professionele meetapparatuur. Na de meting krijgt u een heatmap van uw pand met de aanbevolen AP-plaatsing, kanaalindeling en verwachte capaciteit. Onze engineers installeren vervolgens Ubiquiti UniFi access points met naadloze roaming.' },
    ],
  },
  {
    id: 'netwerk-kosten',
    title: 'Wat kost netwerkaanleg voor een kantoor? Een eerlijk overzicht',
    category: 'Infra',
    color: '#2563EB',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    intro: 'De meestgestelde vraag: wat kost het? Wij geven u een eerlijk en transparant overzicht van de kosten voor netwerkaanleg.',
    content: [
      { type: 'h2', text: 'Kostenfactoren' },
      { type: 'p', text: 'De kosten van netwerkaanleg hangen af van: aantal datapunten, type bekabeling (Cat6A of glasvezel), afstand, aantal access points, switches en firewalls, en de complexiteit van het pand (nieuwbouw vs. bestaand).' },
      { type: 'h2', text: 'Richtprijzen' },
      { type: 'p', text: 'Klein kantoor (10-20 werkplekken): €2.500 - €6.000. Middelgroot kantoor (20-50 werkplekken): €6.000 - €15.000. Groot kantoor/pand (50+ werkplekken): €15.000 - €40.000+. Dit zijn richtprijzen inclusief materiaal, arbeid en certificering. De exacte prijs hangt af van uw specifieke situatie.' },
      { type: 'h2', text: 'Wat zit er inbegrepen?' },
      { type: 'p', text: 'Bij MK CoreLink Group is onze offerte altijd compleet: materiaal, arbeid, patchkasten, switches, labeling, certificering en documentatie. Geen verborgen kosten, geen verrassingen achteraf. Wij geven altijd vooraf een gedetailleerde specificatie zodat u precies weet waar u aan toe bent.' },
    ],
  },
]

function Kennisbank() {
  const [activeArticle, setActiveArticle] = useState(null)

  if (activeArticle) {
    const a = articles.find((x) => x.id === activeArticle)
    return (
      <div>
        <section className="py-20" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0F2044 100%)' }}>
          <div className="container-main">
            <button onClick={() => setActiveArticle(null)} className="text-blue-400 text-sm font-bold mb-6 hover:underline flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Terug naar kennisbank
            </button>
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white mb-4 inline-block" style={{ background: a.color }}>{a.category}</span>
            <h1 className="text-3xl md:text-4xl font-black font-raleway text-white mb-4 leading-tight">{a.title}</h1>
            <p className="text-slate-400 text-sm">{a.readTime} leestijd</p>
          </div>
        </section>
        <section className="py-16 bg-white">
          <article className="container-main max-w-3xl">
            <img src={a.image} alt={a.title} className="w-full h-64 object-cover rounded-2xl mb-10" loading="lazy" />
            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">{a.intro}</p>
            {a.content.map((block, i) => (
              block.type === 'h2'
                ? <h2 key={i} className="text-xl font-black text-slate-900 mt-10 mb-4">{block.text}</h2>
                : <p key={i} className="text-slate-600 leading-relaxed mb-4">{block.text}</p>
            ))}
            <div className="mt-12 bg-blue-50 rounded-2xl border border-blue-200 p-8 text-center">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Vragen over dit onderwerp?</h3>
              <p className="text-slate-500 text-sm mb-4">Onze specialisten helpen u graag verder — geheel vrijblijvend.</p>
              <Link to="/contact" className="btn-primary">Neem contact op &rarr;</Link>
            </div>
          </article>
        </section>
      </div>
    )
  }

  return (
    <div>
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0F2044 100%)' }}>
        <div className="container-main text-center">
          <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-3 block">Kennisbank</span>
          <h1 className="text-4xl md:text-5xl font-black font-raleway text-white mb-4">Kennis delen, vertrouwen bouwen</h1>
          <p className="text-slate-400 max-w-lg mx-auto">Artikelen, tips en inzichten over transport, IT-infrastructuur en beveiliging. Geschreven door onze specialisten.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <ScrollReveal key={a.id} delay={i * 100}>
                <button
                  onClick={() => setActiveArticle(a.id)}
                  className="text-left bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group w-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white" style={{ background: a.color }}>{a.category}</span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-black/50 text-white">{a.readTime}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">{a.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{a.intro}</p>
                    <span className="inline-block mt-4 text-sm font-bold text-blue-600 group-hover:underline">Lees meer &rarr;</span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Kennisbank
