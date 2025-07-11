import React from "react";
import logo from "../Images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Servicedata from "../Data/Servicedata";

const Footer = () => {
  return (
    <>
      <div className="container-fluid pt-5 px-5 pb-4 bg-dark">
        <div className="row pt-3 pt-5">
          <div className="col-12 col-md-5">
            <div className="row">
              <div className="col-6">
                <NavLink to="/">
                  <img src={logo} style={{ height: "85px" }} alt="logo" />
                </NavLink>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "var(--para-font)",
                    fontSize: "18px",
                    color: "white",
                  }}
                >
                  Welcome to Yoga Home, where we understand the challenges of modern lifestyles and their impact on physical and emotional well-being.
                </p>
              </div>
              <div className="col-6"></div>
              <div className="d-flex">
                <a href="https://www.facebook.com/arogyamyoghome" target="_blank" style={{color:'white'}}>
                <div
                  className="mx-1"
                  style={{
                    height: "45px",
                    width: "45px",
                    borderRadius: "50%",
                    border: "1px solid white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaFacebook size={25} />
                </div>
                </a>
                <a href="https://www.instagram.com/arogya_yoghome/?fbclid=IwZXh0bgNhZW0CMTEAAR0pOxV-1_IHwYf0P24nUx579MDiLQGjuwSej2xRRgUVe4SJBbEgvSH4s8Y_aem_OV232T40bxOHJBuWbDLJFA" target="_blank" style={{color:'white'}}>
                <div
                  className="mx-1"
                  style={{
                    height: "45px",
                    width: "45px",
                    borderRadius: "50%",
                    border: "1px solid white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <LuInstagram size={25} />
                </div>
                </a>
                <a href="https://wa.me/09011144689" target="_blank" style={{color:'white'}}>
                <div
                  className="mx-1"
                  style={{
                    height: "45px",
                    width: "45px",
                    borderRadius: "50%",
                    border: "1px solid white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaWhatsapp size={25} />
                </div>
                </a>
                <a href="mailto:arogyayoghome@gmail.com"  style={{color:'white'}}>
                <div
                  className="mx-1"
                  style={{
                    height: "45px",
                    width: "45px",
                    borderRadius: "50%",
                    border: "1px solid white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IoMailOutline size={25} />
                </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7">
            <h3 className="px-2" style={{ fontFamily: "var(--head-font)" ,color:"white"}}>
            Let’s embark on this journey together—start your wellness transformation today!
            </h3>
            <div className="row mt-5">
              <div className="col-12 col-md-4">
                <h5
                  style={{ fontFamily: "var(--head-font)", fontSize: "18px",color:"white" }}
                >
                  Useful Links
                </h5>
                <ul
                  className="p-0 "
                  style={{
                    listStyleType: "none",
                    fontFamily: "var(--para-font)",
                    fontSize: "16px",
                  }}
                >
                  <NavLink to="/yoga-class-near-andheri">
                    <li className="mt-4 text-white">About</li>
                  </NavLink>
                  {Servicedata.slice(0, 1).map((data) => (
                    <NavLink to={data.slug}>
                      <li className="mt-2 text-white">Services</li>
                    </NavLink>
                  ))}
                  <NavLink to="/yoga-centre-andheri">
                    <li className="mt-2 text-white">Contact</li>
                  </NavLink>
                </ul>
              </div>
              <div className="col-12 col-md-4">
                <h5
                  style={{ fontFamily: "var(--head-font)", fontSize: "18px",color:"white" }}
                >
                  Working Time
                </h5>
                <ul
                  className="p-0"
                  style={{
                    listStyleType: "none",
                    fontFamily: "var(--para-font)",
                    fontSize: "16px",color:"white"
                  }}
                >
                  <li className="mt-4">Mon-Fri : 06am to 08pm</li>
                  <li className="mt-2">Sat : 08am to 06pm</li>
                  <li className="mt-2">Sun : 06am to 08pm</li>
                </ul>
              </div>
              <div className="col-12 col-md-4">
                <h5
                  style={{ fontFamily: "var(--head-font)", fontSize: "18px",color:"white" }}
                >
                  Our Address
                </h5>
                <p
                  className="pe-4 mt-4"
                  style={{ pfontFamily: "var(--para-font)", fontSize: "16px" ,color:"white"}}
                >
                  pilot no. 851 first floor Arogya yoghome Sawan Hall no.3 Oshiwara link Rd. Near infinity mall andheri west Mumbai
                </p>
              </div>
            </div>
            <hr />
            <h6
              className="text-center"
              style={{ fontFamily: "var(--head-font)", fontSize: "14px",color:"white" }}
            >
              Copyright © 2025, All Right Reserved Arogya Yoghome
            </h6>
            <h6
              className="text-center"
              style={{ fontFamily: "var(--head-font)", fontSize: "14px",color:"white" }}
            >
              Designed by Shree krishna digital marketing
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
