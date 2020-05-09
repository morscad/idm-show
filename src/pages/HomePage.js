import React from "react";
import MainLayout from "../layout/MainLayout";

import "./HomePage.scss";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/images/student-work/1.jpg";
import img2 from "../assets/images/student-work/2.jpg";
import img3 from "../assets/images/student-work/3.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import LiveEvents from "../components/LiveEvents";
import ByCategory from "../components/ByCategory";

const HomePage = () => {
  return (
    <MainLayout>
      <div className={"carouselContainer"}>
        {/*<Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          stopOnHover={false}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
        >
          <div>
            <img src={img1} alt={'Project 1'} />
            <div className="liveNotification">Live in 3h 21m</div>
          </div>
          <div>
            <img src={img2} alt={'Project 2'} />
          </div>
          <div>
            <img src={img3}alt={'Project 3'}  />
          </div>
        </Carousel>*/}
      </div>
      <div className={"liveVideo"}>
        <iframe
          src="https://player.vimeo.com/video/416506564"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          className={"videoContainer"}
        ></iframe>
      </div>
    </MainLayout>
  );
};

export default HomePage;
