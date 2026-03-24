/* ═══════════════════════════════════════════════════════
   MK CoreLink Group B.V. — Team & Management
   Bilthoven · Transport · Infra · Security
═══════════════════════════════════════════════════════ */

/* ── Founding Partners / Management ─────────────────── */
export const management = [
  {
    name: 'Mohammed Alou',
    role: 'Founding Partner & Algemeen Directeur',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
    bio: 'Mohammed is de drijvende kracht achter MK CoreLink Group. Als allround ondernemer combineert hij diepgaande kennis van transport, IT-infrastructuur én beveiliging — een zeldzame combinatie in de markt. Vanuit zijn visie werkt hij aan een bedrijf dat kwaliteit, betrouwbaarheid en klantgerichtheid op alle drie de divisies centraal stelt. Mohammed stelt altijd de klant op de eerste plaats.',
    specialisaties: ['Transport & Logistiek', 'IT-Infrastructuur', 'Camerabeveiliging', 'Projectmanagement', 'Bedrijfsstrategie'],
    badge: 'CEO & Oprichter',
    badgeColor: '#1E40AF',
  },
  {
    name: 'Karim Charradi',
    role: 'Co-Founder & Operationeel Directeur',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=400&q=80',
    bio: 'Karim is medeoprichter van MK CoreLink Group en de specialist op het gebied van warehouse management en logistieke coördinatie. Als operationeel directeur zorgt hij ervoor dat onze uitvoerende teams bij opdrachtgevers soepel draaien. Met zijn uitgebreide kennis van transportplanning, magazijnlogistiek en coördinerende functies is hij de verbindende schakel tussen opdrachtgever en uitvoering.',
    specialisaties: ['Warehouse Management', 'Transport Coördinatie', 'Logistieke Planning', 'Teamleiding Uitvoer', 'Opdrachtgever Relaties'],
    badge: 'COO & Medeoprichter',
    badgeColor: '#065F46',
  },
]

