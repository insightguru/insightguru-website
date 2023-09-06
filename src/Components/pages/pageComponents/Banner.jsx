import React from 'react'
import bannerImage from '../../../assets/bg.jpg'
import '../../styles/Home.css'

function Banner() {
  return (
    <>
      {/* // banner html is here  */}
      <div className='banner_container'>
        <div className="banner_image">
          <img loading='lazy' src={bannerImage} alt="bannerImage" />
        </div>
      </div>
    </>
  )
}

export default Banner
