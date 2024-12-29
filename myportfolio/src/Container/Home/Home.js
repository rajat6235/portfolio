import React, { useState } from 'react'
// import Header from './Header/Header'
import Profile from './Profile/Profile.tsx'
// import Footer from './Footer/Footer'
import './Home.css'
import CustomCarousel from '../Carousel/Carousel.tsx'
import TitleMessage from '../Title_Message/TitleMessage.tsx'
import NavBar from '../Navbar/NavBar.tsx'

export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <div className='home-container'>
      {/* <Header/> */}
      <NavBar/>
      <CustomCarousel loading={loading} setLoading={setLoading} />
      {!loading && (<TitleMessage/>)}
        {/* <Profile/>
        <Footer/> */}
    </div>
  )
}
