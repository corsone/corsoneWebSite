import React from 'react';

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

import './App.css'

function App() {
  return (
    <>
      <div className='in-sviluppo'>
        ⚠️sito in sviluppo!⚠️
      </div>
      <Header> </Header>
      <Body></Body>
      <Footer> </Footer>
    </>
  )
}

export default App
