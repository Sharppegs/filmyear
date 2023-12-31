import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { Context } from "./Context"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeDown} from './components/variants';
import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon } from 'react-share';

function FinalScore() {

const {filmList, filmListWrong, clearFilmList, bestScore, setBestScore} = useContext(Context)
const score = filmList.length
const scoreWrong = filmListWrong.length
const navigate = useNavigate()

useEffect(() => {
  if(filmList.length > bestScore) {
  localStorage.setItem('myScore', JSON.stringify(filmList.length))
  setBestScore(filmList.length)
  }
}, [])

const filmElements = filmList.map((item) => 
  <motion.div 
    className='d-flex justify-content-around align-items-center mb-3 mt-3' 
    key={nanoid()}
    variants={fadeDown}
    initial="hidden"
    animate="visible"
    >
    <img src="/green-tick.png" className='tick' alt="" />
      <a href={`https://www.imdb.com/title/${item.id}`} target="_blank">
        <img className='finalPoster' src={item.p} alt="" />
      </a>
      <p className='text-white ff-russo final-year'>{item.y}</p>
  </motion.div>
)
const filmElementsWrong = filmListWrong.map((itemBad) => 
  <motion.div 
    className='d-flex justify-content-around align-items-center mb-3' 
    key={nanoid()}
    variants={fadeDown}
    initial="hidden"
    animate="visible"
    >
    <img src="/red-cross.png" className='tick' alt="" />
    <a href={`https://www.imdb.com/title/${itemBad.id}`} target="_blank">
      <img className='finalPoster' src={itemBad.p} alt="" />
    </a>
      <div className='d-flex flex-column'>
        <p className='ff-russo final-year-wrong'>{itemBad.y > 0? itemBad.y : ""}</p>
        <p className='ff-russo final-year'>{itemBad.r}</p>
      </div>
  </motion.div>
)

console.log(filmElements)

function beginAgain() {
  clearFilmList()
  navigate("/")
}


  return (
    <Container className="d-flex flex-column">
      <Row className='mb-4 text-center ff-russo'>
        <h2>You got {score} out of 10</h2>
      </Row>
      <Row className='mb-4 text-center ff-russo'>
        <h4>You got {score} right!</h4>
        {filmElements}
      </Row>
      <Row className='mb-4 text-center row'>
        <h4 className='mb-4 ff-russo'>{scoreWrong > 0 ? `You got ${scoreWrong} wrong` : ""}</h4>
        {filmElementsWrong}
      </Row>
      <Row className='mb-4 text-center ff-russo'>
        <p>Share your score!</p>
        
        <div className='d-flex align-items-center justify-content-center mb-5'>
          <TwitterShareButton
            url={'https://filmyear.netlify.app'}
            quote={`I just got ${filmList.length} out of 10 on FilmYear!`}
            hashtag="#filmyear"
            className='mx-3'
            >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <FacebookShareButton
            url={'https://filmyear.netlify.app'}
            quote={`I just got ${filmList.length} out of 10 on FilmYear!`}
            hashtag="#filmyear"
            className='mx-3'
            >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <WhatsappShareButton
            url={'https://filmyear.netlify.app'}
            quote={`I just got ${filmList.length} out of 10 on FilmYear!`}
            hashtag="#filmyear"
            className='mx-3'
            >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
        <button className='end-button ff-russo m-auto' onClick={() => beginAgain()}>Play Again</button> 
      </Row>
      
    </Container>
    
  )
}

export {FinalScore}