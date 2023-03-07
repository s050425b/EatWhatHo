import React from "react";
import "./SavedRecipeList.css";

export function SavedRecipeList({
    savedList,
    handleRecipeClick
}) {
    function handleClick(e) {
        const searchId = e.currentTarget.firstChild.firstChild.lastChild.innerText;
        handleRecipeClick(searchId);
    }

    let displayArr = [];

    for (const element of savedList) {
        displayArr.push(
            <div className="SavedRecipeList-child" key={element.id} onClick={handleClick}>
                <div>
                    <p className="SavedID">ID: <span>{element.id}</span></p>
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