import { Routes, Route, BrowserRouter } from "react-router-dom";

import App from "./app/app";
import Home from "./home/home";
import About from "./about/about";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App child={<Home/>} />} />
                <Route path="about" element={<App child={<About/>} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;