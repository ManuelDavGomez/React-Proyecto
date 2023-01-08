import React, { useState } from "react";
import styled from "styled-components";
import BurgerButton from "./BurgerButton.jsx";

function Nav() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    if (window.innerWidth < 768) {
      setClicked(!clicked);
    }
  };

  return (
    <>
      <NavContainer>
        <h2>
          Audio<span>Phile</span>
        </h2>
        <div className={`links ${clicked ? "active" : ""}`}>
          <a href="#h">Home</a>
          <a href="#h">Headphones</a>
          <a href="#h">Speakers</a>
          <a href="#h">Earphones</a>
        </div>
        <div className="burger">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
}

export default Nav;

const NavContainer = styled.nav`
  h2 {
    color: #fefefe;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  z-index: 3;
  width: 100vw;
  position: fixed;
  padding: 0.4rem;
  background-color: #1a1d2c;
  display: flex;
  height: 100px;
  border-bottom: 1px #1d2344 solid;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }

    a:hover {
      transition: all 0.5s;
      color: skyblue;
      display: inline-block;
      transform: scale(1.1);
      cursor: pointer;
    }

    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 100%;
    left: 3%;
    right: 3%;
    z-index: 2;
    text-align: center;
    a {
      font-size: 1.3rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burger {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #171a2bd9;
  position: absolute;
  left: -8000px;
  width: 100%;
  height: 200px;
  z-index: 1;
  transition: all 0.3s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 101%;
    left: 0;
    width: 100%;
    height: 450px;
    z-index: 1;
  }
`;
