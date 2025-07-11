import React, { useState } from "react";
import "./Contacttwo.css";
import { TfiArrowTopRight } from "react-icons/tfi"; // Importing the arrow icon from react-icons
import bannerone from "../Images/banner.jpg";
import { RxArrowTopRight } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import pattern from "../Images/pattern.png";
import $ from "jquery"
import { message } from "antd";
const Contacttwo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [subject, setSubject] = useState("");
  const [contact, setContact] = useState("");

  const submitForm = (event,values) => {
    event.preventDefault();
    if (contact.length!==10) {
        message.error("Mobile Number Must Be Ten Digits")
      }else{
    // console.log("value", values)

    var body =
      '<!DOCTYPE html><html><head><title>Enquiry Lead</title></head><body><div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background-color:#f2f2f2;padding:20px"><h2 style="color:#821f40">Arogya Yoghome</h2><p>Hello</p><p>Thank you for your interest in comment</p><p>Please check your comment which generated from website:</p><table cellpadding="5" style="margin:0"><tr><td style="text-align:left;color:#821f40"><strong>Name:</strong></td><td style="text-align:left">' +
      name +
      '</td></tr><tr><td style="text-align:left;color:#821f40"><strong>Email Id:</strong></td><td style="text-align:left">' +
      email +
      '</td></tr><tr><td style="text-align:left;color:#821f40"><strong>Contact No:</strong></td><td style="text-align:left">' +
      contact +
      '</td></tr><tr><td style="text-align:left;color:#821f40"><strong>Subject:</strong></td><td style="text-align:left">' +
      subject+
      '</td></tr><tr><td style="text-align:left;color:#821f40"><strong>Message:</strong></td><td style="text-align:left">' +
      comment +
      '</td></tr></table><p style="font-weight:700">Best regards,<br>Your Team at Arogya Yoghome</p></div></body></html>';

    $.post(
      "https://skdm.in/server/v1/send_lead_mail.php",
      {
        toEmail: "arogyayoghome@gmail.com",
        fromEmail: "skdmlead@gmail.com",
        bccMail: "skdmlead@gmail.com",
        mailSubject: "New Customer Lead",
        mailBody: body,
        accountName: "jutiepie",
        accountLeadSource: "https://www.arogyayoghome.com/",
        accountLeadName: name,
        accountLeadEmail: email,
        accountLeadPhone: contact,
      },

      function (dataa, status) {
        console.log("data :" + dataa);
        console.log("name:" + values);
      }
    );

    message.success("Your Form has Submitted Our team will contact with You  soon.");
    // form.resetFields();
    // values.preventDefault();
    // return false;
    setName("");
    setEmail("");
    setContact("");
    setComment("");
    setSubject("")
}
  };

  return (
    <>
      <div className="container-fluid p-4 mt-5">
        <p className="px-4 p-1 homeoneserviceh6">Contact Us</p>
        <hr style={{ opacity: "1" }} />
        <div className="d-flex justify-content-between align-items-center">
          <div className="">
            <h4
              className="display-5"
              style={{
                fontFamily: "var(--head-font)",
                fontWeight: "500",
                letterSpacing: "1px",
              }}
            >
              Contact & hire us for your fitness !!
            </h4>
            <h5
              className="mt-4"
              style={{
                fontFamily: "var(--para-font)",
                color: "gray",
                fontWeight: "300",
              }}
            >
              Thank you for considering Arogya Yoghome for your yoga journey. Whether you're looking to experience yoga in Andheri at our studio or prefer the flexibility of online sessions, we're here to guide you every step of the way. We believe in providing a personalized and supportive environment for every student, and we can’t wait to help you achieve your wellness goals.

            </h5>
          </div>
        </div>
        <div className="row  pt-5">
          <div className="col-12 col-md-8 p-4  pe-lg-5">
            <form onSubmit={submitForm}>
              <div className="p-5 bg-white" style={{ borderRadius: "24px" }}>
                <h2
                  className="display-6"
                  style={{ fontFamily: "var(--head-font)", fontWeight: "500" }}
                >
                  Send a message
                </h2>
                <div className="row pt-5">
                  <div className="col-12 col-md-6 px-4">
                    <input className="p-3"
                    onChange={(e)=>{setName(e.target.value)}}
                    value={name}
                    required
                    placeholder="Your Name *" />
                  </div>
                  <div className="col-12 col-md-6 px-4">
                    <input className="p-3"
                    onChange={(e)=>{setEmail(e.target.value)}}
                    value={email}
                    required
                    placeholder="Your Email *" />
                  </div>
                </div>
                <div className="row pt-5">
                  <div className="col-12 col-md-6 px-4">
                    <input className="p-3"
                    onChange={(e)=>{setContact(e.target.value)}}
                    value={contact}
                    required
                    placeholder="Your Phone Number *" />
                  </div>
                  <div className="col-12 col-md-6 px-4">
                    <input className="p-3"
                    onChange={(e)=>{setSubject(e.target.value)}}
                    value={subject}
                    required
                    placeholder="Subject *" />
                  </div>
                </div>
                <div className="row pt-5">
                  <div className="col-12 col-md-12 px-4">
                    <textarea className="p-3"
                    onChange={(e)=>{setComment(e.target.value)}}
                    value={comment}
                    placeholder="Your Message *" />
                  </div>
                </div>
                <button
                  href="#"
                  className="button mt-5 p-3 px-4"
                  type="submit"
                  style={{ "--clr": "var(--primary-color)", color: "white" }}
                >
                  <h6 className="m-0"> SUBMIT NOW</h6>
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
              </div>
            </form>
          </div>
          <div className="col-12 col-md-4 pt-4">
            <article
              class="pbmit-service-style-1 swiper-slide swiper-slide-active"
              role="group"
              aria-label="1 / 6"
            >
              <div class="pbminfotech-post-item">
                <div class="pbminfotech-box-content">
                  <div
                    class="pbmit-box-content-wrap p-0"
                    style={{
                      clipPath:
                        "polygon(6.772% 0%,93.228% 0%,93.228% 0%,94.326% .099%,95.367% .386%,96.339% .846%,97.226% 1.463%,98.016% 2.22%,98.693% 3.103%,99.244% 4.096%,99.655% 5.182%,99.911% 6.348%,100% 7.576%,100% 72.475%,100% 72.475%,99.73% 75.82%,98.982% 78.307%,97.848% 80.093%,96.423% 81.332%,94.8% 82.182%,93.072% 82.796%,91.332% 83.332%,89.673% 83.944%,88.189% 84.789%,86.973% 86.023%,86.973% 86.023%,86.053% 87.654%,85.385% 89.436%,84.844% 91.292%,84.304% 93.147%,83.639% 94.925%,82.723% 96.55%,81.431% 97.945%,79.638% 99.036%,77.216% 99.746%,74.041% 100%,6.772% 100%,6.772% 100%,5.674% 99.901%,4.633% 99.614%,3.661% 99.154%,2.774% 98.537%,1.984% 97.78%,1.307% 96.897%,.756% 95.904%,.345% 94.818%,.089% 93.652%,0% 92.424%,0% 7.576%,0% 7.576%,.089% 6.348%,.345% 5.182%,.756% 4.096%,1.307% 3.103%,1.984% 2.22%,2.774% 1.463%,3.661% .846%,4.633% .386%,5.674% .099%,6.772% 0%)",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "var(--primary-color)",
                        backgroundImage: `url(${pattern})`,
                      }}
                    >
                      <img
                        alt="img" 
                        src={bannerone}
                        style={{
                          height: "250px",
                          width: "100%",
                          objectFit: "cover",
                          opacity: "1",
                        }}
                      />
                      <div className="p-5">
                        <h2
                          style={{
                            fontFamily: "var(--head-font)",
                            color: "white",
                          }}
                        >
                          Relax body and mind for our next session !!
                        </h2>
                        <h5
                          className="mt-4"
                          style={{
                            fontFamily: "var(--head-font)",
                            color: "var(--secondary-color)",
                          }}
                        >
                          Opening days :
                        </h5>
                        <h6
                          className="mt-4"
                          style={{
                            fontFamily: "var(--head-font)",
                            color: "white",
                          }}
                        >
                          Mon - Fri : 06:00am to 08:00pm
                        </h6>
                        <h6
                          className="mt-2"
                          style={{
                            fontFamily: "var(--head-font)",
                            color: "white",
                          }}
                        >
                          Sat - Sun : 08:00am to 06:00pm
                        </h6>
                      </div>
                    </div>
                  </div>
                  <NavLink to="/">
                    <a class="pbmit-service-btn" title="Ardha Chakrasana">
                      <span class="pbmit-button-icon-wrapper">
                        <span class="pbmit-button-icon">
                          <i class="pbmit-base-icon-black-arrow-1">
                            <RxArrowTopRight />
                          </i>
                        </span>
                      </span>
                    </a>
                  </NavLink>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="container" style={{display:"none"}}>
          <p className="lead">Visit Us:
          </p>
          <p className="lead">Our yoga studio is nestled in the peaceful surroundings of Andheri West, offering the perfect space to unwind and reconnect with yourself. Join us in a serene environment where you can nurture your mind, body, and soul.
          </p>
          <p className="lead">Address:
          Address:
Arogya Yoghome,
[pilot no. 851 first floor Arogya yoghome Sawan Hall no.3 Oshiwara link Rd. Near infinity mall andheri west Mumbai

],
Andheri West, Mumbai,
Maharashtra, India

</p>
<p className="lead">Call Us:
For any questions or to schedule your first class, please feel free to reach us at:
[+91-99200 27780]
</p>
<p className="lead">Email Us:
Have inquiries about Andheri or our other offerings? Reach out to us via email, and we’ll respond promptly:
[arogyayoghome@gmail.com

]
</p>
<p className="lead">Online Yoga Classes:
If visiting our studio isn’t convenient, you can still enjoy the transformative experience of yoga in Andheri through our online classes. Designed for busy lifestyles, these sessions bring yoga directly to your home, allowing you to practice on your own schedule. Whether you're new to yoga or looking to deepen your practice, our online offerings are tailored to meet your individual needs.
</p>
<p className="lead">Get in Touch:
We’d love to connect with you! Whether you're interested in joining our yoga studio classes or exploring our online options, don’t hesitate to reach out. We’re here to help with any questions and assist you in starting your yoga practice.
 </p>
 <p className="lead">Stay connected with us on social media for the latest updates, tips, and promotions. We're excited to welcome you to the Arogya Yoghome family!
 </p>
        </div>
      </div>
    </>
  );
};

export default Contacttwo;
