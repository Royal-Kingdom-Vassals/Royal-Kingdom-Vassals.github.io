/*
 * File: index.tsx
 * Project: royal-kingdom-vassals.github.io
 * File Created: Saturday, 4th December 2021 10:51:10 pm
 * Author: Maurice (57321699+Kamakosy@users.noreply.github.com)
 * -----
 * Last Modified: Sunday, 19th December 2021 4:56:43 pm
 * Modified By: Maurice (57321699+Kamakosy@users.noreply.github.com>)
 * -----
 * Copyright 2020 - 2021 Royal Kingdom Vassals LTD,  Royal-Kingdom-Vassals
 */

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
