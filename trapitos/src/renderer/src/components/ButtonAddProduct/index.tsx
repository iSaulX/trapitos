import {
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  Form,
  Card,
  CardBody,
  addToast
} from '@heroui/react'
import { useGlobalContext } from '@renderer/providers/GlobalContent'
import { useRef, useState } from 'react'
import type { FormEvent, ChangeEvent } from 'react'
import type { Product } from '@renderer/types/types'
export default function ButtonAddProduct() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { products, setProducts } = useGlobalContext()
  const [file, setFile] = useState<string>('')

  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleAddElement(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    const productName = data.name as string
    if (products.find((product) => product.name === productName)) {
      addToast({
        title: 'Error',
        description: `El producto ${productName} ya existe`,
        color: 'danger'
      })
      return
    }
    const newProduct: Product = {
      id: products.length + 1,
      name: data.name as string,
      price: Number(data.price),
      description: data.description as string,
      quantity: Number(data.quantity),
      image: file
    }
    setProducts((prev) => [...prev, newProduct])
    setFile('')
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>): void {
    const file = event.target.files?.[0]
    if (!file) return
    setFile(URL.createObjectURL(file))
  }

  return (
    <div className="flex items-center justify-end w-full">
      <Button color="primary" onPress={onOpen} size="sm">
        Agregar producto.
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose: () => void) => (
            <>
              <ModalHeader>
                <h1 className="text-2xl font-extrabold">Agregar nuevo producto</h1>
              </ModalHeader>
              <ModalBody>
                <Form className="flex flex-col items-center  justify-center gap-2 w-full" validationBehavior='native' onSubmit={handleAddElement}>
                  <Input isRequired label="Nombre" placeholder="Nombre del producto" name="name" />
                  <Input isRequired label="Precio" placeholder="Precio del producto" name="price" />
                  <Input
                    isRequired
                    label="Descripción"
                    placeholder="Descripción del producto"
                    name="description"
                  />
                  <Input
                    isRequired
                    label="Cantidad"
                    placeholder="Cantidad disponible del producto"
                    name="quantity"
                  />
                  <Card
                    className="w-full aspect-square"
                    isPressable
                    onPress={() => fileInputRef.current?.click()}
                  >
                    {!file ? (
                      <div className="w-full bg-gray-700 h-full rounded-xl" />
                    ) : (
                      <img
                        src={file}
                        alt="Imagen del producto"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </Card>
                  <Button
                    type="button"
                    color="danger"
                    variant="flat"
                    className="w-full"
                    onPress={onClose}
                  >
                    Cancelar
                  </Button>
                  <Button className="w-full" color="primary" type="submit">
                    Agregar nuevo producto
                  </Button>
                </Form>
                <input
                  ref={fileInputRef}
                  hidden
                  accept=".png,.jpg,.jpeg"
                  type="file"
                  onChange={handleImageChange}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
