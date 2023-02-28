import React from "react";
import "./SelectItemList.css";

export function SelectItemList({
    ingredList,
    handleSearch,
    handleRemoveIngred
}) {
    const handleRemove = (e) => {
        handleRemoveIngred(e.target.parentNode.innerText.substring(0, e.target.parentNode.innerText.length - 1));
    }

    return (
        <div>
            <h2>Choosen Ingredients:</h2>
            <div className="choosen-ingred-parent">
                {ingredList.map(ingred => {
                    return (<div className="choosen-ingred">{ingred}<span className="removeBtn" onClick={handleRemove} >x</span></div>);
                })}
            </div>
        </div>
    );
}