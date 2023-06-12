import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AllPlayers from './components/AllPlayers';
import NavBar from './components/Navbar';
import SearchBar from './components/SearchBar';
import NewPlayerForm from './components/NewPlayerForm';
import SinglePlayer from './components/SinglePlayer';
import './App.css'


function App() {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/all-players" element={<AllPlayers />} /> */}
        <Route path="/players" element={<SearchBar />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
        {/* <Route path='/players/:id' element={<SinglePlayerCard />} /> */}
        
        {/* <Route path="/nav-bar" element={<NavBar />} /> */}
        {/* <Route path="/new-player-form" element={<NewPlayerForm />} />  */}
      </Routes>
    </>
  )
}

export default App
