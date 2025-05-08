import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from "@/pages/Login";
import BaseLayout from "@/pages/BaseLayout";
export default function AppRouter(){
    return ( 
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<BaseLayout />}/>
            </Routes>
        </Router>

    )
}