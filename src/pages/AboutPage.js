import React from "react";
import about from "../assets/images/about.png";
import "./AboutPage.scss";
import MainLayout from "../layout/MainLayout";
const AboutPage = () => {
  return (
    <MainLayout>
      <div className={"aboutContainer"}>
        <div className={"aboutImage"}>
          <img src={about} />
        </div>
        <div className={"aboutContent"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat
          cursus varius. Proin malesuada finibus ante, ac dignissim velit
          viverra nec. Pellentesque pulvinar molestie nisl, sed venenatis nulla
          vestibulum vitae. Ut ullamcorper condimentum orci sit amet fermentum.
          Aliquam pellentesque libero nec ipsum egestas laoreet. Proin pretium
          nulla quis dictum venenatis. Phasellus nec dolor nec eros convallis
          lobortis.
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
