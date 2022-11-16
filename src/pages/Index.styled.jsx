import styled from 'styled-components'

const Header = styled.header`
    height: 100vh;
    position: relative;



    @media (min-width : 481px) {
        height: 70vh;
    }

    @media (min-width: 1020px) {
        height: 100vh;
        position: relative;
    }
`
const AffiliateCon = styled.div`
    width: 100vw;
    margin: 0 calc(-50vw + 50%);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 2.5rem;
    background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
    padding: 1.7rem;

    position: absolute;
    bottom: 0;
    left: 0;

    @media (min-width : 481px) {
        position: relative;
        margin-top: 3rem;
   
    }

    @media (min-width: 1020px) {
        position: relative;
        bottom: 0;
        left: 0;
        margin-top: 5rem;
        width: 100vw;
        margin: 0 calc(-50vw + 50%);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        gap: 2.5rem;
        background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
        padding: 1.7rem;

        position: absolute;
        bottom: 0;
        left: 0;
    }
`
const SectionTwo = styled.section`
    
    h2{
        margin-top: 4em;
        text-align: center;
    }

    @media (min-width : 481px) {
        h2{
            margin-top: 0em;
        }
    }

    @media (min-width: 1020px) {
        h2{
            margin-top: 4em;
            text-align: center;
        }
    }
`
const SectionThree = styled.section`
    background-color: #A02279;
    max-width: 100vw;
    height: 70vh;
    margin: 0 calc(-50vw + 50%);
    margin-top: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 481px) {
        height: 50vh;
    }

    @media (min-width: 1020px) {
        background-color: #A02279;
        max-width: 100vw;
        height: 70vh;
        margin: 0 calc(-50vw + 50%);
        margin-top: 5rem;
       

        display: flex;
        justify-content: center;
        align-items: center;
        
    }
`
const SectionThreeCon = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: #fff;
    max-width: 80%;

    img{
        width: 90%;
        margin-left: -6rem;
    }

    @media (min-width : 481px) {
        img{
            width: 100%;
            margin-left: 0;
        }

    }

    @media (min-width: 1020px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        color: #fff;
        max-width: 80%;

        img{
            width: 90%;
            margin-left: -6rem;
        }
    }

`
const Text = styled.div`
    color: #fff;

    & > *{
        color: #fff;
    }

    h3{
       margin-top : 6rem;
    }

    p{
        width: 60%;
        font-size: 18px;
        margin-top: 2.5rem;
        line-height: 34px;
    }

    @media (min-width: 481px) {
        h3{
            margin-top: 0;
        }
        p{
            width: 100%;
        }
    }

    @media (min-width: 1020px) {
        & > *{
            color: #fff;
        }

        h3{
        margin-top : 6rem;
        }

        p{
            width: 60%;
            font-size: 18px;
            margin-top: 2.5rem;
            line-height: 34px;
        }
    }
`
const ButtonCon = styled.div`
    margin-top: 4rem;
    & > *{
        background-color: #fff !important;
        color: #A02279 !important;
    }
`



export {Header, AffiliateCon, SectionTwo, SectionThree, SectionThreeCon, Text, ButtonCon}