import React from "react";
import shoe_image from '../assets/shoe_image.png'
import flipkart from '../assets/flipkart.png'
import amazon from '../assets/amazon.png'

const Hero = () => {
  return (
    <main className="w-[80%] mx-auto flex justify-center items-center">
      <section className="flex-1">
        <h1 className="font-black text-8xl">YOUR FEET DESERVE THE BEST </h1>
        <p className="my-5 text-xs mr-28">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          ORDER YOUR SHOES
        </button>
            <p className="text-xs my-3">Also Available On</p>
        <div className="flex items-center gap-3">
            <img src={amazon} alt="amazon_img" />
            <img src={flipkart} alt="flipkart_img" />
        </div>
      </section>
      <section className="flex-1">
        <img src={shoe_image} alt="shoes_img" />
      </section>
    </main>
  );
};

export default Hero;
