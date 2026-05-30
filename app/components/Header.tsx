'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">LX</span>
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:inline">LayoverX</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#flights" className="text-gray-700 hover:text-blue-600 transition font-medium text-sm">Flights</Link>
            <Link href="#hotels" className="text-gray-700 hover:text-blue-600 transition font-medium text-sm">Hotels</Link>
            <Link href="#holidays" className="text-gray-700 hover:text-blue-600 transition font-medium text-sm">Holidays</Link>
            <Link href="#visa" className="text-gray-700 hover:text-blue-600 transition font-medium text-sm">Visa Services</Link>
            <Link href="#insurance" className="text-gray-700 hover:text-blue-600 transition font-medium text-sm">Travel Insurance</Link>
            <Link href="#corporate" className="text-gray-700 hover:text-blue-600 transition font-medium text-sm">Corporate Travel</Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-700 hover:text-blue-600 transition font-medium text-sm">Become Partner</button>
            <button className="text-gray-700 hover:text-blue-600 transition font-medium text-sm">Support</button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition font-medium text-sm">Login / Sign Up</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link href="#flights" className="block py-2 text-gray-700 hover:text-blue-600">Flights</Link>
            <Link href="#hotels" className="block py-2 text-gray-700 hover:text-blue-600">Hotels</Link>
            <Link href="#holidays" className="block py-2 text-gray-700 hover:text-blue-600">Holidays</Link>
            <Link href="#visa" className="block py-2 text-gray-700 hover:text-blue-600">Visa Services</Link>
            <Link href="#insurance" className="block py-2 text-gray-700 hover:text-blue-600">Travel Insurance</Link>
            <Link href="#corporate" className="block py-2 text-gray-700 hover:text-blue-600">Corporate Travel</Link>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition font-medium mt-4">Login / Sign Up</button>
          </div>
        )}
      </nav>
    </header>
  )
}
