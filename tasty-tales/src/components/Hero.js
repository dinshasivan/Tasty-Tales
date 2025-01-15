import React from 'react'

function Hero() {
  return (
    <div className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold text-dark">The Healthiest Way to Start Your Day</h1>
            <p className="lead text-secondary">
              Begin your morning with nourishing choices for your body and uplifting thoughts for your mind.
              A healthy start ensures a productive and joyful day ahead.
            </p>
          </div>

          <div className="col">
            <div className="image-container position-relative w-100 h-100 ">
              {/* <img src="/pictures/food3.jpg" alt="Healthy Food" className="img-fluid w-100 h-100"
                        style="max-width: 1200px;"> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Hero