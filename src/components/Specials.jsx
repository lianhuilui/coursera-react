import specialImage from "../assets/lemon\ dessert.jpg";
import specialImage2 from "../assets/greek\ salad.jpg";
import specialImage3 from "../assets/bruchetta.jpg";

export function Specials() {
  return (<section className="special-section">
    <div>
      <h2>See our specials!</h2>
      <button>Online Menu</button>
    </div>
    <div>
      <div>
        <img src={specialImage} />
        <div>
          The Lemon Bliss Delight is crafted with meticulous attention to detail, this zesty masterpiece begins with a buttery, crumbly shortcrust pastry that provides the perfect foundation for the luscious lemon filling.
        </div>
      </div>
      <div>
        <img src={specialImage2} />
        <div>
          Our Classic Greek Salad at Little Lemon is a culinary celebration of vibrant colors, crisp textures, and the bold flavors that define the essence of Greek cuisine.
        </div>
      </div>
      <div>
        <img src={specialImage3} />
        <div>
          At Little Lemon, our Tomato Basil Bruschetta is a symphony of simple yet exquisite flavors that redefine the art of appetizers.
        </div>
      </div>
    </div>
  </section>);
}
