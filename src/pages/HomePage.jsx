import "./Homepage.css"
import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Card from "../components/card/Card";
import Footer from "../components/footer/Footer";
import Loader from "../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../redux/action/Action";
import Paginate from "../components/paginator/Paginator";
import Error from "../components/error/Error";

function HomePage() {
    const [search, setSearch] = useState("spider");
    const dispatch = useDispatch();
    const { movie, loading, totalResults, error } = useSelector((state) => state.MovieReducers);
    const [currentPage, setCurrentPage] = useState(1);

    // movie searching function
    const MovieSearching = () => {
        setCurrentPage(1);
        dispatch(fetchMovie(currentPage, search));
    };

    // input onchange function
    const handleChangeSearch = (e) => {
     
        setSearch(e.target.value);
   
    };

    // fetch movies from api
    useEffect(() => {
        dispatch(fetchMovie(currentPage,search));
    }, [currentPage]);

      // in case of input field null this function work
      useEffect(() => {
        if (search=="") {
            dispatch(fetchMovie(currentPage, "spider"));
        }
    }, [search]);

    // single page how many movies shows
    const MoviePerPage = 10;
    // total movies in int
    const totalMovie = totalResults;

    return (
        <div>
            <Header search={search} MovieSearching={MovieSearching} setSearch={setSearch} onChange={handleChangeSearch} />
            <div className="container-fluid banner-image">
                <img src="https://blogs-images.forbes.com/johnarcher/files/2018/03/Jessica-Jones-S2-Art.jpg"></img>
            </div>
            {loading ? (
                <>{error ? <Error Error={error} /> : <Loader />}</>
            ) : (
                <>
                    <div class="container movie-card mt-5">
                        <div class="row movie-display">
                            {movie?.map((post, index) => (
                                <Card post={post} key={index} />
                            ))}
                            {totalMovie > MoviePerPage && (
                                <Paginate
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                    totalMovie={totalMovie}
                                    MoviePerPage={MoviePerPage}
                                />
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default HomePage;
