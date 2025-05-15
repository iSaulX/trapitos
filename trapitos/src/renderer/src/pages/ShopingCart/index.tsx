import { Card, CardFooter, CardHeader, Button, CardBody, addToast, Input} from "@heroui/react"; 
import { useGlobalContext } from "@renderer/providers/GlobalContent";
import type { Product } from "@renderer/types/types";
import { Link } from "react-router";
import NumberFlow from "@number-flow/react";
import { useState } from "react";
function ShoppingCartItem({ name, price, description, image, quantity, id }: Product) {
    const { setCart, products, setProducts } = useGlobalContext()
    
    function handleAddElementToCart(): void {
        setCart((prev) => {
            return prev.map((p) => {
                if (p.id === id) {
                    if (products.find((product) => product.id === p.id)?.quantity === 0) {
                        addToast({
                            title: 'No hay suficiente stock',
                            description: `No hay suficiente stock para ${name}`,
                            color: 'danger'
                        })
                        return p; 
                    }

                    return { ...p, quantity: p.quantity + 1 }
                }
                return p
            })
        })
    }

    function handleRemoveElementFromCart(): void {
        setCart((prev) => {
            return prev.map((p) => {
                if (p.id === id) {
                    if (p.quantity === 1) {
                        return { ...p, quantity: 0 }
                    }
                    return { ...p, quantity: p.quantity - 1 }
                }
                return p
            }).filter((p) => p.quantity > 0)
        })
        setProducts((prev) => {
            return prev.map((p) => {
                if (p.id === id) {
                    return { ...p, quantity: p.quantity + 1 }
                }
                return p
            })
        }
        )
        addToast({
            title: 'Producto eliminado del carrito',
            description: `Eliminaste ${name} del carrito`,
            color: 'success'
        }); 
    }

    return ( 
        <Card className="w-full ">
            <CardBody className="flex flex-row items-center justify-start gap-2">
                <img className="rounded-xl aspect-square max-w-24" src={image}/>
                <div className="flex flex-col gap-1">
                    <h2 className="font-bold">{name}</h2>
                    <p className="text-neutral-400">{description}</p>
                    <p className="font-semibold">${price.toFixed(2)}</p>
                </div>
                <div className="ml-auto flex flex-row item-center justify-center gap-2">
                    <Button isIconOnly variant="flat" onPress={handleRemoveElementFromCart}>
                        -
                    </Button>
                    <NumberFlow value={quantity} className="font-extrabold text-3xl" />
                    <Button isIconOnly variant="flat" onPress={handleAddElementToCart}>
                        +
                    </Button>
                </div>
            </CardBody>
        </Card>
    )
}

export default function ShoppingCart(){
    const { cart, cupons } = useGlobalContext()
    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
    const [hasDiscount, setHasDiscount] = useState<boolean>(false)

    return ( 
        <div className="flex items-start w-full justify-between lg:flex-row flex-col gap-2 p-3 ">
            <section className="w-full flex flex-col items-start justify-between gap-2 p-2 ">
                 <h1 className="font-extrabold text-2xl">Tu carrito.</h1>
                 {cart.length === 0 ? (
                    <p className="text-neutral-400 text-lg">Tu carrito está vacío.</p>
                 ) : (
                    cart.map((item, index) => (
                        <ShoppingCartItem key={index} {...item} />
                    ))
                 )}
            </section>
            <Card className="w-1/2">
                <CardHeader className="flex flex-col items-start justify-start gap-2">
                    <h1 className="font-extrabold text-2xl">Resumen de tu carrito.</h1>
                    
                    <p className="font-semibold">Total: ${Number(total.toFixed(2)) * (hasDiscount ? 0.90 : 1)} </p>
                    <Input label="Descuento" placeholder="Ingresa tu cupon de descuento." onChange={(event) => {
                        const { value } = event.target; 
                        const cupon = cupons.find((cupon) => cupon.cupon === value)
                        if (cupon) {
                            addToast({
                                title: 'Cupon aplicado',
                                description: `Se aplicó el cupon ${cupon.cupon}`,
                                color: 'success'
                            })
                            setHasDiscount(true)
                        } else {
                            addToast({
                                title: 'Cupon no valido',
                                description: `El cupon ${value} no es valido`,
                                color: 'danger'
                            })
                        }
                    }}/>
                    <Button className="w-full" color="primary" as={Link} to="/dashboard/checkout">
                        Finalizar compra.
                    </Button>
                </CardHeader>
            </Card>
        </div>
    )
}