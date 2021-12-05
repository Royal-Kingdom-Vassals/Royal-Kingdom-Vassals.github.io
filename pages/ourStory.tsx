import type { NextPage } from "next";
import { text } from "node:stream/consumers";
import "tailwindcss/tailwind.css";

const ourStory: NextPage = () => {
  return (
    //Navigation Bar with hyper links
    <div className="flex place-content-center opacity-80 bg-purple-400 p-2">
      <head><title>Our Story | Royal Kingdom Vassals</title></head>
      <div className="p-5 font-semibold italic text-xl">
        <a href=".">Icarus</a>
      </div>
      <div className="p-5 font-semibold italic text-xl">
        <a href="./about">About</a>
      </div>
    </div>
  );
};

export default ourStory;
