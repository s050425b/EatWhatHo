import React from "react";
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
                <p><span className="ingredient-index font-green">{i+1}.</span>{ingredArr[i].measures.us.amount}<span> {ingredArr[i].measures.us.unitShort}</span><span> {ingredArr[i].name}</span></p>
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
                <h2 className="dishName">{name}</h2>
                <div className="img-div">
                    <img alt="meal photo" src={image} />
                </div>
                <div className="dishTypes-parent">
                    {jmxArr2}
                </div>
                <p><span className="labelSpan font-green">Meal ID: </span>{id}</p>
                <p><span className="labelSpan font-green">Name: </span>{name}</p>
                <p><span className="labelSpan font-green">Duration: </span>{duration}</p>
                <p><span className="labelSpan font-green">Health Score: </span>{healthScore}</p>
                <p className="labelSpan font-green">Source: </p>
                <a href={source} target="_blank">{source}</a>
                <div>
                    <h2>Ingredients: </h2>
                    <div className="ingreds-parent">
                        {jmxArr}
                    </div>
                </div>
            </div>


            <div className="right-div hideScrollBar">
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/t9Pbd89lOZs" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>
                </div>

                <div>
                    <h3>Step 1</h3>
                    <p>Place chicken breasts into the slow cooker; pour in 3/4 of the wing sauce and ranch dressing mix.</p>
                </div>
                <div>
                    <h3>Step 2</h3>
                    <p>Cover and cook on Low for 6 to 7 hours.</p>
                </div>
                <div>
                    <h3>Step 3</h3>
                    <p>Shred chicken in the cooker with two forks. Stir in butter.</p>
                </div>
                <div>
                    <h3>Step 4</h3>
                    <p>Pile shredded chicken and sauce onto hoagie rolls. Serve with remaining Buffalo sauce.</p>
                </div>
            </div>
        </div>
    );
}