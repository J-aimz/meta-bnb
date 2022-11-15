import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {ModalCon, ModalHead, ModalContent, ModalItem, Line, Small} from './Modal.styled'

// img
import metamask from '../assets/icons/metamask.png'
import walletConnect from '../assets/icons/walletConnect.png'




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  borderRadius : '10px',
  boxShadow: 24,
  paddingBottom : '1rem'
};

export default function BasicModal(props) {

  return (
    <div>
      <Modal
        open={props.openModal}
        onClose={props.closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalCon> 
            <ModalHead>
              <h5>Connect Wallet</h5>
              <CloseIcon onClick={props.closeModal} />
            </ModalHead>
            <Line />
            <ModalContent>
            <Small>Choose your preferred wallet:</Small>
              <ModalItem onClick={props.closeModal}>
                <div>
                  <img src={metamask} alt="logo_metamask" />
                  <span>Metamask</span>
                </div>
                <ArrowForwardIosIcon />
              </ModalItem>
              <ModalItem onClick={props.closeModal}>
                <div>
                  <img src={walletConnect} alt="logo_wallet_connect" />
                  <span>Walletconnect</span>
                </div>
                <ArrowForwardIosIcon />
              </ModalItem>
            </ModalContent>
          </ModalCon>
        </Box>
      </Modal>
    </div>
  );
}