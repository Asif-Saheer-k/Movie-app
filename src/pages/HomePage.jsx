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

    useEffect(() => {
        if (!search) {
            dispatch(fetchMovie(currentPage, "spider"));
        }
    }, [search]);

    const MovieSearching = () => {
        dispatch(fetchMovie(currentPage, search));
    };
    const handleChangeSearch = (e) => {
        if (e.target.value.length > 0) {
            setCurrentPage(1);
        }
        setSearch(e.target.value);
    };
    useEffect(() => {
        dispatch(fetchMovie(currentPage, search));
    }, [dispatch, currentPage]);
    const MoviePerPage = 10;
    const totalMovie = totalResults;

    return (
        <>
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
        </>
    );
}

export default HomePage;
