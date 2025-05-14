import { Card, CardBody, CardFooter, Image, Button} from "@heroui/react"; 
import { Link } from "react-router";
import { FaCartShopping as Cart } from "react-icons/fa6";
export type ProductProps = {
    image: string; 
    name: string; 
    id: number; 
    price: number; 
    quantity: number;
}

export default function Product({ image, name, id, price, quantity }: ProductProps){
    return ( 
        <Card className="w-full relative shadow-2xl/50">
            <CardBody className="flex flex-col items-center justify-start gap-2">
                <img src={image} className="top-0 left-0 absolute blur-lg h-10 w-10 object-contain aspect-square"/>
                <img src={image} className="bottom-0 right-0 absolute blur-lg h-10 w-10 object-contain aspect-square "/>
                <Image src={image} className="w-full aspect-square object-center object-cover"  alt="Product image"/>
                <h2 className="font-extrabold text-xl w-full text-start">{name}</h2>
                <div className="flex flex-row items-center justify-between w-full">
                    <p className="font-semibold text-neutral-400 w-full text-start">${price}</p>
                    <p className="font-semibold text-neutral-400 w-full text-end">Cantidad: 
                        <span className="font-extrabold dark:text-white text-black"> {quantity}</span></p> {/* Display quantity */}
                </div>
                <Button as={Link} to={`product/${id}`} variant="light" className="rounded-lg w-full border-1 dark:border-white/30 backdrop-blur-2xl border-black/30" size="sm" startContent={<Cart aria-hidden className="focus:outline-none"/>}>
                    Mas información.
                </Button>
            </CardBody>
        </Card>
    )
}