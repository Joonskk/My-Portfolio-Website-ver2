const Theme = ({dark, setDark}) => {
  let body = document.querySelector('body').classList

  const handleLightTheme = () => {
    body.add('mainLight')
    body.remove('mainDark')
    setDark(false)
  }

  const handleDarkTheme = () => {
    body.add('mainDark')
    body.remove('mainLight')
    setDark(true)
  }
  
  return (
    <div className="theme">
      <ul>
        <li onClick={()=>handleLightTheme()}><div className={`box ${dark ? "darkborder" : "lightbox"}`} /> LIGHT</li>
        <li onClick={()=>handleDarkTheme()}><div className={`box ${dark ? "darkbox darkborder" : ""}`} /> DARK</li>
      </ul>
    </div>
  )
}

export default Theme