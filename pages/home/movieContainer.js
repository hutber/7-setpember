import React from 'react'

import { MovieCard } from '../../app/components/movieCard'
import { FullWidthLayout } from '../..//app/components/layout'

import styles from './styles'

export const MovieContainer = ({movies = []}) => {
  const classes = styles()
  const title = movies.length ? <h2 className={classes.movieContainerTitle}>Movies <span className={classes.movieContainerTitleSpan}>({`${movies.length}`})</span></h2> : null
  return <FullWidthLayout title={title}>
    <div className={classes.movieContainer}>
      {movies && movies.length > 0 && movies.map((movie, index) => <MovieCard key={`MovieCard_${index}`} movie={movie} />)}
      {!movies.length && <h2>Sorry, there are currently no movies</h2>}
    </div>
  </FullWidthLayout>
}
