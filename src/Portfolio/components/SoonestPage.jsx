import React from 'react'
import soone from "../../images/soonestExpress.jpg"
import '../css/SoonestPage.css'

const SoonestPage = () => {
  return (
    <div>
        <h1>Soonest Express ERP System</h1>
        <div className='soonest-container'>
            <img src={soone} alt="" />
            <div className='exp-container'>
                <h3>Experience Description:</h3>
                <h4>Role: Software Developer</h4>
                <p>Soonest was my first official job, and it came during the peak of the pandemic in 2021. I am very grateful for this hard-earned opportunity. Soonest Express is a global logistics company headquartered in Taiwan. They hired me to assist in the development of their in-house ERP system. Due to varying conditions across different countries, including differences in laws, currencies, and logistics details, they needed a programmer with a U.S. background to help them build their ERP system. When I first joined the company, the system was only about 40% developed, so there was a large volume of work to do every day.</p>
            </div>
            <div className='tech-container'>
                <h3>Technologies Used and responsibility </h3>
                <p>The company used .NET C# as the technology stack for development and utilized Microsoft's built-in .NET front-end framework to implement the functionality for page rendering. Since the project was in its early stages, I was busy every day building various API interfaces. Using RESTful API allowed us to quickly create the required functionalities for CRUD operations.</p>
                <br/>
                <p>In addition, I took on the responsibility of product management, which required understanding the needs of different departments, including the logistics, accounting, and warehouse management departments. Since the company had branches in six cities across the U.S., quickly coordinating and grasping requirements became one of my weekly tasks.</p>
            </div>
            <div className='post-container'>
                <h3>Postscript</h3>
                <p>
                By the time I was about to leave the company, the project framework for the entire North American region was nearly completed. However, due to the collaboration of programmers from multiple countries in our IT department, the development progress was repeatedly delayed. The front-end development, in particular, showed significant differences in the code presented by programmers from different regions. Therefore, our main focus was on building the back-end API, while the front-end was primarily used for functionality demonstrations. The final version required programmers from Taiwan and Hong Kong to unify the overall framework.
                </p>
            </div>
        </div>
        
    </div>
  ) 
}

export default SoonestPage