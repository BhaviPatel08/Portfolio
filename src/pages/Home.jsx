import React from 'react'
import '../css/pages/Home.css'

function Home() {
  return (
    <React.Fragment>
      <div className='component'>
        <div className='contant-block'>
          <div className='contant-block-heading'>
            <h1>Hi,I'm Bhavi Patel</h1>
            <h3>Fullstack Devloper</h3>
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
          <img src="../images/image.jpg" alt="image" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home