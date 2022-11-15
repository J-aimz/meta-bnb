import styled from 'styled-components'

const Navbar = styled.nav`
    /* background-color   : red; */
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const NavLinkCon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;

`
const LinkCon = styled.span`
    & *{
        display: inline-block;
        text-decoration: none;
    }
`

const NavButton = styled.button`
    padding: .9em 1.25em;
    color: #fff;
    border: none;
    cursor: pointer;
    background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
    border-radius: 10px;
`








export { Navbar, NavLinkCon, LinkCon, NavButton }