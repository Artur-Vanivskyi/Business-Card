import React from 'react'
import NavBar from './NavBar'
import Routes from './Routes'
import './Layout.css'

function Layout(){
    return (
        <div>
      <div className="col side-bar">
        <NavBar />
      </div>
      <div>
        <Routes />
      </div>
    </div>
    )
}

export default Layout;