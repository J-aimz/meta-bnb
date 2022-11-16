import React from 'react'

import {SectionCon, FilterCon, FilterItemsCon, LocationCon, Listings} from './PlacesToStay.styled'
import TuneIcon from '@mui/icons-material/Tune';

//components 
import ProductListing from '../components/ProductListing';

// imgs
import one from '../assets/imgs/Frame5.png'
import two from '../assets/imgs/Frame6.png'
import three from '../assets/imgs/Frame7.png'
import four from '../assets/imgs/Frame8.png'
import five from '../assets/imgs/Frame1.png'
import six from '../assets/imgs/Frame2.png'
import seven from '../assets/imgs/Frame3.png'
import eight from '../assets/imgs/Frame4.png'
import nine from '../assets/imgs/Frame1places.png'
import ten from '../assets/imgs/Frame2places.png'
import eleven from '../assets/imgs/Frame3places.png'
import twelve from '../assets/imgs/Frame4places.png'
import thirteen from '../assets/imgs/Frame5places.png'
import fourteen from '../assets/imgs/Frame6places.png'
import fifteen from '../assets/imgs/Frame7places.png'
import sixteen from '../assets/imgs/Frame8places.png'


function PlacesToStay() {

  const imgs = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen]

  return (
    <SectionCon>
        <FilterCon>
          <FilterItemsCon>
            <span>Resturant</span>
            <span>Cottage</span>
            <span>Castle</span>
            <span>Fantasy city</span>
            <span>Beach</span>
            <span>Carbins</span>
            <span>Off-grid</span>
            <span>Farm</span>
          </FilterItemsCon>
          <LocationCon>
            <span>Location</span>
            <TuneIcon />
          </LocationCon>
        </FilterCon>
        <Listings>
          <ProductListing imgs={imgs}/>
        </Listings>
    </SectionCon>
  )
}

export default PlacesToStay