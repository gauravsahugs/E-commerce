import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://as1.ftcdn.net/v2/jpg/03/34/59/88/1000_F_334598855_1rtCBYzsykZfdjfIARlOyh2WDfQxvDun.jpg",
    "https://cdn.ytechb.com/wp-content/uploads/2022/12/best-minimal-wallpapers-for-iphone.webp",
    "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWluaW1hbGlzdCUyMGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    "https://img.freepik.com/premium-photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone_8087-3877.jpg",
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div
        className="w-screen relative
      "
      >
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-[500px] flex transition-transform duration-1000"
        >
          {data.map((item) => (
            <img
              key={item}
              className="w-screen h-full object-cover"
              src={item}
              alt=""
              loading="priority"
            />
          ))}
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-24">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300
          "
          >
            <KeyboardBackspaceIcon />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300
          "
          >
            <EastIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
