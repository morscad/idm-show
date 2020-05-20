import React, {useContext} from "react";
import "./LiveStage.scss";
import { useParams } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import {MainContext} from "../App";

const LiveStage = () => {
    let { stageID } = useParams();
    const [state] = useContext(MainContext);
    console.log(stageID, state);
    return (<MainLayout>
        <div className={"liveVideo"}>
            {!!state.settings.vimeoLink1 && Number(stageID) === 1 && (<iframe
                src={state.settings.vimeoLink1}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                className={"videoContainer"}
                title={`Live stream on stage 1`}
            ></iframe>)}
            {!!state.settings.vimeoLink2 && Number(stageID) === 2 && (<iframe
                src={state.settings.vimeoLink2}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                className={"videoContainer"}
                title={`Live stream on stage 2`}
            ></iframe>)}
        </div>
    </MainLayout>);
}

export default LiveStage;