/* ── Divisie Teams ───────────────────────────────────── */
export const team = {
  transport: {
    division: 'MK Transport',
    icon: '🚚',
    color: '#10B981',
    description: 'Betrouwbare medische koeriersdiensten en logistieke distributie door heel Nederland.',
    certifications: [
      'ADR Certificaat (gevaarlijke stoffen vervoer)',
      'GDP-Gecertificeerd (Good Distribution Practice)',
      'Chauffeursdiploma CCV – code 95',
      'EHBO / BHV Gecertificeerd',
      'Koeriersverzekering CMR',
      'FSSC 22000 (voedselveiligheid transport)',
    ],
    members: [
      {
        name: 'Youssef El Amrani',
        role: 'Teamleider Medisch Transport',
        photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80',
        bio: 'Youssef stuurt ons medisch transportteam aan en coördineert de dagelijkse routes voor ziekenhuizen, laboratoria en apotheken in de Randstad. Met meer dan 6 jaar ervaring in GDP-gecertificeerd medisch vervoer zorgt hij dat elke zending veilig, tijdig en conform regelgeving aankomt.',
        specialisaties: ['Medische koeriersdiensten', 'Route-optimalisatie', 'GDP-compliance', 'Temperatuurgevoelig vervoer'],
      },
      {
        name: 'Nabil Idrissi',
        role: 'Senior Koerier & Distributieplanner',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80',
        bio: 'Nabil combineert jarenlange rijervaring met logistiek planningsinzicht. Hij verzorgt de dagelijkse distributie- en koeriersritten en vindt altijd een oplossing — ook op drukke dagen. ADR-gecertificeerd, betrouwbaar en altijd op tijd.',
        specialisaties: ['Same-day delivery', 'Distributieplanning', 'ADR-gecertificeerd transport', 'Last-mile logistiek'],
      },
    ],
  },

  infra: {
    division: 'MK Infra',
    icon: '🌐',
    color: '#2563EB',
    description: 'Gespecialiseerd in netwerkaanleg, gestructureerde bekabeling en glasvezel — van ontwerp tot gecertificeerde oplevering.',
    certifications: [
      'VCA** Gecertificeerd (Veiligheid, Gezondheid en Milieu)',
      'TIA/EIA-568 Bekabelingscertificering',
      'ISO 11801 Gecertificeerd Installateur',
      'Ubiquiti Enterprise Wireless Admin (UEWA)',
      'FLUKE Networks Certified Technician',
      'NEN 2768 (Gestructureerde bekabeling)',
      'FTTH Glasvezel Lasinstructeur Gecertificeerd',
    ],
    members: [
      {
        name: 'Daan Visser',
        role: 'Lead Datamonteur & Glasvezelspecialist',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80',
        bio: 'Daan is onze lead datamonteur met brede expertise in gestructureerde bekabeling en glasvezel. Van CAT6A-kabels trekken tot single-mode glasvezel lassen en inmeten met een OTDR — hij levert elk project op met certificering en volledige technische documentatie.',
        specialisaties: ['CAT6A / CAT7 bekabeling', 'Glasvezel lassen & meten (OTDR)', 'Patchkast inrichting & labeling', 'TIA/EIA-568 gecertificeerd'],
      },
      {
        name: 'Tarik Benali',
        role: 'Netwerk Engineer & Wi-Fi Specialist',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
        bio: 'Tarik is onze netwerk engineer verantwoordelijk voor ontwerp en configuratie van bedrijfsnetwerken. Als gecertificeerd Ubiquiti specialist voert hij Wi-Fi site surveys uit, ontwerpt VLAN-architecturen en configureert firewalls. Zijn netwerken werken altijd — hij denkt een stap vooruit en documenteert alles.',
        specialisaties: ['Ubiquiti UniFi deployments', 'VLAN & firewall configuratie', 'Wi-Fi site surveys & heatmaps', 'Netwerk monitoring & beheer'],
      },
    ],
  },

  security: {
    division: 'MK Security',
    icon: '🎥',
    color: '#EF4444',
    description: 'Professionele camerasystemen, alarmsystemen en toegangscontrole voor bedrijfspanden.',
    certifications: [
      'Hikvision Certified Professional (HCP)',
      'AJAX Systems Partner Certificering',
      'AVG/GDPR Compliance (cameratoezicht)',
      'NEN-EN 50131 (Inbraaksignalering)',
      'BORG Gecertificeerd Installateur',
      'Roger Access Control Certified Installer',
    ],
    members: [
      {
        name: 'Dennis Bakker',
        role: 'Beveiligingsspecialist & Projectleider',
        photo: 'https://images.unsplash.com/photo-1548449112-96a38a643324?auto=format&fit=crop&w=400&h=400&q=80',
        bio: 'Dennis leidt de uitvoering van camerasystemen en toegangscontroleprojecten. Als gecertificeerd Hikvision en BORG installateur combineert hij technische diepgang met een scherp oog voor beveiligingsrisico\'s. Elk systeem levert hij op conform AVG-wetgeving — compleet met camerabeleid en documentatie.',
        specialisaties: ['IP-camerasystemen (Hikvision)', 'NVR & cloudopslag configuratie', 'AVG-compliant camerabeleid', 'Beveiligingsadvies op maat'],
      },
      {
        name: 'Mehmet Yilmaz',
        role: 'Installateur Beveiliging & Toegangscontrole',
        photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&h=400&q=80',
        bio: 'Mehmet installeert en configureert alarmsystemen, toegangscontrole en inbraakdetectie voor bedrijfspanden. Gespecialiseerd in AJAX draadloze systemen en Roger toegangscontrole. Werkt snel, netjes en laat geen detail over aan het toeval.',
        specialisaties: ['AJAX alarmsystemen', 'Roger toegangscontrole', 'Inbraakdetectie & sensorinstallatie', 'Intercomsystemen'],
      },
    ],
  },
}

export const teamMembers = Object.values(team).flatMap((d) => d.members)
