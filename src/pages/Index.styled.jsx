import styled from 'styled-components'

const Header = styled.header`
    height: 90vh;
    position: relative;
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

`
const SectionTwo = styled.section`
    
    h3{
        margin-top: 4rem;
        text-align: center;
    }
`
const SectionThree = styled.section`
    background-color: #A02279;
    height: 90vh;
    max-width: 100vw;
    margin: 0 calc(-50vw + 50%);
    margin-top: 5rem;
    /* padding-top: 8rem; */
    /* padding-bottom: 8rem; */
    /* padding-top: 22rem;
    padding-bottom: 22rem; */

    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;

    
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
`
const ButtonCon = styled.div`
    margin-top: 4rem;
    & > *{
        background-color: #fff !important;
        color: #A02279 !important;
    }
`



export {Header, AffiliateCon, SectionTwo, SectionThree, SectionThreeCon, Text, ButtonCon}