import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const SlickCarousel = ({ carouselData, heading }) => {
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <FaArrowLeft
        className={className}
        style={{ ...style, fontSize: "24px", color: "black" }}
        onClick={onClick}
      />
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <FaArrowRight
        className={className}
        style={{ ...style, fontSize: "24px", color: "black" }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,

    slidesToShow: 6, // Display 6 images at once
    slidesToScroll: 3, // Move 6 images at a time
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div>
      <div className="flex items-center my-2 bg-yellow-200">
        <div className="border-r-[20px] border-green-600 h-16 mr-4"></div>
        <h2 className="text-2xl font-bold">{heading}</h2>
      </div>

      <Slider {...settings}>
        {carouselData?.map((item, idx) => (
          <Link key={idx}
          href={`/Detail/${item.id}`}
          target="_blank"
         
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.original_title}
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
        ))}
      </Slider>
      
    </div>
  );
};

export default SlickCarousel;
