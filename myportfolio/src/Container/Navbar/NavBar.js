import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ScrollService from '../../utilities/ScrollService';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import rglogo1 from '../../images/rglogo1.png';
import { GET_SCREEN_INDEX, TOTAL_SCREENS } from '../../utilities/comman';
import './NavBar.css';

const NavBar = () => {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;

    setSelectedScreen(screenIndex);
  };

  useEffect(() => {
    const currentScreenSubscription =
      ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);

    return () => {
      currentScreenSubscription.unsubscribe();
    };
  }, []);

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: 'smooth' });
    setShowHeaderOptions(false);
  };

  const handleNavClick = (index, screen) => {
    switchScreen(index, screen);
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        fixed="top"
        className="animate-navbar nav-theme justify-content-between"
        variant="dark"
      >
        <Navbar.Brand href="/">
          <img className="logo" src={rglogo1} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {TOTAL_SCREENS.map((Screen, i) => (
              <Nav.Link
                key={Screen.screen_name}
                onClick={() => handleNavClick(i, Screen)}
              >
                {Screen.screen_name === 'AboutMe'
                  ? 'About Me'
                  : Screen.screen_name === 'ContactMe'
                  ? 'Contact Me'
                  : Screen.screen_name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
