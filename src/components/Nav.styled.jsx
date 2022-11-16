import styled from 'styled-components'

const Navbar = styled.nav`

@media (min-width : 300px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }

    @media (min-width : 481px) {
        padding: 1em;
        padding-top: 2rem;

        img{
            width: 20%;
        }
    }

    @media (min-width : 1020px) {
        padding: 1em;
        padding-top: 2rem;
       
    }
     
    
`
const NavLinkCon = styled.div`
    width: 50%;
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