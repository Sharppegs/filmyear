import React from 'react'
import {Route, Routes } from 'react-router-dom' 
import { Moviefetch } from './Moviefetch'
import { RoundTwo } from './RoundTwo'
import { RoundThree } from './RoundThree'
import { RoundFour } from './RoundFour'
import {FinalScore}  from './FinalScore'
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import { RoundFive } from './RoundFive'
import { RoundSix } from './RoundSix'

function App() {
  return (
    <div>
      <NavBar />
        <Routes>
            <Route path="/" element={<Moviefetch />} />
            <Route path="/RoundTwo" element={<RoundTwo />} />
            <Route path="/RoundThree" element={<RoundThree />} />
            <Route path="/RoundFour" element={<RoundFour />} />
            <Route path="/RoundFive" element={<RoundFive />} />
            <Route path="/RoundSix" element={<RoundSix />} />
            <Route path="/FinalScore" element={<FinalScore />} />
            
            
        </Routes>
    </div>
  )
}

export default App