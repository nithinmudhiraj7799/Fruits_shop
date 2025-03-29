import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CarouselPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    // <div className=" bg-gradient-to-br from-green-100 to-green-300 py-10 px-4 pt-20  ">
    // <div className="bg-gradient-to-br from-green-100 via-green-200 to-green-300 py-10 px-4 pt-20 rounded-lg shadow-xl border border-green-200">
 <div>
      <div className="max-w-7xl mx-auto">
        <Slider {...settings} className="w-full">
          {[
            "https://www.eatforhealth.gov.au/sites/default/files/2022-03/fruit_selection_155265101_web.jpg",
            "https://image.tuasaude.com/media/article/bi/cd/frutas-recomendadas-para-diabetes_15786.jpg",
            "https://www.radiofrance.fr/s3/cruiser-production-eu3/2017/06/aa1c617d-efc3-43bb-82d7-e5f9ba789cc7/640x340_sc_fruit_-_getty.jpg",
            "https://sandraicecream.com/wp-content/uploads/2021/05/Fruits-1.png",
            "https://t4.ftcdn.net/jpg/00/65/70/65/360_F_65706597_uNm2SwlPIuNUDuMwo6stBd81e25Y8K8s.jpg",
          ].map((src, index) => (
            <div key={index}>
                 <img
  className="w-full h-96 rounded-xl shadow-xl object-cover object-center border-2 border-red-100 hover:scale-105 transition-transform duration-300 hover:brightness-105"
  src={src}
  alt="Fresh Fruits"
/>


              {/* <img
                className="w-full h-96 rounded-lg shadow-lg object-cover"
                src={src}
                alt="Fresh Fruits"
              /> */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselPage;
