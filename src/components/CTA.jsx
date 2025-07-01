import React from 'react';
import Button from './UI/Button';
import UserRating from './UserRating';

const CTA = () => {
  return (
    <div className="flex items-center flex-col  !text-white border-b-3 pb-16  border-dark">
      <h1 className="text-4xl  font-bold text-center ">
        Ready to debug your <br /> reading list?
      </h1>
      <a href="#membership">
        <Button classes={'flex  gap-2 items-center text-white  mt-10'}>
          <span>Review Membership options</span>
          <img
            src="assets/images/icon-arrow-up.svg"
            alt="arrow"
          />
        </Button>
      </a>
      <UserRating />
    </div>
  );
};

export default CTA;
