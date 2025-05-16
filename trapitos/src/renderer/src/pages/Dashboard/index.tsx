import { Breadcrumbs, Divider, BreadcrumbItem, Button, Modal, ModalBody, ModalContent, useDisclosure, 
    
    Form, 
    Input, 
    ModalHeader } from '@heroui/react'
import { useGlobalContext } from '@renderer/providers/GlobalContent'
import Product from '@renderer/components/Product'
import Discount from '@renderer/components/Discount'
import { type FormEvent } from 'react'
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
    const { products, cupons, setCupons } = useGlobalContext()
    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        const data = Object.fromEntries(new FormData(event.currentTarget))
        setCupons((prev) => {
            const newCupon = {
                cupon: data.cupon as string,
                discount: Number(data.discount) / 100
            }
            return [...prev, newCupon]
        })
        onOpenChange(); 
    }

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
            <div className='w-full flex items-center justify-between'>
                <h1 className="font-bold text-2xl">Cupones de descuento</h1>
                <Button onPress={onOpen} color='primary' size='sm'>
                    Agregar uno nuevo
                </Button>
            </div>
            <section className='w-full grid {grid-cols-1 lg:grid-cols-3 gap-3'>
                {cupons.map((cupon) => (
                    <Discount 
                    {...cupon}
                    />
                ))}
            </section>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) =>  (
                        <>
                        <ModalHeader className='text-2xl font-extrabold'>
                            Agregar un nuevo cupon.
                        </ModalHeader>
                        <ModalBody>
                            <Form validationBehavior='native' onSubmit={handleSubmit} className='flex flex-col gap-2'>
                                <Input 
                                label="Cupon"
                                placeholder='Ingresa el cupon'
                                isRequired
                                name='cupon'
                                />
                                <Input 
                                label="Descuento"
                                placeholder='Ingresa el cupon'
                                startContent={<span className='font-semibold mt-1'>%</span>}
                                isRequired
                                name='discount'
                                />

                                <Button className='w-full ' color='danger' variant='flat' type='button' onPress={onClose}>
                                    Cancelar.
                                </Button>
                                <Button className='w-full mb-3' color='primary' type='submit'>
                                    Agregar
                                </Button>
                            </Form>
                        </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}
