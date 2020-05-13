import React, { useContext, useEffect, useState } from "react";
import "./ProjectDetailsPage.scss";
import MainLayout from "../layout/MainLayout";
import { useParams } from "react-router-dom";
import { MainContext } from "../App";
import { has } from "lodash";
import { faInstagram, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectDetailsPage = () => {
  const { projectID } = useParams();
  const [state, setState] = useContext(MainContext);
  const [currentProject, setCurrentProject] = useState();
  const [playerDimensions, setPlayerDimensions] = useState({
    width: 0,
    height: 0
  });
  const updateDimensions = () => {
    let w = 0;
    let h = 0;
    if (window.innerWidth > 1096) {
      w = 1096;
    } else {
      w = window.innerWidth - 20;
    }
    h = (w * 1080) / 1920;
    setPlayerDimensions({ width: w, height: h });
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    if (playerDimensions.width === 0) {
      updateDimensions();
    }
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [window]);
  useEffect(() => {
    if (has(state, "projects") && Object.keys(state.projects).length > 0) {
      Object.keys(state.projects).map(category => {
        state.projects[category].map(project => {
          if (project.id.toString() === projectID.toString()) {
            setCurrentProject(project);
          }
        });
      });
    }
  }, [state]);

  return (
    <MainLayout>
      {currentProject && (
        <div className={"mainProjectContainer"}>
          <div className={"projectTitle"}>{currentProject.projectTitle}</div>
          <div className={"projectHeader"}>
            <div className={"projectSubtitle"}>
              {currentProject.submissionType}
            </div>
            {!!currentProject.onlineURL && currentProject.onlineURL !== "" && (
              <div className={"projectSubtitleWebsite"}>
                &nbsp;-&nbsp;<a
                  href={currentProject.onlineURL}
                  target={"_blank"}
                  referrerPolicy={"no-referrer"}
                  rel={"noreferrer nofollow"}
                >
                  Website
                </a>
              </div>
            )}
          </div>
          <div className={"projectCreators"}>
            Created By: {currentProject.principleName} (
            {currentProject.studyYear}){" "}
            {currentProject.otherNames && currentProject.otherNames !== ""
                ? `, ${currentProject.otherNames}`
                : ""}
            {currentProject.instagram && currentProject.instagram !== "" && (
                <span>
                    <a
                        href={currentProject.instagram}
                        target={"_blank"}
                        referrerPolicy={"no-referrer"}
                        rel={"noreferrer nofollow"}
                    >
                      <FontAwesomeIcon
                          className={"instagramLink"}
                          icon={faInstagram}
                      />
                    </a>
                  </span>
            )}
          </div>
          <div className={"projectCreators"}>
            {currentProject.portfolioURL &&
            currentProject.portfolioURL !== "" && (
                <span>
                      <a
                          href={currentProject.portfolioURL}
                          target={"_blank"}
                          referrerPolicy={"no-referrer"}
                          rel={"noreferrer nofollow"}
                      >
                        Portfolio
                      </a>
                    </span>
            )}
          </div>
          <div className={"projectDetailsContainer"}>
            <div className={"projectCoverImage"}>
              <img
                src={currentProject.coverImage.split("open?").join("uc?")}
                alt={"Cover Image"}
              />

            </div>
            <div className={"projectDescription"}>
              <div dangerouslySetInnerHTML={{__html:currentProject.longDescription }}></div>
              {!!currentProject.otherDocumentation &&
                currentProject.otherDocumentation !== "" && (
                  <>
                    <div className={"moreDocumentation"}>
                      <a
                        href={currentProject.otherDocumentation}
                        target={"_blank"}
                        referrerPolicy={"no-referrer"}
                        rel={"noreferrer nofollow"}
                      >
                        Further Project Documentations
                      </a>
                    </div>
                  </>
                )}
              {!!currentProject.usedSoftware &&
                currentProject.usedSoftware !== "" && (
                  <div className={"projectTech"}>
                    <div>Software/Materials Used to Make The Project:</div>
                    <div>{currentProject.usedSoftware}</div>
                  </div>
                )}
            </div>
          </div>
          <div>
            <div className={"mediaComponents"}>Project Media</div>
            {!!currentProject.audioURL && !!currentProject.audioURL !== "" && (
              <div className={"soundcloudLink"}>
                <a
                  href={currentProject.audioURL}
                  target={"_blank"}
                  referrerPolicy={"no-referrer"}
                  rel={"noreferrer nofollow"}
                >
                  <FontAwesomeIcon icon={faSoundcloud} /> Listen on SoundCloud
                </a>
              </div>
            )}

            {!!currentProject.videoURL && !!currentProject.videoURL !== "" && (
              <div className={"projectVideoContainer"}>
                {currentProject.videoURL.indexOf("vimeo") > -1 && (
                  <iframe
                    src={`https://player.vimeo.com/video/${
                      currentProject.videoURL.split("vimeo.com/")[1]
                    }`}
                    width={playerDimensions.width}
                    height={playerDimensions.height}
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  ></iframe>
                )}
                {currentProject.videoURL.indexOf("youtu") > -1 && (
                  <iframe
                    width={playerDimensions.width}
                    height={playerDimensions.height}
                    src={`https://www.youtube.com/embed/${
                      currentProject.videoURL.split(".com/").length > 1
                        ? currentProject.videoURL.split(".com/")[1]
                        : currentProject.videoURL.split(".be/").length > 1
                        ? currentProject.videoURL.split(".be/")[1]
                        : ""
                    }`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            )}
            {!!currentProject.secondaryVideoURL &&
              !!currentProject.secondaryVideoURL !== "" && (
                <div className={"projectVideoContainer"}>
                  {currentProject.secondaryVideoURL.indexOf("vimeo") > -1 && (
                    <iframe
                      src={`https://player.vimeo.com/video/${
                        currentProject.secondaryVideoURL.split("vimeo.com/")[1]
                      }`}
                      width={playerDimensions.width}
                      height={playerDimensions.height}
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    ></iframe>
                  )}
                  {currentProject.secondaryVideoURL.indexOf("youtu") > -1 && (
                    <iframe
                      width={playerDimensions.width}
                      height={playerDimensions.height}
                      src={`https://www.youtube.com/embed/${
                        currentProject.secondaryVideoURL.split(".com/").length >
                        1
                          ? currentProject.secondaryVideoURL.split(".com/")[1]
                          : currentProject.secondaryVideoURL.split(".be/")
                              .length > 1
                          ? currentProject.secondaryVideoURL.split(".be/")[1]
                          : ""
                      }`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              )}
            {!!currentProject.finalImageList &&
              !!currentProject.finalImageList !== "" && (
                <div className={"imageMediaContainer"}>
                  {currentProject.finalImageList.split(",").length > 1 && (
                    <>
                      {currentProject.finalImageList
                        .split(",")
                        .map((imageURL, index) => {
                          return (
                            <div key={`otherImages_${index}`}>
                              {imageURL.indexOf("open?") > -1 && (
                                <img
                                  src={imageURL.split("open?").join("uc?")}
                                />
                              )}
                            </div>
                          );
                        })}
                    </>
                  )}
                  {currentProject.finalImageList.split(",").length <= 1 &&
                    currentProject.finalImageList.indexOf("open?") > -1 && (
                      <img
                        src={currentProject.finalImageList
                          .split("open?")
                          .join("uc?")}
                      />
                    )}
                </div>
              )}
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default ProjectDetailsPage;
