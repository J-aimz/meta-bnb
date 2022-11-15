import styled from 'styled-components'

const CardCon = styled.div`
    padding: 1em;
    border: #d7d7d7 solid 1px;
    border-radius: 10px;
    /* display: ; */
`

const CardHead = styled.div`
    position: relative;
    border-radius: 10px;

    img{
        width: 100%;
        border-radius: 10px;
    }

    span{
        width: 2rem;
        position: absolute;
        top: 1rem;
        right: 1rem;
    }
`

const CardBody = styled.div`
   
   div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
   }


    span{
        display: inline-block;
    }
`

export {CardCon, CardHead, CardBody}