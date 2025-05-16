import { BsCheck as Check } from 'react-icons/bs'
import { Link } from 'react-router'
import { Card, CardBody, Button } from '@heroui/react'

export default function Done() {
  return (
    <div className="w-full flex items-center justify-center py-24 h-full">
      <Card className="w-1/2 h-3/4 flex flex-col gap-4">
        <CardBody className="flex items-center justify-center flex-col gap-4">
          <Check className="text-success text-9xl" />
          <h1 className="font-extrabold text-4xl">Compra realizada</h1>
          <p className="font-semibold text-neutral-400 text-small">Gracias por su compra</p>
          <Button as={Link} to="/dashboard" className="w-full" color="primary">
            Volver al inicio
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}
