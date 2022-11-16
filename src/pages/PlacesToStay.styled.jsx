import styled from 'styled-components'

const SectionCon = styled.div`
    @media screen and (min-width : 481px) {
        margin-top: 3rem;
    }
   
   @media screen and (min-width : 1025px) {
       margin-top: 4rem;
   }
`

const FilterCon = styled.div`
     
    
    display: grid;
    grid-template-columns: 8fr 1fr;
    gap: 6em;

    span{
        cursor: pointer;

        &:hover{
            color: #A02279;
        }
    }

    @media (min-width: 481px) {
        gap: .3em;
        position: relative;
    }

`
const FilterItemsCon = styled.div`
    

    /* @media (min-width: 481px) { */
        display: grid;
        grid-template-columns:1fr 1fr 1fr 1fr;
        z-index: 99;
        width: 100%;
        gap: 1em;
        padding: 2em;
        border-radius: 0 0 10px 10px;
    /* } */

    @media (min-width: 1020px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

const LocationCon = styled.div`
    
     
       display: flex;
       justify-content: space-between;
       align-items: center;
       border: 1px solid #B4B4B4;
       padding: 0em 1em;
       border-radius: 10px;
       cursor: pointer;

    @media (min-width: 481px) {

    }
   

`

const Listings = styled.div`
    margin-bottom: 4rem;
     
    @media (min-width: 1020px) {
           margin-top: -2rem;
    }
`

export {SectionCon, FilterCon, FilterItemsCon, LocationCon, Listings}