import React from "react";
import styled from "styled-components";
import Card1 from "../../assets/img/card1.png";

function Card() {
  return (
    <>
      <Card_container className="container">
        <section className="card_container">
          <section className="card1_container">
            <img src={Card1} alt="" className="card1_img" />
            <div className="card1_container_two">
              <h1 className="card1_title">ZX9 SPEAKER</h1>
              <p className="card1_paragraph">
                Upgrade to premium speakers that are phenomenally built to
                delivery truly remarkable sound
              </p>
              <form action="">
                <input
                  type="button"
                  value="SEE PRODUCTS"
                  className="card1_btn"
                />
              </form>
            </div>
          </section>

          <section className="card2_container">
            <h1 className="card2_title">ZX7 SPEAKER</h1>
            <form action="">
              <input type="button" value="SEE PRODUCTS" className="card2_btn" />
            </form>
          </section>

          <div className="cards_container">
            <section className="card3_container"></section>

            <section className="card4_container">
              <h1 className="card4_title">YK1 EARPHONES</h1>
              <form action="">
                <input
                  type="button"
                  value="SEE PRODUCTS"
                  className="card4_btn"
                />
              </form>
            </section>
          </div>

        </section>
      </Card_container>
    </>
  );
}

export default Card;

const Card_container = styled.section`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: all 0.8s;
    scroll-behavior: smooth;
  }

  .cards_container{
      width: 100%;
      gap: 30px;
    }

  .card_container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 120px;
  }

  .card1_container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: 570px;
    background-image: url(../src/assets/img/bg_card.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    margin-bottom: 30px;
    margin-top: 30px;
  }

  .card1_img {
    position: relative;
    bottom: 20px;
    width: 300px;
    height: 300px;
  }

  .card1_title {
    position: relative;
    bottom: 60px;
    font-size: 48px;
    text-align: center;
    color: gainsboro;
  }

  .card1_paragraph {
    position: relative;
    bottom: 40px;
    font-size: 16px;
    text-align: center;
    color: gray;
  }

  .card1_btn {
    position: relative;
    bottom: 10px;
    border: none;
    width: 150px;
    height: 50px;
    background-color: black;
    color: white;
    font-size: 16px;
    display: block;
    margin: 0 auto;
  }

  .card1_btn:hover {
    background-color: white;
    color: black;
    transform: scale(1.1);
    border-radius: 30px;
  }

  .card2_container {
    width: 100%;
    height: 350px;
    background-image: url("../src/assets/img/zx7.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    background-color: #ededed;
    margin-bottom: 30px;
  }

  .card2_title {
    position: relative;
    top: 90px;
    font-size: 32px;
  }

  .card2_btn {
    position: relative;
    top: 120px;
    left: 19px;
    width: 150px;
    height: 50px;
    font-size: 16px;
    border: 1px solid black;
  }

  .card2_btn:hover {
    border-radius: 20px;
    color: white;
    background-color: black;
  }

  .card3_container {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    background-image: url("../src/assets/img/yk1.jpg");
    background-position: center;
    background-size: cover;
    margin-bottom: 30px;
  }

  .card4_container {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    background-position: center;
    background-color: #ededed;
    background-size: cover;
    padding: 40px 40px 30px 20px;
  }

  .card4_title {
    font-size: 30px;
  }

  .card4_btn {
    margin-top: 20px;
    width: 150px;
    height: 50px;
    font-size: 16px;
    border: 1px solid black;
  }

  .card4_btn:hover {
    border-radius: 20px;
    color: white;
    background-color: black;
  }

  @media (min-width: 375px) {
    .card1_container {
      width: 95%;
    }

    .cards_container{
      width: 95%;
      gap: 30px;
    }

    .card2_container {
      width: 95%;
    }

    .card2_title {
      left: 10px;
    }

    .card2_btn {
      left: 32px;
    }
  }

  @media (min-width: 425px) {
    .card1_container {
      width: 85%;
    }

    .cards_container{
      width: 85%;
    }

    .card1_paragraph {
      margin: 0 20px;
      font-size: 18px;
    }

    .card2_container {
      width: 85%;
    }

    .card2_title {
      left: 10px;
    }

    .card2_btn {
      left: 32px;
    }

  }

  @media (min-width: 768px) {
    .card1_container {
      margin-top: -80px;
    }

    .cards_container{
      width: 75%;
    }

    .card1_container {
      width: 75%;
      height: 95vh;
    }

    .card1_paragraph {
      margin: 0 10px;
    }

    .card2_container {
      width: 75%;
    }

    .card2_title {
      left: 60px;
    }

    .card2_btn {
      left: 80px;
    }

  }

  @media (min-width: 1024px) {
    .card1_container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 96%;
      height: 400px;
    }

    .cards_container{
      display: flex;
      width: 96%;
      gap: 30px;
    }

    .card3_container,
    .card4_container{
      height:300px;
      margin-bottom: 0px;
    }

    .card4_title{
      position: relative;
      left: 70px;
      top: 50px;
    }

    .card4_btn{
      position: relative;
      left: 75px;
      top: 50px;
    }

    .card2_container {
      width: 95%;
      height: 250px;
    }

    .card2_title {
      top: 60px;
    }

    .card2_btn {
      top: 80px;
    }

    .card1_container_two {
      display: flex;
      flex-direction: column;
      text-align: center;
      position: relative;
      width: 520px;
      position: relative;
      right: 90px;
      top: 20px;
    }

    .card1_paragraph {
      color: white;
      font-size: 19px;
    }

    .card1_img {
      width: 600px;
      height: 600px;
      position: relative;
      right: 70px;
      top: 5px;
    }
  }

  @media (min-width: 2560px) {
    .card1_paragraph{
      font-size: 25px;
    }
  }
`;
