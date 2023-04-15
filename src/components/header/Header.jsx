import "./Header.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovie } from "../../redux/action/Action";

function Header({ search, setSearch, onChange ,MovieSearching}) {


  
    return (
        <div className="main-header">
            <div>
                <h1>MY MOVIE APP</h1>
            </div>
            <div className="input-field">
                <input type="text" value={search} onChange={onChange} placeholder="Search"></input>
                <button onClick={MovieSearching}>Search</button>
            </div>
        </div>
    );
}

export default Header;
