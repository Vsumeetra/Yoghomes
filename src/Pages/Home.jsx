import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Homeone from '../Components/Homeone'
import Homemarqueeone from '../Components/Homemarqueeone'
import Homeabout from '../Components/Homeabout'
import Homethree from '../Components/Homethree'
import Hometrainer from '../Components/Hometrainer'
import Hometestimonial from '../Components/Hometestimonial'
import Homewcu from '../Components/Homewcu'
import Footer from '../Components/Footer'
// import { MetaTags } from 'react-meta-tags'


const Home = () => {
  useEffect(() => {
          window.scrollTo(0, 0);
      },[]);
  return (
    <>
    {/* <MetaTags>
                <title>Best Yoga Trainner in Andheri | Arogya Yoghome LLP</title>
                <meta title="Best Yoga Trainner in Andheri | Arogya Yoghome LLP" />
                <meta name="description" content="Arogya Yoghome LLP offers the Best Yoga Trainer in Andheri, providing personalized yoga sessions for enhanced health and wellness." />
                <meta name="keywords" content="Best Yoga Trainner in Andheri , Best Yoga Classes In Andheri  West , Doctor Consultation In Andheri West , Yoga In Andheri West , Yoga Class Near Andheri , Top Yoga Centre in Andheri , Personal Yoga Classes in Andheri , Group Yoga Classes in Andheri , Corporate Yoga Classes in Andheri , Women's yoga Classes in Andheri ,  Couple Yoga Classes in Andheri , Corporate yoga programs in Andheri , Occupational Therapy Yoga Classes in Andheri , Online Yoga Classes In Andheri  , Best Yoga Therapists in Andheri  , Dietitian Nutritionists in Andheri  , Yoga Therapists in Andheri  , vinyasa yoga class in andheri , Traditional Yoga in andheri , Best Ashtanga Yoga in Andheri , Hatha Yoga Classes in Andheri , Power Yoga Classes in Andheri , raja yoga classes in andheri , Chair Yoga in andheri , Straps band yoga in andheri , Best competitive yogasana in andheri , Pranic Healing Centres in Andheri , Yoga for Aboard , Resort and Tourist Yoga , Orthopedic Online Consultant in Andheri , Online Gynic Consultant in Andheri , Motivational Consultation in Andheri , Yoga Expert in Andheri" />
                <link rel="canonical" href="https://www.arogyayoghome.com/" />
                <meta http-equiv="cache-control" content="no-cache" />
                <meta http-equiv="expires" content="0" />
                <meta http-equiv="pragma" content="no-cache" />
                <meta property="og:title" content=" Best Yoga Trainner in Andheri | Arogya Yoghome LLP" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.arogyayoghome.com/" />
                <meta property="og:description" content="Arogya Yoghome LLP offers the Best Yoga Trainer in Andheri, providing personalized yoga sessions for enhanced health and wellness." />
                <meta property="og:image" content="https://www.arogyayoghome.com/assets/logo-B1E64yEd.png" />
              </MetaTags> */}
    <Navbar/>
    <Homeone/>
    <Homemarqueeone/>
    <Homeabout/>
    <Homethree/>
    <Hometrainer/>
    <Homewcu/>
    <Hometestimonial/>
    
    </>
  )
}

export default Home
