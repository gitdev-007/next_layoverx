'use client'

import { useState } from 'react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Travel Planner',
    content: 'LayoverX has transformed how I book flights. The fare comparison tool alone saves me hours of research.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Business Traveler',
    content: 'The corporate travel features are exceptional. Our company saved over 30% on travel costs in the first year.',
    rating: 5
  },
  {
    name: 'Emma Rodriguez',
    role: 'Frequent Flyer',
    content: 'I love the layover intelligence feature. It helped me discover an amazing connection through Singapore.',
    rating: 5
  },
  {
    name: 'James Wilson',
    role: 'Finance Manager',
    content: 'The expense tracking and reporting tools are incredibly intuitive. Highly recommended for companies.',
    rating: 5
  },
  {
    name: 'Priya Patel',
    role: 'Solo Traveler',
    content: 'As someone who travels solo frequently, the 24/7 support has been invaluable. Great customer service!',
    rating: 5
  },
  {
    name: 'David Lee',
    role: 'Travel Agent',
    content: 'The API integration was smooth and the documentation is excellent. Best travel platform in the market.',
    rating: 5
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Travelers Worldwide</h2>
          <p className="text-gray-600 text-lg">See what our customers have to say</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[0, 1, 2].map((offset) => {
                const index = (currentIndex + offset) % testimonials.length
                const testimonial = testimonials[index]
                return (
                  <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-gray-700 mb-6 text-sm leading-relaxed">{testimonial.content}</p>

                    {/* Author */}
                    <div className="border-t border-gray-200 pt-4">
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-3 rounded-full transition"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-3 rounded-full transition"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition ${
                  index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 w-2'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
