'use client'

const deals = [
  {
    title: 'Flight Deals',
    description: 'Save up to 40% on international flights this season',
    discount: '40%',
    tag: 'Limited Time',
    icon: '✈️'
  },
  {
    title: 'Hotel Deals',
    description: 'Exclusive hotel packages with free breakfast and upgrades',
    discount: '30%',
    tag: 'Exclusive',
    icon: '🏨'
  },
  {
    title: 'Holiday Packages',
    description: 'All-inclusive vacation packages with flights and hotels',
    discount: 'From $699',
    tag: 'Popular',
    icon: '🏖️'
  },
]

export default function SpecialDeals() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Exclusive Travel Deals</h2>
          <p className="text-gray-600 text-lg">Limited-time offers that won&apos;t last long</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              {/* Discount Badge */}
              <div className="relative h-40 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {deal.tag}
                </div>
                <div className="text-center">
                  <p className="text-white text-5xl font-bold">{deal.discount}</p>
                  <p className="text-blue-100 text-sm mt-2">off your trip</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{deal.title}</h3>
                <p className="text-gray-600 mb-6">{deal.description}</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
                  Explore Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
