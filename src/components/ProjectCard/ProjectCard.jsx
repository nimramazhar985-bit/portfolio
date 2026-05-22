import React from 'react'
import './ProjectCard.css'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3>{project?.title ?? 'Project Title'}</h3>
      <p>{project?.description ?? 'Short description'}</p>
    </article>
  )
}
