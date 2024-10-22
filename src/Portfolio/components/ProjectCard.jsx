import React from 'react'
import "../css/ProjectCard.css"
import { Link } from 'react-router-dom';

const truncateText = (text, maxLength) => {
    if(text.length > maxLength){
        return text.slice(0, maxLength) + '...';
    }
    return text;
}

const ProjectCard = ({imgUrl, projectTitle, projectDesc, path}) => {
    const maxDesc = 100;
    const truncateDesc = truncateText(projectDesc, maxDesc);

    return (
        <div className='card'>
            <Link to={path}>
                <img className='card-img' src={imgUrl} alt="project-img" />
                <div className='card-body'>
                    <h3 className='card-title'>{projectTitle}</h3>
                    <p className='card-description'>{truncateDesc}</p>
                </div>
            </Link>
        </div>
    )
}

export default ProjectCard
