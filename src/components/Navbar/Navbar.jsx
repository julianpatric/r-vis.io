import logo from '../../assets/icons/logo.svg'
import { useState, useEffect } from 'react';

export default function Navbar() {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0); // Stick when scrolled down
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
    return (
        <div className={isSticky ? 'navbar sticky' : 'navbar'}>
      <img src={logo} alt="Logo" height="32px"/>
      <ul className="nav">
        <li><a href="#">home</a></li>
        <li><a href="#">about</a></li>
        <li><a href="#">contact</a></li>
      </ul>
    </div>
    )
}