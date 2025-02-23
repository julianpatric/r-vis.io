import logo from '../assets/icons/logo.svg'

export default function Topbar() {
    return (
        <div className="section topBar">
      <img src={logo} alt="Logo" className="logo"/>
      <ul className="navBar">
        <li>home</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </div>
    )
}