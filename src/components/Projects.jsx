import Project from './Project'

const Projects = () => {
 const websites = [
  {
    id: 1,
    title: "Clime",
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

 const careers = [
  {
    id: 1,
    title: "Mathpass Academy",
    subtext: "Dec.2021 / Mathematics Tutor",
    url: ""
  },
  {
    id: 2,
    title: "Atom Tech Solutions LTD",
    subtext: "Feb.2022 / Full Stack Developer",
    url: ""
  },
  {
    id: 3,
    title: "Global ESG Foundation",
    subtext: "Jun.2023 / Data Analyst",
    url: ""
  }
 ]
  
  return (
    <div className="projects">
      <div className="projects-sort">Websites</div>
      {websites.map((project) => <Project key={project.id} project={project} />)}
      
      <div className="separator" />
      
      <div className="projects-sort">Careers</div>
      {careers.map((project) => <Project key={project.id} project={project} />)}
    </div>
  )
}

export default Projects