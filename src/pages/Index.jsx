import React from 'react'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'; 

// components
import Hero from '../components/Hero'
import ProductListing from '../components/ProductListing'

import {Header, 
  AffiliateCon, 
  SectionTwo, 
  SectionThree, 
  SectionThreeCon,
  Text,
  ButtonCon} from './Index.styled'

// imgs
import metaMask from '../assets/icons/meta-mask.png'
import openSea from '../assets/icons/open-sea.png'
import mbToken from '../assets/icons/mb-token.png'

import one from '../assets/imgs/Frame1.png'
import two from '../assets/imgs/Frame2.png'
import three from '../assets/imgs/Frame3.png'
import four from '../assets/imgs/Frame4.png'
import five from '../assets/imgs/Frame5.png'
import six from '../assets/imgs/Frame6.png'
import seven from '../assets/imgs/Frame7.png'
import eight from '../assets/imgs/Frame8.png'

import sectionThreeImg from '../assets/imgs/Frame_three.png'





function Index() {
  const productImgs = [one, two, three,four, five, six, seven, eight]
  return (
    <div>
      <Header>
          <Hero />
          <AffiliateCon>
            <img src={mbToken} alt="mbtoken_logo" />
            <img src={metaMask} alt="metamask_logo" />
            <img src={openSea} alt="opensea_logo" />
          </AffiliateCon>
      </Header>
      <SectionTwo>
        <h2>Inspiration for uour next adventure</h2>
        <ProductListing imgs ={productImgs} />
      </SectionTwo>
      <SectionThree>
        <SectionThreeCon>
          <Text>
            <h3>Metabnb NFTs</h3>
            <p>
              Discover our NFT gift cards coloection. Loyal customers gets amazing gift cards which are traded as NFTs gives our customer access to loads of our exclusive services.
            </p>
            <ButtonCon>
              <Button variant="contained">Learn more</Button>
            </ButtonCon>
          </Text>
          <div>
            <img src={sectionThreeImg} alt="" />
          </div>
        </SectionThreeCon>
      </SectionThree>

    </div>
  )
}

export default Index