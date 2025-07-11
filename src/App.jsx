import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Service from "./Pages/Service";
import Servicedata from "./Data/Servicedata";
import Serviceparticular from "./Pages/Serviceparticular";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import Pagenotfound from "./Pages/Pagenotfound";
import Servicetype from "./Data/Servicetype";
import Trainerdet from './Pages/Trainerdet';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <>
                <Outlet />
                <Footer />
                <a href="tel:+91-99200 27780">
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    position: "fixed",
                    bottom: 10,
                    left: 10,
                    zIndex: 11,
                    height: "45px",
                    width: "45px",
                    borderRadius: "50%",
                    backgroundColor: "#1E90FF",
                  }}
                >
                  <IoCall color="white" size="21" />
                </div>
                </a>
                <a href="https://wa.me/9920027780" target="_blank">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      position: "fixed",
                      bottom: 10,
                      right: 10,
                      zIndex: 11,
                      height: "45px",
                      width: "45px",
                      borderRadius: "50%",
                      backgroundColor: "#25D366",
                    }}
                  >
                    <FaWhatsapp color="white" size="21" />
                  </div>
                </a>
              </>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/yoga-class-near-andheri" element={<About />} />
            <Route path="/yoga-centre-andheri" element={<Contact />} />
            <Route path="*" element={<Pagenotfound />} />
            <Route path="/trainer/:trainerId" element={<Trainerdet />} />

            {Servicedata.map((data) => (
              <Route path={data.slug} element={<Service />} />
            ))}

            {Servicetype.map((data) => (
              <Route
                path={data.slug}
                element={<Serviceparticular />}
              />
            ))}
            {/*           
          
          
          <Route path="/termsofuse" element={<Termsofuse />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<CheckOutPage  cartItem={cartItems} deletefromcart={deletefromcart}/>} />
          <Route path="/success/:id" element={<SuccessPage updatecart={updatecart}/>} />
          <Route path="/failed/:id" element={<FailedPage />} />
          <Route path="/shippinganddelivery" element={<Shippinganddelivery />} />
          <Route path="/exchangepolicy" element={<Exchangepolicy />} />
          <Route path="/pay" element={<Pay />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
