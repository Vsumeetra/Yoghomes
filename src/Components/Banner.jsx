import React from "react";
import {  Slide } from "react-awesome-reveal";
import { TfiArrowTopRight } from 'react-icons/tfi';  // Importing the arrow icon from react-icons
import logo from "../Images/logo.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Servicedata from "../Data/Servicedata";
import { IoIosMenu } from "react-icons/io";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';

const Banner = (props) => {
 const uniqueTypes = [...new Set(Servicedata.map(item => item.type))];
 const grouped = Servicedata.reduce((acc, item) => {
  acc[item.type] = acc[item.type] || [];
  acc[item.type].push({name:item.name,slug:item.slug});
  
  console.log(acc)
  return acc;
}, {});
    const items =uniqueTypes.map((type, index) => ({
  key: `${index}`, // You can use index as the key
  label:(
    <NavLink to={`/${type.toLowerCase().replace(' ','-')}`}> {type}</NavLink>
  ),
}));
  return (
    <>
      <div
        className="homepage-first-section p-4"
        style={{ borderRadius: "16px", position: "relative", height: "600px" }}
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
              className="collapse navbar-collapse d-flex justify-content-between px-5"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-3">
                  <NavLink to="/">
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
                  <a className="nav-link" href="#">
                    Gallery
                  </a>
                </li> */}
                <li className="nav-item mx-3">
                  <NavLink to="/yoga-centre-andheri">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </NavLink>
                </li>
              </ul>
              {/* <div
                className="p-2"
                style={{ backgroundColor: "white", borderRadius: "50%" }}
              >
                <GrFormSearch size={30} />
              </div> */}
              <NavLink to='/yoga-centre-andheri'>
                    <button href="#" className="button" style={{ '--clr': 'white' }}>
                              CONTACT US
                                <span className="button__icon-wrapper">
                                  {/* First arrow icon */}
                                  <TfiArrowTopRight size={16}   className="button__icon-svg" />
                                  
                                  {/* Second arrow icon (copy) */}
                                  <TfiArrowTopRight size={16} color='white'   className="button__icon-svg button__icon-svg--copy" />
                                </span>
                               
                              </button>
                              </NavLink>
            </div>
          </div>
        </nav>

        <div
          className="p-4"
          style={{
            height: "600px",
            zIndex: "0",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
          }}
        >
          <div
            className="slide-content"
            style={{
              position: "relative",
              backgroundColor: "black",
              borderRadius: "24px",
            }}
          >
            <img
              src={props.banner}
              alt="img"
              style={{
                height: "600px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "24px",
                opacity: ".5",
              }}
            />
          </div>

          <div
            className="slide-content-box-one"
            style={{ position: "absolute", top: "50%" }}
          >
            <div className="p-4">
              <Slide>
                <h1
                  className="px-4 display-5"
                  style={{
                    fontWeight: "700",
                    color: "white",
                    fontFamily: "var(--head-font)",
                  }}
                >
                  {props.head}
                </h1>
              </Slide>
              <h6 className="px-4" style={{ color: "white" }}>
                HOME{" "}
                <MdKeyboardDoubleArrowRight
                  color="var(--secondary-color)"
                  size={22}
                  className="mx-2"
                />
                {props.title}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
