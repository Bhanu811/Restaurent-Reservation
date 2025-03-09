import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Taste the love in every bite.</p>
            </div>
            <p className="mid">
            "Started by two passionate B.Tech students, our restaurant is a dream turned reality! With love for food and innovation, we bring you delicious meals made with fresh ingredients and a touch of creativity. Come taste our passion on a plate!"
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="https://static.vecteezy.com/system/resources/previews/048/067/082/non_2x/biryani-dish-malabar-biryani-with-thalassery-chicken-isolated-illustration-on-a-transparent-background-png.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
