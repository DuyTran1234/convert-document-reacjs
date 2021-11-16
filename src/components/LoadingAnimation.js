import React from "react";
import "../css/loading.css";

function LoadingAnimation() {
    return (
        <div className={"lds-ellipsis"}><div></div><div></div><div></div><div></div></div>
    );
}

export default LoadingAnimation;