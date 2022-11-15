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


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Container>
        <Nav />
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
