import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


function UserGuess(props:{year: any}) {
    const [userInput, setUserInput] = useState({
        userYear: ""
    })

    const [open, setOpen] = React.useState(false);
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

    

    function handleChange(event:any) {
        const {name, value} = event.target
        setUserInput(prevInput => ({
            ...prevInput,
            [name]: value
        }))
    }

    function checkAnswer(year:any) {
        if(year === props.year) {
            console.log(`correct, it is ${props.year}`)
            handleOpen()
        } else {
            console.log("No, try again")
            
        }
    }



  return (
    <div>
        <h2>{userInput.userYear}</h2>
        <InputGroup className="mb-3">
            <Form.Control
            aria-label="What's the Year?"
            aria-describedby="basic-addon2"
            value={userInput.userYear}
            onChange={handleChange}
            name="userYear"
            />
            <Button variant="outline-success" id="button-addon2" onClick={() => checkAnswer(userInput.userYear)}>
                Guess!
            </Button>
      </InputGroup>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className=''
        >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Correct! It is {userInput.userYear}
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