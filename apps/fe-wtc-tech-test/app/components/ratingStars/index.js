import React from 'react'
import { StarIcon, StarBorderIcon, StarHalfIcon } from '@mono-nx-test-with-nextjs/ui';

export const RatingStars = ({ rating = 0 }) => {
  const defaultNumberOfStars = 5
  const Stars = []

  for (let i = 1; i < defaultNumberOfStars + 1; i++){
    const key = `StarRating_${i}`
    if(rating >= i) {
      Stars.push(<StarIcon key={key} />)
    } else if (rating % 1 > .5 && rating + 1 > i) {
      Stars.push(<StarHalfIcon key={key} data-rating="half" />)
    } else {
      Stars.push(<StarBorderIcon key={key} />)
    }
  }
  return  <div className="starRatings" aria-label={`Movie Rating: ${rating}`}>
    {Stars}
  </div>
}
