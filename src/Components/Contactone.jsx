import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const Contactone = () => {
  const CircleProgress = ({ percentage, circleWidth, icon: Icon }) => {
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
            fill: "white",
            stroke: "white", // Light gray background
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
            stroke: "var(--primary-color)", // Green progress color
            strokeDasharray: dasharray,
            strokeDashoffset: dashoffset,
            transition: "stroke-dashoffset 0.3s ease", // Smooth transition
          }}
        />
        <g
          transform={`translate(${(circleWidth - 40) / 2}, ${
            (circleWidth - 40) / 2
          })`}
        >
          <Icon size={40} color="black" />
        </g>
      </svg>
    );
  };
  return (
    <>
      <div className="container-fluid p-4 py-5 mt-5">
        <div className="row">
          <div className="col-12 col-md-4 mt-4">
            <div className="row">
              <div className="col-4 px-2">
                <CircleProgress
                  icon={FiPhoneCall}
                  percentage={100}
                  circleWidth={140}
                />
              </div>
              <div className="col-8 px-4 mt-2">
                <h4
                  style={{
                    fontFamily: "var(--head-font)",
                  }}
                >
                  24 / 7 Contact Us
                </h4>
                <hr />
                <a href="tel:+91-99200 27780">
                <h6
                  style={{
                    fontFamily: "var(--para-font)",
                    color: "gray",
                  }}
                >
                  +91-99200 27780
                </h6>
                </a>
                {/* <h6
                  style={{
                    fontFamily: "var(--para-font)",
                    color: "gray",
                  }}
                >
                  +91-99200 27780
                </h6> */}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mt-4">
            <div className="row">
              <div className="col-4 px-2">
                <CircleProgress
                  icon={IoMailOutline}
                  percentage={100}
                  circleWidth={140}
                />
              </div>
              <div className="col-8 px-4 mt-2">
                <h4
                  style={{
                    fontFamily: "var(--head-font)",
                  }}
                >
                  24 / 7 Mail Us
                </h4>
                <hr />
                <a href="mailto:arogyayoghome@gmail.com">
                <h6
                  style={{
                    fontFamily: "var(--para-font)",
                    color: "gray",
                  }}
                >
                  arogyayoghome@gmail.com
                </h6>
                </a>
                {/* <h6 style={{
                            fontFamily:"var(--para-font)",color:"gray"
                        }}>00000 00000</h6> */}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mt-4">
            <div className="row">
              <div className="col-4 px-2">
                <CircleProgress
                  icon={IoLocationOutline}
                  percentage={100}
                  circleWidth={140}
                />
              </div>
              <div className="col-8 px-4 mt-2">
                <h4
                  style={{
                    fontFamily: "var(--head-font)",
                  }}
                >
                  24 / 7 Contact Us
                </h4>
                <hr />
                <h6
                  style={{
                    fontFamily: "var(--para-font)",
                    color: "gray",
                  }}
                >
                  pilot no. 851 first floor Arogya yoghome Sawan Hall no.3 Oshiwara link Rd. Near infinity mall andheri west Mumbai
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactone;
