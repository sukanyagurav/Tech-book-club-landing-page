import React from 'react';

const Stars = ({classes}) => {
  return (
    <div className={`flex self-center ${classes ? classes : ''}`}>
      <img src="./assets/images/icon-star.svg" />
      <img src="./assets/images/icon-star.svg" />
      <img src="./assets/images/icon-star.svg" />
      <img src="./assets/images/icon-star.svg" />
      <img src="./assets/images/icon-star.svg" />
    </div>
  );
};

export default Stars;
