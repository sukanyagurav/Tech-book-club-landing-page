import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-between items-center max-w-[1200px] mx-auto">
      <div className="flex-0.6 p-4 ">
        <h1 className="text-6xl font-bold">
          Join the <br /> ultimate tech <br /> book club
        </h1>
        <p className="text-lg mt-4  max-w-[550px]">
          Turn your reading time into learning time with fellow tech
          enthusiasts. Get curated recommendations, join vibrant discussions,
          and level up your skills one chapter at a time.
        </p>
        <Button>
          <span>Review Membership options</span>
          <img
            src="./assets/images/arrow.svg"
            alt="arrow"
          />
        </Button>
        <div className="flex gap-4 mt-8">
          <img
            src="./assets/images/image-avatars.webp"
            className="w-[140px]"
          />

          <div>
            <div className="flex gap-1">
              <img src="./assets/images/icon-star.svg" />
              <img src="./assets/images/icon-star.svg" />
              <img src="./assets/images/icon-star.svg" />
              <img src="./assets/images/icon-star.svg" />
              <img src="./assets/images/icon-star.svg" />
            </div>
            <p>200+ developers joined already</p>
          </div>
        </div>
      </div>
      <picture>
        <source
          srcset="assets/images/image-hero-desktop.webp"
          aria-hidden="true"
          alt=""
          media="(min-width:800px)"
        />
        <source
          srcset="assets/images/image-hero-tablet.webp"
          aria-hidden="true"
          alt=""
          media="(min-width:750px)"
        />

        <img
          src="assets/images/image-hero-mobile.webp"
          aria-hidden="true"
          className="h-[600px] rounded-md"
        />
      </picture>
    </div>
  );
};

export default Hero;
