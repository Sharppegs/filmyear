import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState, useEffect, useContext } from 'react';
import { Context } from "../Context"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';


function UserGuess(props:{year: number, round: string, title: string, poster: string}) {
    const {finalFilmList, finalFilmListWrong} = useContext(Context) 
   const navigate = useNavigate()
   const [hasAnswered, setHasAnswered] = useState(false)

   const answers:number[] = [
                     props.year - 5,
                     props.year - 4,
                     props.year - 3,
                     props.year - 2,
                     props.year - 1,
                     props.year,                       
                     props.year + 5, 
                     props.year + 4, 
                     props.year + 3, 
                     props.year + 2, 
                     props.year + 1
                    ]

    function pick() {
        let randomho = Math.floor(Math.random() * answers.length)
        return randomho
    }

    function removeDupeYears(arr:any){
        return [...new Set(arr)];
        }

    const random4Answers:number[] = [props.year, answers[pick()], answers[pick()], answers[pick()]]
    const answerOptions = removeDupeYears(random4Answers).sort(() => Math.random() - 0.5)

    

    const answerOptionsOrder = answerOptions.sort((a:any, b:any) => a-b);
    // if(answerOptionsOrder.length < 5) {
    //     answerOptionsOrder.push(answers[9])
    // }
    console.log(answerOptionsOrder)

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

    function handleClick(year:number, poster:string, realYear: number) {
        if(year === props.year) {
            console.log(`correct, it is ${props.year}`)
            setHasAnswered(prev => !prev)
            finalFilmList(year, poster, realYear)
            setTimeout(() => navigate(`/${props.round}`), 2000)
        } else {
            setHasAnswered(prev => !prev)
            finalFilmListWrong(year, poster, realYear)
            setTimeout(() => navigate(`/${props.round}`), 2000)
            
        }
    }

  return (
    <div className='buttons'>
       {hasAnswered ? <h3 className="text-center">Logged!</h3> : 
       answerOptionsOrder?.map(answer =>
        <button 
            key={nanoid()} 
            className={props.year ? "option-button ff-russo" : "d-none"}
            value={props.year ? answer : ""}
            onClick={() => handleClick(answer, props.poster, props.year)}
        >
            {answer}
        </button>
        ) } 


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
    </div>

   
  )
}

export default UserGuess