import React from "react";
import BannerImg from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 p-4 md:p-16 my-16">
      <div className="hero-content flex-col lg:flex-row-reverse gap-6">
        <img
          src={BannerImg}
          className=" w-full max-w-lg rounded-lg shadow-2xl"
        />
        <div className="space-y-8">
          <h1 className="text-5xl font-bold leading-tight">Books to freshen up your bookshelf</h1>
        
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
