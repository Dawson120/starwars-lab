import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import NavBar from './components/NavBar/NavBar'
import StartshipList from './pages/StarshipList/StarshipList'

// import

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/starships' element={<StartshipList />}/>
      </Routes>

    </>
  )
}

export default App
