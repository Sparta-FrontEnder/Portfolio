import React from 'react'
import "../css/ProjectCard.css"
import { Link } from 'react-router-dom';

const truncateText = (text, maxLength) => {
    if(text.length > maxLength){
        return text.slice(0, maxLength) + '...';
    }
    return text;
}

const ProjectCard = ({imgUrl, projectTitle, projectDesc, path, subpath}) => {
    const maxDesc = 100;
    const truncateDesc = truncateText(projectDesc, maxDesc);
    console.log(subpath);
    const handleClick = () => {
        // Check if subpath is not empty or null
        if (subpath) {
            // Redirect to subpath
            console.log(subpath)
            window.location.href = subpath; // Using window.location.href for redirection
        }
    };

    return (
        <div className='card'>
            <Link to={path}>
                <img className='card-img' src={imgUrl} alt="project-img" />
                <div className='card-body'>
       
                            <h3 className='card-title' onClick={handleClick}>{projectTitle}</h3>
                   
                 
                    <p className='card-description'>{truncateDesc}</p>
                </div>
            </Link>
        </div>
    )
}

export default ProjectCard
