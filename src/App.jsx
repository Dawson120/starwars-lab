import { Route, Routes } from 'react-router-dom'
import './App.css'

import NavBar from './components/NavBar/NavBar'
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipDetails from './pages/StarshipDetails/StarshipDetails'



function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/starships' element={<StarshipList />} />
        <Route path='/starships/:id' element={<StarshipDetails />} />
      </Routes>
    </>
  );
}

export default App
