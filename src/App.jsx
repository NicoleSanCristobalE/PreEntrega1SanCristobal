// import { useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a la Tienda de Lulú" clase="text-success"/>
    </>
  )
}

export default App
