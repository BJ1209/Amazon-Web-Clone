import React from "react";
import "./Home.css";
import primeBanner from "../images/prime_banner.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={primeBanner} alt="Amazon Prime Banner" />
        <div className="home__row">
          <Product
            id="1597534"
            title="PS5 Dualsense Charging Dock, for Two Dualsense PS5 Controllers- Brand New Design for PS5 Dualsense Controllers - Playstation 5 (White W/Black Inlay)"
            price={19.99}
            imageUrl="https://m.media-amazon.com/images/I/61WphB9h5oL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="4861238"
            title={`Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H, NVIDIA GeForce GTX 1650, 15.6" Full HD IPS Display, 8GB DDR4, 256GB NVMe SSD, Wi-Fi 6, Backlit Keyboard, Alexa Built-in, AN515-54-5812`}
            price={696.75}
            imageUrl="https://images-na.ssl-images-amazon.com/images/I/51-jewl7LsL._AC_US240_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="8526934"
            title={`DEGOL Skipping Rope with Ball Bearings Rapid Speed Jump Rope Cable and 6” Memory Foam Handles Ideal for Aerobic Exercise Like Speed Training, Extreme Jumping, Endurance Training and Fitness Gym`}
            price={6.99}
            imageUrl="https://images-na.ssl-images-amazon.com/images/I/41MXvr5tYDL._AC_US240_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="8746632"
            title={`Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Black, One Size (S &L Bands Included)`}
            price={99.95}
            imageUrl="https://m.media-amazon.com/images/I/71smqRr0pmL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="12897843"
            title={`AMD Ryzen 5 3600XT 6-core, 12-threads unlocked desktop processor with Wraith Spire cooler`}
            price={249.99}
            imageUrl="https://images-na.ssl-images-amazon.com/images/I/41BgNBildJL._AC_US240_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="1456783"
            title={`A Promised Land - Barak Obama`}
            price={17.99}
            imageUrl="https://images-na.ssl-images-amazon.com/images/I/91D5xAOAVjL.__BG0,0,0,0_FMpng_AC_UL270_SR178,270_.jpg"
            rating={5}
          />
          <Product
            id="1285864"
            title={`A Time for Mercy (Jake Brigance Book 3) - John Grisham`}
            price={14.99}
            imageUrl="https://images-na.ssl-images-amazon.com/images/I/A1UItsEWNWL.__BG0,0,0,0_FMpng_AC_UL270_SR178,270_.jpg"
            rating={4}
          />
          <Product
            id="2285864"
            title={`A Brief History of Time - Stephan Hawking`}
            price={16.99}
            imageUrl="https://images-na.ssl-images-amazon.com/images/I/51+GySc8ExL._AC_SX184_.jpg"
            rating={5}
          />
          <Product
            id="8286864"
            title={`The Battle of Chamkaur - Harinder Singh`}
            price={10.99}
            imageUrl="https://m.media-amazon.com/images/I/71n2LstPG+L._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="9516864"
            title={`LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019)`}
            price={629.99}
            imageUrl="https://m.media-amazon.com/images/I/81WBbFOEHwL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
