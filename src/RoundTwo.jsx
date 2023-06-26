import React from 'react'
import {Two} from './titles'
import Button from 'react-bootstrap/Button';
import MovieDisplay from './components/MovieDisplay';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserGuess from './components/UserGuess';
import { useEffect, useContext, useState } from 'react';
import { Context } from "./Context"



function RoundTwo() {
    const {filmList, filmListWrong} = useContext(Context)
     
    console.log(Two.length) 

    const [title, setTitle] = useState({
        Title: "",
        Year: "",
        imdbID: "",
        Type: "",
        Poster: ""
    })
    

    useEffect(() => {
        let ignore = false;
        
        if (!ignore) getTitle()
        return () => { ignore = true; }
        },[]);

    function getTitle() {
        let random = Math.floor(Math.random()*Two.length)
        let chosenTitle = Two[random]
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
            getTitle()
        }
            }

           
  return (
    <div>
        <Container className='grid mx-auto'>
            <Row className='mb-2'>
                <MovieDisplay
                    movieName={title.Title}
                    year={parseInt(title.Year, 10)}
                    poster={title.Poster}
                />
            </Row>
            <Row>
                <UserGuess year={parseInt(title.Year, 10)} round={"RoundThree"} title={title.Title} poster={title.Poster} imdb={title.imdbID} />
                
            </Row>
        </Container>
    </div>
  )
}

export {RoundTwo}