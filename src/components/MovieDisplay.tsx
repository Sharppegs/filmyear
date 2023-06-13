import React from 'react'
import { nanoid } from 'nanoid';
import { motion } from 'framer-motion';
import { fadeUp, fadeDown } from './variants';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';


function MovieDisplay(props:
    {movieName: string, year: number, poster: string}) {

    
    function pick() {
        let randomho = Math.floor(Math.random()*6 + 1)
        return randomho
    }
    



    const answers = [props.year, props.year + pick(), props.year + pick(), props.year - pick()]
    const randomAnswers = answers.sort(() => Math.random() - 0.5)
    console.log(randomAnswers)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    function handleClick(year:number) {
        if(year === props.year) {
            console.log(`correct, it is ${props.year}`)
            handleOpen()
        } else {
            console.log("Nope")
            
        }
    }

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
                    {/* <UserGuess year={props.year} /> */}
                    <div className='buttons'>
                        {randomAnswers?.map(answer =>
                            <Button 
                                key={nanoid()} 
                                variant="warning" 
                                className={props.year ? "m-1 d-block" : "d-none"}
                                value={answer ? answer : ""}
                                onClick={() => handleClick(answer)}
                            >
                                {answer}
                            </Button>
                            )}
                    </div>
                </Col>
                <Col md={6} className="d-flex flex-column justify-content-center align-items-center order-1 mb-5">
                    <div className="image-border">
                        <motion.img 
                            src={props.poster} 
                            className='poster' 
                            alt=""
                            variants={fadeDown}
                            initial="hidden"
                            animate="visible"
                        />
                    </div>
                </Col>
            </Row>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className=''
                >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    Correct! It is {props.year}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Well Done!
                    </Typography>
                </Box>
            </Modal>
        </Container>
    </div>
  )
}

export default MovieDisplay