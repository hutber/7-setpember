import React from 'react'

import { Grid } from '@mono-nx-test-with-nextjs/ui'

export const FullWidthLayout = ({title, children}) => {
  const TitleComp = () => {
    if(React.isValidElement(title)) return title
    return <h1>{title}</h1>
  }
  return <Grid container spacing={2}>
    {title &&
      <Grid xs={12} item><TitleComp /></Grid>
    }
    <Grid item xs={12}>{children}</Grid>
  </Grid>
}
