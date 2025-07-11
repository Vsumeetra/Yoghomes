import React from 'react'
import Banner from '../Components/Banner'
import two from '../Images/Banner/THIRTYTHREE.jpg'
import { NavLink } from 'react-router-dom'
import { TfiArrowTopRight } from "react-icons/tfi"; // Importing the arrow icon from react-icons

const Pagenotfound = () => {
  return (
    <>
    <Banner head='404 Page Not Found' banner={two} title='Page Not Found'/>
    <div className="my-5 d-flex justify-content-center">
    <NavLink to="/">
                      <button
                        href="#"
                        className="button"
                        style={{ "--clr": "white" }}
                      >
                        RETURN HOME
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
    </>
  )
}

export default Pagenotfound