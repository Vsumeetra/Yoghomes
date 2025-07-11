import React from "react";
import { TfiArrowTopRight } from "react-icons/tfi";
import "./Hometrainer.css";
import { Slide } from "react-awesome-reveal";
import Trainerdata from "../Data/Trainerdata";
import { NavLink } from "react-router-dom";

const Hometrainer = () => {
  return (
    <div className="container-fluid p-4 my-5">
      <div className="d-flex justify-content-center pb-4 flex-wrap">
        <Slide>
          <h2 className="display-1" style={{ fontWeight: "600", fontFamily: "var(--head-font)" }}>
            QUALIFIED
          </h2>
        </Slide>
        <Slide direction="right">
          <h2
            className="display-1 mx-2"
            style={{
              fontWeight: "600",
              fontFamily: "var(--head-font)",
              WebkitTextFillColor: "#e9f0ec",
              textShadow: "1px 1px 0 rgba(24, 26, 23, .8), -1px -1px 0 rgba(24, 26, 23, .8), 1px -1px 0 rgba(24, 26, 23, .8), -1px 1px 0 rgba(24, 26, 23, .8), 1px 1px 0 rgba(24, 26, 23, .8)",
            }}
          >
            INSTRUCTORS
          </h2>
        </Slide>
      </div>

      <div className="row flex-nowrap overflow-auto gy-4">
        {Trainerdata.map((data, index) => (
          <div className="col-lg-3 col-md-6" key={index}>
            <div className="hometrainercard h-100 p-3 text-center">
              <img
                src={data.img}
                alt={`Photo of ${data.name}`}
                className="hometrainercardimg mb-3"
              />
              <h4 className="trainer-name">{data.name}</h4>
              <h6 className="trainer-designation">/ {data.designation}</h6>
              <p className="trainer-desc">{data.shortdesc}</p>
              <NavLink to={`/trainer/${data.id}`}>
                <button className="button mt-2" style={{ border: "1px solid black" }}>
                  KNOW MORE
                  <span className="button__icon-wrapper">
                    <TfiArrowTopRight size={16} />
                    <TfiArrowTopRight size={16} color="white" className="button__icon-svg--copy" />
                  </span>
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hometrainer;
