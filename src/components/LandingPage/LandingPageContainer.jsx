import React from 'react'
import ImageSlider from './ImageSlider'
import LandingPageCardContainer from './LandingPageCards/LandingPageCardContainer'

function LandingPageContainer() {
  return (
    <div className='flex flex-col'>
      <ImageSlider />
      <LandingPageCardContainer />
    </div>
  )
}

export default LandingPageContainer
