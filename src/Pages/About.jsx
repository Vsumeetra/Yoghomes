import React, { useEffect } from 'react'
import Banner from '../Components/Banner'
import bannertwo from '../Images/banner.jpg'
import Aboutone from '../Components/Aboutone'
import Abouttwo from '../Components/Abouttwo'
import Aboutthree from '../Components/Aboutthree'
import AboutMarquee from '../Components/AboutMarquee'
import Hometrainer from '../Components/Hometrainer'
import Hometestimonial from '../Components/Hometestimonial'
import { MetaTags } from 'react-meta-tags'
import six from  '../Images/Banner/SIX.jpg'
const About = () => {
   useEffect(() => {
            window.scrollTo(0, 0);
        },[]);
  return (
    <>
     <MetaTags>
                    <title>Yoga Class Near Andheri | Arogya Yoghome LLP</title>
                    <meta title="Yoga Class Near Andheri | Arogya Yoghome LLP" />
                    <meta name="description" content="Discover the best Yoga Class Near Andheri at Arogya Yoghome LLP, offering holistic wellness and personalized yoga sessions." />
                    <meta name="keywords" content="Best Yoga Trainner in Andheri , Best Yoga Classes In Andheri  West , Doctor Consultation In Andheri West , Yoga In Andheri West , Yoga Class Near Andheri , Top Yoga Centre in Andheri , Personal Yoga Classes in Andheri , Group Yoga Classes in Andheri , Corporate Yoga Classes in Andheri , Women's yoga Classes in Andheri ,  Couple Yoga Classes in Andheri , Corporate yoga programs in Andheri , Occupational Therapy Yoga Classes in Andheri , Online Yoga Classes In Andheri  , Best Yoga Therapists in Andheri  , Dietitian Nutritionists in Andheri  , Yoga Therapists in Andheri  , vinyasa yoga class in andheri , Traditional Yoga in andheri , Best Ashtanga Yoga in Andheri , Hatha Yoga Classes in Andheri , Power Yoga Classes in Andheri , raja yoga classes in andheri , Chair Yoga in andheri , Straps band yoga in andheri , Best competitive yogasana in andheri , Pranic Healing Centres in Andheri , Yoga for Aboard , Resort and Tourist Yoga , Orthopedic Online Consultant in Andheri , Online Gynic Consultant in Andheri , Motivational Consultation in Andheri , Yoga Expert in Andheri" />
                    <link rel="canonical" href="https://www.arogyayoghome.com/yoga-class-near-andheri" />
                    <meta http-equiv="cache-control" content="no-cache" />
                    <meta http-equiv="expires" content="0" />
                    <meta http-equiv="pragma" content="no-cache" />
                    <meta property="og:title" content=" Yoga Class Near Andheri | Arogya Yoghome LLP" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.arogyayoghome.com/" />
                    <meta property="og:description" content="Discover the best Yoga Class Near Andheri at Arogya Yoghome LLP, offering holistic wellness and personalized yoga sessions." />
                    <meta property="og:image" content="https://www.arogyayoghome.com/assets/logo-B1E64yEd.png" />
                  </MetaTags>
    <Banner head='Yoga Class Near Andheri ' banner={six} title='ABOUT US'/>
    <Aboutone/> 
    <Abouttwo/>
    <AboutMarquee/>
    <Aboutthree/>
   <Hometrainer/>
   <Hometestimonial/>
    </>
  )
}

export default About
