import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { RatingStars,  } from './index';


describe('Ratings with Stars', () => {
  it('should render 5 stars', () => {
    const { container } = render(<RatingStars />);
    const items = container.querySelectorAll('svg');
    expect(items).toHaveLength(5);
  });
  it('should render the correct aria label', () => {
    const { container } = render(<RatingStars rating={3} />);
    const items = container.querySelectorAll("[aria-label='Movie Rating: 3']");
    expect(items).toHaveLength(1);
  });
  it('should display half stars', () => {
    const { container } = render(<RatingStars rating={3.92} />);
    const items = container.querySelectorAll("[data-rating='half']");
    expect(items).toHaveLength(1);
  });
  it('should have a snapshot', () => {
    const { container } = render(<RatingStars rating={3} />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          aria-label="Movie Rating: 3"
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
              d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
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
    `);
  });
});
