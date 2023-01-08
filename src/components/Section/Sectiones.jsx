import React from "react";
import styled from "styled-components";
import Audiogear from "../../assets/img/audiogear.jpg";

function Sectiones() {
  return (
    <>
      <Section_container className="container">
        <section className="section_container">
          <img src={Audiogear} alt="" className="section_img" />
          <div className="containers">
            <p className="section_title">
              BRINGING YOU THE <span> BEST </span> AUDIO GEAR
            </p>
            <p className="section_paragraph">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </section>
      </Section_container>
    </>
  );
}

export default Sectiones;

const Section_container = styled.section`
  .section_container {
    width: 100%;
    height: 720px;
    margin-top: 100px;
    margin-bottom: 50px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section_img {
    width: 100%;
    border-radius: 10px;
    height: 300px;
  }

  .section_container span {
    color: blue;
  }

  .section_title {
    text-align: center;
    margin-top: 30px;
    font-weight: bold;
    font-size: 25px;
  }

  .section_paragraph {
    font-size: 16px;
    color: gray;
    text-align: center;
  }

  @media (min-width: 375px) {
    .section_container {
      width: 95%;
      height: 670px;
      margin: 100px auto;
    }

    .section_img {
      display: block;
      margin: 0 auto;
    }
  }

  @media (min-width: 425px) {
    .section_container {
      width: 85%;
      height: 700px;
    }

    .section_paragraph {
      margin: 0 15px;
      font-size: 17px;
      text-align: justify;
    }
  }

  @media (min-width: 768px) {
    .section_container {
      width: 75%;
      height: 750px;
    }

    .section_img {
      height: 400px;
    }

    .section_paragraph {
      margin: 0 20px;
      font-size: 18px;
    }
  }

  @media (min-width: 1024px) {
    .section_container {
      width: 96%;
      height: 500px;
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
    }

    .section_img {
      width: 50%;
      height: 100%;
    }

    .section_title{
      text-align: start;
      font-size: 38px;
    }

    .section_paragraph{
      margin: 0px;
      text-align: start;
      font-size: 20px;
      padding-right: 50px;
    }
  }

  @media (min-width: 2560px) {
    .section_paragraph{
      font-size: 28px;
    }
  }
`;
