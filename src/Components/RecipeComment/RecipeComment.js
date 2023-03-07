import React from "react";
import "./RecipeComment.css";

export function RecipeComment() {
    return (
        <div className="RecipeComment">
            <h2>Comment</h2>
            <div className="comment-div">
                <div className="line-1">
                    <div className="user-icon"></div><span>Kitty</span>
                </div>
                <div>
                    <span className="comment-rating">4.8</span>
                    <span className="comment-date">02/12/2022</span>
                </div>
                <div className="user-comment">I love this recipe! Thanks~</div>
            </div>

        </div>
    );
}