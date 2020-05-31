import React from "react";
import loadingGif from "../images/loader.gif";
const Loading = () => {
    return (
        <div className="loading">

            <img src={loadingGif} alt="" />
        </div>
    );
};

export default Loading;