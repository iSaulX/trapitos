import { BrowserRouter as Router, Routes, Route } from "react-router";

export default function AppRouter(){
    return ( 
        <Router>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
            </Routes>
        </Router>

    )
}