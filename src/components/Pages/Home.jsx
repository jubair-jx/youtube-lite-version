import React from "react";
import Navbar from "../Navbar/Navbar";
import Tags from "../Tags/Tags";
import Videos from "../Videos/Videos";
import Pagination from "../Ui/Pagination";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Tags></Tags>
      <Videos></Videos>
      <Pagination></Pagination>
    </>
  );
};

export default Home;
