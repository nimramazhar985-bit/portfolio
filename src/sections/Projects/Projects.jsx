import { projects } from '../../data/projects'

function Projects() {
  return (
    <section className="projects" id="projects">

      <h2>Projects</h2>

      <div className="projects-container">

        {
          projects.map((project, index) => (

            <div className="project-card" key={index}>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <small>{project.technologies}</small>

              <div className="project-links">

                <a href={project.githubFrontend} target="_blank">
                  Frontend GitHub
                </a>

                <a href={project.githubBackend} target="_blank">
                  Backend GitHub
                </a>

                <a href={project.liveFrontend} target="_blank">
                  Live Frontend
                </a>

                <a href={project.liveBackend} target="_blank">
                  Live Backend
                </a>

              </div>

            </div>

          ))
        }

      </div>

    </section>
  )
}

export default Projects