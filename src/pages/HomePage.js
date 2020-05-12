import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";
import { Link } from "react-router-dom";

import "./HomePage.scss";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

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
      <div className={"streamContainer"}>
        <Link to={"/live-stage/1"} style={{ textDecoration: 'none' }}>
          <div className={"streamBubble"}>
            <div className={"streamBubbleTitle"}>Live Stream 1</div>
            <div className={"streamBubbleBody"}>
              <div>
                <div className={"currentlyStreamingTitle"}>
                  {" "}
                  Currently Streaming
                </div>
                <div className={"currentlyStreamingBody"}> Student XXXX</div>
                <div className={"nextStreamingTitle"}> Next stream at</div>
                <div className={"nextStreamingBody"}> 3:00PM</div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/live-stage/2"} style={{ textDecoration: 'none' }}>
          <div className={"streamBubble"}>
            <div className={"streamBubbleTitle"}>Live Stream 2</div>
            <div className={"streamBubbleBody"}>
              <div>
                <div className={"currentlyStreamingTitle"}>
                  {" "}
                  Currently Streaming
                </div>
                <div className={"currentlyStreamingBody"}> Student YYYY</div>
                <div className={"nextStreamingTitle"}> Next stream at</div>
                <div className={"nextStreamingBody"}> 3:15PM</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </MainLayout>
  );
};

export default HomePage;
