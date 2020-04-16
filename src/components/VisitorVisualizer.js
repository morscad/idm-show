import React, { useContext } from "react";
import "./VisitorVisualizer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const VisitorVisualizer = ({ context }) => {
  const [state, setState] = useContext(context);
  return (
    <div className={'visualizerContainer'}>
      <div className={'title'}>{state.users.length} users are currently live on this site</div>
      <div className={"usersContainer"}>
        {state.users.map((user, index) => {
          return (
            <div key={`user_${index}`} className={'user'}>
              <FontAwesomeIcon icon={faUser} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VisitorVisualizer;
