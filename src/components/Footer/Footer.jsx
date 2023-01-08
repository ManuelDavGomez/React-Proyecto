import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <Footer_container>
        <section className="footer_container">
          <p className="footer_title">Audiophile</p>
          <ul className="foot_links">
            <li>
              <a href="#h">HOME</a>
            </li>
            <li>
              <a href="#h">HEADPHONES</a>
            </li>
            <li>
              <a href="#h">SPEAKERS</a>
            </li>
            <li>
              <a href="#h">EARPHONES</a>
            </li>
          </ul>
          <p className="footer_paragraph">
            Audiophile is an all in one stop to fulfill your audio needs. We‘re
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we‘re open 7 days a week.
          </p>

          <p className="footer_copy">Copyright 2022.All Rights Reserved</p>

          <div className="footer_icons">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-instagram"></i>
          </div>
        </section>
      </Footer_container>
    </>
  );
}

export default Footer;

const Footer_container = styled.footer`
  * {
    padding: 0%;
    margin: 0%;
    box-sizing: border-box;
  }

  .footer_container {
    width: 100%;
    background-color: #101010;
    border-top: 3px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer_title {
    font-size: 30px;
    color: white;
    font-weight: bold;
    margin: 30px 0px;
  }

  .foot_links {
    list-style: none;
  }

  .foot_links li {
    line-height: 40px;
    letter-spacing: 2px;
    text-align: center;
    font-size: 16px;
  }

  .foot_links li a {
    text-decoration: none;
    color: white;
  }

  .foot_links li a:hover {
    color: skyblue;
    cursor: pointer;
    display: inline-block;
    transform: scale(1.1);
  }

  .footer_paragraph {
    color: gray;
    margin: 40px 25px;
    font-size: 20px;
    text-align: center;
  }

  .footer_copy {
    font-size: 20px;
    text-align: center;
    color: gray;
    margin-bottom: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .footer_icons {
    width: 230px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    gap: 20px;
    margin-bottom: 30px;
    color: white;
  }

  .bi-facebook:hover,
  .bi-twitter:hover,
  .bi-instagram:hover {
    color: skyblue;
    transform: scale(1.1);
    cursor: pointer;
  }

  @media (min-width: 375px) {
    .footer_paragraph {
      margin: 40px 12px;
    }
  }

  @media (min-width: 768px) {
    .footer_container {
      align-items: flex-start;
    }

    .footer_title {
      margin-left: 30px;
    }

    .foot_links {
      display: flex;
      gap: 30px;
      margin-left: 30px;
      flex-direction: row;
    }

    .footer_paragraph {
      text-align: start;
      margin-left: 30px;
      font-size: 1hpx;
    }

    .footer_copy {
      margin-left: 30px;
    }

    .footer_icons {
      position: relative;
      left: 520px;
    }
  }

  @media (min-width: 1024px) {
    .footer_icons{
      left: 780px;
      position: relative; 
    }

    .foot_links li a{
      font-size: 20px;
    }

    .footer_paragraph{
      font-size: 25px;
    }
  }

  @media (min-width: 1440px) {
    .footer_icons{
      left: 1150px;
      position: relative;
      gap: 40px;
    }
  }
`;
