import React from 'react'
import imagePath from '../images/image.jpg';
import '../css/pages/About.css'

function About() {
  return (
    <>
        <h1 className='heading'>About Me</h1>
        <div className='my-image'>
          <img src={imagePath} alt="" />
        </div>
        <div className='contant'>
          <p className='paragraph-p1'>Hi! I’m Bhavi Patel, a web developer with a B.Tech in Computer Science and Engineering, maintaining a CGPA of 9.21. I have a strong grasp of web technologies like JavaScript, React, Node.js, and MongoDB. My passion lies in building interactive, user-friendly web applications, demonstrated by projects like InfoFluids and I-Eligible. I have also solved 200+ problems on LeetCode and earned a 3-star rating on CodeChef.</p>
          <p className='paragraph-p2'>My projects reflect my ability to create impactful solutions. InfoFluids, a blogging platform built with the MERN stack, offers features like user authentication and real-time updates. I-Eligible simplifies determining eligibility for government policies using a user-friendly interface. These experiences highlight my skills in full-stack development and problem-solving.</p>
        </div>
    </>
  )
}

export default About