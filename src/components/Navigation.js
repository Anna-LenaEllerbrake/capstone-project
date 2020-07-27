import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person'
import styled from 'styled-components'

export default function Navigation({ loggedIn, activeScreen }) {
  return activeScreen === 'Start' ? (
    <StyledNav>
      <StyledNavLinkActive to="/">
        <HomeIcon />
      </StyledNavLinkActive>
      <StyledNavLinkInactive to={loggedIn ? '/profil' : '/login'}>
        <PersonIcon />
      </StyledNavLinkInactive>
    </StyledNav>
  ) : (
    <StyledNav>
      <StyledNavLinkInactive to="/">
        <HomeIcon />
      </StyledNavLinkInactive>
      <StyledNavLinkActive to={loggedIn ? '/profil' : '/login'}>
        <PersonIcon />
      </StyledNavLinkActive>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  > a {
    width: 50%;
    height: 50px;
    text-align: center;
    padding-top: 13px;
    display: block;
  }
`

const StyledNavLinkActive = styled(NavLink)`
  color: var(--blue1);
`

const StyledNavLinkInactive = styled(NavLink)`
  color: var(--textGrey);
`
