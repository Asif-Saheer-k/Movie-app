import "./Card.css";
import React from "react";
function Card({ post }) {
    return (
        <div className="card movie_card">
            <img src={post.Poster} class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{post.Title}</h5>
                <div className="card-details">
                    <div className="movie_info">{post.Year}</div>
                    <div className="movie_info">{post.Type}</div>
                </div>
            </div>
        </div>
    );
}

export default Card;
