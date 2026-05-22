import React from 'react'
import './SkillCard.css'

export default function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <span>{skill?.name ?? 'Skill'}</span>
    </div>
  )
}
