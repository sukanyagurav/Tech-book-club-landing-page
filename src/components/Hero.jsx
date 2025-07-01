import React from 'react';
import Button from './UI/Button';
import Stars from './UI/Stars';
import UserRating from './UserRating';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
      <div className="flex-0.6 ">
        <h1 className="heading">
          Join the <br /> ultimate tech <br /> book club
        </h1>
        <p className="text-xl mt-4  max-w-[550px] mb-8">
          Turn your reading time into learning time with fellow tech
          enthusiasts. Get curated recommendations, join vibrant discussions,
          and level up your skills one chapter at a time.
        </p>
        <a href="#membership">
          <Button classes={'flex  gap-2 items-center'}>
            <span>Review Membership options</span>
            <img
              src="assets/images/icon-arrow-down.svg"
              alt="arrow"
            />
          </Button>
        </a>
        <UserRating />
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
          className="md:h-[600px] rounded-2xl"
        />
      </picture>
    </div>
  );
};

export default Hero;
