import React, { useEffect, useState } from 'react';
import { Paper,  } from '@mono-nx-test-with-nextjs/ui'

import { RatingStars } from '../ratingStars'
import { WatchedButton } from '../icons/visibility'
import { SaveButton } from '../icons/save'

import styles from './styles'

//Depending on if these functions would be used in other places, I would move these to a /utili or similar
export const ratingCalculator = rating => {
  const [value = 0] = rating.split(/%|\//)
  return value.includes('.') ? value * 10 : Number.parseInt(value)
}
export const ratingAggregator = ratings => ratings.map(({ Value }) => ratingCalculator(Value))

export const averageCalculator = values => {
  let rating = values.reduce( (a,b) => a+b, 0) / values.length
  rating = rating.toFixed(1)  / 2 / 10 //half for the 5 stars rather than 10
  rating = rating.toFixed(2)
  return Number.parseFloat(rating)
}

const cardStates = {
  white: 'white',
  green: 'green',
  yellow: 'yellow',
  orange: 'orange',
}

export const MovieCard = ({ movie }) => {
  const [cardState, setCardState] = useState(cardStates.white)
  const [saved, setSaved] = useState(false)
  const [watched, setWatched] = useState(false)
  const { Poster, Title, Ratings } = movie
  const classes = styles()

  const cleanedRatings = ratingAggregator(Ratings)
  const averageRating = averageCalculator(cleanedRatings)

  useEffect(() => {
    if(!watched && !saved){
      setCardState(cardStates.white)
    }
    else if(watched && !saved){
      setCardState(cardStates.yellow)
    }
    else if(!watched && saved){
      setCardState(cardStates.orange)
    }
    else if(watched && saved){
      setCardState(cardStates.green)
    }
  }, [watched, saved])

  return (<Paper className={`${classes.movieCardPaper} ${classes[cardState]}`} title={Title} name={`Card State: ${cardState}`}>
    <div className={classes.movieCardTopIcons}>
      <WatchedButton state={watched} onClick={() => {
        setWatched(!watched)
      }} />
      <SaveButton state={saved} onClick={() => {
        setSaved(!saved)
      }}/>
    </div>
    <div className={classes.movieCardImgContainer}>
      {Poster &&
        <img src={Poster} aria-label={Title} alt={Title} className={classes.movieCardImg} />
      }
      {!Poster &&
        <img src="https://placekitten.com/140/220" aria-label="Missing Image" alt="Missing Image" className={classes.movieCardImg} />
      }
    </div>
    <div className={classes.movieCardBottomDetails}>
      <span title={`Movie Rating: ${averageRating}`}>({averageRating})</span>
      <RatingStars rating={averageRating} />
    </div>
  </Paper>)
}
