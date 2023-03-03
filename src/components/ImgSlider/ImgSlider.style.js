import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = styled(Slider)`
  margin-bottom: 40px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease-in;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -55px;
  }
  .slick-next {
    right: -55px;
  }
`;

export const CarouselItem = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  a {
    height: calc(100vw * 0.5625);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
      rgb(0 0 0 / 73%) 0 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    border: 3px solid transparent;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
    }
    &:hover {
      padding: 0;
      border: 3px solid rgba(249, 249, 249, 0.8);
      transition-duration: 0.3s;
    }
  }
  @media (min-width: 768px) {
    padding: 0 10px;
    a {
      height: 100%;
    }
  }
`;
