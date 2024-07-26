import { MdArrowOutward } from "react-icons/md";

const Info = () => {
  return (
    <div className="info">
      <div className="sns">
        <a href="https://www.instagram.com/j_sugi_?igsh=bW5jOWR1ZXZpdnln&utm_source=qr">Instagram<MdArrowOutward /></a>
        <a href="https://github.com/Joonskk">Github<MdArrowOutward /></a>
        <a href="https://www.linkedin.com/in/joonseok-kim-a23251267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">LinkedIn<MdArrowOutward /></a>
      </div>
      <div className="subwebsite">
        <a href="">experiments.jskim.me<MdArrowOutward /></a>
        <a href="">playground.jskim.me<MdArrowOutward /></a>
      </div>
      <div className="awards">
        <h1>Awwwards Independent of the Year</h1>
        <h2>2020 Nominee</h2>
        <h1>Awwwards Site of the Day</h1>
        <h2>Web Graphic Experiments</h2>
        <h1>Awwwards Site of the Day</h1>
        <h2>100 DAYS OF POETRY</h2>
      </div>
    </div>
  )
}

export default Info