import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Flavors</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="https://w7.pngwing.com/pngs/544/160/png-transparent-pizza-hut-restaurant-pizza-delivery-pizza-food-cheese-recipe-thumbnail.png" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Brings you</h1>
                <h1 className="title dishes_title">Memories</h1>
                </div>
             
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="https://static.vecteezy.com/system/resources/previews/047/490/247/non_2x/dumpling-momos-with-sauce-in-a-wooden-plate-isolated-on-transparent-background-cut-out-or-clipping-path-png.png" alt="hero" />
          </div>
          <h1 className="title dishes_title">Memories</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

