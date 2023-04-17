import styled from 'styled-components';
import { Link as LinkS} from 'react-scroll';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 88px);
  text-align: center;

  @media (min-width: 768px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
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

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
