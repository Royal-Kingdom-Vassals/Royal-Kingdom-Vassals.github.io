import type { NextPage } from "next";
import "tailwindcss/tailwind.css";
//Home Page (Index)
const Home: NextPage = () => {
  return (
    //Navigation Bar with hyper links
    <div className="flex place-content-center opacity-80 bg-purple-400 p-2">
      <head>
        <title>Home | Royal Kingdom Vassals</title>
      </head>
      <div className="p-5 font-semibold italic text-xl">
        <a href="./about">About</a>
      </div>
      <div className="p-5 font-semibold italic text-xl">
        <a href="./ourStory">Our Story</a>
      </div>
    </div>
  );
};

export default Home;
