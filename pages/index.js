import React from 'react'
import Sidebar from '../components/Sidebar'
import HomeSection from '../components/sections/HomeSection'

export default function Home() {
  return (
    <div className="main">
      <div className="main-wrapper">
        <div className="sidebar-content">
          <Sidebar />
        </div>
        <div>
          <HomeSection />
        </div>
      </div>
    </div>
  )
}
