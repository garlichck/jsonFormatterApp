import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Privacy from "../pages/Privacy";
import Contact from "../pages/Contact";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}
