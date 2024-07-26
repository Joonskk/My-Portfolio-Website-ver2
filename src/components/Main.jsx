import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav'
import Home from './Home'
import Projects from './Projects'
import Info from './Info'
import Contact from './Contact'
import FAQ from './FAQ'
const Main = ({dark}) => {
  return (
    <BrowserRouter>
      <div className={`main ${dark && "darkborder"}`}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
         <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Main