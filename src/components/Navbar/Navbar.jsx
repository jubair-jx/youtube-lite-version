import React from "react";
import Search from "./Search/Search";
import navLogo from "../../assets/lws.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="bg-slate-100 shadow-md">
      <div class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <Link to="/">
          <img class="h-10" src={navLogo} alt="Learn with Sumit" />
        </Link>
        <Search></Search>
      </div>
    </nav>
  );
};

export default Navbar;
