import React from "react";
import "./SavedRecipeList.css";

export function SavedRecipeList({
    savedList
}) {
    let displayArr = [];
    console.log(savedList);
    for (const element of savedList) {
        displayArr.push(
            <div className="SavedRecipeList-child" key={element.id}>
                <div>
                    <p>ID: {element.id}</p>
                    <p>Name: {element.title}</p>
                    <p>Dish type: {element.dishTypes}</p>
                </div>
                <div>
                    <img src={element.image}/>
                </div>
            </div>
        )
    }

    return (
        <div className="SavedRecipeList">
            {displayArr}
        </div>
    );
}