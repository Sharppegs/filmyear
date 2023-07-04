import React from 'react'
import Countdown from "react-countdown";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from "../Context"


function Clock(props) {
  const {finalFilmListWrong} = useContext(Context) 
  const navigate = useNavigate()

  function TimesUp() {
    finalFilmListWrong(0, props.poster, props.year, props.imdb)
    navigate(`/${props.round}`)
  }

  const renderer = ({ seconds, completed }) => {
    if (completed) {
      TimesUp()
    } else {
      
      return (
        <span className="clock">
          {seconds}
        </span>
      );
    }
  };

        return (
          <Countdown 
            date={Date.now() + 20000} 
            renderer={renderer} 
            
            />
        )
        
}


export default Clock