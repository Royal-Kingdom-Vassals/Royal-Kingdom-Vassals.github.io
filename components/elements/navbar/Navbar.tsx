/*
 * File: Navbar
 * Project: royal-kingdom-vassals.github.io
 * File Created: Sunday, 19th December 2021 5:13:37 pm
 * Author: Maurice (57321699+Kamakosy@users.noreply.github.com)
 * -----
 * Last Modified: Sunday, 19th December 2021 5:13:37 pm
 * Modified By: Maurice (57321699+Kamakosy@users.noreply.github.com>)
 * -----
 * Copyright 2020 - 2021 Royal Kingdom Vassals LTD,  Royal-Kingdom-Vassals
 */
import React from "react";
import { useLocation } from "react-router-dom";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Our Story",
    href: "/ourStory",
  },
];

export const Navbar = () => {
  return (
    <div className="flex place-content-center opacity-80 bg-icarusNavy p-2">
      <head>
        <title>Home | Royal Kingdom Vassals</title>
      </head>
      {links.map(
        (link) => (
          // `${link.href}` == `${window.location.pathname}` ? (
          //   ""
          // ) : (
          <div key={link.href} className="p-5 font-semibold italic text-xl">
            <a href={link.href}>{link.name}</a>
          </div>
        )
        //)
      )}
    </div>
  );
};
