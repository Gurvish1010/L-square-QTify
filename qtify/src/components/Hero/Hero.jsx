import React from "react";
import "./Hero.css";
import headphones from "../../assets/hero_headphones.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>100 Thousand Songs, ad-free</h1>
        <h2>Over thousands of podcast episodes</h2>
      </div>
      <div className="hero-img">
        <img src={headphones} alt="Headphones" />
      </div>
    </section>
  );
}

export default Hero;