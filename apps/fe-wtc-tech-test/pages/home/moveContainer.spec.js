import React from 'react'
import { render } from '@testing-library/react'

import { MovieContainer } from './movieContainer'

describe('Logo', () => {
  it('should render Logo', () => {
    const { container } = render(<MovieContainer movies={[]} />)
    expect(container).toMatchInlineSnapshot(`
      <div>
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
      </div>
    `)
  })
})
