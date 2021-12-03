import type { NextPage } from "next";
import "tailwindcss/tailwind.css";

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-red-400 p-10 rounded shadow-xl mt-96">Hello world</div>
    </div>
  );
};

export default Home;
