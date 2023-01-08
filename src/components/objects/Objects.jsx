import React from "react";
import styled from "styled-components";
import Headphones from "../../assets/img/headphones.png";
import Speakers from "../../assets/img/speakers.png";
import Earphones from "../../assets/img/earphones.png";

function Objects() {
  return (
    <>
      <Object_container className="container">
        <section className="general_container">
            
          <section className="object_headphones container">
            <img src={Headphones} alt="" className="object_img object_img1" />
            <p className="object_paragraph">Headphones</p>
            <p className="object_link">SHOP ➡</p>
          </section>

          <section className="object_headphones container">
            <img src={Speakers} alt="" className="object_img speakers_img" />
            <p className="object_paragraph speakers_paragraph">Speakers</p>
            <p className="object_link speakers_link">SHOP ➡</p>
          </section>

          <section className="object_headphones container">
            <img src={Earphones} alt="" className="object_img earphones_img" />
            <p className="object_paragraph earphones_paragraph">Earphones</p>
            <p className="object_link earphones_link">SHOP ➡</p>
          </section>
        </section>
      </Object_container>
    </>
  );
}

export default Objects;

const Object_container = styled.section`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: all 0.5s;
  }

  .general_container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    width: 100%;
    height: 100vh;
    margin-bottom: 70px;
  }

  .object_headphones {
    background-color: #f1f1f1;
    border-radius: 10px;
    position: relative;
    bottom: 20px;
    width: 100%;
    margin-bottom: 30px;
  }

  .object_headphones:hover{
    background-color: gainsboro;
    cursor: pointer;
  }

  .object_img {
    width: 150px;
    position: relative;
    bottom: 70px;
    display: block;
    margin: 0 auto;
  }

  .speakers_img{
    height: 100px;
    width: 100px;
    bottom: 40px;
  }

  .earphones_img{
    height: 120px;
    width: 120px;
    bottom: 50px;
  }

  .object_paragraph{
    position: relative;
    bottom: 70px;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
  }

  .speakers_paragraph{
    bottom: 30px;
  }

  .speakers_link{
    margin-bottom: 40px;
  }

  .earphones_paragraph{
    bottom: 40px;
  }

  .object_link{
    position: relative;
    bottom: 50px;
    text-align: center;
    color: gray;
    font-size: 16px;
  }

  .object_link:hover{
    color: blue;
  }

  .speakers_link{
    bottom: 10px;
  }

  .earphones_link{
    bottom: 20px;
    margin-bottom: 30px;
  }

@media (min-width: 375px) {
  .object_headphones{
    width: 95%;
  }
}

@media (min-width: 425px) {
  .object_headphones{
    width: 85%;
  }
}

@media (min-width: 768px) {
  .general_container{
    flex-direction: row;
    justify-content: center;
    height: 50vh;
    margin: -70px 0px 0px 0px;
    gap: 30px;
  }

  .object1_img {
    width: 100px;
    height:100px;
  }

  .speakers_img{
    height: 100px;
    width: 100px;
  }

  .speakers_paragraph{
    bottom: 20px;
  }

  .speakers_link{
    top: -3px;
  }

  .earphones_img{
    height: 100px;
    width: 100px;
    bottom: 40px;
  }

  .earphones_paragraph{
    bottom: 20px;
  }

  .earphones_link{
    top: -3px;
  }
}

@media (min-width: 1024px) {
  .general_container{
    gap: 30px;
    height: 350px;
  }
}

`;
