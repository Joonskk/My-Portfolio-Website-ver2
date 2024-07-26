import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaCircle } from "react-icons/fa6";

const Nav = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (path, e) => {
    e.preventDefault()
    if(path !== location.pathname) {
      let prev;
      if(location.pathname === "/") {
        prev = "home"
      } else {
        prev = location.pathname.substring(1)
      }
      const addRemoveClass = document.querySelector(`.${prev}`).classList
      addRemoveClass.add('fadeout')
      setTimeout(() => {
        navigate(path)
        addRemoveClass.remove('fadeout')
      }, 300)
    }
  }
  
  return (
    <div className="container">
      <div className="name">
       <h1>Joonseok Kim</h1>
         <h2>Full Stack Web Developer</h2>
      </div>
      <div className="navigation">
        <ul>
          <li><Link to="/" onClick={(e)=>handleClick('/', e)} >{location.pathname === "/" ? <FaCircle size="8" /> : "Home"}</Link></li>
          <li><Link to="/projects" onClick={(e)=>handleClick('/projects', e)} >{location.pathname === "/projects" ? <FaCircle size="8" /> : "Projects"}</Link></li>
          <li><Link to="/info" onClick={(e)=>handleClick('/info', e)} >{location.pathname === "/info" ? <FaCircle size="8" /> : "Info"}</Link></li>
          <li><Link to="/contact" onClick={(e)=>handleClick('/contact', e)} >{location.pathname === "/contact" ? <FaCircle size="8" /> : "Contact"}</Link></li>
          <li><Link to="/faq" onClick={(e)=>handleClick('/faq', e)} >{location.pathname === "/faq" ? <FaCircle size="8" /> : "FAQ"}</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav