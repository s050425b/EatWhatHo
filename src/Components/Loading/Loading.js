import React from "react";
import "./Loading.css";
import logo from "../../image/wedding-dinner.png";

export function Loading({
    isLoading
}) {
    return (
        <div style={{visibility: isLoading? "visible": "hidden"}}className="Loading">
            <img style={{animationIterationCount: isLoading? "infinite" : "1"}} src={logo} />
        </div>
    );

}