import React from 'react';
import { FetchAllMovies, CardsState } from '../common';

const test1 = (
  <ol>
    <li>
      <FetchAllMovies
        extraTasks={[
          CardsState,
          <p>Make the view responsive (WITHOUT FILTERS)</p>,
        ]}
      />
    </li>
  </ol>
);

export default test1;
