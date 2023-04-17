import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background-color: ${({scrollNav}) => (scrollNav ? '#00000036' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  font-size: 1rem;
  backdrop-filter: ${({scrollNav}) => (scrollNav ? 'blur(10px)' : 'none')};


  @media screen and (max-width: 768px) {
    transition: all 0.8s all ease;
  }
`;


export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
  z-index: 1;
`;

export const NavLogo = styled.img`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  height: 2rem;
  margin-top: 1.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  } 
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 10px;
  cursor: pointer;
  color: #0000;
  text-shadow: 0 0 #fff, 0 0 #0000;
  overflow: hidden;
  transition: 0.3s;
  &.active {
    border-bottom: 2px solid #d77e54;
    box-shadow: 0px -8px 8px -7px #d77e54 inset;
    color: #d77e54;
    text-shadow: 0 0 black;
  }
  &:hover {
    text-shadow: 0 -1.2em #0000, 0 0 #d77e54;
  }
`;