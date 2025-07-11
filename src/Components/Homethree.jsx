import React, { useEffect, useRef, useState } from "react";
import pattern from "../Images/pattern.png";
import { RxArrowTopRight } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
// import imgone from "../Images/yoga.png";
// import bannerone from "../Images/bannerone.jpg";
// import bannertwo from "../Images/bannertwo.jpg";
// import bannerthree from "../Images/bannerthree.jpg";
import { IoMdTime } from "react-icons/io";
import "swiper/css"; // Main styles
import "swiper/css/navigation"; // For navigation styles (optional)
import "swiper/css/pagination"; // For pagination styles (optional)
import { NavLink } from "react-router-dom";
import Servicedata from "../Data/Servicedata";
const Homethree = () => {
  const [width, setWidth] = useState("90%"); // Initially set to 90%
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

  const handleScroll = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();

      // Check if the container is in the viewport
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setWidth("100%"); // Set width to 100% when the container is in the viewport
      } else {
        setWidth("90%"); // Set width to 90% when the container is out of the viewport
      }
    }
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty array ensures the effect runs only once when the component mounts

  return (
    <>
      <div
        ref={containerRef}
        className="container-fluid p-4 py-5"
        style={{
          width: width,
          margin: "0 auto",
          transition: "width 1s ease", // Smooth transition when changing width
          backgroundColor: "var(--primary-color)",
          backgroundImage: `url(${pattern})`,
          borderRadius: "16px",
        }}
      >
        <div>
          <p
            className="px-4 mt-5 p-1 homeoneserviceh6"
            style={{ backgroundColor: "white", border: "none" }}
          >
            OUR CLASSES
          </p>
          <hr
            className="mt-4"
            style={{ opacity: "1", borderTop: "1px solid white" }}
          />
          <div className="d-flex justify-content-between align-items-center">
            <h4
              className="display-5"
              style={{
                fontFamily: "var(--head-font)",
                color: "white",
                fontWeight: "500",
                letterSpacing: "1px",
              }}
            >
              Classes & Workshops
            </h4>
            <div>
              <button
                onClick={goToPrevSlide}
                className="m-2 p-2 px-2 homeoneleftbutton"
              >
                <GrFormPrevious size={36} color="white" />
              </button>
              <button
                onClick={goToNextSlide}
                className="m-2 p-2 px-2 homeoneleftbutton"
              >
                <MdNavigateNext size={36} color="white" />
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
            {Servicedata.filter(data=>data.type==='Classes').map((data)=>(
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
                    <div
                      class="pbmit-box-content-wrap p-0"
                      style={{
                        clipPath:
                          "polygon(6.772% 0%,93.228% 0%,93.228% 0%,94.326% .099%,95.367% .386%,96.339% .846%,97.226% 1.463%,98.016% 2.22%,98.693% 3.103%,99.244% 4.096%,99.655% 5.182%,99.911% 6.348%,100% 7.576%,100% 72.475%,100% 72.475%,99.73% 75.82%,98.982% 78.307%,97.848% 80.093%,96.423% 81.332%,94.8% 82.182%,93.072% 82.796%,91.332% 83.332%,89.673% 83.944%,88.189% 84.789%,86.973% 86.023%,86.973% 86.023%,86.053% 87.654%,85.385% 89.436%,84.844% 91.292%,84.304% 93.147%,83.639% 94.925%,82.723% 96.55%,81.431% 97.945%,79.638% 99.036%,77.216% 99.746%,74.041% 100%,6.772% 100%,6.772% 100%,5.674% 99.901%,4.633% 99.614%,3.661% 99.154%,2.774% 98.537%,1.984% 97.78%,1.307% 96.897%,.756% 95.904%,.345% 94.818%,.089% 93.652%,0% 92.424%,0% 7.576%,0% 7.576%,.089% 6.348%,.345% 5.182%,.756% 4.096%,1.307% 3.103%,1.984% 2.22%,2.774% 1.463%,3.661% .846%,4.633% .386%,5.674% .099%,6.772% 0%)",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          backgroundColor: "black",
                        }}
                      >
                        <img
                          alt="img"
                          src={data.image}
                          style={{
                            height: "375px",
                            width: "100%",
                            objectFit: "cover",
                            opacity: ".5",
                          }}
                        />
                        <div
                          style={{ position: "absolute", top: "0", left: "0" }}
                          className="p-4"
                        >
                          <p
                            className="px-4  p-1 homeoneserviceh6"
                            style={{
                              color: "white",
                              border: "1px solid white",
                              fontSize: "12px",
                              fontWeight: "400",
                            }}
                          >
                            {data.type}
                          </p>
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
                  <h3
                    className="mt-4 mb-0 p-1"
                    style={{ color: "white", fontFamily: "var(--head-font)" }}
                  >
                    {data.name}
                  </h3>
                  {/* <p
                    className="m-0 mt-1"
                    style={{ color: "white", fontFamily: "var(--para-font)" }}
                  >
                    <IoMdTime color="white" size={21} className="mx-2" /> 50 min
                    / Session
                  </p> */}
                  {/* <h5
                    className="mt-3 px-1"
                    style={{
                      color: "var(--secondary-color)",
                      fontFamily: "var(--head-font)",
                    }}
                  >
                    ₹ 5000 / Month
                  </h5> */}
                  <NavLink
                    to=""
                    class="pbmit-link"
                    href="service-details.html"
                  ></NavLink>
                </div>
              </article>
                                        </NavLink>
            </SwiperSlide>
            ))}
            {/* <SwiperSlide>
              <article
                class="pbmit-service-style-1 swiper-slide swiper-slide-active"
                role="group"
                aria-label="1 / 6"
              >
                <div class="pbminfotech-post-item">
                  <div class="pbminfotech-box-content">
                    <div
                      class="pbmit-box-content-wrap p-0"
                      style={{
                        clipPath:
                          "polygon(6.772% 0%,93.228% 0%,93.228% 0%,94.326% .099%,95.367% .386%,96.339% .846%,97.226% 1.463%,98.016% 2.22%,98.693% 3.103%,99.244% 4.096%,99.655% 5.182%,99.911% 6.348%,100% 7.576%,100% 72.475%,100% 72.475%,99.73% 75.82%,98.982% 78.307%,97.848% 80.093%,96.423% 81.332%,94.8% 82.182%,93.072% 82.796%,91.332% 83.332%,89.673% 83.944%,88.189% 84.789%,86.973% 86.023%,86.973% 86.023%,86.053% 87.654%,85.385% 89.436%,84.844% 91.292%,84.304% 93.147%,83.639% 94.925%,82.723% 96.55%,81.431% 97.945%,79.638% 99.036%,77.216% 99.746%,74.041% 100%,6.772% 100%,6.772% 100%,5.674% 99.901%,4.633% 99.614%,3.661% 99.154%,2.774% 98.537%,1.984% 97.78%,1.307% 96.897%,.756% 95.904%,.345% 94.818%,.089% 93.652%,0% 92.424%,0% 7.576%,0% 7.576%,.089% 6.348%,.345% 5.182%,.756% 4.096%,1.307% 3.103%,1.984% 2.22%,2.774% 1.463%,3.661% .846%,4.633% .386%,5.674% .099%,6.772% 0%)",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          backgroundColor: "black",
                        }}
                      >
                        <img
                          alt="img"
                          src={bannerthree}
                          style={{
                            height: "375px",
                            width: "100%",
                            objectFit: "cover",
                            opacity: ".5",
                          }}
                        />
                        <div
                          style={{ position: "absolute", top: "0", left: "0" }}
                          className="p-4"
                        >
                          <p
                            className="px-4  p-1 homeoneserviceh6"
                            style={{
                              color: "white",
                              border: "1px solid white",
                              fontSize: "12px",
                              fontWeight: "400",
                            }}
                          >
                            SKIN QUALITY
                          </p>
                        </div>
                      </div>
                    </div>
                    <NavLink to="/">
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
                  <h3
                    className="mt-4 mb-0 p-1"
                    style={{ color: "white", fontFamily: "var(--head-font)" }}
                  >
                    Yoga Nidra teacher training
                  </h3>
                  <p
                    className="m-0 mt-1"
                    style={{ color: "white", fontFamily: "var(--para-font)" }}
                  >
                    <IoMdTime color="white" size={21} className="mx-2" /> 50 min
                    / Session
                  </p>
                  <h5
                    className="mt-3 px-1"
                    style={{
                      color: "var(--secondary-color)",
                      fontFamily: "var(--head-font)",
                    }}
                  >
                    ₹ 5000 / Month
                  </h5>
                  <NavLink
                    to=""
                    class="pbmit-link"
                    href="service-details.html"
                  ></NavLink>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article
                class="pbmit-service-style-1 swiper-slide swiper-slide-active"
                role="group"
                aria-label="1 / 6"
              >
                <div class="pbminfotech-post-item">
                  <div class="pbminfotech-box-content">
                    <div
                      class="pbmit-box-content-wrap p-0"
                      style={{
                        clipPath:
                          "polygon(6.772% 0%,93.228% 0%,93.228% 0%,94.326% .099%,95.367% .386%,96.339% .846%,97.226% 1.463%,98.016% 2.22%,98.693% 3.103%,99.244% 4.096%,99.655% 5.182%,99.911% 6.348%,100% 7.576%,100% 72.475%,100% 72.475%,99.73% 75.82%,98.982% 78.307%,97.848% 80.093%,96.423% 81.332%,94.8% 82.182%,93.072% 82.796%,91.332% 83.332%,89.673% 83.944%,88.189% 84.789%,86.973% 86.023%,86.973% 86.023%,86.053% 87.654%,85.385% 89.436%,84.844% 91.292%,84.304% 93.147%,83.639% 94.925%,82.723% 96.55%,81.431% 97.945%,79.638% 99.036%,77.216% 99.746%,74.041% 100%,6.772% 100%,6.772% 100%,5.674% 99.901%,4.633% 99.614%,3.661% 99.154%,2.774% 98.537%,1.984% 97.78%,1.307% 96.897%,.756% 95.904%,.345% 94.818%,.089% 93.652%,0% 92.424%,0% 7.576%,0% 7.576%,.089% 6.348%,.345% 5.182%,.756% 4.096%,1.307% 3.103%,1.984% 2.22%,2.774% 1.463%,3.661% .846%,4.633% .386%,5.674% .099%,6.772% 0%)",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          backgroundColor: "black",
                        }}
                      >
                        <img
                          alt="img"
                          src={bannertwo}
                          style={{
                            height: "375px",
                            width: "100%",
                            objectFit: "cover",
                            opacity: ".5",
                          }}
                        />
                        <div
                          style={{ position: "absolute", top: "0", left: "0" }}
                          className="p-4"
                        >
                          <p
                            className="px-4  p-1 homeoneserviceh6"
                            style={{
                              color: "white",
                              border: "1px solid white",
                              fontSize: "12px",
                              fontWeight: "400",
                            }}
                          >
                            SKIN QUALITY
                          </p>
                        </div>
                      </div>
                    </div>
                    <NavLink to="/">
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
                  <h3
                    className="mt-4 mb-0 p-1"
                    style={{ color: "white", fontFamily: "var(--head-font)" }}
                  >
                    Yoga Nidra teacher training
                  </h3>
                  <p
                    className="m-0 mt-1"
                    style={{ color: "white", fontFamily: "var(--para-font)" }}
                  >
                    <IoMdTime color="white" size={21} className="mx-2" /> 50 min
                    / Session
                  </p>
                  <h5
                    className="mt-3 px-1"
                    style={{
                      color: "var(--secondary-color)",
                      fontFamily: "var(--head-font)",
                    }}
                  >
                    ₹ 5000 / Month
                  </h5>
                  <NavLink
                    to=""
                    class="pbmit-link"
                    href="service-details.html"
                  ></NavLink>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article
                class="pbmit-service-style-1 swiper-slide swiper-slide-active"
                role="group"
                aria-label="1 / 6"
              >
                <div class="pbminfotech-post-item">
                  <div class="pbminfotech-box-content">
                    <div
                      class="pbmit-box-content-wrap p-0"
                      style={{
                        clipPath:
                          "polygon(6.772% 0%,93.228% 0%,93.228% 0%,94.326% .099%,95.367% .386%,96.339% .846%,97.226% 1.463%,98.016% 2.22%,98.693% 3.103%,99.244% 4.096%,99.655% 5.182%,99.911% 6.348%,100% 7.576%,100% 72.475%,100% 72.475%,99.73% 75.82%,98.982% 78.307%,97.848% 80.093%,96.423% 81.332%,94.8% 82.182%,93.072% 82.796%,91.332% 83.332%,89.673% 83.944%,88.189% 84.789%,86.973% 86.023%,86.973% 86.023%,86.053% 87.654%,85.385% 89.436%,84.844% 91.292%,84.304% 93.147%,83.639% 94.925%,82.723% 96.55%,81.431% 97.945%,79.638% 99.036%,77.216% 99.746%,74.041% 100%,6.772% 100%,6.772% 100%,5.674% 99.901%,4.633% 99.614%,3.661% 99.154%,2.774% 98.537%,1.984% 97.78%,1.307% 96.897%,.756% 95.904%,.345% 94.818%,.089% 93.652%,0% 92.424%,0% 7.576%,0% 7.576%,.089% 6.348%,.345% 5.182%,.756% 4.096%,1.307% 3.103%,1.984% 2.22%,2.774% 1.463%,3.661% .846%,4.633% .386%,5.674% .099%,6.772% 0%)",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          backgroundColor: "black",
                        }}
                      >
                        <img
                          alt="img"
                          src={bannerthree}
                          style={{
                            height: "375px",
                            width: "100%",
                            objectFit: "cover",
                            opacity: ".5",
                          }}
                        />
                        <div
                          style={{ position: "absolute", top: "0", left: "0" }}
                          className="p-4"
                        >
                          <p
                            className="px-4  p-1 homeoneserviceh6"
                            style={{
                              color: "white",
                              border: "1px solid white",
                              fontSize: "12px",
                              fontWeight: "400",
                            }}
                          >
                            SKIN QUALITY
                          </p>
                        </div>
                      </div>
                    </div>
                    <NavLink to="/">
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
                  <h3
                    className="mt-4 mb-0 p-1"
                    style={{ color: "white", fontFamily: "var(--head-font)" }}
                  >
                    Yoga Nidra teacher training
                  </h3>
                  <p
                    className="m-0 mt-1"
                    style={{ color: "white", fontFamily: "var(--para-font)" }}
                  >
                    <IoMdTime color="white" size={21} className="mx-2" /> 50 min
                    / Session
                  </p>
                  <h5
                    className="mt-3 px-1"
                    style={{
                      color: "var(--secondary-color)",
                      fontFamily: "var(--head-font)",
                    }}
                  >
                    ₹ 5000 / Month
                  </h5>
                  <NavLink
                    to=""
                    class="pbmit-link"
                    href="service-details.html"
                  ></NavLink>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article
                class="pbmit-service-style-1 swiper-slide swiper-slide-active"
                role="group"
                aria-label="1 / 6"
              >
                <div class="pbminfotech-post-item">
                  <div class="pbminfotech-box-content">
                    <div
                      class="pbmit-box-content-wrap p-0"
                      style={{
                        clipPath:
                          "polygon(6.772% 0%,93.228% 0%,93.228% 0%,94.326% .099%,95.367% .386%,96.339% .846%,97.226% 1.463%,98.016% 2.22%,98.693% 3.103%,99.244% 4.096%,99.655% 5.182%,99.911% 6.348%,100% 7.576%,100% 72.475%,100% 72.475%,99.73% 75.82%,98.982% 78.307%,97.848% 80.093%,96.423% 81.332%,94.8% 82.182%,93.072% 82.796%,91.332% 83.332%,89.673% 83.944%,88.189% 84.789%,86.973% 86.023%,86.973% 86.023%,86.053% 87.654%,85.385% 89.436%,84.844% 91.292%,84.304% 93.147%,83.639% 94.925%,82.723% 96.55%,81.431% 97.945%,79.638% 99.036%,77.216% 99.746%,74.041% 100%,6.772% 100%,6.772% 100%,5.674% 99.901%,4.633% 99.614%,3.661% 99.154%,2.774% 98.537%,1.984% 97.78%,1.307% 96.897%,.756% 95.904%,.345% 94.818%,.089% 93.652%,0% 92.424%,0% 7.576%,0% 7.576%,.089% 6.348%,.345% 5.182%,.756% 4.096%,1.307% 3.103%,1.984% 2.22%,2.774% 1.463%,3.661% .846%,4.633% .386%,5.674% .099%,6.772% 0%)",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          backgroundColor: "black",
                        }}
                      >
                        <img
                          alt="img"
                          src={bannerone}
                          style={{
                            height: "375px",
                            width: "100%",
                            objectFit: "cover",
                            opacity: ".5",
                          }}
                        />
                        <div
                          style={{ position: "absolute", top: "0", left: "0" }}
                          className="p-4"
                        >
                          <p
                            className="px-4  p-1 homeoneserviceh6"
                            style={{
                              color: "white",
                              border: "1px solid white",
                              fontSize: "12px",
                              fontWeight: "400",
                            }}
                          >
                            SKIN QUALITY
                          </p>
                        </div>
                      </div>
                    </div>
                    <NavLink to="/">
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
                  <h3
                    className="mt-4 mb-0 p-1"
                    style={{ color: "white", fontFamily: "var(--head-font)" }}
                  >
                    Yoga Nidra teacher training
                  </h3>
                  <p
                    className="m-0 mt-1"
                    style={{ color: "white", fontFamily: "var(--para-font)" }}
                  >
                    <IoMdTime color="white" size={21} className="mx-2" /> 50 min
                    / Session
                  </p>
                  <h5
                    className="mt-3 px-1"
                    style={{
                      color: "var(--secondary-color)",
                      fontFamily: "var(--head-font)",
                    }}
                  >
                    ₹ 5000 / Month
                  </h5>
                  <NavLink
                    to=""
                    class="pbmit-link"
                    href="service-details.html"
                  ></NavLink>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article
                class="pbmit-service-style-1 swiper-slide swiper-slide-active"
                role="group"
                aria-label="1 / 6"
              >
                <div class="pbminfotech-post-item">
                  <div class="pbminfotech-box-content">
                    <div
                      class="pbmit-box-content-wrap p-0"
                      style={{
                        clipPath:
                          "polygon(6.772% 0%,93.228% 0%,93.228% 0%,94.326% .099%,95.367% .386%,96.339% .846%,97.226% 1.463%,98.016% 2.22%,98.693% 3.103%,99.244% 4.096%,99.655% 5.182%,99.911% 6.348%,100% 7.576%,100% 72.475%,100% 72.475%,99.73% 75.82%,98.982% 78.307%,97.848% 80.093%,96.423% 81.332%,94.8% 82.182%,93.072% 82.796%,91.332% 83.332%,89.673% 83.944%,88.189% 84.789%,86.973% 86.023%,86.973% 86.023%,86.053% 87.654%,85.385% 89.436%,84.844% 91.292%,84.304% 93.147%,83.639% 94.925%,82.723% 96.55%,81.431% 97.945%,79.638% 99.036%,77.216% 99.746%,74.041% 100%,6.772% 100%,6.772% 100%,5.674% 99.901%,4.633% 99.614%,3.661% 99.154%,2.774% 98.537%,1.984% 97.78%,1.307% 96.897%,.756% 95.904%,.345% 94.818%,.089% 93.652%,0% 92.424%,0% 7.576%,0% 7.576%,.089% 6.348%,.345% 5.182%,.756% 4.096%,1.307% 3.103%,1.984% 2.22%,2.774% 1.463%,3.661% .846%,4.633% .386%,5.674% .099%,6.772% 0%)",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          backgroundColor: "black",
                        }}
                      >
                        <img
                          alt="img"
                          src={bannertwo}
                          style={{
                            height: "375px",
                            width: "100%",
                            objectFit: "cover",
                            opacity: ".5",
                          }}
                        />
                        <div
                          style={{ position: "absolute", top: "0", left: "0" }}
                          className="p-4"
                        >
                          <p
                            className="px-4  p-1 homeoneserviceh6"
                            style={{
                              color: "white",
                              border: "1px solid white",
                              fontSize: "12px",
                              fontWeight: "400",
                            }}
                          >
                            SKIN QUALITY
                          </p>
                        </div>
                      </div>
                    </div>
                    <NavLink to="/">
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
                  <h3
                    className="mt-4 mb-0 p-1"
                    style={{ color: "white", fontFamily: "var(--head-font)" }}
                  >
                    Yoga Nidra teacher training
                  </h3>
                  <p
                    className="m-0 mt-1"
                    style={{ color: "white", fontFamily: "var(--para-font)" }}
                  >
                    <IoMdTime color="white" size={21} className="mx-2" /> 50 min
                    / Session
                  </p>
                  <h5
                    className="mt-3 px-1"
                    style={{
                      color: "var(--secondary-color)",
                      fontFamily: "var(--head-font)",
                    }}
                  >
                    ₹ 5000 / Month
                  </h5>
                  <NavLink
                    to=""
                    class="pbmit-link"
                    href="service-details.html"
                  ></NavLink>
                </div>
              </article>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Homethree;
