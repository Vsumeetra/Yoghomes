import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import Servicedata from '../Data/Servicedata';
import bannerone from "../Images/banner.jpg";
import Banner from '../Components/Banner';
import { RxArrowTopRight } from "react-icons/rx";
import Servicetype from '../Data/Servicetype';
// import { MetaTags } from 'react-meta-tags';

const Serviceparticular = () => {
    const path = useLocation();
  const search = path.pathname;
  const type = Servicetype.find(data=>data.slug===search);

  console.log(search)
  const servicedata=Servicedata.filter(data=>data.type===type.name)
  return (
    <>
     {/* <MetaTags>
                                    <title>{type.title}</title>
                                    <meta title={type.title} />
                                    <meta name="description" content={type.description} />
                                    <meta name="keywords" content="Best Yoga Trainner in Andheri , Best Yoga Classes In Andheri  West , Doctor Consultation In Andheri West , Yoga In Andheri West , Yoga Class Near Andheri , Top Yoga Centre in Andheri , Personal Yoga Classes in Andheri , Group Yoga Classes in Andheri , Corporate Yoga Classes in Andheri , Women's yoga Classes in Andheri ,  Couple Yoga Classes in Andheri , Corporate yoga programs in Andheri , Occupational Therapy Yoga Classes in Andheri , Online Yoga Classes In Andheri  , Best Yoga Therapists in Andheri  , Dietitian Nutritionists in Andheri  , Yoga Therapists in Andheri  , vinyasa yoga class in andheri , Traditional Yoga in andheri , Best Ashtanga Yoga in Andheri , Hatha Yoga Classes in Andheri , Power Yoga Classes in Andheri , raja yoga classes in andheri , Chair Yoga in andheri , Straps band yoga in andheri , Best competitive yogasana in andheri , Pranic Healing Centres in Andheri , Yoga for Aboard , Resort and Tourist Yoga , Orthopedic Online Consultant in Andheri , Online Gynic Consultant in Andheri , Motivational Consultation in Andheri , Yoga Expert in Andheri" />
                                    <link rel="canonical" href={`https://www.arogyayoghome.com${type.slug}`} />
                                    <meta http-equiv="cache-control" content="no-cache" />
                                    <meta http-equiv="expires" content="0" />
                                    <meta http-equiv="pragma" content="no-cache" />
                                    <meta property="og:title" content={type.title} />
                                    <meta property="og:locale" content="en_US" />
                                    <meta property="og:type" content="website" />
                                    <meta property="og:url" content="https://www.arogyayoghome.com/" />
                                    <meta property="og:description" content={type.description} />
                                    <meta property="og:image" content="https://www.arogyayoghome.com/assets/logo-B1E64yEd.png" />
                                  </MetaTags> */}
              <Banner banner={bannerone} head={type.head} title={type.name} />
              <div className="container-fluid px-5 my-5">
                <div className="row">
        
              {servicedata.map((data)=>(
                <div className="col-12 col-md-6 col-lg-4 my-4">
                  <NavLink to={data.slug}>
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
                          position: "relative",
                          backgroundColor: "black",
                        }}
                      >
                        <img
                          alt="img"
                          src={data.image}
                          style={{
                            height: "375px",
                            width: "100%",
                            objectFit: "cover",
                            opacity: ".5",
                          }}
                        />
                        <div
                          style={{ position: "absolute", top: "0", left: "0" }}
                          className="p-4"
                        >
                          <p
                            className="px-4  p-1 homeoneserviceh6"
                            style={{
                              color: "white",
                              border: "1px solid white",
                              fontSize: "12px",
                              fontWeight: "400",
                            }}
                          >
                            {data.type}
                          </p>
                        </div>
                      </div>
                    </div>
                    <NavLink to={data.slug}>
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
                  <h3
                    className="mt-4 mb-0 p-1"
                    style={{ color: "var(--primary-color)", fontFamily: "var(--head-font)" }}
                  >
                    {data.name}
                  </h3>
                 
                  <NavLink
                    to={data.slug}
                    class="pbmit-link"
                    href="service-details.html"
                  ></NavLink>
                </div>
              </article>
              </NavLink>
              </div>
              ))}

                </div>
            </div>
    </>
  )
}

export default Serviceparticular
