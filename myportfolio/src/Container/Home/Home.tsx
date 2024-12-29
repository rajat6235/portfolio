import React, { useState } from 'react';
// import Header from './Header/Header';
import Profile from './Profile/Profile.tsx';
// import Footer from './Footer/Footer';
import './Home.css';
import CustomCarousel from '../Carousel/Carousel.tsx';
import TitleMessage from '../Title_Message/TitleMessage.tsx';
import NavBar from '../Navbar/NavBar.tsx';

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div className='home-container'>
      {/* <Header/> */}
      <NavBar />
      <CustomCarousel loading={loading} setLoading={setLoading} />
      {!loading && <TitleMessage />}
      <div className='profile-container' style={{display: 'none'}}>
        <Profile />
      </div>
      {/*
      <Footer/> */}
    </div>
  );
};

export default Home;