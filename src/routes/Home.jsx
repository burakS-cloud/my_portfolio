import React from "react";
import HeroImg from "../components/HeroImg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Work from "../components/Work";
import Experience from "../components/Experience";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeroImg />
      <Experience />
      <Work />
      <Footer />
    </>
  );
};

export default Home;
