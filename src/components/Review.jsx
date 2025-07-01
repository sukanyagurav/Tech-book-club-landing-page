import React from 'react';
import Stars from './UI/Stars';

const Review = () => {
  return (
    <section className='my-12 flex flex-col md:items-center md:text-center gap-8 md:max-w-[75%] mx-auto'>
      <Stars classes={'self-start md:self-center'} />
      <blockquote className='text-3xl  font-semibold leading-10'>
        "This book club transformed my technical reading from a solitary
        activity into an enriching community experience. The discussions are
        gold!"
      </blockquote>
      <span className='text-xl text-gray-600'>Sarah Chen, Software Architect</span>
    </section>
  );
};

export default Review;
