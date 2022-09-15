import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const HomePage = () => {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
};

export default React.memo(HomePage);
