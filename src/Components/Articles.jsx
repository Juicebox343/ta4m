import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import TitleBar from './TitleBar'

const Articles = () => {
  return (
    <>
    <div className='container' id='episodes'>
      <TitleBar />
      <NavBar/>
      <SideBar />
      <main>
      </main>
    </div>
    </>
  )
}

export default Articles
