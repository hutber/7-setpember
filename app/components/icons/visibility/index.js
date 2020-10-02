import React from 'react'
import { VisibilityIcon, VisibilityOffIcon } from '@mono-nx-test-with-nextjs/ui'

export const defaultVisibilityAriaText = "Toggle Seen Movie"

export const WatchedButton = ({ state, ariaLabelText = defaultVisibilityAriaText, ...props }) => {
    const ariaLabel = {'aria-label': ariaLabelText}
    if(state) return <VisibilityOffIcon {...ariaLabel} {...props} />
    return <VisibilityIcon  {...ariaLabel} {...props} />
}
