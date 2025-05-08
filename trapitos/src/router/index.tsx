import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from "@/pages/Login";
import BaseLayout from "@/pages/BaseLayout";
import Dashboard from "@/pages/Dashboard";
export default function AppRouter(){
    return ( 
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<BaseLayout />}>
                    <Route index element={<Dashboard />} />
                </Route>
            </Routes>
        </Router>

    )
}