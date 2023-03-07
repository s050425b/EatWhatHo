import React from "react";
import "./Navigator.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
export function Navigator() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <div className="Navigator">
            <div className="pageLogo">Eat<span className="pageLogo-mid">What</span>Ho</div>
            <div className="page-parent">
                <NavLink to="/" className="nav-btn" activeClassName="active">Search</NavLink>
                <NavLink to="/savedMeal" className="nav-btn" activeClassName="active">My Library</NavLink>
            </div>
            <div className="backBtn btn" onClick={goBack}>Back</div>
        </div>
    );
}