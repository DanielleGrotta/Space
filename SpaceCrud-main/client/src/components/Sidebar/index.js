import React from 'react';
import { FaPenNib } from 'react-icons/fa';
import { SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="planets"    onClick={toggle}>Planets   </SidebarLink>
          <SidebarLink to="spaceships" onClick={toggle}>Spaceships </SidebarLink>
          <SidebarLink to="crrew" onClick={toggle}>Crew members </SidebarLink>
          <SidebarLink to="me"   onClick={toggle}>Credits </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
