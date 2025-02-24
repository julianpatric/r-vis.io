import logo from '../assets/icons/logo.svg'

export default function Navbar() {
    return (
        <div className="navbar">
      <img src={logo} alt="Logo" height="32px"/>
      <ul className="nav">
        <li><a href="#">home</a></li>
        <li><a href="#">about</a></li>
        <li><a href="#">contact</a></li>
      </ul>
    </div>
    )
}