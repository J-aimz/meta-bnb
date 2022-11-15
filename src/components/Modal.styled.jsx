import styled from 'styled-components'

const ModalCon = styled.div`
    border-radius: 10px;
    /* padding: 1.5em; */
`

const ModalHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1.5em;
    /* border-bottom: 1px solid #333; */
`
const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: .5rem;
    padding: 1em 1.5em;

`
const ModalItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.75rem;
    cursor: pointer;
    padding: .5em .7em;
    border: 1px solid #CFD8DC;
    background-color: #fff;
    border-radius: 10px;

    &:hover{
        background-color: #CFD8DC;
    }

    div{
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 1em;

        span{
            font-weight: bold;
        }
    }

    
`

const Line = styled.hr`
    width: 100%;
`

const Small = styled.small`
    width: 100%;
    margin-top: 2rem;
    text-align: left;
`


export {ModalCon, ModalHead, ModalContent, ModalItem, Line, Small}