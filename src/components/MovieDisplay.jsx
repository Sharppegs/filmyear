import React from 'react'
import { nanoid } from 'nanoid';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn, fadeRight, fadeLeft } from './variants';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';


function MovieDisplay(props) {

    
  return (
 <div key={nanoid()}>
    
         <Container className='px-1 py-1'>
            <Row className="mt-2 mt-md-0">
                <Col md={6} className="d-flex flex-column justify-content-center text-center order-2">
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className='ff-russo'
                    >
                        {props.movieName}
                    </motion.h1>
                </Col>
                <Col md={6} className="d-flex flex-column justify-content-center align-items-center order-1 mb-3">
                    <div className="image-border">
                        <motion.img 
                            src={props.poster} 
                            className='poster' 
                            alt=""
                            variants={fadeIn}
                            initial="hidden"
                            animate="visible"
                        />
                    </div>
                </Col>
            </Row>
        </Container>  
    </div>
  )
}

export default MovieDisplay