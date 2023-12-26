import { Logo } from "./Logo"
import hamburger from "../assets/hamburger.svg"

export function Nav() {
  return (<header className="App-header">
    <nav>
      <Logo></Logo>

      <img class="hamburger" src={hamburger} />

      <div className="links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Menu</a>
        <a href="#">Reservations</a>
        <a href="#">Order online</a>
        <a href="#">Login</a>
      </div>

    </nav>
  </header>);
}
