import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Trainerdetail from '../Data/Trainerdetail';
import Banner from '../Components/Banner';
import './TrainerPage.css';
import six from '../Images/Banner/SIX.jpg';

const TrainerDet = () => {
  const { trainerId } = useParams();
  const trainer = Trainerdetail.find(t => t.id === trainerId);

  if (!trainer) {
    return <h2>Trainer Not Found</h2>;
  }
     useEffect(() => {
              window.scrollTo(0, 0);
          },[]);

  return (
    <>
      <Banner head="Yoga Trainer" banner={six} title={trainer.name} />
      <div className="trainer-container mb-5">
        <div className="trainer-image">
          <img src={trainer.avatar} alt={trainer.name} className="trainer-avatar" />
        </div>
        <div className="trainer-content">
          <p className="px-4 mt-5 p-1 homeoneserviceh6">About Trainer</p>
          <hr className="mt-4" style={{ opacity: "1" }} color="#181a17" />
          <h2
            className="display-5"
            style={{ fontFamily: "var(--head-font)", fontWeight: "500" }}
          >
            {trainer.name} – {trainer.title} ({trainer.experience})
          </h2>
          {trainer.about.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrainerDet;
