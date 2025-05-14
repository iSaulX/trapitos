import { Breadcrumbs, Divider, BreadcrumbItem } from '@heroui/react'
import { useGlobalContext } from '@renderer/providers/GlobalContent'
import Product from '@renderer/components/Product'
import Discount from '@renderer/components/Discount'
function getMessage(): string {
    const hour: number = new Date().getHours()
    if (hour < 12) {
        return 'Buenos días'
    }
    if (hour < 18) {
        return 'Buenas tardes'
    }
    return 'Buenas noches'
}

export default function Dashboard() {
    const { products, cupons } = useGlobalContext()
    return (
        <div className="flex flex-col items-start justify-center gap-2 w-full h-full p-3">
            <Breadcrumbs>
                <BreadcrumbItem>Inicio</BreadcrumbItem>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
            </Breadcrumbs>
            <h1 className="font-bold text-2xl">{getMessage()}, Ricardo.</h1>
            <p className="font-semibold text-neutral-400">Tus productos. Justo donde los dejaste.</p>
            <Divider />
            <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
                {products.map((product) => (
                    <Product 
                    {...product}
                    />
                ))}
            </section>
            <Divider />
            <h2 className='font-extrabold text-2xl'>Descuentos</h2>
            <section className='w-full grid {grid-cols-1 lg:grid-cols-3 gap-3'>
                {cupons.map((cupon) => (
                    <Discount 
                    {...cupon}
                    />
                ))}
            </section>
        </div>
    )
}
