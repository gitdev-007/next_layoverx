'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How does LayoverX compare flight prices?',
    answer: 'LayoverX uses AI-powered algorithms to compare fares from hundreds of airlines in real-time. We scan all major airlines and aggregators to find you the best deals on both direct flights and layover options.'
  },
  {
    question: 'Can I book multi-city flights?',
    answer: 'Yes! Our platform supports one-way, round-trip, and multi-city bookings. Simply select the multi-city option and add as many stops as you need for your journey.'
  },
  {
    question: 'Are payments secure?',
    answer: 'Absolutely. We use enterprise-grade encryption and PCI-DSS compliant payment processors. Your financial information is protected with the highest security standards in the industry.'
  },
  {
    question: 'How do refunds work?',
    answer: 'Refund policies depend on the airline and ticket type you purchase. We clearly show all policies before you book. You can also manage refunds directly through your LayoverX account.'
  },
  {
    question: 'Is there 24/7 customer support?',
    answer: 'Yes! Our support team is available 24/7 through chat, email, and phone. We speak multiple languages and are here to help with any travel-related questions.'
  },
  {
    question: 'Do you offer corporate travel solutions?',
    answer: 'Yes! We offer enterprise-grade solutions with centralized booking, expense tracking, and dedicated support. Contact our sales team to request a demo.'
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg">Find answers to common questions about LayoverX</p>
        </div>

        {/* Schema markup for FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          })}
        </script>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition"
              >
                <h3 className="text-left font-semibold text-gray-900">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 text-gray-600 transition transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
