import React from 'react'
import {Route, Routes } from 'react-router-dom' 
import { Moviefetch } from './Moviefetch'
import { Playground } from './Playground'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Moviefetch />} />
            <Route path="/playground" element={<Playground />} />
            
        </Routes>
    </div>
  )
}

export default App