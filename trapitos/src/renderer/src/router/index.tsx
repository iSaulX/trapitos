import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@renderer/pages/Home";
import BaseLayout from "@renderer/pages/BaseLayout";
import Dashboard from "@renderer/pages/Dashboard";
import Product from "@renderer/pages/ProductPage";
import ShoppingCart from "@renderer/pages/ShopingCart";
import Checkout from "@renderer/pages/Checkout";
import Done from "@renderer/pages/Done";
import Customer from "@renderer/pages/Customers";
export default function Router(){
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<BaseLayout />} >
                    <Route index element={<Dashboard />} />
                    <Route path="product/:productId" element={<Product />} />
                    <Route path="cart" element={<ShoppingCart />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="done" element={<Done />} />
                    <Route path="customers/:customerId" element={<Customer />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}