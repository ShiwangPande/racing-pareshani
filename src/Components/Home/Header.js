import React from 'react';
import { useScroll } from './Scrollonhide'
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';



export default function Navbar() {
  const {  scrollDirection } = useScroll();
  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.5s",
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)"
    }
  }

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  }

   const handleclose = () => {
    setTimeout(() => {
      setActive(false)
    }, 1000);
  }

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-sparrow" style={scrollDirection === "down" ? styles.active : styles.hidden} >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="https://drive.google.com/uc?export=view&id=1i2U8yWheKk-yiXMNXYApZobG9a1cnjHl" alt="" height="75" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <div className="nav-center">
            <ul className={active ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item" onClick={handleclose}>
                <Link className="nav-link" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item" onClick={handleclose}>
                <Link className="nav-link" to="/Team">TEAM</Link>
              </li>
              <li className="nav-item" onClick={handleclose}>
                <Link className="nav-link" to="/Activity">ACTIVITIES</Link>
              </li>
              <li className="nav-item" onClick={handleclose}>
                <Link className="nav-link" to="/Event">EVENTS</Link>
              </li>
              <li className="nav-item" onClick={handleclose}>
                <Link className="nav-link" to="/Gallery">GALLERY</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </>
  )
}
