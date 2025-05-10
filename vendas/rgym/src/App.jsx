import React from 'react'
import NavBar from './components/NavBar'
import Presentation from './components/Presentation'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Pagamentos from './components/Pagamentos'

const App = () => {
  return (
    <div>
      <NavBar/> 
      <Presentation/>
      <Sobre/>
      <Servicos/>
      <Pagamentos/>
    </div>
  )
}

export default App
