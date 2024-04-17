import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Jyan = () => {
  return (
    <div className=' p-5 flex bg-black text-white'>
      {/* this is body */}
      <SideBar />
      <Outlet />
      {/* <MainContainer /> */}
    </div>
  )
}

export default Jyan
