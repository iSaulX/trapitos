import { useParams } from 'react-router'
import { Image, Button, Divider } from '@heroui/react'
import { useGlobalContext } from '@renderer/providers/GlobalContent'
import { FaCartShopping as Cart } from 'react-icons/fa6'
import { Link } from 'react-router'
import NumberFlow from '@number-flow/react'

export default function Product() {
    const { productId } = useParams<{ productId: string }>()
    const { products } = useGlobalContext()
    const product = products.find((product) => product.id === Number(productId))
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
                    >
                        Agregar al carrito.
                    </Button>
                </div>
            </div>
        </div>
    )
}
