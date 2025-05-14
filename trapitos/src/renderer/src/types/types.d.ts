export type Product = {
    name: string; 
    price: number; 
    id: number; 
    quantity: number;
    image: string; 
    description: string;    
}

export type Customer = {
    name: string; 
    email: string; 
    phone: string; 
    address: string; 
    id: number; 
}

export type  Purchase = {
    id: number; 
    date: string; 
    customer: Customer;
    products: Product[];
    total: number;
}

export type Cupon  ={
    cupon: string; 
    discount: number; 
}