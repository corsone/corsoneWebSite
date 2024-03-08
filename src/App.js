import React from 'react';

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

import './App.css'

function App() {
  return (
    <>
      <div className='in-sviluppo'>
        <span role='img' aria-label='attention'>⚠️</span>sito in sviluppo!<span role='img' aria-label='attention'>⚠️</span>
      </div>
      <Header> </Header>
      <Body></Body>
      <Footer> </Footer>
    </>
  )
}

export default App
