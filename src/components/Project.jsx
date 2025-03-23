const Project = ({project}) => {
  return (
    <div className="project">
      <div className="title">
        <a href="https://weather-website-wheat.vercel.app/">{project.title}</a>
      </div>
      <div className="subtext">
        {project.subtext}
      </div>
    </div>
  )
}

export default Project