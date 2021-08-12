import CompanySection from '../components/sections/CompanySection'
import HomeSection from '../components/sections/HomeSection'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React from 'react'
import AboutSection from '../components/sections/AboutSection'

export default function Home() {
  return (
    <div className="main">
      <Header />
      <div className="main-wrapper">
        <div className="content-wrapper">
          <HomeSection />
          <CompanySection />
          <AboutSection />
          <Footer />
        </div>
      </div>
    </div>
  )
}
