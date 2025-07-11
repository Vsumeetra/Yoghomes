import React, { useEffect, useState } from "react";
import bannerone from "../Images/banner.jpg";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { TfiArrowTopRight } from "react-icons/tfi"; // Importing the arrow icon from react-icons
import { NavLink, useLocation } from "react-router-dom";
import "./Service.css";
import Banner from "../Components/Banner";
import Servicedata from "../Data/Servicedata";
import imgone from "../Images/yoga.png";
import { RxArrowTopRight } from "react-icons/rx";
import { FaRegCheckCircle } from "react-icons/fa";
import imgfour from "../Images/widget-img.webp";
import pattern from "../Images/pattern.png";
import { FiPhoneCall } from "react-icons/fi";
import { MetaTags } from "react-meta-tags";

const Service = () => {
  const path = useLocation();
  const search = path.pathname;
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expanded state
  const toggleDescription = () => {
    setIsExpanded((prevState) => !prevState);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [search]);
  return (
    <>
      {Servicedata.filter((data) => data.slug === search).map((data) => (
        <>
         <MetaTags>
                                <title>{data.title}</title>
                                <meta title={data.title} />
                                <meta name="description" content={data.description} />
                                <meta name="keywords" content="Best Yoga Trainner in Andheri , Best Yoga Classes In Andheri  West , Doctor Consultation In Andheri West , Yoga In Andheri West , Yoga Class Near Andheri , Top Yoga Centre in Andheri , Personal Yoga Classes in Andheri , Group Yoga Classes in Andheri , Corporate Yoga Classes in Andheri , Women's yoga Classes in Andheri ,  Couple Yoga Classes in Andheri , Corporate yoga programs in Andheri , Occupational Therapy Yoga Classes in Andheri , Online Yoga Classes In Andheri  , Best Yoga Therapists in Andheri  , Dietitian Nutritionists in Andheri  , Yoga Therapists in Andheri  , vinyasa yoga class in andheri , Traditional Yoga in andheri , Best Ashtanga Yoga in Andheri , Hatha Yoga Classes in Andheri , Power Yoga Classes in Andheri , raja yoga classes in andheri , Chair Yoga in andheri , Straps band yoga in andheri , Best competitive yogasana in andheri , Pranic Healing Centres in Andheri , Yoga for Aboard , Resort and Tourist Yoga , Orthopedic Online Consultant in Andheri , Online Gynic Consultant in Andheri , Motivational Consultation in Andheri , Yoga Expert in Andheri" />
                                <link rel="canonical" href={`https://www.arogyayoghome.com${data.slug}`} />
                                <meta http-equiv="cache-control" content="no-cache" />
                                <meta http-equiv="expires" content="0" />
                                <meta http-equiv="pragma" content="no-cache" />
                                <meta property="og:title" content={data.title} />
                                <meta property="og:locale" content="en_US" />
                                <meta property="og:type" content="website" />
                                <meta property="og:url" content="https://www.arogyayoghome.com/" />
                                <meta property="og:description" content={data.description} />
                                <meta property="og:image" content="https://www.arogyayoghome.com/assets/logo-B1E64yEd.png" />
                              </MetaTags>
          <Banner head={data.head} banner={data.bannerimg||bannerone} title={data.name} />
          <div className="container-fluid p-4 my-5">
            <div className="row">
              <div className="col-12 col-md-9 p-2 px-lg-5  order-lg-2">
                <Fade>
                  <img src={data.image} className="mainimgservice" alt="img" />
                </Fade>

                <h2 className="mt-5" style={{ fontFamily: "var(--head-font)" }}>
                  Our yoga is the foundation of youth
                </h2>
                {isExpanded?(
                  <>
                  <p
                  className="mt-4"
                  style={{
                    fontFamily: "var(--para-font)",
                    color: "gray",
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "justify",
                  }}
                >
                 {data.desc[0]}
                </p>
                {/* <p
                  className="mt-4"
                  style={{
                    fontFamily: "var(--para-font)",
                    color: "gray",
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "justify",
                  }}
                >
                  {data.desc[1]}
                </p> */}
                {data.desc.slice(1).map((datadesc)=>(
                  <p
                  className="mt-4"
                  style={{
                    fontFamily: "var(--para-font)",
                    color: "gray",
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "justify",
                  }}
                >
                  {datadesc}
                </p>
                ))}
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
                    textAlign: "justify",
                  }}
                >
                 {data.desc[0]}
                </p>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "var(--para-font)",
                    color: "gray",
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "justify",
                  }}
                >
                  {data.desc[1]}
                </p>
                <button className="btn" onClick={toggleDescription}>...Read More</button>
                </>
                )}
                
                <h2 className="mt-4" style={{ fontFamily: "var(--head-font)" }}>
                  Different tpyes of yoga
                </h2>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "var(--para-font)",
                    color: "gray",
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "justify",
                  }}
                >
                  Explore various types of yoga at Arogya Yoghome , guided by expert trainers. Enhance flexibility, reduce stress, and embrace holistic wellness through personalized yoga sessions.

                </p>

                <div className="row">
                {Servicedata.filter(datat=>datat.type===data.type&&datat.slug!==search).slice(0,3).map((data,i)=>(
                  <div className="col-12 col-md-4 mt-4">
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
                                  {/* <NavLink
                                    to="/"
                                    style={{
                                      color: "var(--primary-color)",
                                      textDecoration: "none",
                                    }}
                                  > */}
                                    {data.type}
                                  {/* </NavLink> */}
                                </div>
                                <h3 class="mt-2 pbmit-service-title">
                                  {/* <NavLink
                                    to="/"
                                    style={{
                                      color: "black",
                                      textDecoration: "none",
                                    }}
                                  > */}
                                    {data.name}
                                  {/* </NavLink> */}
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
                          {/* <NavLink to="/"> */}
                            <a
                              class="pbmit-service-btn"
                              title="Ardha Chakrasana"
                              style={{
                                backgroundColor: "var(--secondary-color)",
                              }}
                            >
                              <span class="pbmit-button-icon-wrappera">
                                <span
                                  class="pbmit-button-icona"
                                  style={{ fontFamily: "var(--head-font)" }}
                                >
                                  0{i+1}
                                </span>
                              </span>
                            </a>
                          {/* </NavLink> */}
                        </div>
                        {/* <NavLink
                          to=""
                          class="pbmit-link"
                          href="service-details.html"
                        ></NavLink> */}
                      </div>
                    </article>
                                  </NavLink>
                  </div>
                   ))}
                  {/* <div className="col-12 col-md-4 mt-4">
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
                                    to="/"
                                    style={{
                                      color: "var(--primary-color)",
                                      textDecoration: "none",
                                    }}
                                  >
                                    DJ Yoga Trainer
                                  </NavLink>
                                </div>
                                <h3 class="mt-2 pbmit-service-title">
                                  <NavLink
                                    to="/"
                                    style={{
                                      color: "black",
                                      textDecoration: "none",
                                    }}
                                  >
                                    Ardha Chakrasana
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
                          <NavLink to="/">
                            <a
                              class="pbmit-service-btn"
                              title="Ardha Chakrasana"
                              style={{
                                backgroundColor: "var(--secondary-color)",
                              }}
                            >
                              <span class="pbmit-button-icon-wrappera">
                                <span
                                  class="pbmit-button-icona"
                                  style={{ fontFamily: "var(--head-font)" }}
                                >
                                  02
                                </span>
                              </span>
                            </a>
                          </NavLink>
                        </div>
                        <NavLink
                          to=""
                          class="pbmit-link"
                          href="service-details.html"
                        ></NavLink>
                      </div>
                    </article>
                  </div>
                  <div className="col-12 col-md-4 mt-4">
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
                                    to="/"
                                    style={{
                                      color: "var(--primary-color)",
                                      textDecoration: "none",
                                    }}
                                  >
                                    DJ Yoga Trainer
                                  </NavLink>
                                </div>
                                <h3 class="mt-2 pbmit-service-title">
                                  <NavLink
                                    to="/"
                                    style={{
                                      color: "black",
                                      textDecoration: "none",
                                    }}
                                  >
                                    Ardha Chakrasana
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
                          <NavLink to="/">
                            <a
                              class="pbmit-service-btn"
                              title="Ardha Chakrasana"
                              style={{
                                backgroundColor: "var(--secondary-color)",
                              }}
                            >
                              <span class="pbmit-button-icon-wrappera">
                                <span
                                  class="pbmit-button-icona"
                                  style={{ fontFamily: "var(--head-font)" }}
                                >
                                  03
                                </span>
                              </span>
                            </a>
                          </NavLink>
                        </div>
                        <NavLink
                          to=""
                          class="pbmit-link"
                          href="service-details.html"
                        ></NavLink>
                      </div>
                    </article>
                  </div> */}
                </div>

                <div className="row mt-5 pt-4">
                  <div className="col-12 col-md-6 pe-5 p-3">
                    <img
                      alt="img"
                      src={bannerone}
                      style={{
                        height: "250px",
                        borderRadius: "24px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="col-12 col-md-6 p-3">
                    <h2
                      style={{
                        fontFamily: "var(--head-font)",
                        fontSize: "36px",
                      }}
                    >
                      Benefits of yoga session
                    </h2>
                    <p
                      className="mt-3"
                      style={{
                        fontFamily: "var(--para-font)",
                        color: "gray",
                        fontWeight: "400",
                        fontSize: "18px",
                        textAlign: "justify",
                      }}
                    >
                      Discover the benefits of yoga with Arogya Yoghome and Yog. Improve flexibility, boost energy, reduce stress, and feel rejuvenated!

                    </p>

                    {/* <div className="d-flex mt-4">
                      <FaRegCheckCircle
                        className="me-2"
                        color="var(--primary-color)"
                        size={20}
                      />
                      <h6
                        style={{
                          fontFamily: "var(--head-font)",
                          fontSize: "18px",
                        }}
                      >
                        Yoga improves strength , balance and flexibility
                      </h6>
                    </div> */}
                    <div className="mt-4">
                        {data.benefits.map((benefits)=>(
                          <div className="d-flex mt-2">
                          <FaRegCheckCircle
                            className="me-2"
                            color="var(--primary-color)"
                            size={20}
                          />
                          <h6
                            style={{
                              fontFamily: "var(--head-font)",
                              fontSize: "18px",
                            }}
                          >
                            {benefits}
                          </h6>
                        </div>
                        ))}
                        </div>
                    {/* <div className="d-flex mt-2">
                      <FaRegCheckCircle
                        className="me-2"
                        color="var(--primary-color)"
                        size={20}
                      />
                      <h6
                        style={{
                          fontFamily: "var(--head-font)",
                          fontSize: "18px",
                        }}
                      >
                        Yoga connects you with community
                      </h6>
                    </div>

                    <div className="d-flex mt-2">
                      <FaRegCheckCircle
                        className="me-2"
                        color="var(--primary-color)"
                        size={20}
                      />
                      <h6
                        style={{
                          fontFamily: "var(--head-font)",
                          fontSize: "18px",
                        }}
                      >
                        Yoga improves strength , balance and flexibility
                      </h6>
                    </div>

                    <div className="d-flex mt-2">
                      <FaRegCheckCircle
                        className="me-2"
                        color="var(--primary-color)"
                        size={20}
                      />
                      <h6
                        style={{
                          fontFamily: "var(--head-font)",
                          fontSize: "18px",
                        }}
                      >
                        Yoga connects you with community
                      </h6>
                    </div>

                    <div className="d-flex mt-2">
                      <FaRegCheckCircle
                        className="me-2"
                        color="var(--primary-color)"
                        size={20}
                      />
                      <h6
                        style={{
                          fontFamily: "var(--head-font)",
                          fontSize: "18px",
                        }}
                      >
                        Yoga improves strength , balance and flexibility
                      </h6>
                    </div> */}
                  </div>
                </div>

                {/* Accoordian Start */}
                <h2 className="mt-5" style={{ fontFamily: "var(--head-font)" }}>
                  Frequently asked questions
                </h2>

                <div className="accordion mb-5" id="accordionExample">
                  {data.faq.map((faq,index)=>(
                    <div className=" mt-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button custom-button p-4"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${index}`}
                        aria-expanded={index===0?'true':'false'}
                        aria-controls={index}
                      >
                        {/* 01.How many times a week should i practice ? */}
                        {'0'+(index+1)+'. '+faq.question}
                      </button>
                    </h2>
                    <div
                      id={index}
                      className={`accordion-collapse collapse ${index===0?'show':''}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p
                          style={{
                            fontFamily: "var(--para-font)",
                            color: "gray",
                            fontWeight: "400",
                            fontSize: "18px",
                            textAlign: "justify",
                          }}
                        >
                          {faq.answer}

                        </p>
                      </div>
                    </div>
                  </div>
                  ))}
                  {/* <div className=" mt-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button custom-button p-4"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        01.How many times a week should i practice ?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p
                          style={{
                            fontFamily: "var(--para-font)",
                            color: "gray",
                            fontWeight: "400",
                            fontSize: "18px",
                            textAlign: "justify",
                          }}
                        >
                          For optimal results, it’s recommended to practice yoga at least 3-4 times a week. Consistency is key to building strength, flexibility, and mindfulness. However, listen to your body and adjust based on your personal goals and fitness level.

                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" mt-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button custom-button collapsed p-4"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        02.What are the best poses for morning
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p
                          style={{
                            fontFamily: "var(--para-font)",
                            color: "gray",
                            fontWeight: "400",
                            fontSize: "18px",
                            textAlign: "justify",
                          }}
                        >
                         The best yoga poses for the morning include the Downward Dog, Cat-Cow, Mountain Pose, and Sun Salutation. These stretches help awaken your body, increase flexibility, reduce stiffness, and boost energy levels to start the day positively and mindfully.

                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" mt-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button custom-button collapsed p-4"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        03.What is the purpose of sun salutations
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p
                          style={{
                            fontFamily: "var(--para-font)",
                            color: "gray",
                            fontWeight: "400",
                            fontSize: "18px",
                            textAlign: "justify",
                          }}
                        >
                          Sun Salutation, or Surya Namaskar, is a series of yoga poses that stretch and strengthen the body, improve flexibility, boost circulation, and energize the mind. It enhances overall well-being, promotes mental clarity, and is a great morning practice.

                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
                {/* Accoordian End */}
              </div>
              <div className="col-12 col-md-3 p-2 order-lg-1 px-4">
                <Slide>
                  <div
                    className="ulli p-4"
                    style={{ borderRadius: "24px", backgroundColor: "white" }}
                  >
                    <h4 className="mt-3 ps-4 serviceultitle">Our Service</h4>
                    <ul className="p-0 mt-5">
                      {Servicedata.filter(datas=>datas.type===data.type).map((data) => (
                        <>
                          <NavLink to={data.slug}>
                            {({ isActive }) => (
                              <li
                                className={
                                  isActive
                                    ? "py-1 serviceliactive"
                                    : "py-1 serviceli"
                                }
                              >
                                <div className="mt-4 row">
                                  <h4 className=" px-4 pe-5 col-8 servicelititle">
                                    {data.name}
                                  </h4>
                                  <div className="mt-4 col-4 serviceliarrow">
                                  <TfiArrowTopRight
                                    size={16}
                                    className={
                                      isActive ? "arrowactive" : "arrow"
                                    }
                                  />
                                </div>
                                </div>
                                
                              </li>
                            )}
                          </NavLink>
                          <hr
                            className="my-1"
                            style={{ borderTop: "1px solid grey" }}
                          />
                        </>
                      ))}
                    </ul>
                  </div>
                </Slide>

                <div
                  className="mt-5 p-4 "
                  style={{
                    borderRadius: "24px",
                    backgroundColor: "var(--primary-color)",
                    backgroundImage: `url(${pattern})`,
                  }}
                >
                  <img
                    className="pt-4"
                    src={imgfour}
                    alt="img"
                    style={{ width: "100%", maxHeight: "200px" }}
                  />
                  <h2
                    className="mt-5 text-center"
                    style={{ fontFamily: "var(--head-font)", color: "white" }}
                  >
                    Book your yoga session
                  </h2>
                  <h5 className="mt-5 text-center text-white">
                    <FiPhoneCall
                      className="me-3"
                      color="var(--secondary-color)"
                    />
                    +91-99200 27780
                  </h5>

                  <a href="tel:+91-99200 27780">
                  <button
                    href="#"
                    className="button my-5"
                    style={{
                      "--clr": "var(--secondary-color)",
                      display: "flex",
                      margin: "auto",
                    }}
                  >
                    CALL NOW
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Service;
