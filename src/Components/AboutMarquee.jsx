import React, { useEffect } from "react";
const AboutMarquee = () => {
  useEffect(() => {
    const marquee = document.getElementById("marquee");
    const speed = 1; // Adjust the speed of the scrolling
    let offset = 0;

    const scroll = () => {
      offset -= speed;
      if (offset <= -marquee.offsetWidth) {
        offset = 0;
      }
      marquee.style.transform = `translateX(${offset}px)`;
      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);
  return (
    <>
      <div className="container-fluid my-5">
        <div className="marquee-wrapper">
          <div className="marquee" id="marquee">
            <article className="pbmit-marquee-effect-style-1">
              <div className="pbmit-tag-wrapper">
                <h2
                  className="display-1 pbmit-element-title"
                  data-text="Arogya Yoghome"
                >
                  Arogya Yoghome
                </h2>
              </div>
            </article>
            <article className="pbmit-marquee-effect-style-1">
              <div className="pbmit-tag-wrapper">
                <h2
                  className="display-1 pbmit-element-title"
                  data-text="Yoga Threapy Yoga"
                >
                  Yoga Threapy Yoga
                </h2>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMarquee;
