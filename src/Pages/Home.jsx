import React from 'react'

function Home() {
  return (
    <div>
    <div className="home-container">
      <div className="/home-banner-container">
        <div className="/home-bannerImage-container">
          <img src='/home-banner-background.png' alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Hello! I'm Brooke.
          </h1>
          <p className="primary-text">
            Junior Full-Stack Developer
          </p>
        </div>
        <div className="home-image-section">
          <img src='/home-banner-image.png' alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home
