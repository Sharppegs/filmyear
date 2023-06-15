import React from 'react'
import {Route, Routes } from 'react-router-dom' 
import { Moviefetch } from './Moviefetch'
import { Playground } from './Playground'
import { RoundTwo } from './RoundTwo'
import { RoundThree } from './RoundThree'
import {FinalScore}  from './FinalScore'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar />
        <Routes>
            <Route path="/" element={<Moviefetch />} />
            <Route path="/RoundTwo" element={<RoundTwo />} />
            <Route path="/RoundThree" element={<RoundThree />} />
            <Route path="/FinalScore" element={<FinalScore />} />
            <Route path="/playground" element={<Playground />} />
            
        </Routes>
    </div>
  )
}

export default App