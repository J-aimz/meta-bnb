import React from 'react'
import { NavLink } from 'react-router-dom'
// import { Button } from '@mui/material'

// styled component
import { Navbar, NavLinkCon, LinkCon, NavButton } from './Nav.styled'

// imgs
import Logo from '../assets/icons/meta-logo.svg'

function Nav(props) {
  return (
    <Navbar>
        <img src={Logo} alt="" />
        <NavLinkCon>
            <LinkCon>
                <NavLink to='/'>Home</NavLink>
            </LinkCon>
            
            <LinkCon>
                <NavLink to='places-to-stay'>Place to stay</NavLink>
            </LinkCon>
            
            <LinkCon>
                <NavLink to='/'>NFTs</NavLink>
            </LinkCon>
            
            <LinkCon>
                <NavLink to='/'>Community</NavLink>
            </LinkCon>
        </NavLinkCon>
    
        <NavButton onClick={props.setModal}>Connet wallet</NavButton>

        
    </Navbar>
  )
}

export default Nav