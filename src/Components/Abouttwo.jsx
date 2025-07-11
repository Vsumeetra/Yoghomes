import React from "react";

import { TfiArrowTopRight } from "react-icons/tfi"; // Importing the arrow icon from react-icons
import "./Abouttwo.css";
import Servicedata from "../Data/Servicedata";
import { NavLink } from "react-router-dom";
const Abouttwo = () => {
  const types = new Set(Servicedata.map(data=>data.type))
  console.log(types)
  return (
    <>
      <div className="container-fluid p-lg-5">
        {Servicedata.filter(data=>data.type==='Expert Consultation').slice(0,3).map((data,i)=>(
        <div className="row mt-5 abouttworow">
          <div className="col-12 col-md-6 p-0">
            <img
                                    alt="img"

              src={data.image}
              style={{
                // width: "90%",
                height: "350px",
                objectFit: "cover",
                borderRadius: "32px",
              }}
              className="abouttwoimg"
            />
          </div>
          <div className="col-12 col-md-6 p-5 d-flex  align-items-center">
            <div className="position-relative">
              <h2
                className="display-1"
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  fontFamily: "var(--head-font)",
                  fontWeight: "800",
                  WebkitTextFillColor: "white",
                  opacity: ".2",
                  textShadow:
                    "1px 1px 0 rgba(24, 26, 23,.8), -1px -1px 0 rgba(24, 26, 23,.8), 1px -1px 0 rgba(24, 26, 23,.8), -1px 1px 0 rgba(24, 26, 23,.8), 1px 1px 0 rgba(24, 26, 23,.8)",
                }}
              >
                0{i+1}
              </h2>
              <h2 className="mt-4" style={{ fontFamily: "var(--head-font)" }}>
                {Array.from(types)[i]}
              </h2>
              <p
                className="mt-5"
                style={{
                  fontFamily: "var(--para-font)",
                  color: "gray",
                  fontWeight: "400",
                  fontSize: "18px",
                }}
              >
                {data.desc[0].length>150?data.desc[0].slice(0,150)+'...':data.desc[0]}
              </p>
              <NavLink to={Servicedata.find(data=>data.type===Array.from(types)[i]).slug}>
              <button
                href="#"
                className="button mt-4"
                style={{ "--clr": "transparent", border: "1px solid black" }}
              >
                <h6
                  style={{
                    display: "flex",
                    margin: "auto",
                    fontFamily: "var(--head-font)",
                    fontSize: "14px",
                  }}
                >
                  {" "}
                  READ MORE
                </h6>
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
          </div>
        </div>
        ))}
       
      </div>
    </>
  );
};

export default Abouttwo;
