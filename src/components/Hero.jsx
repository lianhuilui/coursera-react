import { Link } from "react-router-dom";

export function Hero() {
  return (<section className="hero-section">
    <div>
      <div>
        <h1>Little Lemon</h1>
        <div className="subtitle">Chicago</div>
        <div className="lead">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</div>

        <Link className="button book-button" to="/book">
          Reserve a table
        </Link>
      </div>

      <div className="hero-image">
        <div className="img-wrapper">
        </div>
      </div>
    </div>
  </section>);
}
