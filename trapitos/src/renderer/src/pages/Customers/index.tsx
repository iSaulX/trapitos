import { useParams } from 'react-router'
import { Avatar, Divider } from '@heroui/react'
import { useGlobalContext } from '@renderer/providers/GlobalContent'

export default function Customer() {
  const { customerId } = useParams<{ customerId: string }>()
  const { customers, purchases } = useGlobalContext()

  const customer = customers.find((customer) => customer.id === Number(customerId))
    const customerPurchases = purchases.filter((purchase) => purchase.customer.id === Number(customerId))
  return (
    <div className="w-full flex flex-col items-start justify-center gap-2 p-3 ">
      <h1 className="font-extrabold text-2xl">Detalles del cliente</h1>
      <Divider />
      <div className="flex flex-col items-start justify-start w-full gap-2">
        <div className="flex flex-row items-center justify-start w-full gap-2">
            <Avatar size='lg'/>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h1 className='font-extrabold text-2xl w-full text-start'>{customer?.name}</h1>
                <p className='text-sm text-neutral-400 font-semibold w-full text-start'>{customer?.email}</p>
                <p className='text-sm text-neutral-400 font-semibold w-full text-start'>{customer?.phone}</p>
            </div>
        </div>
      </div>
      <Divider />
      <h1 className='font-extrabold text-2xl'>Dirección</h1>
      <p className='font-semibold text-neutral-400'>{customer?.address}</p>
      <Divider />
        <h1 className='font-extrabold text-2xl'>Compras</h1>
        <section className='w-full grid grid-cols-1 lg:grid-cols-3 gap-3'>
            {customerPurchases.map((purchase) => (
                <div key={purchase.id} className='flex flex-col items-start justify-center gap-2'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        {purchase.products.map((product) => (
                            <div key={product.id} className='flex flex-row items-center justify-start gap-2'>
                                <Avatar size='sm' src={product.image} />
                                <h1 className='font-extrabold text-lg'>{product.name}</h1>
                                <p className='font-semibold text-neutral-400'>${product.price}</p>
                                <p className='font-semibold text-neutral-400'>x{product.quantity}</p>
                            </div>
                        ))}
                    </div>
                    <h1 className='font-extrabold text-xl'>{purchase.date}</h1>
                    <p className='font-semibold text-neutral-400'>Total: ${purchase.total}</p>
                </div>
            ))}
        </section>
        <section>
        </section>
      <Divider />
    </div>
  )
}
