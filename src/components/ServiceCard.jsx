import { Link } from 'react-router-dom'

function ServiceCard({ service }) {
  return (
    <div className="service-card group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-slate-800">
        <img
          src={service.image}
          alt={service.title}
          className="service-img w-full h-full object-cover opacity-80 group-hover:opacity-90"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        {/* Title on image */}
        <h3 className="absolute bottom-4 left-5 text-lg font-bold text-white font-raleway leading-tight">
          {service.title}
        </h3>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-sm text-slate-600 leading-relaxed flex-grow mb-4">
          {service.shortDesc}
        </p>
        <Link
          to="/diensten"
          className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors group/link"
        >
          Lees meer
          <svg className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard
