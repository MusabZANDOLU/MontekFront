import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

function carousel() {
  const responsive = {
    desktopLarge: {
      breakpoint: { max: 3000, min: 1500 },
      items: 6,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1500, min: 1024 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };
  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all 4"
        containerClassName="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClassName="custom-dot-list-style"
        itemClassName="carousel-item-padding-5-px"
      >
        <div className="slider-edit">
          <div className="product-col">
            <img src={require("../../assets/images/slider/pvc.jpg")} alt="" />
            <div className="layers">
              <h3>PVC Cam & Kapı Modelleri</h3>
            </div>
          </div>
        </div>
        <div className="slider-edit">
          <div className="product-col">
            <img
              src={require("../../assets/images/slider/cambalkonanasayfa.jpg")}
              alt=""
            />
            <div className="layers">
              <h3>Katlanır & Sürme Cam Modelleri</h3>
            </div>
          </div>
        </div>
        <div className="slider-edit">
          <div className="product-col">
            <img
              src={require("../../assets/images/slider/kepeng.jpg")}
              alt=""
            />
            <div className="layers">
              <h3>Otomatik Kepeng Modelleri</h3>
            </div>
          </div>
        </div>
        <div className="slider-edit">
          <div className="product-col">
            <img
              src={require("../../assets/images/slider/dusakabin.jpg")}
              alt=""
            />
            <div className="layers">
              <h3>Duşakabin Modelleri</h3>
            </div>
          </div>
        </div>
        <div className="slider-edit">
          <div className="product-col">
            <img
              src={require("../../assets/images/slider/celikkapi.jpg")}
              alt=""
            />
            <div className="layers">
              <h3>Çelik Kapı Modelleri</h3>
            </div>
          </div>
        </div>
        <div className="slider-edit">
          <div className="product-col">
            <img
              src={require("../../assets/images/slider/otomatik-kapi.jpg")}
              alt=""
            />
            <div className="layers">
              <h3>Otomatik Kapı Modelleri</h3>
            </div>
          </div>
        </div>
        <div className="slider-edit">
          <div className="product-col">
            <img
              src={require("../../assets/images/slider/otomatik-panjur.jpg")}
              alt=""
            />
            <div className="layers">
              <h3>Otomatik Panjur Modelleri</h3>
            </div>
          </div>
        </div>
      </Carousel>
      <div className="more-prodct">
        {" "}
        Ayrıntılar ve daha fazlası için{" "}
        <Link className="dash-prdct" to="products">
          ürünler
        </Link>{" "}
        sekmemize göz atabilirsiniz.
      </div>
    </div>
  );
}
export default carousel;
