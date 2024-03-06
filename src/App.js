import { useState } from 'react'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

import './App.css'

function App() {
  return (
    <>
      <Header> </Header>
      <hr style={{margin: 0, padding: 0, width: '100%', color: 'rgba(0,0,0,0.65)'}}/>
      <Body></Body>
      <Footer> </Footer>
    </>
  )
}

export default App
