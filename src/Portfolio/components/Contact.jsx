import React from 'react'
import "../css/Contact.css"
const Contact = () => {
  return (
    <div className='contact-container' id='contact-section'>
        <div className='contactHeader'>
            <h1>Contact Me</h1>
        </div>
        <div className='contactBody'>
            <div className='Github'>
                <img src="data:image/png;base64,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" alt="githubIcon" />
                <h3><a href="https://github.com/Sparta-FrontEnder" target='_blank'>GitHub</a></h3>
            </div>
            <div className='LinkedIn'>
                <img src="data:image/png;base64,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" alt="LinkedInIcon" />
                <h3><a href="https://www.linkedin.com/in/max-ma-68266b238" target='_blank'>LinkedIn</a></h3>
            </div>
            
        </div>
    </div>
  )
}

export default Contact
