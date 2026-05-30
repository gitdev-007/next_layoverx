'use client'

const categories = [
  { name: 'Family Trips', color: 'from-pink-400 to-rose-500', icon: '👨‍👩‍👧‍👦' },
  { name: 'Honeymoon Packages', color: 'from-red-400 to-pink-500', icon: '💕' },
  { name: 'Adventure Travel', color: 'from-orange-400 to-red-500', icon: '🏔️' },
  { name: 'Luxury Escapes', color: 'from-purple-400 to-indigo-600', icon: '👑' },
  { name: 'Business Travel', color: 'from-blue-400 to-cyan-500', icon: '💼' },
  { name: 'Solo Travel', color: 'from-green-400 to-emerald-500', icon: '✈️' },
]

export default function TravelCategories() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Travel Categories</h2>
          <p className="text-gray-600 text-lg">Find the perfect trip for every traveler</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer h-56 transform transition hover:scale-105`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color}`}></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center text-white p-6 text-center">
                <div className="text-6xl mb-4">{cat.icon}</div>
                <h3 className="text-2xl font-bold">{cat.name}</h3>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
