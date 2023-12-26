import { Review } from "./Review";

export function Testimonials() {
  return (<section className="review-section">

    <div>
      <h2>What our customers are saying</h2>
    </div>

    <div>
      <Review>
        <Review.Title>Sensational Flavors and Atmosphere!</Review.Title>
        <Review.Stars stars="5" />
        <Review.Body>
          Little Lemon is a hidden gem in the heart of Chicago! The moment you step inside, you're greeted by the warm and inviting aroma of authentic Mediterranean spices. The flavors of their dishes are nothing short of sensational – each bite is a journey through the rich culinary traditions of the Mediterranean. The staff is friendly and attentive, ensuring a delightful dining experience. I highly recommend the lamb kebabs and the baklava for a truly unforgettable meal.
        </Review.Body>
      </Review>

      <Review>
        <Review.Title>A Culinary Escape to the Mediterranean</Review.Title>
        <Review.Stars stars="5" />
        <Review.Body>Little Lemon transports you straight to the Mediterranean with its exquisite menu and charming ambiance. The selection of dishes is extensive, offering a variety of options for every palate. From the perfectly seasoned hummus to the mouthwatering seafood paella, every item on the menu is a testament to the chef's dedication to authenticity and quality. The cozy setting makes it a perfect spot for a romantic dinner or a gathering with friends. I can't wait to visit again!</Review.Body>
      </Review>

      <Review>
        <Review.Title>
          Fresh Ingredients, Fantastic Flavors!
        </Review.Title>
        <Review.Stars stars="5" />
        <Review.Body>
          Little Lemon stands out for its commitment to using fresh, high-quality ingredients that truly elevate the dining experience. The freshness of the produce is evident in every bite, from the crisp salads to the succulent grilled vegetables. The menu caters to various dietary preferences, making it a great choice for both vegetarians and meat lovers. The friendly staff is always ready to provide recommendations, ensuring that you leave with a satisfied palate. Little Lemon has become my go-to spot for a healthy and delicious Mediterranean feast.
        </Review.Body>
      </Review>

      <Review>
        <Review.Title>
          Incredible Service and Authentic Cuisine
        </Review.Title>
        <Review.Stars stars="5" />
        <Review.Body>
          Little Lemon is a true gem in Chicago's culinary scene. The service is top-notch – the staff is not only attentive but also passionate about sharing the flavors of the Mediterranean with their patrons. The authenticity of the cuisine is unparalleled, transporting diners to the sun-kissed shores of the Mediterranean. The cozy atmosphere and attention to detail create a dining experience that feels both special and comforting. Whether you're a longtime fan of Mediterranean cuisine or a newcomer, Little Lemon is a must-visit destination that consistently exceeds expectations.
        </Review.Body>
      </Review>

    </div>

  </section>)
}

