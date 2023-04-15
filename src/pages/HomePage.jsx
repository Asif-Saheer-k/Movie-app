import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Card from "../components/card/Card";
import Footer from "../components/footer/Footer";
import Loader from "../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../redux/action/Action";
import Paginate from "../components/paginator/Paginator";

function HomePage() {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const { movie,loading,totalResults } = useSelector((state) => state.MovieReducers);
    console.log(loading,"d,kc");
    const [currentPage, setCurrentPage] = useState(1);

    const handleChangeSearch = (e) => {
        if (e.target.value.length > 0) {
            setCurrentPage(1);
        }
        setSearch(e.target.value);
    };


    useEffect(() => {
        dispatch(fetchMovie(currentPage));
    }, [dispatch,currentPage]);
    const MoviePerPage = 6;
    const totalMovie = totalResults;
    const filterMovie = movie
    return (
        <>
            <Header search={search} setSearch={setSearch} onChange={handleChangeSearch} />
            {loading ? (
                <Loader />
            ) : (
                <div class="container movie-card mt-5"> 
                <div class="row justify-content-space-around">
                    {filterMovie.map((post, index) => (
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
            )} 

        </>
    );
}

export default HomePage;
