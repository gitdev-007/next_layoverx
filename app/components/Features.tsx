'use client'

const features = [
  {
    title: 'Smart Fare Comparison',
    description: 'AI-powered fare analysis and savings recommendations.',
    icon: '📊'
  },
  {
    title: 'Layover Intelligence',
    description: 'Find better layovers and optimize travel experience.',
    icon: '🌍'
  },
  {
    title: 'Secure Payments',
    description: 'Enterprise-grade payment security for peace of mind.',
    icon: '🔒'
  },
  {
    title: '24x7 Support',
    description: 'Always available travel assistance when you need it.',
    icon: '📞'
  },
]

export default function Features() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose LayoverX</h2>
          <p className="text-gray-600 text-lg">Premium features designed for smarter travel decisions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition">{feature.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>

              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition rounded-2xl -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
