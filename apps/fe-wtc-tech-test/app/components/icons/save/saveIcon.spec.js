import React from 'react'
import { render, screen } from '@testing-library/react'

import { SaveButton } from '.'
import userEvent from '@testing-library/user-event'

describe('SaveIcon | Component', () => {
  const mockFnc = jest.fn()
    const Component = (
      <SaveButton onClick={() => { mockFnc() }} />
  )
  it('func should fire', () => {
    render(Component)
    userEvent.click(screen.getByLabelText('Toggle Saved Movie'))
    expect(mockFnc).toHaveBeenCalled()
  })

  it('should render default aria text', () => {
    render(Component)
    expect(screen.getByLabelText('Toggle Saved Movie')).toBeTruthy()
  })

  it('should display custom aria text', () => {
    const ariaText = "something else"
    render(<SaveButton ariaLabelText={ariaText} />)
    expect(screen.getByLabelText(ariaText)).toBeTruthy()
  })
})
