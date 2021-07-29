import HomeSection from '../components/sections/HomeSection'
import Sidebar from '../components/Sidebar'
import React from 'react'

export default function Home() {
  return (
    <div className="main">
      <div className="main-wrapper">
        <div className="sidebar-content">
          <Sidebar />
        </div>
        <div className="content-wrapper">
          <HomeSection />
        </div>
      </div>
    </div>
  )
}
