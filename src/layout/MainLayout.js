import React from "react";
import {
    Route,
    Routes,
} from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import HousePage from "../components/pages/HousePage";


const MainLayout = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/house/:id" element={<HousePage/>}/>
        </Routes>
    );
};

export default React.memo(MainLayout);
