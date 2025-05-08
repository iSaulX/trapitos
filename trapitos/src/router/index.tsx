import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from "@/pages/Login";
export default function AppRouter(){
    return ( 
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>

    )
}