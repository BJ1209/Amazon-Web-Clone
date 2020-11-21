import React from "react";
import "./Home.css";
import Product from "./Product";
import primeBanner from "../images/prime_banner.jpg";
import primeBanner1 from "../images/banner1.jpg";
import primeBanner2 from "../images/banner.jpg";
import primeBanner3 from "../images/banner2.jpg";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              id="home__image"
              className="home__image"
              src={primeBanner}
              alt="Amazon Prime Banner"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              id="home__image"
              className="home__image"
              src={primeBanner1}
              alt="Amazon Prime Banner"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              id="home__image"
              className="home__image"
              src={primeBanner2}
              alt="Amazon Prime Banner"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              id="home__image"
              className="home__image"
              src={primeBanner3}
              alt="Amazon Prime Banner"
            />
          </Carousel.Item>
        </Carousel>
        <div className="home__row">
          <Product
            key="15975341"
            id="15975341"
            title="New Apple iPad Pro (11-inch, Wi-Fi + Cellular, 1TB) - Space Grey (2nd Generation)"
            price={1449}
            imageUrl="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-11-select-cell-spacegray-202003?wid=470&hei=556&fmt=png-alpha&.v=1583544704305"
            rating={5}
          />
          <Product
            key="48612385"
            id="48612385"
            title={`Apple Watch Series 5 GPS + Cellular, 44mm, Space Gray Aluminum Case with Black Sport Band`}
            price={399}
            imageUrl="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/FWW12?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1580325951651"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            key="85869342"
            id="85869342"
            title={`Urban Ladder Toshi Queen Size Bed with Pull Out Storage`}
            price={499.99}
            imageUrl="https://images-na.ssl-images-amazon.com/images/I/71%2BrXEdZCxL._SL1332_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            key="87466327"
            id="87466327"
            title={`Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Black, One Size (S &L Bands Included)`}
            price={99.95}
            imageUrl="https://m.media-amazon.com/images/I/71smqRr0pmL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            key="12897843"
            id="12897843"
            title={`AMD Ryzen 5 3600XT 6-core, 12-threads unlocked desktop processor with Wraith Spire cooler`}
            price={249.99}
            imageUrl="https://images-na.ssl-images-amazon.com/images/I/41BgNBildJL._AC_US240_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            key="14567834"
            id="14567834"
            title={`A Promised Land - Barak Obama`}
            price={17.99}
            imageUrl="https://images-na.ssl-images-amazon.com/images/I/91D5xAOAVjL.__BG0,0,0,0_FMpng_AC_UL270_SR178,270_.jpg"
            rating={5}
          />
          <Product
            key="12858647"
            id="12858647"
            title={`A Time for Mercy - John Grisham`}
            price={14.99}
            imageUrl="https://images-na.ssl-images-amazon.com/images/I/A1UItsEWNWL.__BG0,0,0,0_FMpng_AC_UL270_SR178,270_.jpg"
            rating={4}
          />
          <Product
            key="82868646"
            id="82868646"
            title={`The Battle of Chamkaur `}
            price={10.99}
            imageUrl="https://m.media-amazon.com/images/I/71n2LstPG+L._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            key="15972341"
            id="15972341"
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Heather Gray"
            price={399}
            imageUrl="https://images-na.ssl-images-amazon.com/images/I/61KIcV26CdL._AC_SL1000_.jpg"
            rating={5}
          />
          <Product
            key="48672385"
            id="48672385"
            title={`3D Mask Bracket - Oceantree Protect Lipstick Lips`}
            price={11.99}
            imageUrl="https://images-na.ssl-images-amazon.com/images/I/61sJTqJFPWL._SL1450_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            key="95168645"
            id="95168645"
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
