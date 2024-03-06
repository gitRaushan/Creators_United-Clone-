import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/HeroSlidersStyles.css";
const HeroSliders = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    autoplay: true, 
    autoplaySpeed: 2000,
  };

  return (
    <section className="text-gray-100 body-font ">
      <div className="container px-5 pt-10 pb-24 mx-auto">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="p-4 ">
            <div className="xl:w-10/3 md:w-5/2 border border-gray-700  flex Custom-bg" style={{ borderRadius: '12px' }}>
              <img
                src="images/card4.webp"
                alt="Card 1"
                className="w-32 h-24 m-2"
              />
              <div className="flex-grow">
                <p className="p-4 leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="p-4">
            <div className="xl:w-10/3 md:w-5/2 border border-gray-700 Custom-bg flex" style={{ borderRadius: '12px' }}>
              <img
                src="images/card7.webp"
                alt="Card 2"
                className="w-24 h-24  m-2"
              />
              <div className="flex-grow">
                <p className="p-4 leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="p-4">
            <div className="xl:w-10/3 md:w-5/2 border border-gray-700 Custom-bg flex" style={{ borderRadius: '12px' }}>
              <img
                src="images/card8.webp"
                alt="Card 3"
                className="w-32 h-24  m-2"
              />
              <div className="flex-grow">
                <p className="p-4 leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
          </div>
          


          <div className="p-4">
            <div className="xl:w-10/3 md:w-5/2 border border-gray-700 Custom-bg flex" style={{ borderRadius: '12px' }}>
              <img
                src="images/card1.webp"
                alt="Card 3"
                className="w-32 h-24  m-2"
              />
              <div className="flex-grow">
                <p className="p-4 leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
          </div>



          <div className="p-4">
            <div className="xl:w-10/3 md:w-5/2 border border-gray-700 Custom-bg flex" style={{ borderRadius: '12px' }}>
              <img
                src="images/card3.webp"
                alt="Card 3"
                className="w-32 h-24  m-2"
              />
              <div className="flex-grow">
                <p className="p-4 leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HeroSliders;