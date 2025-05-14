import { Breadcrumbs, Divider, BreadcrumbItem } from '@heroui/react'
import Product from '@renderer/components/Product'
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
        <Product quantity={5} image="/shoes.png" name="Zapatillas Nike Air Max 270" id="1" price={150} />
        <Product quantity={5} image="/shoes.png" name="Zapatillas Nike Air Max 270" id="1" price={150} />
        <Product quantity={10} image="/pants.png" name="Pantalones Nike" id="2" price={120} />
        <Product quantity={3} image="/scarf.png" name="Bufanda Nike" id="3" price={30} /> {/* Added quantity for scarf */}
      </section>
    </div>
  )
}
