import React from 'react'
import '../css/pages/Home.css'
import imagePath from '../images/image.jpg';

function Home() {
  return (
    <React.Fragment>
      <div className='component'>
        <div className='contant-block'>
          <div className='contant-block-heading'>
            <h1 className="name">
              <span className="typewriter">Hi, I'm Bhavi Patel</span>
            </h1>

            <h3 className='role'>Fullstack Devloper</h3>
          </div>
          <div className='contant-block-intro'>
            <p>I enjoy working on web technologies, making
              websites easy to use and interactive.I'm proficient
              in logic building and problem-solving, and I'm
              excited to bring my creativity to new projects.
            </p>
          </div>
          <div className='contant-block-button'>
            <button>Contact</button>
            <button>Project</button>
          </div>
        </div>
        <div className='my-image'>
          <img src={imagePath} alt="image" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home