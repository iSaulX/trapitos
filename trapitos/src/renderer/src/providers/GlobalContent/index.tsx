import { createContext, useContext } from "react";
import type { SetStateAction, Dispatch} from "react";
import type { Product, Customer, Purchase, Cupon } from "@renderer/types/types";
type GlobalContextType = {
    products: Product[];
    setProducts: Dispatch<SetStateAction<Product[]>>;
    customers: Customer[];
    setCustomers: Dispatch<SetStateAction<Customer[]>>;
    purchases: Purchase[];
    setPurchases: Dispatch<SetStateAction<Purchase[]>>;
    cupons: Cupon[];
    setCupons: Dispatch<SetStateAction<Cupon[]>>;
}

export const GlobalContext = createContext<GlobalContextType | null>(null);
export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }
    return context;
}