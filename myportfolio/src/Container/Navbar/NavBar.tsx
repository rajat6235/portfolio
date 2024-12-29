import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ScrollService from '../../utilities/ScrollService.ts';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import rglogo1 from '../../assets/images/rglogo1.png';
import { GET_SCREEN_INDEX, TOTAL_SCREENS } from '../../utilities/comman.ts';
import './NavBar.css';

interface Screen {
  screen_name: string;
}

const NavBar: React.FC = () => {
  const [selectedScreen, setSelectedScreen] = useState<number>(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState<boolean>(false);

  const updateCurrentScreen = (currentScreen: { screenInView: string }) => {
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

  const switchScreen = (index: number, screen: Screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: 'smooth' });
    setShowHeaderOptions(false);
  };

  const handleNavClick = (index: number, screen: Screen) => {
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
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