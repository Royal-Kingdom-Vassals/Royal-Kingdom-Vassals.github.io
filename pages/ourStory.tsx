/*
 * File: ourStory.tsx
 * Project: royal-kingdom-vassals.github.io
 * File Created: Sunday, 5th December 2021 4:14:11 pm
 * Author: Maurice (57321699+Kamakosy@users.noreply.github.com)
 * -----
 * Last Modified: Sunday, 19th December 2021 4:56:46 pm
 * Modified By: Maurice (57321699+Kamakosy@users.noreply.github.com>)
 * -----
 * Copyright 2020 - 2021 Royal Kingdom Vassals LTD,  Royal-Kingdom-Vassals
 */

import type { NextPage } from "next";
import { text } from "node:stream/consumers";
import "tailwindcss/tailwind.css";
import Home from "./index";

const ourStory: NextPage = () => {
  return (
    //Navigation Bar with hyper links
    <div className="flex place-content-center opacity-80 bg-purple-400 p-2">
      <head>
        <title>Our Story | Royal Kingdom Vassals</title>
      </head>
      <div className="p-5 font-semibold italic text-xl">
        <a href="./">Icarus</a>
      </div>
      <div className="p-5 font-semibold italic text-xl">
        <a href="./about">About</a>
      </div>
    </div>
  );
};

export default ourStory;
