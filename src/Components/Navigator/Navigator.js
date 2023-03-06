import React from "react";
import "./Navigator.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
export function Navigator(){
    const navigate = useNavigate();

    const goBack = () => {
		navigate(-1);
	}

    return (
        <div className="Navigator">
            <div className="pageLogo">Eat<span className="pageLogo-mid">What</span>Ho</div>
            <div className="page-parent">
                <div className="nav-btn">Page1</div>
                <div className="nav-btn">Page2</div>
                <NavLink to="/savedMeal"><div className="nav-btn">My Library</div></NavLink>
            </div>
            <div className="backBtn btn" onClick={goBack}>Back</div>
        </div>
    );
}