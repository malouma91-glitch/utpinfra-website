/* ═══════════════════════════════════════════════════════
   MK CoreLink Group B.V. — Team per divisie
   Mix van binnenlandse en buitenlandse medewerkers
═══════════════════════════════════════════════════════ */

export const team = {
  transport: {
    division: 'MK Transport',
    color: '#10B981',
    certifications: [
      'ADR Certificaat (gevaarlijke stoffen vervoer)',
      'GDP-Gecertificeerd (Good Distribution Practice)',
      'Chauffeursdiploma CCV',
      'EHBO / BHV Gecertificeerd',
      'Koeriersverzekering CMR',
    ],
    members: [
      {
        name: 'Youssef El Amrani',
        role: 'Teamleider Medisch Transport',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80',
        bio: 'Youssef stuurt ons medisch transportteam aan en coördineert dagelijks de routes voor ziekenhuizen en laboratoria in de Randstad. Met zijn achtergrond in logistiek management en meer dan 6 jaar ervaring in medisch vervoer, zorgt hij ervoor dat elke zending op tijd en veilig aankomt.',
        specialisaties: ['Medische koeriersdiensten', 'Route-optimalisatie', 'GDP-compliance', 'Kwaliteitsborging'],
      },
      {
        name: 'Lisa van der Berg',
        role: 'Koerier & Planner',
        photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300&q=80',
        bio: 'Lisa is onze meest ervaren koerier en combineert rijervaring met planning. Ze kent elke snelweg en afslag in Nederland en verzorgt de dagelijkse planning van onze distributie- en koeriersritten. Betrouwbaar, snel en altijd met een glimlach.',
        specialisaties: ['Same-day delivery', 'Distributie planning', 'Klantenservice', 'ADR-gecertificeerd'],
      },
    ],
  },

  infra: {
    division: 'MK Infra',
    color: '#2563EB',
    certifications: [
      'VCA** Gecertificeerd (Veiligheid)',
      'TIA/EIA-568 Bekabelingscertificering',
      'ISO 11801 Gecertificeerd Installateur',
      'Ubiquiti Enterprise Wireless Admin (UEWA)',
      'FLUKE Networks Certified Technician',
      'NEN 2768 (Gestructureerde bekabeling)',
    ],
    members: [
      {
        name: 'Karim Charradi',
        role: 'Lead Datamonteur & Netwerkspecialist',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&h=300&q=80',
        bio: 'Karim is onze senior datamonteur en medeoprichter van MK CoreLink Group. Met jarenlange ervaring in gestructureerde bekabeling en netwerk aanleg leidt hij de technische uitvoering van al onze infra-projecten. Van CAT6A-installaties tot glasvezel lassen — Karim beheerst het allemaal.',
        specialisaties: ['Gestructureerde bekabeling (CAT6A/CAT7)', 'Glasvezel lassen & meten (OTDR)', 'Patchkast inrichting', 'Netwerk configuratie'],
      },
      {
        name: 'Priya Ramcharan',
        role: 'Netwerk Engineer',
        photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&h=300&q=80',
        bio: 'Priya is onze netwerk engineer en verantwoordelijk voor het ontwerp en de configuratie van bedrijfsnetwerken. Ze is gecertificeerd Ubiquiti specialist en heeft ruime ervaring met VLAN-architectuur, firewalls en Wi-Fi site surveys. Priya zorgt ervoor dat elk netwerk betrouwbaar en toekomstbestendig is.',
        specialisaties: ['Ubiquiti UniFi deployments', 'VLAN & firewall configuratie', 'Wi-Fi site surveys', 'Netwerk documentatie'],
      },
    ],
  },

  security: {
    division: 'MK Security',
    color: '#EF4444',
    certifications: [
      'Hikvision Certified Professional (HCP)',
      'AJAX Systems Partner Certificering',
      'AVG/GDPR Compliance (cameratoezicht)',
      'NEN-EN 50131 (Inbraaksignalering)',
      'BORG Gecertificeerd Installateur',
    ],
    members: [
      {
        name: 'Dennis Bakker',
        role: 'Beveiligingsspecialist',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80',
        bio: 'Dennis is onze beveiligingsspecialist en verantwoordelijk voor het ontwerp en de installatie van camerasystemen en toegangscontrole. Als gecertificeerd Hikvision en AJAX installateur combineert hij technische kennis met een scherp oog voor beveiligingsrisico\'s.',
        specialisaties: ['IP-camerasystemen (Hikvision)', 'NVR & opslag configuratie', 'AVG-compliant camerabeleid', 'Beveiligingsadvies'],
      },
      {
        name: 'Fatima Benali',
        role: 'Installateur Beveiliging & Toegangscontrole',
        photo: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=300&h=300&q=80',
        bio: 'Fatima installeert en configureert toegangscontrolesystemen en alarmsystemen voor bedrijfspanden. Ze is gespecialiseerd in AJAX draadloze beveiligingssystemen en Roger toegangscontrole. Nauwkeurig, vakkundig en altijd gefocust op de veiligheid van uw pand.',
        specialisaties: ['AJAX alarmsystemen', 'Roger toegangscontrole', 'Inbraakdetectie', 'Pandbeveiliging'],
      },
    ],
  },
}

export const teamMembers = Object.values(team).flatMap((d) => d.members)
