import React from 'react'
import NavBar from './components/NavBar'
import Presentation from './components/Presentation'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Pagamentos from './components/Pagamentos'
import Depoimentos from './components/Depoimentos'
import Contatos from './components/Contatos'

const App = () => {
  return (
    <div>
      <NavBar/> 
      <Presentation/>
      <Sobre/>
      <Servicos/>
      <Pagamentos/>
      <Depoimentos/>
      <Contatos/>
    </div>
  )
}

export default App
