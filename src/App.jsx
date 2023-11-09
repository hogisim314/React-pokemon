import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import PokeCard from './components/PokeCard';
import { useDebounce } from './hooks/useDebounce';
import AutoComplete from './components/AutoComplete';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}></Route>
        <Route path='/pokemon/:id' element={<DetailPage></DetailPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
