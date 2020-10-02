import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from '@material-ui/core/styles';

import { Theme } from '../../theme/theme';

import {
  MovieCard,
  averageCalculator,
  ratingAggregator,
  ratingCalculator,
} from '.';

import { defaultVisibilityAriaText } from '../icons/visibility';
import { defaultSavedAriaText } from '../icons/save';

describe('Movie Card | Utility functions', function () {
  const values = [
    { Source: 'Internet Movie Database', Value: '8.1/10' },
    { Source: 'Rotten Tomatoes', Value: '90%' },
    { Source: 'Metacritic', Value: '84/100' },
  ];
  it('ratingCalculator should return values in 0/100 format', function () {
    const desired = [81, 90, 84];
    const expected = ratingAggregator(values);
    expect(expected).toEqual(desired);
  });

  it('averageCalculator should give the average of the results', function () {
    const values = [81, 90, 84];
    const expected = averageCalculator(values);
    expect(expected).toEqual(4.25);
  });

  it('ratingCalculator should returned cleaned ints', function () {
    const desired = [
      {
        value: '8.4/10',
        desire: 84,
      },
      {
        value: '1%',
        desire: 1,
      },
      {
        value: '81%',
        desire: 81,
      },
      {
        value: '88/100',
        desire: 88,
      },
      {
        value: '3/100',
        desire: 3,
      },
    ];
    desired.forEach(({ value, desire }) => {
      const expected = ratingCalculator(value);
      expect(expected).toEqual(desire);
    });
  });
});

const movie = {
  Title: 'Blade Runner',
  Year: '1982',
  Rated: 'R',
  Released: '25 Jun 1982',
  Runtime: '117 min',
  Genre: 'Action, Sci-Fi, Thriller',
  Director: 'Ridley Scott',
  Writer:
    'Hampton Fancher (screenplay), David Webb Peoples (screenplay), Philip K. Dick (novel)',
  Actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
  Plot:
    'A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.',
  Language: 'English, German, Cantonese, Japanese, Hungarian, Arabic',
  Country: 'USA',
  Awards: 'Nominated for 2 Oscars. Another 12 wins & 16 nominations.',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  Ratings: [
    { Source: 'Internet Movie Database', Value: '8.1/10' },
    { Source: 'Rotten Tomatoes', Value: '90%' },
    { Source: 'Metacritic', Value: '84/100' },
  ],
  Metascore: '84',
  imdbRating: '8.1',
  imdbVotes: '663,604',
  imdbID: 'tt0083658',
  Type: 'movie',
  DVD: '27 Aug 1997',
  BoxOffice: 'N/A',
  Production: 'Warner Bros. Pictures',
  Website: 'N/A',
  Watched: 'True',
  Saved: 'False',
};

describe('Movie Card | Component', () => {
  const Component = (
    <ThemeProvider theme={Theme}>
      <MovieCard movie={movie} />
    </ThemeProvider>
  );
  it('should have a white background', () => {
    render(Component);
    expect(screen.findByTitle('Card State: white')).toBeTruthy();
  });
  it('should have an orange background when Saved icon is clicked', () => {
    render(Component);
    userEvent.click(screen.getByLabelText(defaultSavedAriaText));
    expect(screen.findByTitle('Card State: orange')).toBeTruthy();
  });

  it('should have a yellow background when Watched is clicked', () => {
    render(Component);
    userEvent.click(screen.getByLabelText(defaultVisibilityAriaText));
    expect(screen.findByTitle('Card State: yellow')).toBeTruthy();
  });

  it('card should change colours when both saved and watched are clicked clicked', () => {
    render(Component);
    userEvent.click(screen.getByLabelText(defaultSavedAriaText));
    userEvent.click(screen.getByLabelText(defaultVisibilityAriaText));
    expect(screen.findByTitle('Card State: green')).toBeTruthy();
  });
  it('should display text of the rating', async () => {
    render(Component);
    expect(screen.findByTitle('Movie Rating: 4.25')).toBeTruthy();
  });
  it('should display an image with aria-tags and alt', () => {
    render(Component);
    expect(screen.findByAltText(movie.Title)).toBeTruthy();
  });
  it('should render the Movie Card', () => {
    const { container } = render(
      <ThemeProvider theme={Theme}>
        <MovieCard movie={movie} />
      </ThemeProvider>
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="MuiPaper-root makeStyles-movieCardPaper-55 makeStyles-white-59 MuiPaper-elevation1 MuiPaper-rounded"
          name="Card State: white"
          title="Blade Runner"
        >
          <div
            class="makeStyles-movieCardTopIcons-62"
          >
            <svg
              aria-hidden="true"
              aria-label="Toggle Seen Movie"
              class="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
              />
            </svg>
            <svg
              aria-hidden="true"
              aria-label="Toggle Saved Movie"
              class="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          </div>
          <div
            class="makeStyles-movieCardImgContainer-60"
          >
            <img
              alt="Blade Runner"
              aria-label="Blade Runner"
              class="makeStyles-movieCardImg-61"
              src="https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
            />
          </div>
          <div
            class="makeStyles-movieCardBottomDetails-63"
          >
            <span
              title="Movie Rating: 4.25"
            >
              (
              4.25
              )
            </span>
            <div
              aria-label="Movie Rating: 4.25"
              class="starRatings"
            >
              <svg
                aria-hidden="true"
                class="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
              <svg
                aria-hidden="true"
                class="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
              <svg
                aria-hidden="true"
                class="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
              <svg
                aria-hidden="true"
                class="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
              <svg
                aria-hidden="true"
                class="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
