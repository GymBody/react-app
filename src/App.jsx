//import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Search from './pages/Search'
import Profile from './pages/Profile'
import WeatherAPI from './components/WeatherAPI'
import SchedulePage from './pages/SchedulePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Weather" element={<WeatherAPI />} />
        <Route path="/SchedulePage" element={<SchedulePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
