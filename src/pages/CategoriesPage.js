import React, { useContext, useEffect, useState } from "react";
import { has } from "lodash";
import "./CategoriesPage.scss";
import MainLayout from "../layout/MainLayout";
import { MainContext } from "../App";
import { Link } from "react-router-dom";

const CategoriesPage = () => {
  const [state, setState] = useContext(MainContext);
  const [projectList, setProjectList] = useState();
  useEffect(() => {
    if (has(state, "projects")) {
      setProjectList(state.projects);
    }
  }, [state]);
  return (
    <MainLayout>
      <div className={"categoryContainer"}>
        {!!projectList &&
          Object.keys(projectList).length > 0 &&
          Object.keys(projectList).map((category, index) => {
            return (
              <Link to={`/category/${category.toLowerCase().split(" ").join("-")}`} style={{ textDecoration: "none" }} key={`category_${index}`}>
                <div className={"categoryBox"}>{category}</div>
              </Link>
            );
          })}
      </div>
    </MainLayout>
  );
};

export default CategoriesPage;
