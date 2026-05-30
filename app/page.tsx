'use client'

import Header from './components/Header'
import Hero from './components/Hero'
import SearchWidget from './components/SearchWidget'
import PopularDestinations from './components/PopularDestinations'
import SpecialDeals from './components/SpecialDeals'
import Features from './components/Features'
import TravelCategories from './components/TravelCategories'
import CorporateTravel from './components/CorporateTravel'
import Testimonials from './components/Testimonials'
import TravelInsights from './components/TravelInsights'
import AppDownload from './components/AppDownload'
import FAQ from './components/FAQ'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <SearchWidget />
      <PopularDestinations />
      <SpecialDeals />
      <Features />
      <TravelCategories />
      <CorporateTravel />
      <Testimonials />
      <TravelInsights />
      <AppDownload />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  )
}
