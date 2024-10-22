import React from 'react'
import soonest from "../../images/soonestExpress.jpg";

import em from "../../images/EMovie.jpg"
import ProjectCard from './ProjectCard';
import "../css/PorjectList.css"


const cardList = [
    {
        imgUrl: "https://images.unsplash.com/photo-1678059285248-031d5128c38a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        projectTitle: "Apple Online Store -- onsite Contractor",
        projectDesc: "I joined Apple as an Onsite Contractor in April 2022, contributing to the Apple Online Store",
        path: "/AppleProject"
    },
     {
        imgUrl: soonest,
        projectTitle: "Soonest Express -- ERP System",
        projectDesc: " Soonest Express, a global logistics company based in Taiwan, hired me to assist in the development of their in-house ERP system. ",
        path: "/SoonestPage"
    },
     {
        imgUrl : em,
        projectTitle: "EMovie",
        projectDesc: "The content structure of the website is relatively simple, implementing movie searches.",
        path: "/EMovie"
    },
    {
        imgUrl : "https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        projectTitle: "React -- Project TOBE CONTINUE....",
        projectDesc: "This is my first react project",
        path: "/AppleProject"
    },
    // {
    //     imgUrl : "https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     projectTitle: "React -- Project 1",
    //     projectDesc: "This is my first react project",
    // },{
    //     imgUrl : "https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     projectTitle: "React -- Project 1",
    //     projectDesc: "This is my first react project",
    // },{
    //     imgUrl : "https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     projectTitle: "React -- Project 1",
    //     projectDesc: "This is my first react project",
    // },

]

const ProjectList = () => {
  return (
    <div className='card-container' id='projec-list-section'>
      <ul className='cardList'>
        {
            cardList.map((project, index) =>(
                <li key={index}>
                    <ProjectCard {...project}/>
                </li>
            )
        )}
      </ul>
    </div>
  )
}

export default ProjectList
