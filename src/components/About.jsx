import aboutImage from "../assets/Mario and Adrian A.jpg";

export function About() {
  return (<section className="about-section">
    <div>
      <div>
        <h2>About Us</h2>
        <p>
          Little Lemon is where the vibrant spirit of the Mediterranean meets the heart of Chicago. Our journey began with a passion for authentic flavors and a commitment to creating a dining experience that transports you to the sun-soaked shores of the Mediterranean.
        </p>

        <p>
          At Little Lemon, we invite you to indulge in the magic of Mediterranean flavors right here in Chicago. Discover the joy of exceptional food and warm hospitality, creating moments that linger long after the last bite. We look forward to welcoming you to our table.
        </p>
      </div>

      <div>
        <img src={aboutImage} alt="" />
      </div>

    </div>
  </section>);
}
