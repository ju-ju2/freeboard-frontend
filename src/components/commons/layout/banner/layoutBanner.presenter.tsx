import Slider from "react-slick";
import { BannerImage, Wrapper } from "./layoutBanner.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: true,
    // pauseOnHover: true,
    // nextArrow: (
    //   <NextTo>
    //     {/* <img src="/icons/next-arrow.svg" /> */}
    //     {/* <img src="../../../../img/icon-bad.png" /> */}
    //   </NextTo>
    // ),
    // prevArrow: <Pre>{/* <img src="/icons/prev-arrow.svg" /> */}</Pre>,
    appendDots: (dots: any) => (
      <div
        style={{
          width: "100%",
          position: "absolute",
          bottom: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: "dots_custom",
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <BannerImage src="../../../../img/banner01.png"></BannerImage>
        </div>
        <div>
          <BannerImage src="../../../../img/banner02.png"></BannerImage>
        </div>
        <div>
          <BannerImage src="../../../../img/banner03.png"></BannerImage>
        </div>
      </Slider>
    </Wrapper>
  );
}
