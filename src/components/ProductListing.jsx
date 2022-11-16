import React from 'react'
import styled from 'styled-components'

// component
import Card from '../components/Card'

function ProductListing({imgs}) {
  return (
    <ProductsSection>
        {
            imgs.map((el, ind) =>(
                <Card key={ind} img={el}/>
            ))
        }
    </ProductsSection>
  )
}

// styling
const ProductsSection = styled.section`
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width : 481px) {
      margin-top: 3em;
      grid-template-columns: 1fr 1fr;
      gap: .7rem;
    }

    @media (min-width : 1020px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 1.7rem;
      margin-top: 4rem;
    }
  



`

export default ProductListing