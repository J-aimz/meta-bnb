import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// pages
import Index from './pages/Index'
import PlacesToStay from './pages/PlacesToStay'

import styled from 'styled-components'

// components
import Nav from './components/Nav'
import Card from './components/Card'
import Footer from './components/Footer'
import Modal from './components/Modal'


function App() {
  const [count, setCount] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  function handleModal() {
    setOpenModal(prev => !prev)
  }

  console.log(openModal)

  return (
    <div className="App">
      <Modal openModal ={openModal} closeModal ={handleModal} />
      <Container>
        <Nav setModal ={handleModal} />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/places-to-stay' element={<PlacesToStay />} />
          <Route path='/card' element={<Card />} />

        </Routes>
        <Footer />

      </Container>
        
    </div>
  )
}

const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
`

export default App
