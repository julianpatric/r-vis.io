import logo from '../assets/icons/logo.svg'

export default function Topbar() {
    return (
        <div className="section topBar">
      <img src={logo} alt="Logo" height="32px"/>
      <ul className="navBar">
        <li><a href="#">home</a></li>
        <li><a href="#">about</a></li>
        <li><a href="#">contact</a></li>
      </ul>
    </div>
    )
}