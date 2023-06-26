import React from 'react'
import { useState, useContext } from 'react'
import { Context } from "./Context"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

function FinalScore() {

const {filmList, filmListWrong, clearFilmList} = useContext(Context)
const score = filmList.length
const scoreWrong = filmListWrong.length
const navigate = useNavigate()

const filmElements = filmList.map((item) => 
  <div className='d-flex justify-content-around align-items-center mb-3' key={nanoid()}>
    <img src="/green-tick.png" className='tick' alt="" />
      <a href={`https://www.imdb.com/title/${item.id}`} target="_blank">
        <img className='finalPoster' src={item.p} alt="" />
      </a>
      <p className='text-white ff-russo final-year'>{item.y}</p>
  </div>
)
const filmElementsWrong = filmListWrong.map((itemBad) => 
  <div className='d-flex justify-content-around align-items-center mb-3' key={nanoid()}>
    <img src="/red-cross.png" className='tick' alt="" />
      <img className='finalPoster' src={itemBad.p} alt="" />
      <div className='d-flex flex-column'>
        <p className='ff-russo final-year-wrong'>{itemBad.y}</p>
        <p className='ff-russo final-year'>{itemBad.r}</p>
      </div>
  </div>
)

console.log(filmElements)

function beginAgain() {
  clearFilmList()
  navigate("/")
}


  return (
    <Container className="d-flex flex-column">
      <Row className='mb-4'>
        <h2>You got {score} out of 10</h2>
      </Row>
      <Row className='mb-4'>
        <h4>You got these {score} right!</h4>
        {filmElements}
      </Row>
      <Row className='mb-4'>
        <h4>{scoreWrong > 0 ? `You got these ${scoreWrong} wrong` : ""}</h4>
        {filmElementsWrong}
      </Row>
      <Row className='mb-4 d-flex align-items-center justify-content-center'>
        <button className='begin-button ff-russo' onClick={() => beginAgain()}>Play Again</button> 
      </Row>
      
    </Container>
    
  )
}

export {FinalScore}