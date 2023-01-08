import React from "react";
import Nav from "./components/Navbar/Nav.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Objects from "./components/objects/Objects.jsx";
import Card from "./components/Card/Card.jsx";
import Sectiones from "./components/Section/Sectiones.jsx";
import "./Index1.css";
import Footer from "./components/Footer/Footer.jsx";


function Index1() {
  return (
    <div>
      <Nav />
      <Hero />
      <Objects />
      <Card />
      <Sectiones />
      <Footer />
    </div>
  );
}

export default Index1;
