import React from 'react'
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button';
import { useState, useEffect, useContext } from 'react';
import { Context } from "../Context"
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';


function UserGuess(props) {
    const {finalFilmList, finalFilmListWrong} = useContext(Context) 
   const navigate = useNavigate()
   const [hasAnswered, setHasAnswered] = useState(false)
   
   const answers = [
                     props.year - 5,
                     props.year - 4,
                     props.year - 3,
                     props.year - 2,
                     props.year - 1,                      
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

    function removeDupeYears(arr){
        return [...new Set(arr)];
        }

    const random4Answers = [props.year, answers[pick()], answers[pick()], answers[pick()]]
    const answerOptions = removeDupeYears(random4Answers).sort(() => Math.random() - 0.5)

    

    const answerOptionsOrder = answerOptions.sort((a, b) => a-b);
    if(answerOptionsOrder.length < 4) {
        answerOptionsOrder.push(answers[6])
    }
    console.log(answerOptionsOrder)

   


    function handleClick(year, poster, realYear) {
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
    <div>
    
       {hasAnswered ? <div className='answered'><h3 className='logged'>Logged!</h3></div> :
       <div className='buttons'> 
       {answerOptionsOrder?.map(answer =>
        <button 
            key={nanoid()} 
            className={props.year ? "option-button ff-russo" : "d-none"}
            value={props.year ? answer : ""}
            onClick={() => handleClick(answer, props.poster, props.year)}
            
        >
            {answer}
        </button>
        ) }
        </div>
        } 
    </div>

   
  )
}

export default UserGuess