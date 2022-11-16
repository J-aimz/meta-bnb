import styled from "styled-components";

const Foot = styled.footer`
    background-color: #1D1D1E;
    max-width: 100vw;
    margin: 0 calc(-50vw + 50%);
    padding: 3rem 5rem;

`

const FooterCon = styled.div`
    display: grid;

  

    span{
        color: #fff;
        font-weight: bold;
        margin-bottom: 1.5rem;

    }

    @media (min-width:300px) {
        grid-template-columns: 1fr;
        
    }

    @media (min-width: 481px) {
        grid-template-columns: 1fr;
        
    }

    @media (min-width: 1020px) {
        display: grid;
        grid-template-columns: 1fr 3fr;

        span{
            color: #fff;
            font-weight: bold;
            margin-bottom: 1.5rem;
        }

    }


`

const FooterLinks = styled.a`
    color: #fff;
    display: inline-block;
    text-decoration: none;
    margin-bottom: .7rem;

`
const LogoAndSocails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

const SocailsCon = styled.div`
    display: flex;
    flex-direction: row !important;
    justify-content: left;
    align-items: center;
    gap: 1.5rem !important;
    color: #fff !important;

    & > *{
        color: #fff !important;
    }

    @media (min-width: 481px) {
        margin-top: 2em;
    }

    @media (min-width: 1020px) {
        display: flex;
        flex-direction: row !important;
        justify-content: left;
        align-items: center;
        gap: 1.5rem !important;
        color: #fff !important;

        & > *{
            color: #fff !important;
        }
    }

`

const FooterLinksCon = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 8rem;

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }

    @media (min-width: 481px) {
        margin-top: 3em;
    }
`

const CopyRight  = styled.span`
    font-weight: 300;
    margin-top: 2rem;
`

export {Foot, FooterCon, FooterLinks, LogoAndSocails, SocailsCon, FooterLinksCon, CopyRight}