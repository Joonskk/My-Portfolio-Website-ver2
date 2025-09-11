const Project = ({project}) => {
  return (
    <div className="project">
      <div className="title">
        <a href={project.url}>{project.title}</a>
      </div>
      <div className="subtext">
        {project.subtext}
      </div>
    </div>
  )
}

export default Project