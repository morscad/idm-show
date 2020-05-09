import React, {useContext, useEffect, useState} from "react";
import { has } from "lodash";
import "./ProjectsPage.scss";
import MainLayout from "../layout/MainLayout";
import { MainContext } from "../App";

const ProjectsPage = () => {
  const [state, setState] = useContext(MainContext);
  const [projectList, setProjectList] = useState();
  useEffect(() => {
    if (has(state, 'projects')) {
      setProjectList(state.projects);
    }
  }, [state ]);
  return (
    <MainLayout>
      <div className={"categoryContainer"}>
      {!!projectList && Object.keys(projectList).length > 0 && Object.keys(projectList).map((category) => {
        return <div className={'categoryBox'}>{category}</div>;
      })}
      </div>
    </MainLayout>
  );
};

export default ProjectsPage;
