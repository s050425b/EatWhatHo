import React from "react";
import './MealDetail.css';
import { unfilledHeart, filledHeart } from "../../image/heart_svg";

export function MealDetail({
    id,
    name,
    duration,
    image,
    source,
    healthScore,
    ingredArr,
    dishTypes,
    rating,
    onClickSave,
    isSaved
}) {
    let jmxArr = [];
    let jmxArr2 = [];
    for (let i = 0; i < ingredArr.length; i++) {
        jmxArr.push(
            <div className="ingredient">
                {/* <p><span className="ingredient-index font-green">{i + 1}.</span>{ingredArr[i].measures.us.amount}<span> {ingredArr[i].measures.us.unitShort}</span><span> {ingredArr[i].name}</span></p> */}
                <p><span className="ingredient-index font-green">{i + 1}. {ingredArr[i]}</span></p>
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
            <div className="left-div hideScrollBar">
                <h2>Meal Details: </h2>
                <h2 className="dishName">{name} <div className="heartIcon" onClick={onClickSave}> {isSaved ? filledHeart : unfilledHeart} </div></h2>
                <p>Rating: {rating}</p>
                <div className="img-div">
                    <img alt="meal" src={image} />
                </div>
                <div className="dishTypes-parent">
                    {jmxArr2}
                </div>
                <div>
                    <p className="info-row"><span className="labelSpan font-green">Meal ID: </span>{id}</p>
                    <p className="info-row"><span className="labelSpan font-green">Name: </span>{name}</p>
                    <p className="info-row"><span className="labelSpan font-green">Duration: </span>{duration}</p>
                    <p className="info-row"><span className="labelSpan font-green">Health Score: </span>{healthScore}</p>
                    <p className="info-row labelSpan font-green">Source: </p>
                    <a href={source} target="_blank">{source}</a>
                </div>
                <div>
                    <h2>Ingredients: </h2>
                    <div className="ingreds-parent">
                        {jmxArr}
                    </div>
                </div>
            </div>


            <div className="right-div hideScrollBar">
                <div>
                    <iframe width="525" height="310" src="https://www.youtube.com/embed/t9Pbd89lOZs"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>

                <div className="recipe-step">
                    <h3>Step 1</h3>
                    <p>Place chicken breasts into the slow cooker; pour in 3/4 of the wing sauce and ranch dressing mix.</p>
                </div>
                <div className="recipe-step">
                    <h3>Step 2</h3>
                    <p>Cover and cook on Low for 6 to 7 hours.</p>
                </div>
                <div className="recipe-step">
                    <h3>Step 3</h3>
                    <p>Shred chicken in the cooker with two forks. Stir in butter.</p>
                </div>
                <div className="recipe-step">
                    <h3>Step 4</h3>
                    <p>Pile shredded chicken and sauce onto hoagie rolls. Serve with remaining Buffalo sauce.</p>
                </div>
            </div>
        </div>
    );
}