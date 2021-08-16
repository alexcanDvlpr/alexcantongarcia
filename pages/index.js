import CompanySection from '../components/sections/CompanySection/CompanySection'
import HomeSection from '../components/sections/HomeSection/HomeSection'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import React from 'react'
import AboutSection from '../components/sections/AboutSection/AboutSection'

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
