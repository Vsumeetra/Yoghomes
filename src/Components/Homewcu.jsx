import React, { useEffect, useRef, useState } from "react";
import pattern from "../Images/pattern.png";
import wcu from "../Images/wcu.png";
import { TfiArrowTopRight } from "react-icons/tfi"; // Importing the arrow icon from react-icons
import "./Homewcu.css";
import { NavLink } from "react-router-dom";
const Homewcu = () => {
  const [width, setWidth] = useState("90%"); // Initially set to 90%
  const containerRefone = useRef(null); // Reference to the container
  const handleScroll = () => {
    if (containerRefone.current) {
      const rect = containerRefone.current.getBoundingClientRect();

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

  const CircleProgress = ({ percentage, circleWidth }) => {
    const radius = (circleWidth - 10) / 2; // Adjust radius based on the circleWidth
    const dasharray = radius * Math.PI * 2; // Circumference of the circle
    const dashoffset = dasharray - (dasharray * percentage) / 100;

    return (
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        {/* Background circle */}
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="2px"
          r={radius - 15}
          className="circle-background"
          style={{
            fill: "var(--secondary-color)",
            stroke: "var(--secondary-color)", // Light gray background
          }}
        />
        {/* Progress circle */}
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="3px"
          r={radius}
          className="circle-progress"
          style={{
            fill: "none",
            stroke: "white", // Green progress color
            strokeDasharray: dasharray,
            strokeDashoffset: dashoffset,
            transition: "stroke-dashoffset 0.3s ease", // Smooth transition
          }}
        />
        <text
          x={circleWidth / 2}
          y={circleWidth / 2 + 5} // Slight adjustment to center vertically
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="22px"
          fontWeight="500" // Adjust the font size as needed
          fill="black" // Black color for the text
        >
          {percentage}%
        </text>
      </svg>
    );
  };
  const CountUpOnScroll = ({ targetCount }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(ref.current); // Stop observing after it becomes visible
          }
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    useEffect(() => {
      if (isVisible) {
        let start = 0;
        const end = targetCount;
        const duration = 2000; // 2 seconds
        const incrementTime = Math.floor(duration / end); // time per increment

        const timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start === end) {
            clearInterval(timer);
          }
        }, incrementTime);
      }
    }, [isVisible, targetCount]);

    return (
      <div ref={ref}>
        {/* Pass circle width here */}
        <CircleProgress percentage={count} circleWidth={140} />
      </div>
    );
  };

  return (
    <>
      <div
        ref={containerRefone}
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
        <div className="row py-5 d-flex align-items-center">
          <div className="col-lg-4 p-3">
            <p
              className="px-4 mt-5 p-1 homeoneserviceh6"
              style={{
                backgroundColor: "white",
                fontWeight: "600",
                fontSize: "11",
                border: "none",
              }}
            >
              WHY PEOPLE CHOOSE US
            </p>
            <hr
              className="mt-4"
              style={{ opacity: "1", borderTop: "1px solid white" }}
            />
            <h4
              className="display-5"
              style={{
                fontFamily: "var(--head-font)",
                color: "white",
                fontWeight: "500",
              }}
            >
              My course helps to become

            </h4>
            <p
              className="mt-4"
              style={{
                color: "white",
                fontWeight: "200",
                fontFamily: "var(--para-font)",
              }}
            >
              Active at Arogya Yoghome is designed to guide you on a transformative yoga journey. Learn various techniques, including asanas, pranayama, and meditation, to enhance physical health, mental clarity, and spiritual growth. With expert instructors and personalized support, you’ll develop the skills to become a skilled, confident yogi.
            </p>
            <NavLink to='/yoga-centre-andheri'>
            {/* <button
              href="#"
              className="button mt-5"
              style={{ "--clr": "var(--secondary-color)" }}
            >
              KNOW MORE
              <span className="button__icon-wrapper"> */}
                {/* First arrow icon */}
                {/* <TfiArrowTopRight size={16} className="button__icon-svg" /> */}

                {/* Second arrow icon (copy) */}
                {/* <TfiArrowTopRight
                  size={16}
                  color="white"
                  className="button__icon-svg button__icon-svg--copy"
                />
              </span>
            </button> */}
            </NavLink>
          </div>
          <div className="col-lg-4 p-5">
            <img src={wcu} style={{ width: "100%" }} alt="img" />
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-12 col-md-4">
                <CountUpOnScroll targetCount={85} />
              </div>
              <div className="col-12 col-md-8 ps-4 d-flex align-items-center">
                <div>
                  <h4
                    style={{ fontFamily: "var(--head-font)", color: "white" }}
                  >
                    Happy Customers
                  </h4>
                  <hr style={{ border: "1px solid white" }} />
                  <p
                    className=""
                    style={{
                      fontFamily: "var(--para-font)",
                      color: "white",
                      fontWeight: "200",
                    }}
                  >
"Happy customers at Arogya Yoghome experience transformative yoga and wellness."
                  </p>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12 col-md-4">
                <CountUpOnScroll targetCount={90} />
              </div>
              <div className="col-12 col-md-8 ps-4 d-flex align-items-center">
                <div>
                  <h4
                    style={{ fontFamily: "var(--head-font)", color: "white" }}
                  >
                    Experienced Trainer
                  </h4>
                  <hr style={{ border: "1px solid white" }} />
                  <p
                    className=""
                    style={{
                      fontFamily: "var(--para-font)",
                      color: "white",
                      fontWeight: "200",
                    }}
                  >
"Experienced trainers guide you with personalized support to improve your yoga."
                  </p>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12 col-md-4">
                <CountUpOnScroll targetCount={95} />
              </div>
              <div className="col-12 col-md-8 ps-4 d-flex align-items-center">
                <div>
                  <h4
                    style={{ fontFamily: "var(--head-font)", color: "white" }}
                  >
                    Active Clients
                  </h4>
                  <hr style={{ border: "1px solid white" }} />
                  <p
                    className=""
                    style={{
                      fontFamily: "var(--para-font)",
                      color: "white",
                      fontWeight: "200",
                    }}
                  >
"Active clients enjoy personalized yoga sessions that promote health and wellness."

</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homewcu;
