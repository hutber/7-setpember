import React from 'react'
import { FavoriteIcon, FavoriteBorderIcon } from '@mono-nx-test-with-nextjs/ui'

export const defaultSavedAriaText = "Toggle Saved Movie"

export const SaveButton = ({ state, ariaLabelText = defaultSavedAriaText, ...props }) => {
  const ariaLabel = {'aria-label': ariaLabelText}
  if(state) return <FavoriteBorderIcon {...ariaLabel} {...props} />
  return <FavoriteIcon  {...ariaLabel} {...props} />
}
