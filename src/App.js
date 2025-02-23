import './App.css';
import logo from './assets/icons/logo.svg'

function App() {
  return (
    <>
      <div className="container">
        <div className="header-section">
            <img className="logo" src={logo}/>
        </div>
        <div className="main-section">
            <div className="box">
                <h1>COMING SOON</h1>
                <p>This website is currently under construction.</p>
            </div>
            
        </div>
        <div className="footer-section">
            <div className="box">
                <p>Work with us:</p>
                <a className ="email" href="mailto:hello@r-vis.io">hello@r-vis.io</a>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
