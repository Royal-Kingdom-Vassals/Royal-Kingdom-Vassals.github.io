import type { NextPage } from "next";
import { text } from "node:stream/consumers";
import "tailwindcss/tailwind.css";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen place-content-center">
      <div className="bg-red-400 p-7 m-auto">About</div>
      <div className="bg-red-400 p-7 m-auto">About</div>
    </div>
  );
};

export default Home;
