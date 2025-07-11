import React, { useState } from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import imgone from "../Images/yoga.png";
import "./Homeone.css";

// Import Swiper styles correctly
import "swiper/css"; // Main styles
import "swiper/css/navigation"; // For navigation styles (optional)
import "swiper/css/pagination"; // For pagination styles (optional)
import { NavLink } from "react-router-dom";
import Servicedata from "../Data/Servicedata";
const Homeone = () => {
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
      <div className="container-fluid p-4">
        <p className="px-4 p-1 homeoneserviceh6">SERVICE</p>
        <hr style={{ opacity: "1" }} />
        <div className="d-flex justify-content-between align-items-center">
          <h4
            className="display-5"
            style={{
              fontFamily: "var(--head-font)",
              fontWeight: "500",
              letterSpacing: "1px",
            }}
          >
            Our main services
          </h4>
          <div>
            <button
              onClick={goToPrevSlide}
              className="m-2 p-2 px-2 homeoneleftbutton"
            >
              <GrFormPrevious size={36} color="var(--primary-color)" />
            </button>
            <button
              onClick={goToNextSlide}
              className=" m-2 p-2 px-2 homeoneleftbutton"
            >
              <MdNavigateNext size={36} color="var(--primary-color)" />
            </button>
          </div>
        </div>
        <Swiper
          ref={swiperRef}
          onSlideChange={handleSlideChange}
          modules={[Navigation, Autoplay, A11y]}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            // Large devices (desktops)
            1200: {
              slidesPerView: 4, // Show 4 slides at once
            },
            // Tablets
            768: {
              slidesPerView: 3, // Show 3 slides at once
            },
            // Mobile devices
            480: {
              slidesPerView: 2, // Show 2 slides at once
            },
            // Small devices (extra small)
            320: {
              slidesPerView: 1, // Show 1 slide at once
            },
          }}
          style={{ minHeightheight: "400px" }}
          className="mt-4"
        >
          {Servicedata.filter(data=>data.type==='Classes').slice(0,3).map((data)=>(
          <SwiperSlide>
            <NavLink
                            to={data.slug}
                            style={{
                              color: "var(--primary-color)",
                              textDecoration: "none",
                            }}
                          >

            <article
              class="pbmit-service-style-1 swiper-slide swiper-slide-active"
              role="group"
              aria-label="1 / 6"
            >
              <div class="pbminfotech-post-item">
                <div class="pbminfotech-box-content">
                  <div class="pbmit-box-content-wrap">
                    <div class="pbmit-box-content-inner">
                      <div class="pbmit-contant-box">
                        <div class="pbmit-serv-cat">
                          <NavLink
                            to={data.slug}
                            style={{
                              color: "var(--primary-color)",
                              textDecoration: "none",
                            }}
                          >
                            {data.type}
                          </NavLink>
                        </div>
                        <h3 class="pbmit-service-title">
                          <NavLink
                            to={data.slug}
                            style={{
                              color: "var(--primary-color)",
                              textDecoration: "none",
                            }}
                          >
                            {data.name}
                          </NavLink>
                        </h3>
                      </div>
                      <div class="pbmit-service-icon">
                        <i class="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose">
                          <img
                            className="my-4"
                            src={imgone}
                            style={{ height: "85px", opacity: ".5" }}
                            alt="img"
                          />
                        </i>
                      </div>
                    </div>
                  </div>
                  <NavLink to={data.slug}>
                    <a class="pbmit-service-btn" title="Ardha Chakrasana">
                      <span class="pbmit-button-icon-wrapper">
                        <span class="pbmit-button-icon">
                          <i class="pbmit-base-icon-black-arrow-1">
                            <RxArrowTopRight />
                          </i>
                        </span>
                      </span>
                    </a>
                  </NavLink>
                </div>
                <NavLink
                  to={data.slug}
                  class="pbmit-link"
                  href="service-details.html"
                ></NavLink>
              </div>
            </article>
                          </NavLink>
          </SwiperSlide>
          ))}
          {Servicedata.filter(data=>data.type==='Expert Consultation').slice(0,3).map((data)=>(
          <SwiperSlide>
            <NavLink
                            to={data.slug}
                            style={{
                              color: "var(--primary-color)",
                              textDecoration: "none",
                            }}
                          >

            <article
              class="pbmit-service-style-1 swiper-slide swiper-slide-active"
              role="group"
              aria-label="1 / 6"
            >
              <div class="pbminfotech-post-item">
                <div class="pbminfotech-box-content">
                  <div class="pbmit-box-content-wrap">
                    <div class="pbmit-box-content-inner">
                      <div class="pbmit-contant-box">
                        <div class="pbmit-serv-cat">
                          <NavLink
                            to={data.slug}
                            style={{
                              color: "var(--primary-color)",
                              textDecoration: "none",
                            }}
                          >
                            {data.type}
                          </NavLink>
                        </div>
                        <h3 class="pbmit-service-title">
                          <NavLink
                            to={data.slug}
                            style={{
                              color: "var(--primary-color)",
                              textDecoration: "none",
                            }}
                          >
                            {data.name}
                          </NavLink>
                        </h3>
                      </div>
                      <div class="pbmit-service-icon">
                        <i class="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose">
                          <img
                            className="my-4"
                            src={imgone}
                            style={{ height: "85px", opacity: ".5" }}
                            alt="img"
                          />
                        </i>
                      </div>
                    </div>
                  </div>
                  <NavLink to={data.slug}>
                    <a class="pbmit-service-btn" title="Ardha Chakrasana">
                      <span class="pbmit-button-icon-wrapper">
                        <span class="pbmit-button-icon">
                          <i class="pbmit-base-icon-black-arrow-1">
                            <RxArrowTopRight />
                          </i>
                        </span>
                      </span>
                    </a>
                  </NavLink>
                </div>
                <NavLink
                  to={data.slug}
                  class="pbmit-link"
                  href="service-details.html"
                ></NavLink>
              </div>
            </article>
                          </NavLink>
          </SwiperSlide>
          ))}
          {Servicedata.filter(data=>data.type==='Yoga Type').slice(0,3).map((data)=>(
          <SwiperSlide>
            <NavLink
                            to={data.slug}
                            style={{
                              color: "var(--primary-color)",
                              textDecoration: "none",
                            }}
                          >

            <article
              class="pbmit-service-style-1 swiper-slide swiper-slide-active"
              role="group"
              aria-label="1 / 6"
            >
              <div class="pbminfotech-post-item">
                <div class="pbminfotech-box-content">
                  <div class="pbmit-box-content-wrap">
                    <div class="pbmit-box-content-inner">
                      <div class="pbmit-contant-box">
                        <div class="pbmit-serv-cat">
                          <NavLink
                            to={data.slug}
                            style={{
                              color: "var(--primary-color)",
                              textDecoration: "none",
                            }}
                          >
                            {data.type}
                          </NavLink>
                        </div>
                        <h3 class="pbmit-service-title">
                          <NavLink
                            to={data.slug}
                            style={{
                              color: "var(--primary-color)",
                              textDecoration: "none",
                            }}
                          >
                            {data.name}
                          </NavLink>
                        </h3>
                      </div>
                      <div class="pbmit-service-icon">
                        <i class="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose">
                          <img
                            className="my-4"
                            src={imgone}
                            style={{ height: "85px", opacity: ".5" }}
                            alt="img"
                          />
                        </i>
                      </div>
                    </div>
                  </div>
                  <NavLink to={data.slug}>
                    <a class="pbmit-service-btn" title="Ardha Chakrasana">
                      <span class="pbmit-button-icon-wrapper">
                        <span class="pbmit-button-icon">
                          <i class="pbmit-base-icon-black-arrow-1">
                            <RxArrowTopRight />
                          </i>
                        </span>
                      </span>
                    </a>
                  </NavLink>
                </div>
                <NavLink
                  to={data.slug}
                  class="pbmit-link"
                  href="service-details.html"
                ></NavLink>
              </div>
            </article>
                          </NavLink>
          </SwiperSlide>
          ))}
          
        </Swiper>
      </div>
    </>
  );
};

export default Homeone;
