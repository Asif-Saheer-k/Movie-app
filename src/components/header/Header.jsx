import "./Header.css";
import React from "react";

function Header() {
    return (
        <div className="main-header">
            <div>
                <h1>MY MOVIE APP</h1>
            </div>
            <div className="input-field">
              <input type="text" name="name" ></input>
              <button>Search</button>
            </div>
        </div>
    );
}

export default Header;
