import React from 'react';
import Stars from './UI/Stars';

const UserRating = () => {
  return (
    <div className="flex gap-4 mt-8">
      <img
        src="./assets/images/image-avatars.webp"
        className="w-[140px] object-contain"
      />

      <div>
        <Stars />
        <p>200+ developers joined already</p>
      </div>
    </div>
  );
};

export default UserRating;
