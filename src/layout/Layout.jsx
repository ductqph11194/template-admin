import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import './style.scss'

const Layout = ({ children }) => {
   return (
      <div className="home">
         <Sidebar />
         <div className="home-container">
            <Navbar />
            <div className="content-container">{children}</div>
         </div>
      </div>
   )
}

export default Layout
