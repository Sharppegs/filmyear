import React from 'react'
import { nanoid } from 'nanoid';
import { motion } from 'framer-motion';
import { fadeUp, fadeDown } from './variants';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserGuess from './UserGuess';


function MovieDisplay(props:
    {movieName: string, year: number, poster: string}) {

  return (
    <div key={nanoid()}>
    
        <Container className='px-1 py-1'>
            <Row className="mt-5 mt-md-0">
                <Col md={6} className="d-flex flex-column justify-content-center text-center order-2">
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                    >
                        {props.movieName}
                    </motion.h1>
                    <UserGuess year={props.year} />
                </Col>
                <Col md={6} className="d-flex flex-column justify-content-center align-items-center order-1">
                    <motion.img 
                        src={props.poster} 
                        className='poster' 
                        alt=""
                        variants={fadeDown}
                        initial="hidden"
                        animate="visible"
                    ></motion.img>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default MovieDisplay