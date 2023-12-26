import { Logo } from "./Logo"
import hamburger from "../assets/hamburger.svg"
import { Link, Route, Routes } from "react-router-dom"

export function Nav() {
  return (<header className="App-header">
    <nav>
      <Logo></Logo>

      <img class="hamburger" src={hamburger} />

      <div className="links">
        <Link to="/">Home</Link>
        <a href="#">About</a>
        <a href="#">Menu</a>
        <Link to="/book">Reservations</Link>
        <a href="#">Order online</a>
        <a href="#">Login</a>
      </div>

    </nav>
  </header>);
}
