import React, { useEffect, useRef, useState } from "react";
import bannerthree from "../Images/Service Images/Office Yoga Classes.jpeg";
import imgone from "../Images/yoga.png";
import { TfiArrowTopRight } from "react-icons/tfi"; // Importing the arrow icon from react-icons

import "./Aboutone.css";
import { NavLink } from "react-router-dom";
const Aboutone = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expanded state
  const toggleDescription = () => {
    setIsExpanded((prevState) => !prevState);
  };
  const CountUpOnScroll = ({ targetCount }) => {
    const [count, setCount] = useState(0);
    const divref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(divref.current); // Stop observing after it becomes visible
          }
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
      );

      if (divref.current) {
        observer.observe(divref.current);
      }

      return () => {
        if (divref.current) {
          observer.unobserve(divref.current);
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
      <h2
        ref={divref}
        className="display-5 text-center aboutoneh"
        style={{ fontWeight: "400", fontFamily: "var(--head-font)" }}
      >
        {count}
        <sup>+</sup>
      </h2>
    );
  };
  return (
    <>
      <div className="container-fluid p-lg-4 mt-5">
        <div className="row">
          <div className="col-md-6 p-4">
            <div
              className="d-flex align-items-end justify-content-end"
              style={{
                height: "600px",
                borderRadius: "24px",
                width: "100%",
                backgroundSize: "cover",
                backgroundImage: `url(${bannerthree})`,

                position: "relative",
              }}
            >
              <svg
                width="30px"
                height="30px"
                style={{ position: "absolute", top: "360px", right: "0" }}
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 30V0C30 16 16 30 0 30H30Z"
                  style={{ fill: "#e9f0ec" }}
                ></path>
              </svg>
              <svg
                width="30px"
                height="30px"
                style={{ position: "absolute", top: "570px", left: "56%" }}
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 30V0C30 16 16 30 0 30H30Z"
                  style={{ fill: "#e9f0ec" }}
                ></path>
              </svg>

              <div
                className="ps-4 pt-4"
                style={{
                  position: "relative",
                  borderStartStartRadius: "32px",
                  backgroundColor: "#e9f0ec",

                  width: "40%",
                  height: "35%",
                }}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    height: "100%",
                    width: "100%",
                    borderRadius: "24px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <CountUpOnScroll targetCount={235} />

                    <hr />
                    <h6
                      style={{ fontFamily: "var(--head-font)", color: "gray" }}
                    >
                      Happy Club Member
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-3 px-5">
            <p className="px-4 p-1 homeoneserviceh6">About Us</p>
            <hr className="mt-4" style={{ opacity: "1" }} color="#181a17" />
            <h4
              className="display-5"
              style={{ fontFamily: "var(--head-font)", fontWeight: "500" }}
            >
              Start your healthy life today with us

            </h4>
            {isExpanded?(
                  <>
                 <p
              className="mt-4"
              style={{
                fontFamily: "var(--para-font)",
                color: "gray",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
              Start your healthy life today with us! Our expert trainers and personalized yoga sessions will guide you towards physical fitness, mental clarity, and overall wellness. Begin your journey to a healthier, more balanced life now!

            </p>
            <p
              className="mt-4"
              style={{
                fontFamily: "var(--para-font)",
                color: "gray",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
Personalized Yoga at Home & Online Classes—Arogya Yoghome

            </p>
            <p
              className="mt-4"
              style={{
                fontFamily: "var(--para-font)",
                color: "gray",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
We provide personalized yoga at home for those who prefer the convenience and privacy of practicing yoga in their own environment. Our expert trainers come directly to your location, whether it's your home or your society’s community space. Each session is tailored to your specific health goals and needs, whether you're looking to reduce stress, improve flexibility, or address specific health concerns. Our trainers are committed to guiding you step by step in your yoga practice, ensuring you get the most out of every session.

            </p>
            <p
              className="mt-4"
              style={{
                fontFamily: "var(--para-font)",
                color: "gray",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
If you find it hard to make time for yoga at a center,   classes near Andheri are designed to give you the flexibility you need. With our personalized sessions, you can practice at your own pace, on your own terms, with the added convenience of our flexible scheduling. Whether you’re in need of a full-body workout or seeking stress relief, we offer various yoga styles that cater to your needs, from calming Vinyasa Flow to more intensive Power Yoga classes.

            </p>
            <p
              className="mt-4"
              style={{
                fontFamily: "var(--para-font)",
                color: "gray",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
For those who prefer a more structured approach, we offer yoga classes near Andheri that are designed to support all levels of practitioners—from beginners to advanced. Each class is structured to give you the attention and guidance necessary to progress safely and effectively. Whether you’re working to build strength, increase flexibility, or improve your mental focus, our instructors provide personalized feedback, making every session a step toward achieving your health and wellness goals.

            </p>
            <p
              className="mt-4"
              style={{
                fontFamily: "var(--para-font)",
                color: "gray",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
Additionally, we offer online yoga sessions that can be accessed from anywhere. With yoga classes near Andheri, you can integrate yoga into your daily routine without disrupting your busy schedule. Whether you're at home or on the go, our online classes provide the flexibility you need to make yoga a regular part of your life. You’ll receive the same level of expert guidance, ensuring your practice is safe, effective, and fulfilling.

            </p>
            <p
              className="mt-4"
              style={{
                fontFamily: "var(--para-font)",
                color: "gray",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
At Arogya Yoghome, our mission is to provide convenient, personalized yoga experiences that fit your lifestyle. No matter where you are or how busy your life gets, our flexible yoga classes near Andheri and online sessions offer a practical and accessible way to prioritize your health. Take the first step toward better health and well-being by joining us today!

            </p>
            
                <button className="btn" onClick={toggleDescription}>...Read Less</button>
                  </>
                ):
                (
                <>
                <p
              className="mt-4"
              style={{
                fontFamily: "var(--para-font)",
                color: "gray",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
              Start your healthy life today with us! Our expert trainers and personalized yoga sessions will guide you towards physical fitness, mental clarity, and overall wellness. Begin your journey to a healthier, more balanced life now!

            </p>
                <button className="btn" onClick={toggleDescription}>...Read More</button>
                </>
                )}
            
            <div className="row mt-5">
              <div className="col-6">
                <div
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    height: "90px",
                    display: "flex",
                    width: "90px",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={imgone}
                    alt="img"
                    style={{ height: "45px", margin: "auto", display: "flex" }}
                  />
                </div>
                <h4 className="mt-4" style={{ fontFamily: "var(--head-font)" }}>
                  Changing rooms
                </h4>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "var(--para-font)",
                    color: "gray",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Spacious, clean changing room for yoga trainers’ convenience.

                </p>
              </div>
              <div className="col-6">
                <div
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    height: "90px",
                    display: "flex",
                    width: "90px",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={imgone}
                    alt="img"
                    style={{ height: "45px", margin: "auto", display: "flex" }}
                  />
                </div>
                <h4 className="mt-4" style={{ fontFamily: "var(--head-font)" }}>
                  Training Programs
                </h4>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "var(--para-font)",
                    color: "gray",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
Comprehensive training program to enhance yoga teaching skills.
</p>
              </div>
            </div>
<NavLink to='/'>
            <button
              href="#"
              className="button mt-3"
              style={{ "--clr": "var(--primary-color)" }}
            >
              <h6
                style={{
                  display: "flex",
                  margin: "auto",
                  color: "white",
                  fontFamily: "var(--head-font)",
                  fontSize: "14px",
                }}
              >
                {" "}
                KNOW MORE
              </h6>
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
      </div>
    </>
  );
};

export default Aboutone;
