import React from 'react'

import {Foot, FooterCon, FooterLinks, LogoAndSocails, SocailsCon, FooterLinksCon, CopyRight} from './Footer.styled'

// img
import logo from '../assets/icons/metabnb_logo_white.svg'

// icons
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Copyright } from '@mui/icons-material';

function Footer() {
  return (
    <Foot>
      <FooterCon>
        <LogoAndSocails>
          <img src={logo} alt="metabnb_logo" />
          <SocailsCon>
            <FacebookOutlinedIcon color="primary"  className='icons' />
            <InstagramIcon color="primary"  className='icons' />
            <TwitterIcon color="primary"  className='icons' />
          </SocailsCon>
        </LogoAndSocails>
        <FooterLinksCon>

          <div>
            <span>Community</span>

            <div>
              <FooterLinks>NFT</FooterLinks>
              <FooterLinks>Tokens</FooterLinks>
              <FooterLinks>Landlords</FooterLinks>
              <FooterLinks>Discord</FooterLinks>
            </div>
          </div>
          <div>
            <span>Places</span>
            <div>
              <FooterLinks>Castle</FooterLinks>
              <FooterLinks>Farms</FooterLinks>
              <FooterLinks>Beach</FooterLinks>
              <FooterLinks>Learn More</FooterLinks>
            </div>

          </div>
          <div>
            <span>About us</span>
            <div>
              <FooterLinks>Road map</FooterLinks>
              <FooterLinks>Creators</FooterLinks>
              <FooterLinks>Career</FooterLinks>
              <FooterLinks>Contact us</FooterLinks>
            </div>
          </div>
        </FooterLinksCon>
        <CopyRight>&copy; 2022 Metabnb</CopyRight>

      </FooterCon>
    </Foot>
  )
}

export default Footer