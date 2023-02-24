import React from "react";
import Spoonacular from "../../../Utils/Spoonacular";
import "./SearchBar.css";

export function SearchBar({
    handleAddIngred,
    ingredList,
    handleSearch,
    setSearchText
}) {
    const handleOnClick = () => {
        // Spoonacular.searchFoodByIngred();
        handleAddIngred(["apple", "orange", "banana"]);
    }

    return (
        <div className="SearchBar">
            <div>
                <input type="text" />
                <button onClick={handleOnClick}>Add</button>
            </div>
            <div className="choosen-ingred-parent">
                {ingredList.map(ingred=> {
                    return (<div className="choosen-ingred">{ingred}</div>);
                })}
            </div>
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}