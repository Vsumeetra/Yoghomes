import React, { useState } from "react";
import bannerone from "../Images/Service Images/Office Yoga Classes.jpeg";
import "./Homeabout.css";
import imgone from "../Images/yoga.png";
import bannertwo from "../Images/Service Images/Traditional Yoga.jpg";
import { FaRegCircleCheck } from "react-icons/fa6";
import { TfiArrowTopRight } from "react-icons/tfi"; // Importing the arrow icon from react-icons
import { NavLink } from "react-router-dom";

const Homeabout = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
    // Toggle the expanded state
    const toggleDescription = () => {
      setIsExpanded((prevState) => !prevState);
    };
  return (
    <>
      <div className="container-fluid p-lg-5 py-5">
        <div className="row p-2 homeabout">
          <div className="col-12 col-md-5 py-4 ps-lg--4">
            <img
              alt="img"
              src={bannerone}
              style={{
                height: "550px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "24px",
              }}
            />
          </div>
          <div
            className="col-12 col-md-7 p-4 px-5 scrollable-content"
            style={{ overflowY: "auto", height: "550px" }}
          >
            <p className="px-4 mt-5 p-1 homeoneserviceh6">About Us</p>
            <hr className="mt-4" style={{ opacity: "1" }} color="#181a17" />
            <h4
              className="display-5"
              style={{ fontFamily: "var(--head-font)", fontWeight: "500" }}
            >
              Great life happens through yoga practice.
            </h4>
            <div className="ps-5 mt-4">
              <p
                className="mt-4"
                style={{ color: "gray", fontFamily: "var(--para-font)" }}
              >
                At Arogya Yoghome, we offer advanced yoga practices tailored for yoga trainees and teachers who are looking to deepen their knowledge and enhance their practice. Whether you’re a beginner looking to explore more or an experienced practitioner aiming to refine your techniques, our yoga classes in Andheri West provide the ideal environment for self-transformation.

              </p>
              <div className="row mt-5">
                <div
                  className="col-3"
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    height: "90px",
                    width: "90px",
                    display: "flex",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={imgone}
                    alt="img"
                    style={{ height: "45px", margin: "auto", display: "flex" }}
                  />
                </div>
                <div className="col-9 ps-4 d-flex align-items-center">
                  <div>
                    <h5 style={{ fontFamily: "var(--head-font)" }}>
                    Vinyasa Flow
                    </h5>
                    <p
                      className="m-0"
                      style={{ fontFamily: "var(--para-font)", color: "gray" }}
                    >
                     This practice focuses on smooth transitions between poses, connecting breath with movement to create a dynamic, flowing sequence. It builds endurance, flexibility, and balance while enhancing your mental focus.

                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div
                  className="col-3"
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    height: "90px",
                    width: "90px",
                    display: "flex",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={imgone}
                    alt="img"
                    style={{ height: "45px", margin: "auto", display: "flex" }}
                  />
                </div>
                <div className="col-9 ps-4 d-flex align-items-center">
                  <div>
                    <h5 style={{ fontFamily: "var(--head-font)" }}>
                    Ashtanga Yoga:
                    </h5>
                    <p
                      className="m-0"
                      style={{ fontFamily: "var(--para-font)", color: "gray" }}
                    >
                      A traditional and structured style, Ashtanga yoga consists of a set sequence of poses that are linked with the breath. This practice is excellent for building strength, flexibility, and discipline.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-2 p-2">
                <img
                  className="mt-5"
                  src={bannertwo}
                  alt="img"
                  style={{
                    height: "200px",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "16px",
                    objectPosition: "top",
                  }}
                />
              </div>
              <div className="mt-4 p-2">
                <h4 style={{ fontFamily: "var(--head-font)" }}>
                 Our Focus
                </h4>
                {isExpanded?(
                  <>
                 <p
                  className="m-0 mt-3"
                  style={{ fontFamily: "var(--para-font)", color: "gray" }}
                >
                  Our focus is on advanced practices that help you unlock your full potential. We offer sessions in Vinyasa Flow, Ashtanga Yoga, Power Yoga, and specialized poses for hip and back opening. These practices are designed to improve strength, flexibility, and mental clarity, taking your yoga journey to the next level.

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
Power Yoga: A more intense, high-energy practice, Power Yoga combines strength,   flexibility, and endurance to give you a full-body workout while also promoting mental calmness.

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
Hip and Back Opening Asanas: These specialized poses target areas where tension often accumulates. By focusing on opening the hips and back, you’ll improve mobility and release stress, allowing for a more open and fluid practice.

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
Whether you are aiming to improve your personal practice or learn how to teach these advanced techniques to others, our yoga classes in Andheri West provide expert guidance and a supportive environment to help you grow.

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
Our experienced instructors offer personalized attention, ensuring you receive the support you need to progress at your own pace. With both one-on-one sessions and interactive group classes, we cater to all levels and ensure that each session meets your individual needs.

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
At Arogya Yoghome, we believe that yoga is a continuous journey of self-improvement. Our yoga classes in Andheri West are designed to inspire you to update and upgrade your practice, allowing you to experience yoga’s transformative power fully.

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
Whether you’re a yoga teacher wanting to refine your skills or a practitioner looking to explore advanced techniques, join us today and elevate your yoga practice. With personalized attention and a focus on growth, you’ll gain the tools to enhance your body, mind, and spirit.

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
Start your journey today with yoga classes in Andheri West at Arogya Yoghome, where advanced yoga practices help you unlock your true potential.

            </p>
            
                <button className="btn" onClick={toggleDescription}>...Read Less</button>
                  </>
                ):
                (
                <>
                <p
                  className="m-0 mt-3"
                  style={{ fontFamily: "var(--para-font)", color: "gray" }}
                >
                  Our focus is on advanced practices that help you unlock your full potential. We offer sessions in Vinyasa Flow, Ashtanga Yoga, Power Yoga, and specialized poses for hip and back opening. These practices are designed to improve strength, flexibility, and mental clarity, taking your yoga journey to the next level.

                </p>
                <button className="btn" onClick={toggleDescription}>...Read More</button>
                </>
                )}
                
              </div>

              <div className="mt-2 p-2">
                <div className="row">
                  <div className="col-md-6">
                    <ul className="p-0" style={{ listStyleType: "none" }}>
                      <li
                        className="mt-2"
                        style={{
                          fontFamily: "var(--para-font)",
                          fontSize: "16px",
                        }}
                      >
                        <FaRegCircleCheck
                          color="var(--primary-color)"
                          className="mx-2"
                        />
                        Effective Exercises
                      </li>
                      <li
                        className="mt-2"
                        style={{
                          fontFamily: "var(--para-font)",
                          fontSize: "16px",
                        }}
                      >
                        <FaRegCircleCheck
                          color="var(--primary-color)"
                          className="mx-2"
                        />
                        Body condition improving
                      </li>
                      <li
                        className="mt-2"
                        style={{
                          fontFamily: "var(--para-font)",
                          fontSize: "16px",
                        }}
                      >
                        <FaRegCircleCheck
                          color="var(--primary-color)"
                          className="mx-2"
                        />
                        Mood & feeling control
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="p-0" style={{ listStyleType: "none" }}>
                      <li
                        className="mt-2"
                        style={{
                          fontFamily: "var(--para-font)",
                          fontSize: "16px",
                        }}
                      >
                        <FaRegCircleCheck
                          color="var(--primary-color)"
                          className="mx-2"
                        />
                        Self-actualization increase
                      </li>
                      <li
                        className="mt-2"
                        style={{
                          fontFamily: "var(--para-font)",
                          fontSize: "16px",
                        }}
                      >
                        <FaRegCircleCheck
                          color="var(--primary-color)"
                          className="mx-2"
                        />
                        Attention improves
                      </li>
                      <li
                        className="mt-2"
                        style={{
                          fontFamily: "var(--para-font)",
                          fontSize: "16px",
                        }}
                      >
                        <FaRegCircleCheck
                          color="var(--primary-color)"
                          className="mx-2"
                        />
                        Learning efficiency improves
                      </li>
                    </ul>
                  </div>
                        <NavLink to='/yoga-class-near-andheri'>
                  <button
                    href="#"
                    className="button mt-3"
                    style={{ "--clr": "var(--secondary-color)" }}
                  >
                    KNOW MORE
                    <span className="button__icon-wrapper">
                      {/* First arrow icon */}
                      <TfiArrowTopRight
                        size={16}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeabout;
