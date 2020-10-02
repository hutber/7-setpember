import React from 'react';
import fetch from 'isomorphic-unfetch'

import { MovieContainer } from './home/movieContainer'

const Home = ({ movies = [] }) => {
  return (
    <main>
      <MovieContainer movies={movies} />
    </main>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3333/api/movies')
  const movies = await res.json()
  //normally a fetch wrapper for application generic headers/tokens/notifications/error catch etc
  return {movies}
}

export default Home;
