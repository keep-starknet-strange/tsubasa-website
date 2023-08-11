import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import Player1 from "../assets/Player-Cards/player1.png";
import Player2 from "../assets/Player-Cards/player2.png";
import Player3 from "../assets/Player-Cards/player3.png";
import Player4 from "../assets/Player-Cards/player4.png";
import Player5 from "../assets/Player-Cards/player5.png";
import Player6 from "../assets/Player-Cards/player6.png";
import Player7 from "../assets/Player-Cards/player7.png";
import Player8 from "../assets/Player-Cards/player8.png";
import Player9 from "../assets/Player-Cards/player9.png";
import Player10 from "../assets/Player-Cards/player10.png";

import Arrow from "../assets/Arrow.svg";

const Container = styled.div`
  width: 25vw;
  height: 70vh;

  @media (max-width: 70em) {
    height: 60vh;
  }

  @media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
  }
  @media (max-width: 48em) {
    height: 50vh;
    width: 40vw;
  }
  @media (max-width: 30em) {
    height: 45vh;
    width: 60vw;
  }

  .swiper {
    width: 75%;
    height: 85%;
  }

  .swiper-slide {
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    .swiper-slide-shadow {
      background: none;
    }
  }

  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }
    @media (max-width: 30em) {
      width: 2rem;
    }
  }
  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    left: 0;
    top: 60%;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }
    @media (max-width: 64em) {
      width: 3rem;
    }
    @media (max-width: 30em) {
      width: 2rem;
    }
  }
`;

const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        scrollbar={{
          draggable: true,
        }}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={Player1} alt="Tsubasa card" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={Player4} alt="Tsubasa card" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={Player7} alt="Tsubasa card" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={Player2} alt="Tsubasa card" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={Player5} alt="Tsubasa card" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={Player8} alt="Tsubasa card" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={Player3} alt="Tsubasa card" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={Player6} alt="Tsubasa card" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={Player9} alt="Tsubasa card" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img width={500} height={400} src={Player10} alt="Tsubasa card" />{" "}
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousel;
