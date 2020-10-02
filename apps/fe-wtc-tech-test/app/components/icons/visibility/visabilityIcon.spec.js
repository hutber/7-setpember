import React from 'react'
import { render, screen } from '@testing-library/react'

import { WatchedButton, defaultVisibilityAriaText } from '.'
import userEvent from '@testing-library/user-event'

describe('SaveIcon | Component', () => {
  const mockFnc = jest.fn()
    const Component = (
      <WatchedButton onClick={() => { mockFnc() }} />
  )
  it('func should fire', () => {
    render(Component)
    userEvent.click(screen.getByLabelText(defaultVisibilityAriaText))
    expect(mockFnc).toHaveBeenCalled()
  })

  it('should render default aria text', () => {
    render(Component)
    expect(screen.getByLabelText(defaultVisibilityAriaText)).toBeTruthy()
  })

  it('should display custom aria text', () => {
    const ariaText = "something else"
    render(<WatchedButton ariaLabelText={ariaText} />)
    expect(screen.getByLabelText(ariaText)).toBeTruthy()
  })
})
