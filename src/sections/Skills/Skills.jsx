import { skills } from '../../data/skills'

function Skills() {
  return (
    <section className="skills" id="skills">

      <h2>Skills</h2>

      <div className="skills-container">

        <div className="skill-box">
          <h3>Frontend</h3>

          {
            skills.frontend.map((item, index) => (
              <p key={index}>{item}</p>
            ))
          }
        </div>

        <div className="skill-box">
          <h3>Backend</h3>

          {
            skills.backend.map((item, index) => (
              <p key={index}>{item}</p>
            ))
          }
        </div>

        <div className="skill-box">
          <h3>Database</h3>

          {
            skills.database.map((item, index) => (
              <p key={index}>{item}</p>
            ))
          }
        </div>

        <div className="skill-box">
          <h3>Tools</h3>

          {
            skills.tools.map((item, index) => (
              <p key={index}>{item}</p>
            ))
          }
        </div>

        <div className="skill-box">
          <h3>Deployment</h3>

          {
            skills.deployment.map((item, index) => (
              <p key={index}>{item}</p>
            ))
          }
        </div>

      </div>

    </section>
  )
}

export default Skills