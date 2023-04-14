import "./Header.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchMovie } from "../../redux/action/Action";

function Header({ search, setSearch, onChange }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(searchMovie(search));
    }, [search, dispatch]);
    return (
        <div className="main-header">
            <div>
                <h1>MY MOVIE APP</h1>
            </div>
            <div className="input-field">
                <input type="text" value={search} onChange={onChange} placeholder="Search"></input>
                <button>Search</button>
            </div>
        </div>
    );
}

export default Header;
