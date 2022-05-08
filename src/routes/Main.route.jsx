import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login.jsx";

function MainRouts() {
    <Routes>
        <Route path="/api/login" element={<Login/>} />
    </Routes>
}

export default MainRouts();