import "./Error.css"
import React from "react";

function Error({ Error }) {
    return (
        <div className="error">
            <h2>{Error}</h2>
        </div>
    );
}

export default Error;
