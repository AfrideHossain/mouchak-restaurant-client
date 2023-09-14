import { Swiper, SwiperSlide } from "swiper/react";

// swiper css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Css for banner page
import "./Banner.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// banner images
import image1 from "../../../assets/images/banner/jay-wennington-N_Y88TWmGwA-unsplash.jpg";
import image2 from "../../../assets/images/banner/madie-hamilton-Q9yr-cvJr30-unsplash.jpg";
import image3 from "../../../assets/images/banner/top-view-table-full-delicious-food-composition.jpg";
import image4 from "../../../assets/images/banner/youtube-banner-8077450_1280.jpg";

const Banner = () => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        grabCursor={true}
        style={{
          "--swiper-pagination-color": "#fc1216",
          "--swiper-pagination-bullet-inactive-color": "#fff",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        <SwiperSlide className="swiper-slide">
          <div className="banner-img-cover">
            <img src={image1} alt="Banner image 1" />
            <div className="banner-image-overlay"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="banner-img-cover">
            <img src={image2} alt="Banner image 2" />
            <div className="banner-image-overlay"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="banner-img-cover">
            <img src={image3} alt="Banner image 3" />
            <div className="banner-image-overlay"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="banner-img-cover">
            <img src={image4} alt="Banner image 4" />
            <div className="banner-image-overlay"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
