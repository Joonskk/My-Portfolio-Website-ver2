import Project from './Project'

const Projects = () => {
 const projects = [
  {
    id: 1,
    title: "naname",
    subtext: "Mar.2020 / Porfolio / Dev"
  },
  {
    id: 2,
    title: "100 DAYS OF POETRY",
    subtext: "Oct.2020 / Porfolio / Design & Dev"
  },
  {
    id: 3,
    title: "buoy",
    subtext: "Jan.2021 / Porfolio / Dev"
  },
  {
    id: 4,
    title: "VIXI",
    subtext: "Sep.2021 / Porfolio / Design & Dev"
  }
 ]
  
  return (
    <div className="projects">
      {projects.map((project) => <Project key={project.id} project={project} />)}
    </div>
  )
}

export default Projects