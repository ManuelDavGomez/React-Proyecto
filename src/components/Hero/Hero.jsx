import React from "react";
import hero_bg from "../../assets/img/hero_bg.png";
import styled from "styled-components";

function Hero() {
  return (
    <>

      <Hero_container>
      <div className="container_general">
        <img src={hero_bg} alt="bg" className="hero_img" />
        </div>
        <div className="paragraph_container">
          <p className="hero_paragraph paragraph">NEW PRODUCT</p>
          <p className="hero_paragraph2 paragraph">XX99 MARK II HEADPHONE</p>
          <p className="hero_paragraph3 paragraph">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast
          </p>
          <form>
            <input type="button" value="SEE PRODUCTS" className="hero_button" />
          </form>
        </div>

      </Hero_container>

    </>
  );
}

export default Hero;

const Hero_container = styled.section`
  * {
    transition: all 0.5s;
  }

  .container_general{
    background-color: #0f111e;
    height: 100vh;
    width: 100%;
  }

  .hero_img {
    display: block;
    margin: 0 auto;
    width: 90%;
    height: 380px;
    position: relative;
    top: 130px;
  }

  .paragraph_container {
    position: relative;
    top: -300px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .hero_paragraph {
    position: relative;
    font-size: 20px;
    bottom: 70px;
    margin-left: 10px;
    letter-spacing: 10px;
    color: gray;
  }

  .hero_paragraph2 {
    position: relative;
    bottom: 80px;
    font-size: 40px;
    color: white;
    line-height: 35px;
  }

  .hero_paragraph3 {
    position: relative;
    bottom: 70px;
    width: 85%;
    font-size: 16px;
    margin: 0 auto;
    color: #bbbbbb;
  }

  .hero_button {
    position: relative;
    bottom: 50px;
    font-size: 16px;
    border: none;
    background-color: #4976d8;
    color: #fff;
    height: 40px;
    width: 150px;
  }
  .hero_button:hover {
    transform: scale(1.1);
    border-radius: 40px;
  }

  @media (min-width: 768px) {
    .hero_img{
      width: 50%;
      display: block;
      margin: 0 auto;
    }
  }

  @media (min-width: 1024px) {
    .hero_img{
      display: block;
      margin: 0 auto;
      width: 435px;
    }

    .paragraph_container{
      top: -250px;
    }

    .hero_paragraph3{
      font-size: 20px;
    }

    .container_general{
      width: 100%;
      height: 538px;
      background-color: #10131e;
    }

  }

  @media (min-width: 1140px){
    body{
      display: flex;
    }
  }

  @media (min-width: 2560px) {
    .hero_paragraph{
      font-size: 35px;
    }

    .hero_paragraph3{
      font-size:30px;
    }
  }
`;
