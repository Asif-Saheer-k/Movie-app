import React from "react";
import Header from "../components/header/Header";
import Card from "../components/card/Card";
import Footer from "../components/footer/Footer";

function HomePage() {
    return (
        <>
            <Header />
            <div className="container">
                <Card/>
                
            </div>
            <Footer/>
        </>
    );
}

export default HomePage;
