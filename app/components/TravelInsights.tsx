'use client'

const articles = [
  {
    title: 'Best International Destinations in 2026',
    category: 'Destinations',
    readTime: '5 min read',
    image: 'from-blue-400 to-cyan-500'
  },
  {
    title: 'How to Save More on Flight Tickets',
    category: 'Money Tips',
    readTime: '4 min read',
    image: 'from-green-400 to-emerald-500'
  },
  {
    title: 'Ultimate Guide to Layovers',
    category: 'Travel Guide',
    readTime: '8 min read',
    image: 'from-purple-400 to-indigo-500'
  },
  {
    title: 'Business Travel Trends 2026',
    category: 'Business',
    readTime: '6 min read',
    image: 'from-orange-400 to-red-500'
  },
]

export default function TravelInsights() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Travel Insights & Blog</h2>
          <p className="text-gray-600 text-lg">Expert tips and guides for smarter travel</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2 group">
              {/* Image */}
              <div className={`h-48 bg-gradient-to-br ${article.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-blue-600 uppercase">{article.category}</span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition line-clamp-2">{article.title}</h3>

                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-2 group/btn">
                  Read More
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
