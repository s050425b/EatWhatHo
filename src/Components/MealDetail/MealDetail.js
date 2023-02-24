import React, { useEffect } from "react";
import './MealDetail.css';

export function MealDetail({
    id,
    name,
    duration,
    image,
    source,
    healthScore,
    ingredArr,
    dishTypes
}) {
    let jmxArr = [];
    let jmxArr2 = [];
    for (let i = 0; i < ingredArr.length; i++) {
        jmxArr.push(
            <div className="ingredient">
                <p>{ingredArr[i].measures.us.amount}<span> {ingredArr[i].measures.us.unitShort}</span><span> {ingredArr[i].name}</span></p>
            </div>
        );
    }

    for (let i = 0; i < dishTypes.length; i++) {
        jmxArr2.push(
            <span className="dishTypes">{dishTypes[i]}</span>
        );
    }

    return (
        <div className="MealDetail">
            <div className="left-div">
                <h2>Meal Details:</h2>
                <div className="dishTypes-parent">
                    {jmxArr2}
                </div>
                <p><span className="labelSpan">Meal ID: </span>{id}</p>
                <p><span className="labelSpan">Name: </span>{name}</p>
                <p><span className="labelSpan">Duration: </span>{duration}</p>
                <p><span className="labelSpan">Health Score: </span>{healthScore}</p>
                <span className="labelSpan">Source: </span><a href={source} target="_blank">{source}</a>
                <div>
                    <h2>Ingredients: </h2>
                    <div className="ingreds-parent">
                        {jmxArr}
                    </div>
                </div>
            </div>


            <div className="right-div">
                <img src={image} />
            </div>
        </div>
    );
}