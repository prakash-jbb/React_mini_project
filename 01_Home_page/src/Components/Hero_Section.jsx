import amazonLogo from "../assets/amazon.png";
import flipkartLogo from "../assets/flipkart.png";
import heroImage from "../assets/shoe_image.png";

function HeroSection() {
  return (
    <>
      <div id="heroContainer" className="container">
        <div className="heroContent">
          <h1>YOUR FEET DESERVE THE BEST</h1>

          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          <div className="heroBtn">
            <button>Shop Now</button>
            <button className="secondaryBtn">Category</button>
          </div>

          <div className="shopping">
            <p>Also availabe on</p>
            <div className="brandIcon">
              <img src={amazonLogo} alt="" />
              <img src={flipkartLogo} alt="" />
            </div>
          </div>
        </div>

        <div className="heroImage">
          <img src={heroImage} alt="" id="nikeShoeImg" />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
