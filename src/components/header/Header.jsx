import "./Header.css";
import React from "react";

function Header({ search, setSearch, onChange, MovieSearching }) {
    return (
        <div className="main-header">
            <div className="title">
                <h2>MOVIE APP</h2>
            </div>
            <div className="input-field">
                <input type="text" onChange={onChange} placeholder="Search" required></input>
                <button onClick={MovieSearching}>Search</button>
            </div>
        </div>
    );
}

export default Header;
