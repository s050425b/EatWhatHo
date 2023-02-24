import React from "react";
import "./SearchBar.css";

export function SearchBar({
    handleAddIngred,
    ingredList,
    handleSearch,
    handleRemoveIngred
}) {
    const handleOnClick = () => {
        // Spoonacular.searchFoodByIngred();
        handleAddIngred(["apple", "orange", "banana"]);
    }

    const handleRemove = (e) => {
        handleRemoveIngred(e.target.parentNode.innerText.substring(0, e.target.parentNode.innerText.length - 1));
    }

    return (
        <div className="SearchBar">
            <div className="searchInput-parent">
                <input type="text" />
                <button onClick={handleOnClick}>Add</button>
            </div>
            <div className="choosen-ingred-parent">
                {ingredList.map(ingred=> {
                    return (<div className="choosen-ingred">{ingred}<span className="removeBtn" onClick={handleRemove} >x</span></div>);
                })}
            </div>
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}