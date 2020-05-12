import React, { useContext, useEffect, useState } from "react";
import { has } from "lodash";
import "./CategoriesPage.scss";
import MainLayout from "../layout/MainLayout";
import { MainContext } from "../App";
import { Link } from "react-router-dom";

import animation from '../assets/images/animation.jpg';
import audio from '../assets/images/audio.jpg';
import filmVideo from '../assets/images/film-video.jpg';
import game from '../assets/images/game.jpg';
import graphicsImage from '../assets/images/graphics---image.jpg';
import installation from '../assets/images/installation.jpg';
import uiux from '../assets/images/ui-ux.jpg';
import wearables from '../assets/images/wearables.jpg';
import web from '../assets/images/web.jpg';
import xr from '../assets/images/xr.jpg';

const CategoriesPage = () => {
  const [state, setState] = useContext(MainContext);
  const [projectList, setProjectList] = useState();
  const [catImages, setCatImages] = useState();
  useEffect(() => {
    if (has(state, "projects")) {
      setProjectList(state.projects);
      let images = {};
      images["animation"] = animation;
      images["audio"] = audio;
      images["film-video"] = filmVideo;
      images["game"] = game;
      images["graphics---image"] = graphicsImage;
      images["installation"] = installation;
      images["ui-ux"] = uiux;
      images["wearables"] = wearables;
      images["web"] = web;
      images["xr"] = xr;

      setCatImages(images);
    }
  }, [state]);
  return (
    <MainLayout>
      <div className={"categoryContainer"}>
        {!!projectList &&
          Object.keys(projectList).length > 0 &&
          Object.keys(projectList).map((category, index) => {
            const catname = category.toLowerCase().split(" ").join("-").split("/").join("-").split("&").join("-");
            return (
              <Link to={`/category/${catname}`} style={{ textDecoration: "none" }} key={`category_${index}`}>
                <div className={"categoryBox"} style={{backgroundImage: `url(${catImages[catname]})`}}></div>
              </Link>
            );
          })}
      </div>
    </MainLayout>
  );
};

export default CategoriesPage;
