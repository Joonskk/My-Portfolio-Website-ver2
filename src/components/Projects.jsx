import Project from './Project'

const Projects = () => {
 const projects = [
  {
    id: 1,
    title: "Weather",
    subtext: "Mar.2025 / React + Typescript / Design & Dev",
    url: "https://weather-website-wheat.vercel.app/"
  },
  {
    id: 2,
    title: "Wearly",
    subtext: "Apr.2025 / Next.js + Typescript + TailwindCSS / Design & Dev",
    url: "https://fashion-community-two.vercel.app/"
  }
 ]
  
  return (
    <div className="projects">
      {projects.map((project) => <Project key={project.id} project={project} />)}
    </div>
  )
}

export default Projects