'use client'

import { useState } from 'react'

export default function SearchWidget() {
  const [activeTab, setActiveTab] = useState('flights')
  const [tripType, setTripType] = useState('roundtrip')
  const [fareType, setFareType] = useState('regular')

  const tabs = ['Flights', 'Hotels', 'Holidays', 'Trains', 'Buses', 'Cabs']

  return (
    <section className="bg-white -mt-24 relative z-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Glassmorphic Card */}
        <div className="bg-white/80 backdrop-blur-xl border border-blue-100 rounded-3xl shadow-2xl p-6 md:p-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-4 py-2 font-medium transition ${
                  activeTab === tab.toLowerCase()
                    ? 'text-blue-600 border-b-2 border-blue-600 -mb-4'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Flight Search Content */}
          {activeTab === 'flights' && (
            <div className="space-y-6">
              {/* Trip Type Selection */}
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="trip" value="oneway" checked={tripType === 'oneway'} onChange={(e) => setTripType(e.target.value)} />
                  <span className="text-gray-700">One Way</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="trip" value="roundtrip" checked={tripType === 'roundtrip'} onChange={(e) => setTripType(e.target.value)} />
                  <span className="text-gray-700">Round Trip</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="trip" value="multicity" checked={tripType === 'multicity'} onChange={(e) => setTripType(e.target.value)} />
                  <span className="text-gray-700">Multi City</span>
                </label>
              </div>

              {/* Main Search Fields */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* From */}
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                  <input type="text" placeholder="Departure City" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                {/* Swap Button */}
                <div className="flex items-end justify-center md:col-span-1 md:relative md:bottom-0">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition md:absolute md:right-0 md:bottom-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </button>
                </div>

                {/* To */}
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                  <input type="text" placeholder="Destination City" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                {/* Dates */}
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Departure</label>
                  <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              {tripType !== 'oneway' && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Return</label>
                    <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="md:col-span-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Travellers & Class</label>
                    <input type="text" placeholder="1 Passenger, Economy" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
              )}

              {tripType === 'oneway' && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Travellers & Class</label>
                    <input type="text" placeholder="1 Passenger, Economy" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
              )}

              {/* Fare Type Selection */}
              <div className="bg-gray-50 rounded-lg p-4">
                <label className="block text-sm font-medium text-gray-700 mb-3">Fare Type</label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="fare" value="regular" checked={fareType === 'regular'} onChange={(e) => setFareType(e.target.value)} />
                    <span className="text-gray-700 text-sm">Regular</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="fare" value="student" checked={fareType === 'student'} onChange={(e) => setFareType(e.target.value)} />
                    <span className="text-gray-700 text-sm">Student</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="fare" value="armed" checked={fareType === 'armed'} onChange={(e) => setFareType(e.target.value)} />
                    <span className="text-gray-700 text-sm">Armed Forces</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="fare" value="senior" checked={fareType === 'senior'} onChange={(e) => setFareType(e.target.value)} />
                    <span className="text-gray-700 text-sm">Senior Citizen</span>
                  </label>
                </div>
              </div>

              {/* Additional Filters */}
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" />
                  <span className="text-gray-700 text-sm">Non-stop Flights Only</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" />
                  <span className="text-gray-700 text-sm">Refundable Only</span>
                </label>
              </div>

              {/* Search Button */}
              <div className="pt-4">
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-lg font-bold text-lg transition transform hover:scale-105">
                  Search Flights
                </button>
              </div>
            </div>
          )}

          {/* Other tabs placeholder */}
          {activeTab !== 'flights' && (
            <div className="py-12 text-center text-gray-600">
              <p className="text-lg font-medium">Coming soon: {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} search</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
