import React from 'react'
import {One} from './titles'
import { useState, useContext } from 'react'
import { Context } from "./Context"
import MovieDisplay from './components/MovieDisplay';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserGuess from './components/UserGuess';


function Moviefetch() {
    const {bestScore} = useContext(Context)
    const [title, setTitle] = useState({
        Title: "",
        Year: "",
        imdbID: "",
        Type: "",
        Poster: ""
    })

    const Id = 1
    const nextRound = Id + 1

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
            setTitle(result.Search[0]);
        } catch (error) {
            console.error(error);
            getTitle()
        }
            }

           
  return (
    <div>
        <Container className='grid mx-auto'>
            <div className={beginGame ? 'my-2 d-flex justify-content-between align-items-center' : 'd-none'}>
                <h2 className='ff-russo'>Round One</h2>
            </div>
            <Row className='mb-2 mt-0 mt-md-5'>
                {beginGame ?
                
                <MovieDisplay
                    movieName={title.Title}
                    year={parseInt(title.Year, 10)}
                    poster={title.Poster}
                />
                :
                <>
                <Col md={6} className='d-flex justify-content-center align-items-center'>
                <MovieDisplay
                    movieName={title.Title}
                    year={parseInt(title.Year, 10)}
                    poster={title.Poster}
                />
                </Col>
                <Col md={6}>
                    <div className={beginGame ? 'd-none' : 'd-flex flex-column align-items-center justify-content-center px-5'}>
                        <div className='landing-text mb-5'>
                            <h1 className='ff-russo'>FilmYear</h1>
                            <h5 className='ff-russo text-center lh-md'>What year were these movies released?</h5>
                            <div className='px-3'>
                            <p className='ff-russo text-center'>Your current best score is</p>
                            <h2 className='ff-russo text-center lh-md best-score'>{bestScore} / 10</h2>
                            </div> 
                        </div>
                        <button className='begin-button ff-russo' onClick={() => getTitle()}>Begin!</button>
                    </div>
                </Col>
                </>
                }
            </Row>
            <Row className='px-2'>
                <UserGuess year={parseInt(title.Year, 10)} round={"RoundTwo"} title={title.Title} poster={title.Poster} imdb={title.imdbID} />
            </Row>
            
            
        </Container>
    </div>
  )
}

export {Moviefetch}