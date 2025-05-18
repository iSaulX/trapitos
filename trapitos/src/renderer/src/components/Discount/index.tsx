import { Card, CardBody, Button, addToast } from '@heroui/react'
import { useGlobalContext } from '@renderer/providers/GlobalContent'
export type DiscountProps = {
    cupon: string
    discount: number
}
export default function Discount({ cupon, discount }: DiscountProps) {
     const  { setCupons } = useGlobalContext()

     function handleDelete(){
        setCupons((prev) => {
            return prev.filter((item) => item.cupon !== cupon); 
        }); 
        addToast({
            title: "Cupon eliminado",
            description: `El cupon ${cupon} ha sido eliminado`,
            color: "danger", 
        })
     }
    return (
        <Card>
            <CardBody className="flex flex-col items-center justify-between gap-2">
                <div className="w-full flex flex-row items-center justify-between">
                    <h2 className="font-light text-lg text-neutral-400">{cupon}</h2>
                    <p className="font-extrabold text-4xl bg-gradient-to-t from-gray-500 dark:to-white to-black text-transparent bg-clip-text">
                        {discount * 100}%
                    </p>
                </div>
                <Button variant="flat" className="w-full" color="danger" onPress={handleDelete}>
                    Eliminar descuento
                </Button>
            </CardBody>
        </Card>
    )
}
