'use client'

const destinations = [
  { name: 'Dubai', fare: '$299', color: 'from-amber-400 to-orange-500' },
  { name: 'Singapore', fare: '$349', color: 'from-red-400 to-red-500' },
  { name: 'Bangkok', fare: '$199', color: 'from-yellow-400 to-yellow-500' },
  { name: 'London', fare: '$449', color: 'from-slate-400 to-slate-600' },
  { name: 'Paris', fare: '$399', color: 'from-purple-400 to-purple-600' },
  { name: 'Bali', fare: '$279', color: 'from-green-400 to-emerald-500' },
  { name: 'New York', fare: '$499', color: 'from-cyan-400 to-blue-500' },
  { name: 'Tokyo', fare: '$579', color: 'from-pink-400 to-rose-500' },
]

export default function PopularDestinations() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
          <p className="text-gray-600 text-lg">Explore our most-booked destinations and find amazing deals</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition hover:scale-105"
            >
              {/* Background gradient placeholder - in production would be actual images */}
              <div className={`bg-gradient-to-br ${dest.color} h-48 md:h-56`}></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                <div className="flex-1 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold mb-2">{dest.name}</h3>
                  <p className="text-sm opacity-90">Starting from {dest.fare}</p>
                </div>
                <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition transform group-hover:translate-y-0 translate-y-2">
                  Quick Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
