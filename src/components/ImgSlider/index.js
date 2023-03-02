import { Carousel, CarouselItem } from "./ImgSlider.style";

const ImgSlider = (props) => {
  const options = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...options}>
      <CarouselItem>
        <a>
          <img src="/images/slider-badging.jpg" alt="" />
        </a>
      </CarouselItem>
      <CarouselItem>
        <a>
          <img src="/images/slider-scale.jpg" alt="" />
        </a>
      </CarouselItem>
      <CarouselItem>
        <a>
          <img src="/images/slider-badag.jpg" alt="" />
        </a>
      </CarouselItem>
      <CarouselItem>
        <a>
          <img src="/images/slider-scales.jpg" alt="" />
        </a>
      </CarouselItem>
    </Carousel>
  );
};

export default ImgSlider;
