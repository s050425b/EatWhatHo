import React, { useState } from "react";
import { SearchBar } from "../../Components/Search/SearchBar/SearchBar";
import { SearchResult } from "../../Components/Search/SearchResult/SearchResult";
import { SelectItemList } from "../../Components/Search/SelectItemList/SeletItemList";
import Spoonacular from "../../Utils/Spoonacular";
import "./SearchMealByIngred.css";

export function SearchMealByIngred() {
    const [ingredList, setIngredList] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [displayIndex, setDisplayIndex] = useState(0);


    const handleAddIngred = (ingredArr) => {
        setIngredList(prev => {
            return ingredArr;
        });
    }

    const handleRemoveIngred = (ingred) => {
        setIngredList(prev => {
            return prev.filter(element => {

                return element !== ingred;
            });
        });
    }

    const handleSearch = async () => {
        setSearchResult(await Spoonacular.searchFoodByIngred(ingredList));
        setDisplayIndex(0);
    }

    const handleForward = () => {
        setDisplayIndex(prev => {
            return (prev - 1) > 0 ? (prev - 1) : 0;
        });
    }

    const handleBackward = () => {
        setDisplayIndex(prev => {
            return (prev + 1) < searchResult.length ? (prev + 1) : (searchResult.length - 1);
        });
    }



    return (
        <div className="SearchMealByIngred hideScrollBar">
            <div className="search-panel">
                <h1>Search Meal By Ingredients</h1>
                <SearchBar handleAddIngred={handleAddIngred} handleSearch={handleSearch}/>
            </div>
            <SelectItemList ingredList={ingredList} handleRemoveIngred={handleRemoveIngred} />
            <SearchResult searchResult={searchResult} displayIndex={displayIndex} handleForward={handleForward} handleBackward={handleBackward} />
        </div>
    );
}