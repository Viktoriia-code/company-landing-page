import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";
import Arrow from '../assets/Arrow.svg'


const Container = styled.div`
  width: 25vw;
  height: 70vh;

  @media (max-width: 70em) {
    height: 60vh;
  }
  @media (max-width: 64em) {
    height: 45vh;
    width: 30vw;
  }
  @media (max-width: 48em) {
    height: 40vh;
    width: 40vw;
  }
  @media (max-width: 30em) {
    height: 40vh;
    width: 60vw;
  }

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  background-color: ${props => props.theme.carouselColor};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }
}

.swiper-button-next {
  color: ${props => props.theme.text};
  right: 0;
  top: 60%;
  width: 4rem;

  background-image: url(${Arrow});
  background-position: center;
  background-size: cover;

  &::after {
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
  color: ${props => props.theme.text};
  left: 0;
  top: 60%;
  width: 4rem;
  transform: rotate(180deg);

  background-image: url(${Arrow});
  background-position: center;
  background-size: cover;

  &::after {
    display: none;
  }
  @media (max-width: 64em) {
    width: 3rem;
  }
  @media (max-width: 30em) {
    width: 2rem;
  }
}

`

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
        scrollbar={{ draggable: true }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[Pagination, Navigation, Autoplay, EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/company/dissertation.jpg" alt="Dissertation" /></SwiperSlide>
        <SwiperSlide><img src="/company/development_versions.jpg" alt="DevelopmentVersions" /></SwiperSlide>
        <SwiperSlide><img src="/company/WorldSoilDay.jpg" alt="WorldSoilDay" /></SwiperSlide>
        <SwiperSlide><img src="/company/soil_scout_golf.jpg" alt="SoilScoutGolf" /></SwiperSlide>
        <SwiperSlide><img src="/company/program.png" alt="Program" /></SwiperSlide>
        <SwiperSlide><img src="/company/GIS.jpg" alt="GIS" /></SwiperSlide>
        <SwiperSlide><img src="/company/components.png" alt="Components" /></SwiperSlide>
        <SwiperSlide><img src="/company/packaging.jpg" alt="Packaging" /></SwiperSlide>
        <SwiperSlide><img src="/company/Pitching_Comp.jpg" alt="PitchingComp" /></SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel