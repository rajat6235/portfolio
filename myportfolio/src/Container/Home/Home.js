import React from 'react'
import Header from './Header/Header'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import './Home.css'
import CustomCarousel from '../Carousel/Carousel'
import TitleMessage from '../Title_Message/TitleMessage'
import NavBar from '../Navbar/NavBar'

export default function Home() {
  return (
    <div className='home-container'>
      {/* <Header/> */}
      <NavBar/>
      <CustomCarousel/>
      <TitleMessage/>
        {/* <Profile/>
        <Footer/> */}
    </div>
  )
}
