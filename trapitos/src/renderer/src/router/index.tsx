import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@renderer/pages/Home";
import BaseLayout from "@renderer/pages/BaseLayout";
import Dashboard from "@renderer/pages/Dashboard";
import Product from "@renderer/pages/ProductPage";
export default function Router(){
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<BaseLayout />} >
                    <Route index element={<Dashboard />} />
                    <Route path="product/:productId" element={<Product />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}