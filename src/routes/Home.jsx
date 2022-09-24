import React from "react";
import HeroImg from "../components/HeroImg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Work from "../components/Work";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeroImg />
      <Work />
      <Footer />
    </>
  );
};

export default Home;
