import React, { useState } from "react";
import "./Navbar.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { FaArrowRight, FaCopy } from "react-icons/fa"; // Import React Icons
import { IoIosMenu } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";

// Import Swiper styles correctly
import "swiper/css"; // Main styles
import "swiper/css/navigation"; // For navigation styles (optional)
import "swiper/css/pagination"; // For pagination styles (optional)
import logo from "../Images/logo.png";
import bannerone from "../Images/homebannerimgone.jpg";
import six from "../Images/Service Images/Office Yoga Classes.jpeg";
import eighteen from "../Images/Service Images/Traditional Yoga.jpg";

import one from '../Images/Banner/one.jpg'
import two from '../Images/Banner/THIRTYTHREE.jpg'
import three from '../Images/Banner/FIFTEEN.jpg'



import pattern from "../Images/pattern.png";
import homeone from "../Images/homeoneimg.webp";
import hometwo from "../Images/hometwoimg.webp";

import { TfiArrowTopRight } from "react-icons/tfi"; // Importing the arrow icon from react-icons
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import Servicedata from "../Data/Servicedata";
import { DownOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Menu, Space } from "antd";

import imgone from '../Images/Service Images/Womens Care Yoga Classes.jpeg'
import imgtwo from '../Images/Service Images/Office Yoga Classes.jpeg'
import imgthree from '../Images/Service Images/Traditional Yoga.jpg'

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const uniqueTypes = [...new Set(Servicedata.map((item) => item.type))];
  const grouped = Servicedata.reduce((acc, item) => {
    acc[item.type] = acc[item.type] || [];
    acc[item.type].push({name:item.name,slug:item.slug});
    
    console.log(acc)
    return acc;
  }, {});

  const items = uniqueTypes.map((type, index) => ({
    key: `${index}`, // You can use index as the key
    label: (
      <NavLink to={`/${type.toLowerCase().replace(" ", "-")}`}> {type}</NavLink>
    ),
  }));

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  const stackedAvatars = [
    imgone,imgtwo,imgthree
  ];
  return (
    <>
      <div className="container-fluid p-lg-4 p-0">
        <div
          className="homepage-first-section"
          style={{
            borderRadius: "16px",
            position: "relative",
            height: "800px",
          }}
        >
          <nav className="navbar navbar-expand-lg " style={{ zIndex: "1" }}>
            <div className="container-fluid mt-3">
              <a className="navbar-brand" href="#">
                <NavLink to="/">
                  <img src={logo} alt="img" style={{ height: "85px" }} />
                </NavLink>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="">
                  <IoIosMenu color="white" size={32} />
                </span>
              </button>
              <div
                className="collapse navbar-collapse d-lg-flex d-md-block justify-content-between px-5"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item mx-3">
                    <NavLink to="">
                      <a className="nav-link" href="#">
                        Home
                      </a>
                    </NavLink>
                  </li>{" "}
                  <li className="nav-item mx-3">
                    <NavLink to="/yoga-class-near-andheri">
                      <a className="nav-link" href="#">
                        About
                      </a>
                    </NavLink>
                  </li>
                  {/* <Dropdown menu={{ items }}>
    <a style={{
      fontFamily: "var(--head-font)",
      color: "white",
      textTransform: "uppercase",
      fontSize:"12px",
      fontWeight: "600px",
      letterSpacing: "0.5px",
    }} onClick={(e) => e.preventDefault()}>
      <Space style={{color:"white"}}>
        SERVICES
        <DownOutlined />
      </Space>
    </a>
  </Dropdown> */}
                  {Object.entries(grouped).map(([type, names]) => {
                    const menu = (
                      <Menu>
                        {names.map((name) => (
                          <NavLink to={name.slug}><Menu.Item key={name.name}>{name.name}</Menu.Item></NavLink>
                        ))}
                      </Menu>
                    );

                    return (
                      <Dropdown
                        overlay={menu}
                        trigger={["hover", "click"]}
                        key={type}
                      >
                        <li className="nav-item nav-link text-white mx-3   dropdown">
                          {type} <DownOutlined />
                        </li>
                      </Dropdown>
                    );
                  })}
                  {/* <li className="nav-item mx-3">
          <a className="nav-link" href="#">Gallery</a>
        </li> */}
                  <li className="nav-item mx-3">
                    <NavLink to="/yoga-centre-andheri">
                      <a className="nav-link" href="#">
                        Contact
                      </a>
                    </NavLink>
                  </li>
                </ul>
                {/* <div className='p-2' style={{backgroundColor:"white",borderRadius:"50%"}}>
      <GrFormSearch size={30} />
      </div> */}
                <NavLink to="/yoga-centre-andheri">
                  <button
                    href="#"
                    className="button mb-4 mb-lg-0"
                    style={{ "--clr": "white" }}
                  >
                    CONTACT US
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
          </nav>

          <Swiper
            onSlideChange={handleSlideChange}
            modules={[Navigation, Pagination, Autoplay, A11y]}
            direction="vertical"
            navigation={false}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: "10000",
            }}
            loop // Enable looping (optional)
            className="banner-home-page"
            style={{
              height: "800px",
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              zIndex:'-1 !important'
            }}
          >
            <SwiperSlide>
              <div
                className="slide-content"
                style={{
                  position: "relative",
                  backgroundColor: "black",
                  borderRadius: "24px",
                }}
              >
                <img
                  src={two}
                  alt="img"
                  style={{
                    height: "800px",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: "24px",
                    opacity: ".5",
                  }}
                />
              </div>

              <div className="slide-content-box">
                <div className="p-3">
                  <Fade direction="in" duration={2000}>
                    <h1>Best Yoga Trainner in Andheri </h1>
                  </Fade>
                  <Slide>
                    <h2 className="display-1">Transform Life</h2>
                  </Slide>
                  <Slide>
                    <h2 className="display-1">Through Yoga</h2>
                  </Slide>
                  <hr style={{ borderTop: "1px solid white", opacity: "1" }} />
                  <Zoom direction="out">
                    <p>
                      Advanced Yoga Practices for Yoga Trainees and Teachers at
                      Arogya Yoghome
                    </p>
                  </Zoom>
                  <Fade direction="in">
                    <NavLink to="/yoga-class-near-andheri">
                      <button
                        href="#"
                        className="button"
                        style={{ "--clr": "white" }}
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
                  </Fade>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide-content"
                style={{
                  position: "relative",
                  backgroundColor: "black",
                  borderRadius: "24px",
                }}
              >
                <img
                  src={one}
                  alt="img"
                  style={{
                    height: "800px",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: "24px",
                    opacity: ".5",
                  }}
                />
              </div>
              <div className="slide-content-box">
                <div className="p-3">
                  <Fade direction="in" duration={2000}>
                    <h6>Practice Positive Energy</h6>
                  </Fade>
                  <Slide>
                    <h2 className="display-1">Live Healthy</h2>
                  </Slide>
                  <Slide>
                    <h2 className="display-1">with Yoga</h2>
                  </Slide>
                  <hr style={{ borderTop: "1px solid white", opacity: "1" }} />
                  <Zoom direction="out">
                    <p>
                      Advanced Yoga Practices for Yoga Trainees and Teachers at
                      Arogya Yoghome
                    </p>
                  </Zoom>
                  <Fade direction="in">
                    <NavLink to="/yoga-class-near-andheri">
                      <button
                        href="#"
                        className="button"
                        style={{ "--clr": "white" }}
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
                  </Fade>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide-content"
                style={{
                  position: "relative",
                  backgroundColor: "black",
                  borderRadius: "24px",
                }}
              >
                <img
                  src={three}
                  alt="img"
                  style={{
                    height: "800px",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: "24px",
                    opacity: ".5",
                  }}
                />
              </div>
              <div className="slide-content-box">
                <div className="p-3">
                  <Fade direction="in" duration={2000}>
                    <h6>Practice Positive Energy</h6>
                  </Fade>
                  <Slide>
                    <h2 className="display-1">Yoga: Path to</h2>
                  </Slide>
                  <Slide>
                    <h2 className="display-1">Wellness</h2>
                  </Slide>
                  <hr style={{ borderTop: "1px solid white", opacity: "1" }} />
                  <Zoom direction="out">
                    <p>
                      Advanced Yoga Practices for Yoga Trainees and Teachers at
                      Arogya Yoghome
                    </p>
                  </Zoom>
                  <Fade direction="in">
                    <NavLink to="/yoga-class-near-andheri">
                      <button
                        href="#"
                        className="button"
                        style={{ "--clr": "white" }}
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
                  </Fade>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div
          className="row mx-0 pt-5"
          style={{
            marginTop: "-25px",
            zIndex: "5",
            position: "relative",
            borderEndEndRadius: "24px",
            borderEndStartRadius: "24px",
            backgroundColor: "var(--secondary-color)",
            backgroundImage: `url(${pattern})`,
          }}
        >
          <div className="col-12 col-lg-4 p-3 pb-5">
            <div className="pbmit-ihbox-style-1 h-100">
              
              <div className="pbmit-ihbox-headingicon h-100 d-flex align-items-center" >
              
                <div className="pbmit-ihbox-icon">
                  <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-image">
                  <Avatar.Group>
                    <Avatar src={imgone}/>
                    <Avatar src={imgtwo}/>
                    <Avatar src={imgthree}/>

                  </Avatar.Group>
                  </div>
                </div>
                <div className="pbmit-ihbox-contents">
                  <p
                    style={{
                      fontFamily: "var(--para-font)",
                      fontSize: "20px",
                      textAlign: "start",
                      paddingLeft: "20px",
                    }}
                    className="pbmit-element-title"
                  >
                    Many number of members are connected with us
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 p-3 pb-5">
            <div className="spinner_box">
              <div
                className="pbmit-spinner-box-style-1"
                style={{ position: "relative" }}
              >
                <FaArrowDown
                  size={40}
                  color="black"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                />
                <a className="pbmit-scroll-section" href="#">
                  <div className="pbmit-ihbox-box">
                    <div className="pbmit-ihbox-icon">
                      <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                        <i className="pbmit-Yoga-icon pbmit-Yoga-icon-down-arrow" />
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      viewBox="0 0 200 200"
                    >
                      <defs>
                        <path
                          d="M0, 100a100, 100 0 1, 0 200, 0a100, 100 0 1, 0 -200, 0"
                          id="txt-path"
                        />
                      </defs>
                      <circle cx={150} cy={100} r={75} fill="none" />
                      <text
                        fontSize={15}
                        fontFamily="Sora,sans-serif"
                        fontWeight={500}
                      >
                        <textPath startOffset={0} xlinkHref="#txt-path">
                          Scroll Down . Scroll Down . Scroll Down . Scroll Down
                          . Scroll Down . Scroll Down .
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 p-3 pb-5">
            <div className="pbmit-ihbox-style-3 h-100">
              <div className="pbmit-ihbox-headingicon d-flex align-items-center h-100">
                <div className="pbmit-ihbox-contents">
                  <p
                    style={{
                      fontFamily: "var(--para-font)",
                      fontSize: "20px",
                      textAlign: "end",
                      paddingRight: "20px",
                    }}
                    className="pbmit-element-title"
                  >
Click on this image to check videos on our YouTube Channel
                  </p>
                </div>
                <a
                  className="pbmin-lightbox-video"
                  href="https://www.youtube.com/watch?v=SZEflIVnhH8"
                >
                  <a
                  className="pbmin-lightbox-video"
                  href="https://www.youtube.com/@ArogyaYoghome"
                  target="_blank"
                >
                  <div className="pbmit-feature-wrapper-img">
                    <div className="pbmit-ihbox-wrapper">
                      <div className="pbmit-ihbox-icon-type-image">
                        <img
                          src={hometwo}
                          alt="Best Yoga Trainner in Andheri "
                          style={{ borderRadius: "24px" }}
                        />
                      </div>
                    </div>
                  </div>
                  </a>
                  <div className="pbmit-ihbox-icon">
                    <div className="pbmit-ihbox-icon-wrapper">
                      <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                        <i className="pbmit-Yoga-icon-play" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
