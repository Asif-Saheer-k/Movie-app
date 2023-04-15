import "./Card.css";
import React from "react";
function Card({post}) {
    return (
        <div class="card movie_card">
            <img
                src={post.Poster}
                class="card-img-top" 
                alt="..."
            />
            <div class="card-body">
                
                
                <h5 class="card-title">{post.Title}</h5>
                <div className="card-details">
                <div class="movie_info">{post.Year}</div>
                <div class="movie_info">{post.Type}</div>
                </div>
             
            </div>
        </div>
    );
}

export default Card;
