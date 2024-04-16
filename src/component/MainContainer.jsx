import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='p-4'>
      {/* this is main container */}
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer
