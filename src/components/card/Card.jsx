import "./Card.css";
import React from "react";
function Card() {
    return (
        <div class="card movie_card">
            <img
                src="https://c8.alamy.com/comp/RC04FA/old-fashioned-movie-film-camera-logo-design-template-black-and-white-vector-illustration-RC04FA.jpg"
                class="card-img-top"
                alt="..."
            />
            <div class="card-body">
                <i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer"></i>
                <h5 class="card-title">POKEMON Detective Pikachu</h5>
                <span class="movie_info">2019</span>
                <span class="movie_info float-right">
                    <i class="fas fa-star"></i> 9 / 10
                </span>
            </div>
        </div>
    );
}

export default Card;
