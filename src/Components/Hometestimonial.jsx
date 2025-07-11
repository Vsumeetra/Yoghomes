import React, { useRef, useState } from "react";
import "swiper/css"; // Main styles
import "swiper/css/navigation"; // For navigation styles (optional)
import "swiper/css/pagination"; // For pagination styles (optional)
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import Testimonial from "../Data/Testimonial";

const Hometestimonial = () => {
  const containerRef = useRef(null); // Reference to the container
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  const swiperRef = React.useRef(null);

  const goToPrevSlide = () => {
    swiperRef.current.swiper.slidePrev(); // Slide to the previous slide
  };

  const goToNextSlide = () => {
    swiperRef.current.swiper.slideNext(); // Slide to the next slide
  };
  return (
    <>
      <div className="container-fluid p-4 my-5">
        <div>
          <p
            className="px-4 mt-5 p-1 homeoneserviceh6"
            style={{ border: "1px solid black" }}
          >
            Testimonial
          </p>
          <hr className="mt-4" style={{ opacity: "1" }} />
          <div className="d-flex justify-content-between align-items-center">
            <h4
              className="display-5"
              style={{
                fontFamily: "var(--head-font)",
                color: "black",
                fontWeight: "500",
                letterSpacing: "1px",
              }}
            >
              What Our Clients Say
            </h4>
            {/* <div>
              <button
                onClick={goToPrevSlide}
                className="m-2 p-2 px-2 homeoneleftbutton"
              >
                <GrFormPrevious size={36} color="var(--primary-color)" />
              </button>
              <button
                onClick={goToNextSlide}
                className="m-2 p-2 px-2 homeoneleftbutton"
              >
                <MdNavigateNext size={36} color="var(--primary-color)" />
              </button>
            </div> */}
          </div>
          <div className="row p-4">
          {Testimonial.map((data)=>(
            <div className="col-md-6 col-lg-4 mt-4">
            <article
                class="pbmit-service-style-1 swiper-slide swiper-slide-active"
                role="group"
                aria-label="1 / 6"
              >
                <div class="pbminfotech-post-item">
                  <div class="pbminfotech-box-content">
                    <a
                      class="pbmit-service-btn"
                      style={{
                        top: "0",
                        backgroundColor: "var(--primary-color)",
                      }}
                      title="Ardha Chakrasana"
                    >
                      <span class="pbmit-button-icon-wrappera">
                        <span class="pbmit-button-icona">
                          <i class="pbmit-base-icon-black-arrow-1">
                            <BiSolidQuoteAltLeft color="white" size={30} />
                          </i>
                        </span>
                      </span>
                    </a>
                    <div
                      class="pbmit-box-content-wrap p-0"
                      style={{
                        clipPath:
                          "polygon( 6.726% 100%,93.274% 100%,93.274% 100%,94.364% 99.896%,95.399% 99.594%,96.364% 99.111%,97.245% 98.464%,98.029% 97.668%,98.701% 96.741%,99.249% 95.698%,99.657% 94.556%,99.912% 93.332%,100% 92.042%,100% 28.912%,100% 28.912%,99.732% 25.399%,98.988% 22.786%,97.863% 20.91%,96.447% 19.608%,94.835% 18.717%,93.119% 18.071%,91.39% 17.508%,89.742% 16.865%,88.268% 15.977%,87.061% 14.682%,87.061% 14.682%,86.147% 12.968%,85.483% 11.096%,84.946% 9.146%,84.409% 7.198%,83.749% 5.331%,82.839% 3.624%,81.556% 2.158%,79.775% 1.012%,77.369% 0.266%,74.215% 0%,6.726% 0%,6.726% 0%,5.636% 0.104%,4.601% 0.406%,3.636% 0.889%,2.755% 1.536%,1.971% 2.332%,1.299% 3.259%,0.751% 4.302%,0.343% 5.444%,0.088% 6.668%,0% 7.958%,0% 92.042%,0% 92.042%,0.088% 93.332%,0.343% 94.556%,0.751% 95.698%,1.299% 96.741%,1.971% 97.668%,2.755% 98.464%,3.636% 99.111%,4.601% 99.594%,5.636% 99.896%,6.726% 100% )",
                      }}
                    >
                      <div className="p-5 pb-4">
                        <div className="d-flex">
                          <FaStar className="mx-1" color="gold" size={20} />
                          <FaStar className="mx-1" color="gold" size={20} />
                          <FaStar className="mx-1" color="gold" size={20} />
                          <FaStar className="mx-1" color="gold" size={20} />
                          <FaStar className="mx-1" color="gold" size={20} />
                        </div>
                        <p
                          className="mt-4"
                          style={{
                            fontFamily: "var(--para-font)",
                            color: "gray",
                          }}
                        >
                          {data.review}
                        </p>
                        <h5
                          className="mt-5"
                          style={{ fontFamily: "var(--head-font)" }}
                        >
                          {data.name}
                        </h5>
                        <p
                          className="mt-2"
                          style={{
                            fontFamily: "var(--para-font)",
                            color: "gray",
                          }}
                        >
                          Satisfied Client
                        </p>
                      </div>
                    </div>
                    <NavLink to="/"></NavLink>
                  </div>

                  <NavLink
                    to=""
                    class="pbmit-link"
                    href="service-details.html"
                  ></NavLink>
                </div>
              </article>
            </div>
          ))}
          </div>
          {/* <Swiper
            ref={swiperRef}
            onSlideChange={handleSlideChange}
            modules={[Navigation, Autoplay, A11y]}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              // Large devices (desktops)
              1200: {
                slidesPerView: 3, // Show 4 slides at once
              },
              // Tablets
              768: {
                slidesPerView: 2, // Show 3 slides at once
              },
              // Mobile devices
              480: {
                slidesPerView: 1, // Show 2 slides at once
              },
              // Small devices (extra small)
              320: {
                slidesPerView: 1, // Show 1 slide at once
              },
            }}
            style={{ minHeightheight: "400px" }}
            className="mt-4 py-5"
          >
            {Testimonial.map((data)=>(
            <SwiperSlide>
              <article
                class="pbmit-service-style-1 swiper-slide swiper-slide-active"
                role="group"
                aria-label="1 / 6"
              >
                <div class="pbminfotech-post-item">
                  <div class="pbminfotech-box-content">
                    <a
                      class="pbmit-service-btn"
                      style={{
                        top: "0",
                        backgroundColor: "var(--primary-color)",
                      }}
                      title="Ardha Chakrasana"
                    >
                      <span class="pbmit-button-icon-wrappera">
                        <span class="pbmit-button-icona">
                          <i class="pbmit-base-icon-black-arrow-1">
                            <BiSolidQuoteAltLeft color="white" size={30} />
                          </i>
                        </span>
                      </span>
                    </a>
                    <div
                      class="pbmit-box-content-wrap p-0"
                      style={{
                        clipPath:
                          "polygon( 6.726% 100%,93.274% 100%,93.274% 100%,94.364% 99.896%,95.399% 99.594%,96.364% 99.111%,97.245% 98.464%,98.029% 97.668%,98.701% 96.741%,99.249% 95.698%,99.657% 94.556%,99.912% 93.332%,100% 92.042%,100% 28.912%,100% 28.912%,99.732% 25.399%,98.988% 22.786%,97.863% 20.91%,96.447% 19.608%,94.835% 18.717%,93.119% 18.071%,91.39% 17.508%,89.742% 16.865%,88.268% 15.977%,87.061% 14.682%,87.061% 14.682%,86.147% 12.968%,85.483% 11.096%,84.946% 9.146%,84.409% 7.198%,83.749% 5.331%,82.839% 3.624%,81.556% 2.158%,79.775% 1.012%,77.369% 0.266%,74.215% 0%,6.726% 0%,6.726% 0%,5.636% 0.104%,4.601% 0.406%,3.636% 0.889%,2.755% 1.536%,1.971% 2.332%,1.299% 3.259%,0.751% 4.302%,0.343% 5.444%,0.088% 6.668%,0% 7.958%,0% 92.042%,0% 92.042%,0.088% 93.332%,0.343% 94.556%,0.751% 95.698%,1.299% 96.741%,1.971% 97.668%,2.755% 98.464%,3.636% 99.111%,4.601% 99.594%,5.636% 99.896%,6.726% 100% )",
                      }}
                    >
                      <div className="p-5 pb-4">
                        <div className="d-flex">
                          <FaStar className="mx-1" color="gold" size={20} />
                          <FaStar className="mx-1" color="gold" size={20} />
                          <FaStar className="mx-1" color="gold" size={20} />
                          <FaStar className="mx-1" color="gold" size={20} />
                          <FaStar className="mx-1" color="gold" size={20} />
                        </div>
                        <p
                          className="mt-4"
                          style={{
                            fontFamily: "var(--para-font)",
                            color: "gray",
                          }}
                        >
                          {data.review}
                        </p>
                        <h5
                          className="mt-5"
                          style={{ fontFamily: "var(--head-font)" }}
                        >
                          {data.name}
                        </h5>
                        <p
                          className="mt-2"
                          style={{
                            fontFamily: "var(--para-font)",
                            color: "gray",
                          }}
                        >
                          Satisfied Client
                        </p>
                      </div>
                    </div>
                    <NavLink to="/"></NavLink>
                  </div>

                  <NavLink
                    to=""
                    class="pbmit-link"
                    href="service-details.html"
                  ></NavLink>
                </div>
              </article>
            </SwiperSlide>
            ))}
            
          </Swiper> */}
        </div>
      </div>
    </>
  );
};

export default Hometestimonial;
