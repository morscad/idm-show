import React, { useContext, useEffect, useState } from "react";
import { has } from "lodash";
import "./ProjectsPage.scss";
import MainLayout from "../layout/MainLayout";
import { MainContext } from "../App";
import { Link, useParams } from "react-router-dom";

const ProjectsPage = () => {
  let { categoryName } = useParams();
  const [state, setState] = useContext(MainContext);
  const [projectList, setProjectList] = useState();
  useEffect(() => {
    if (has(state, "projects") && Object.keys(state.projects).length > 0) {
      let projects = [];
      Object.keys(state.projects).map(category => {
        if (
          category
            .toLowerCase()
            .split(" ")
            .join("-")
            .split("/")
            .join("-")
            .split("&")
            .join("-") === categoryName
        ) {
          projects = state.projects[category];
        }
      });
      setProjectList(projects);
    }
  }, [state]);
  return (
    <MainLayout>
      {!!projectList && projectList.length > 0 && (
        <>
          <div className={"projectListingTitle"}>
            PROJECTS - {projectList[0].conceptCategory}
          </div>
          <div className={"projectListingContainer"}>
            {projectList.map((project, index) => {
              return (
                <div className={"projectName"} key={`projectTitle_${index}`}>
                  <Link
                    to={`/project/${project.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {project.projectTitle} -{" "}
                    <span className={"authors"}>
                      {project.principleName}
                      {project.otherNames && project.otherNames !== ""
                        ? `, ${project.otherNames}`
                        : ""}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </>
      )}
    </MainLayout>
  );
};

export default ProjectsPage;
