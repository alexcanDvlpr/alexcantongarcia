import CompanySection from '../components/sections/CompanySection/CompanySection'
import AboutSection from '../components/sections/AboutSection/AboutSection'
import HomeSection from '../components/sections/HomeSection/HomeSection'
import CVSection from '../components/sections/CVSection/CVSection'
import AlexCantonHead from '../components/AlexCantonHead'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import React from 'react'

export default function Home () {
  return (
    <>
      <AlexCantonHead index="true" title="¡Hola! Soy Alex Cantón" />
      <div className="main">
        <Header />
        <div className="main-wrapper">
          <div className="content-wrapper">
            <HomeSection />
            <CompanySection />
            <AboutSection />
            <CVSection />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
