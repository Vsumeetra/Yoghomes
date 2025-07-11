import React, { useEffect, useRef, useState } from "react";
import pattern from "../Images/pattern.png";
import { TfiArrowTopRight } from "react-icons/tfi"; // Importing the arrow icon from react-icons
import "./Aboutthree.css";
import bannerone from "../Images/Service Images/Traditional Yoga.jpg";
import { NavLink } from "react-router-dom";
import Servicedata from "../Data/Servicedata";

const Aboutthree = () => {
  const [width, setWidth] = useState("90%"); // Initially set to 90%
  const containerRef = useRef(null); // Reference to the container
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
        className="container-fluid p-4 mt-5 py-5"
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
            OUR SERVICES
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
              Our Main Services
            </h4>
            <div>
              <NavLink to={Servicedata[0].slug}>
              <button
                href="#"
                className="button mt-3"
                style={{
                  "--clr": "transparent",
                  border: "1px solid white",
                  color: "white",
                }}
              >
                KNOW MORE
                <span className="button__icon-wrapper">
                  {/* First arrow icon */}
                  <TfiArrowTopRight
                    size={16}
                    color="white"
                    className="button__icon-svg"
                  />

                  {/* Second arrow icon (copy) */}
                  <TfiArrowTopRight
                    size={16}
                    color="white"
                    className="button__icon-svg button__icon-svg--copy"
                  />
                </span>
              </button>
              </NavLink>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-md-6 p-5">
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
                            height: "500px",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <NavLink
                    to=""
                    class="pbmit-link"
                    href="service-details.html"
                  ></NavLink>
                </div>
              </article>
            </div>
            <div className="col-12 col-md-6 mt-5 ">
            {Servicedata.filter(data=>data.type==='Yoga Type').slice(0,4).map((data,i)=>(
              <>
              <div className="d-flex w-100 align-items-center justify-content-between abouthreediv">
                <div>
                  <h6
                    className="mt-3 ps-3 text-white aboutthreeh"
                    style={{ fontFamily: "var(--head-font)" }}
                  >
                    {data.type}
                  </h6>
                  <h2
                    className="mt-3 text-white display-6 aboutthreeh2"
                    style={{ fontFamily: "var(--head-font)" }}
                  >
                    {data.name}
                  </h2>
                </div>
                <NavLink to={data.slug}>
                <button
                  href="#"
                  className="button mt-3 p-3"
                  style={{
                    "--clr": "white",
                    border: "1px solid white",
                    color: "white",
                  }}
                >
                  <span className="button__icon-wrapper">
                    {/* First arrow icon */}
                    <TfiArrowTopRight size={16} className="button__icon-svg" />

                    {/* Second arrow icon (copy) */}
                    <TfiArrowTopRight
                      size={16}
                      color="white"
                      className="button__icon-svg button__icon-svg--copy"
                    />
                  </span>
                </button>
                </NavLink>
              </div>
              <hr style={{ borderTop: "1px solid white" }} />
              </>
            ))}
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutthree;
