import React from 'react';
import { render } from '@testing-library/react';
import Home from '.';

describe('/', () => {
  it('should render the homepage', () => {
    const { container } = render(<Home />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <main>
          <div
            class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2"
          >
            <div
              class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"
            >
              <div
                class="makeStyles-movieContainer-1"
              >
                <h2>
                  Sorry, there are currently no movies
                </h2>
              </div>
            </div>
          </div>
        </main>
      </div>
    `);
  });
});
