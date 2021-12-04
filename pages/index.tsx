import type { NextPage } from "next";
import "tailwindcss/tailwind.css";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen place-content-center">
      <div className="bg-red-400 p-7 m-auto">Hello world</div>
    </div>
  );
};

export default Home;
