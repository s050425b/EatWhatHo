import React from "react";
import "./SearchBar.css";

export function SearchBar({
    handleAddIngred,
    handleSearch
}) {
    const handleOnClick = () => {
        // Spoonacular.searchFoodByIngred();
        handleAddIngred(["apple", "orange", "banana"]);
    }


    return (
        <div className="SearchBar">
            <div className="searchInput-parent">
                <input type="text" />
                <button onClick={handleOnClick} className="btn">Add</button>
            </div>
            <div onClick={handleSearch} className="btn searchBtn">Search</div>
        </div>
    );
}