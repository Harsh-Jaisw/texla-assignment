import React from 'react'
import SideBar from '../SideBar/SideBar'
import MainContent from '../MainContent/MainContent'
import "./Dashboard.css"
function Dashboard() {
  return (
    <div className='dashboardMain' >
      <div className='sideBar'><SideBar/></div>
      <div className='MainContent'><MainContent/></div>
    </div>
  )
}

export default Dashboard