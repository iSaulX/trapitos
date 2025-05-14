import NavBar from "@renderer/components/NavBar";
import Footer from "@renderer/components/Footer";
import { useTheme } from "@heroui/use-theme";
import { Outlet } from "react-router";
import type { Product, Customer, Purchase, Cupon } from "@renderer/types/types";
import { GlobalContext } from "@renderer/providers/GlobalContent";
import { useState } from "react";

export default function BaseLayout(){
    useTheme(); 

    const [products, setProducts] = useState<Product[]>([
        {
        name: "Zapatillas Nike Air Max", 
        price: 150, 
        id: 1,
        quantity: 5,
        image: "/shoes.png",
        description: "Zapatillas Nike Air Max 270"
    }, 
    {
        name: "Pantalones Nike",
        price: 120,
        id: 2,
        quantity: 10,
        image: "/pants.png",
        description: "Pantalones Nike"
    }, 
    {
        name: "Bufanda Nike",
        price: 30,
        id: 3,
        quantity: 3,
        image: "/scarf.png",
        description: "Bufanda Nike"
    }
    ]);
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [purchases, setPurchases] = useState<Purchase[]>([]);
    const [cupons, setCupons] = useState<Cupon[]>([{
      cupon: "DESCUENTO10",
      discount: 0.10  
    }
    , {
      cupon: "DESCUENTO20",
      discount: 0.20  
    }]);
    return ( 
        <div className="w-full flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
            <NavBar />
            <main className="flex flex-1 items-start justify-center w-full lg:w-3/4">
            <GlobalContext.Provider value={{
                products,
                setProducts,
                customers,
                setCustomers,
                purchases,
                setPurchases,
                cupons,
                setCupons
            }}>
            <Outlet />
            </GlobalContext.Provider>
            </main>
            <Footer />
        </div>
    )
}