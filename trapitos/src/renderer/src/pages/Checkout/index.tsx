import { Card, CardBody, Button, Divider, Form, Input, Textarea } from '@heroui/react'
import { useGlobalContext } from '@renderer/providers/GlobalContent'
import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router'

export default function Checkout() {
    const { cart, setCart, setPurchases, setCustomers } = useGlobalContext()
    const navigate = useNavigate()
    const [paymentMethod, setPaymentMethod] = useState<'cash' | 'card'>('cash')
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        const data = Object.fromEntries(new FormData(event.currentTarget))
        setCustomers((prev) => {
            const newCustomer = {
                id: prev.length + 1,
                name: data.name as string,
                email: data.email as string,
                phone: data.phone as string,
                address: data.address as string
            }
            return [...prev, newCustomer]
        })
        setPurchases((prev) => {
            const newPurchase = {
                id: prev.length + 1,
                date: new Date().toLocaleString(),
                customer: {
                    id: prev.length + 1,
                    name: data.name as string,
                    email: data.email as string,
                    phone: data.phone as string,
                    address: data.address as string
                },
                products: cart,
                total: total * 0.9
            }
            return [...prev, newPurchase]
        })
        setCart([])
        navigate('/dashboard/done')
    }
    return (
        <div className="w-full flex items-center justify-center py-24 h-full">
            <Card className="w-1/2 h-3/4 flex flex-col gap-4">
                <CardBody className="flex items-center justify-center flex-col gap-4">
                    <p className="font-semibold text-neutral-400 text-small">Carrito</p>
                    <h1 className="font-extrabold text-2xl">Total</h1>
                    <p className="font-extrabold text-5xl">${(total * 0.9).toFixed(2)}</p>
                    <Card
                        className="border-2 w-full
                    data-[method='card']:border-gray-600
                    data-[method='cash']:border-primary
                    "
                        data-method={paymentMethod}
                        onPress={() => setPaymentMethod('cash')}
                        isPressable
                    >
                        <CardBody>Pago con efectivo</CardBody>
                    </Card>
                    <Card
                        className="border-2
                    data-[method='cash']:border-gray-600
                    data-[method='card']:border-primary w-full
                    "
                        isPressable
                        onPress={() => setPaymentMethod('card')}
                        data-method={paymentMethod}
                    >
                        <CardBody>Pago con tarjeta</CardBody>
                    </Card>
                    <Divider />
                    <Form validationBehavior="native" className="w-full" onSubmit={handleSubmit}>
                        <Input placeholder="Nombre del cliente" label="Nombre" isRequired name="name" />
                        <Input
                            placeholder="Correo electronico"
                            label="Correo"
                            isRequired
                            type="email"
                            name="email"
                        />
                        <Input
                            placeholder="Numero de telefono"
                            label="Telefono"
                            isRequired
                            type="tel"
                            name="phone"
                        />
                        <Textarea placeholder="Direccion" label="Direccion" isRequired name="address" />
                        <Button type="submit" variant="shadow" color="primary" className="w-full mt-4">
                            Realizar compra
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}
