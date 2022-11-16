import styled from 'styled-components';

const HeroCon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    div{

        div{
            width: 85%;
        }
    }

    @media (min-width : 481px) {
        margin-top: 1em;
        gap: 1rem;

        div{

            div{
                width: 100%;
            }
        }
    }

    @media (min-width:1020px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
        padding-bottom: 3rem;

        div{

            div{
                width: 85%;
            }
        }
    }

`

const AccentHeader = styled.span`
    color: #A02279;
`

const Subtext = styled.p`
    margin-top: 2em;
    font-size: 24px;
    line-height: 35px;

    @media (min-width : 481px) {
        margin-top: .2em;
        line-height: 25px;
        font-size: 18px;
    }
    @media (min-width: 1020px) {
        margin-top: 2em;
        font-size: 24px;
        line-height: 35px;
    }
`

const SearchBarCon = styled.div`
    border: 1px solid #A3A3A3;
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0;
    height: 3rem;
    margin-top: 3.5rem;
`
const SearchInput = styled.div`
    width: 70%;
    height: inherit;
    input{
        display: inline-block;
        width: 100%;
        height: inherit;
        padding: .5em .7em;
        display: inline-block;
        height: inherit;
    }
`

const SearchBtn = styled.button`
    padding: .9em 1.25em;
    color: #fff;
    border: none;
    cursor: pointer;
    background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
    /* border-radius: 10px; */
    width: 30%;
    height: inherit;
   
`

const ImgCon = styled.div`
   display: flex;
   gap: .5rem;
   margin-right: 7rem;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: .5rem;

        img{
            width: 20rem;
        }
    }

    @media(min-width : 481px) {
     
        margin-right: 0;

        div{
            img{
                width: 9rem;
            }
        }
    }

    @media (min-width: 1020px) {
        display: flex;
        gap: .5rem;
        margin-right: 7rem;

        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: .5rem;

            img{
                width: 20rem;
            }
        }
    }


`

const Gaping = styled.span`
    height: 11rem;
    display: block;

    @media(min-width : 481) {
        height: 5rem ;
        border: 1px solid red;
    }

    @media (min-width) {
        height: 11rem;
        display: block;
    }
`

export {HeroCon, AccentHeader, Subtext, SearchBarCon, SearchInput, SearchBtn, ImgCon, Gaping}


