import React from 'react'

const ProjectCard = ({src, link, h3}) => { // src to get the image src used in the projectCards.jsx components
  return (
      <a href={link} target="_ blank">
          <img className="hover" src={src} alt="Airplane logo" />
          <h3>{h3}</h3> 
          <p>Landing Page</p>
      </a>
  )
}

export default ProjectCard