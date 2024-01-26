import React from 'react'
import { Navbar } from './Navbar'

import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import "../styling/Home.css";

export const Home = () => {
    return (
      <div className="home-container">

        <div className="home-banner-container" id="home">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
              Din favoritmat levererad hem till din dörr!
            </h1>
            <p className="primary-text">
              Richard och Stefan gör allt preperationsarbete så du enkelt kan
              förberada god, prisvärd & nyttig mat.
            </p>
            <button className="secondary-button">
              Beställ nu <FiArrowRight />{" "}
            </button>
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </div>
    );
  };
