import { useParams } from 'react-router'
import { Image, Button, Divider } from '@heroui/react'
import { addToast } from '@heroui/toast'
import { useGlobalContext } from '@renderer/providers/GlobalContent'
import { FaCartShopping as Cart } from 'react-icons/fa6'
import { Link } from 'react-router'
import NumberFlow from '@number-flow/react'

export default function Product() {
    const { productId } = useParams<{ productId: string }>()
    const { products, setProducts, setCart } = useGlobalContext()
    const product = products.find((product) => product.id === Number(productId))
    function handleAddToCart(): void {
        if (!product) return;

        setProducts((prev) =>
            prev.map((p) =>
                p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
            ).filter((p) => p.quantity > 0)
        );

        setCart((prev) => {
            const existingProduct = prev.find((item) => item.id === product.id);
            if (existingProduct) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });

        addToast({
            title: 'Producto agregado al carrito',
            description: `Agregaste ${product.name} al carrito`,
            color: 'success',
        });
    }
    return (
        <div className="flex flex-col lg:flex-row items-start justify-center gap-2 p-3 ">
            <Image src={product?.image} alt={product?.name} className="aspect-square  w-full" />
            <div className="flex flex-col items-start justify-start gap-2 p-2 w-full">
                <h1 className="font-extrabold text-3xl">{product?.name}</h1>
                <p className="font-semibold text-neutral-400 text-lg">{product?.description}</p>
                <p className="text-6xl font-extrabold">${product?.price}</p>
                <div className="flex flex-row items-center justify-between w-full font-extrabold text-lg ">
                    <p className="text-neutral-400">Cantidad</p>
                    <NumberFlow value={product?.quantity} />
                </div>
                <Divider />
                <div className="flex flex-row items-center justify-center *:w-full w-full gap-2">
                    <Button color="secondary" as={Link} to="/dashboard">
                        Ir a la pagina de inicio.
                    </Button>
                    <Button
                        color="primary"
                        startContent={<Cart aria-hidden className="focus:outline-none" />}
                        onPress={handleAddToCart}
                    >
                        Agregar al carrito.
                    </Button>
                </div>
            </div>
        </div>
    )
}
