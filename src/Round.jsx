import React from 'react'
import {One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten} from './titles'
import Button from 'react-bootstrap/Button';
import MovieDisplay from './components/MovieDisplay';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserGuess from './components/UserGuess';
import { useEffect, useContext, useState } from 'react';
import { Context } from "./Context"
import Clock from "./components/Clock"
import { useParams } from 'react-router-dom';



function Round() {
    const {filmList, filmListWrong, title, setTitle} = useContext(Context)
    const [movieFetched, setMovieFetched] = useState(false)
    const thisRound = useParams()
    const thisRoundNum = Number(thisRound.id)
    const nextRound = thisRoundNum + 1
    console.log(thisRoundNum)
    const dataBases = [One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten]
    const select = dataBases[thisRoundNum - 1]
    
    useEffect(() => {
        let ignore = false;
        
        if (!ignore) getTitle()
        return () => { ignore = true; }
        },[]);

    function getTitle() {
        let random = Math.floor(Math.random()*select.length)
        let chosenTitle = select[random]
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
            setTitle(result.Search[0]);
            setMovieFetched(prev => !prev)
        } catch (error) {
            console.error(error);
            getTitle()
        }
            }

    

           
  return (
    <div>
        <Container className='grid mx-auto'>
            <div className='my-2 d-flex justify-content-between align-items-center'>
                <h2 className='ff-russo'>Round {thisRoundNum}</h2>
                {movieFetched ? <Clock  
                    year={parseInt(title.Year, 10)} 
                    round={nextRound} 
                    title={title.Title} 
                    poster={title.Poster} 
                    imdb={title.imdbID}
                /> : <div></div>}
            </div>
            <Row className='mb-2'>
                <MovieDisplay
                    movieName={title.Title}
                    year={parseInt(title.Year, 10)}
                    poster={title.Poster}
                />
            </Row>
            <Row>
                <UserGuess 
                    year={parseInt(title.Year, 10)} 
                    round={nextRound} 
                    title={title.Title} 
                    poster={title.Poster} 
                    imdb={title.imdbID} />
                
            </Row>
        </Container>
    </div>
  )

}

export {Round}