'use client'

export default function CorporateTravel() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Corporate Travel Solutions</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Streamline your company&apos;s travel management with enterprise-grade tools designed for modern businesses.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Employee Travel Management</h3>
                  <p className="text-gray-400">Centralized booking and approval workflows</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Expense Tracking</h3>
                  <p className="text-gray-400">Real-time reporting and budget management</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Dedicated Support</h3>
                  <p className="text-gray-400">24/7 dedicated account managers</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Centralized Booking</h3>
                  <p className="text-gray-400">Preferred vendors and negotiated rates</p>
                </div>
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105">
              Request Demo
            </button>
          </div>

          {/* Right Side - Stats */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="space-y-8">
              <div>
                <p className="text-5xl font-bold text-blue-400 mb-2">98%</p>
                <p className="text-gray-300">Customer Satisfaction Rate</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-blue-400 mb-2">25,000+</p>
                <p className="text-gray-300">Enterprise Clients</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-blue-400 mb-2">$2.5B</p>
                <p className="text-gray-300">Annual Travel Managed</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-blue-400 mb-2">35%</p>
                <p className="text-gray-300">Average Cost Savings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
