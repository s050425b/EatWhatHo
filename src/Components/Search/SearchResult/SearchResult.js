import React from "react";
import "./SearchResult.css";
import { useNavigate } from "react-router-dom";

export function SearchResult({
    searchResult,
    displayIndex,
    handleBackward,
    handleForward
}) {
    const navigate = useNavigate();

    const handleChoose = () => {
        navigate("/meal", {
            state: {
                id: searchResult[displayIndex].id
            }
        });
    }

    if (searchResult.length <= 0) {
        return (<div className="SearchResult"></div>);
    }
    return (
        <div className="SearchResult">
            <h2>Search Result</h2>
            <div className="resultSet">
                <button onClick={handleForward}>Forward</button>
                <div className="resultCardHolder" onClick={handleChoose}>
                    <img src={searchResult[displayIndex].image} alt="meal"/>
                    <span>{searchResult[displayIndex].name}</span>
                </div>
                <button onClick={handleBackward}>Backward</button>
            </div>
            
        </div>
    );
}