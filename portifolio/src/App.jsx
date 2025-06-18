import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Ability } from './components/Ability'
import { Projects } from './components/Projects'
import { Contatc } from './components/Contatc'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Ability />
      <Projects />
      <Contatc />
      <Footer />   
    </>
  )
}

export default App
