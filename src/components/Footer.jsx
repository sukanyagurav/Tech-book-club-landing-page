import React from 'react';
import CTA from './CTA';
import Container from './UI/Container';

const Footer = () => {
  return (
    <footer className="bg2 rounded-tl-4xl rounded-tr-4xl py-18 pb-8">
      <Container>
        <CTA />
        <div className="pt-8 text-white items-center gap-6 flex flex-col md:flex-row justify-between">
          <p>@ {new Date().getFullYear()} - Tech Book Club</p>
          <p>
            Challenge by <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#">SG</a>.
          </p>
          <ul className="flex gap-4">
            <li>
              <a href="#none">
                <img src="assets/images/logo-bluesky.svg" />
              </a>
            </li>
            <li>
              <a href="#none">
                <img src="assets/images/logo-linkedin.svg" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
