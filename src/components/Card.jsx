import React from 'react'

import heart from '../assets/icons/Vector.svg'
import heartFilled from '../assets/icons/heartfilled.svg'

// componens
import BasicRating from './BasicRating'

import {CardCon, CardHead, CardBody} from './Card.styled'


function Card({img}) {
  return (
    <CardCon>
        <CardHead>
          <img src={img} alt="like_btn" />
          <span>
            <img src={heart} alt="" />
          </span>
        </CardHead>
        <CardBody>
          <div>
            <span>Desert King</span>
            <span>1MBT per night</span>
          </div>
          <div>
            <span>2345km away</span>
            <span>available for 2weeks stay</span>
          </div>
          <BasicRating />
        </CardBody>
    </CardCon>
  )
}

export default Card