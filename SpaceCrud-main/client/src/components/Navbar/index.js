import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../images/logo-space-y.svg';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarElements'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);


    const changeNav = () => {
      if(window.scrollY >= 80) {
        setScrollNav(true);
    }
    else {
        setScrollNav(false);
    }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
      scroll.scrollToTop();
    };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' src={logo} onClick={toggleHome}></NavLogo>
          <MobileIcon  onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem >
              <NavLinks to="planets" smooth={true} duration={500} spy={true}  exact='true' offset={-80} >Planets</NavLinks>
            </NavItem>
            <NavItem >
              <NavLinks to="spaceships" smooth={true} duration={500} spy={true}  exact='true' offset={-80} >SpaceShips</NavLinks>
            </NavItem>
            <NavItem >
              <NavLinks to="crew" smooth={true} duration={500} spy={true}  exact='true' offset={-80} >Crew members</NavLinks>
            </NavItem>
            <NavItem >
              <NavLinks to="me" smooth={true} duration={500} spy={true}  exact='true' offset={-80} >Credits</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar
