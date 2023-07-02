import React from 'react'
import {One} from './titles'
import { useState } from 'react'

import MovieDisplay from './components/MovieDisplay';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserGuess from './components/UserGuess';


function Moviefetch() {
    const [title, setTitle] = useState({
        Title: "",
        Year: "",
        imdbID: "",
        Type: "",
        Poster: ""
    })

    console.log(One.length)

    const [beginGame, setBeginGame] = useState(false)


    function getTitle() {
        let random = Math.floor(Math.random()*One.length)
        let chosenTitle = One[random]
        setBeginGame(prev => !prev)
        fetchMovie(chosenTitle)    
    }

    async function fetchMovie(movie) {
        const url = `https://movie-database-alternative.p.rapidapi.com/?s=${movie}&r=json&type=movie&page=1`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3819d4d7e1mshb60c35661a89497p1aa61djsnc8a15ba96b17',
                'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	    }
    };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result.Search[0])
            setTitle(result.Search[0]);
        } catch (error) {
            console.error(error);
        }
            }

           
  return (
    <div>
        <Container className='grid mx-auto'>
            <div className='my-2 d-flex justify-content-between align-items-center'>
                <h2 className='ff-russo'>Round One</h2>
            </div>
            <Row className='mb-2'>
                <MovieDisplay
                    movieName={title.Title}
                    year={parseInt(title.Year, 10)}
                    poster={title.Poster}
                />
            </Row>
            <Row className='px-2'>
                <UserGuess year={parseInt(title.Year, 10)} round={"RoundTwo"} title={title.Title} poster={title.Poster} imdb={title.imdbID} />
            </Row>
            <Row className={beginGame ? 'd-none' : 'd-flex justify-content-center'}>
                <button className='begin-button ff-russo' onClick={() => getTitle()}>Begin!</button> 
            </Row>
            
        </Container>
    </div>
  )
}

export {Moviefetch}