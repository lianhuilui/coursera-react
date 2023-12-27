import { Logo } from "./Logo"
import hamburger from "../assets/hamburger.svg"
import { Link } from "react-router-dom"
import { createRef, useState } from "react";

export function Nav() {
  let [collapsed, setCollapsed] = useState(true)

  function collapse() {
    setCollapsed(true);
  }

  function toggleCollapsed() {
    setCollapsed(!collapsed)
  }

  let navRef = createRef()

  return (<header className="App-header">
    <nav ref={navRef} className={collapsed ? "" : "show"} >
      <Logo></Logo>

      <div>

        <button onClick={toggleCollapsed} className={`hamburger-btn`}>
          <img className="hamburger" src={hamburger} alt="mainmenu"/>
        </button>

        <div className="links">
          <Link to="/">Home</Link>
          <a href="#">About</a>
          <a href="#">Menu</a>
          <Link to="/book">Reservations</Link>
          <a href="#">Order online</a>
          <a href="#">Login</a>
        </div>
      </div>

    </nav>
      {!collapsed && <div className="mobile-nav">
          <Link to="/" onClick={collapse}>Home</Link>
          <a href="#" onClick={collapse}>About</a>
          <a href="#" onClick={collapse}>Menu</a>
          <Link to="/book" onClick={collapse}>Reservations</Link>
          <a href="#" onClick={collapse}>Order online</a>
          <a href="#" onClick={collapse}>Login</a>
        </div>
      }

  </header>);
}
