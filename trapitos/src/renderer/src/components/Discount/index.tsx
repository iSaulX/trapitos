import { Card, CardBody } from "@heroui/react"; 

export type DiscountProps = {
    cupon: string;
    discount: number;
}
export default function Discount({ cupon, discount }: DiscountProps){
    return ( 
        <Card>
            <CardBody className="flex lg:flex-row flex-col items-center justify-between gap-2">
                <h2 className="font-light text-lg text-neutral-400">{cupon}</h2>
                <p className="font-extrabold text-4xl bg-gradient-to-t from-gray-500 dark:to-white to-black text-transparent bg-clip-text">{discount * 100}%</p>
            </CardBody>
        </Card>
    )
}