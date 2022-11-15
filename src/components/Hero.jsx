import React, { useState } from 'react'

// imgs
import imgOne from '../assets/imgs/image1hero.png'
import imgTwo from '../assets/imgs/image2hero.png'
import imgThree from '../assets/imgs/image3hero.png'
import imgFour from '../assets/imgs/image4hero.png'


import {
  HeroCon, 
  AccentHeader, 
  Subtext, 
  SearchBarCon, 
  SearchInput, 
  SearchBtn, 
  ImgCon, 
  Gaping 
  } from './Hero.styled'

function Hero() {
  const [formData, setFormData] = useState({search :''})

  function handleForm(e) {
    // console.log(e.target.value)
    setFormData(prev => (
      {...prev, [e.target.name] : e.target.value}
    ))
  }

  return (
    <HeroCon>
      <div>
        <div>

          <h1>Rent a <AccentHeader>Place</AccentHeader> away from <AccentHeader>Home</AccentHeader> in the <AccentHeader>Metaverse</AccentHeader></h1>

          <Subtext>
              we provide you access to luxury and affordable houses in the metaverse, get chance to turn your imagination to reality at your comfort zone
          </Subtext>

          <SearchBarCon>
            <SearchInput>
              <input 
                type="text"
                placeholder='Search for location'
                name='search'
                onChange={handleForm}
                value={formData.search}
              />
            </SearchInput>
            <SearchBtn>Search</SearchBtn>
          </SearchBarCon>
        </div>

      </div>

      <ImgCon>
        <div>
          <Gaping></Gaping>
          <img src={imgOne} />
          <img src={imgThree} />

        </div>
        <div>
          <img src={imgTwo} />
          <img src={imgFour} />

        </div>
      </ImgCon>
    </HeroCon>
  )
}

export default Hero