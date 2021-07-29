import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import TitleBar from './TitleBar'

const Articles = (props) => {
  return (
    <>
    <div className='container' id='episodes'>
      <TitleBar />
      <NavBar selectedPage={props.selectedPage} setSelectedPage={props.setSelectedPage}/>
      <SideBar />
      <main>
      </main>
    </div>
    </>
  )
}

export default Articles
