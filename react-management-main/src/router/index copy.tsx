import App from "@/App";
import Home from "@/views/Home";
import About from "@/views/About";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App></App>}>
                <Route path="/" element={<Navigate to={'/home'} />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter