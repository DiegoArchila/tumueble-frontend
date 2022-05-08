import { Route, Routes } from "react-router-dom";
import React from "react";
import Login from "../pages/Login.jsx";

function MainRouts() {
    <Routes>
        <Route path="/api/login" exact element={<Login />} />
        <Route path="/api/login" element={<Login />} />
    </Routes>
}

export default MainRouts;