import './App.css';
import logo from './assets/icons/logo.svg'


function App() {
  return (
    <div className="topBar">
      <img src={logo} alt="Logo" className="logo"/>
      <ul className="navBar">
        <li>home</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </div>
  );
}

export default App;
