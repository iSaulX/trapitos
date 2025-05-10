import { useTheme } from '@heroui/use-theme'
import { Card, CardBody, CardHeader, Form, Input, Button } from '@heroui/react'
import { useState } from 'react'
import { FaEye as Eye, FaEyeSlash as EyeSlash, FaUser as User, FaLock as Lock} from "react-icons/fa"; 

export default function Home() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  useTheme()

    

  function ShowPassword(){
    function handleCLick(): void{
        setShowPassword((prev: boolean) => !prev); 
    }

    return ( 
        <button
            type='button'
            className="bg-transparent"
            onClick={handleCLick}
        >
            {showPassword ? <EyeSlash aria-hidden className='focus:outline-none'/> : <Eye aria-hidden className='focus:outline-none'/>}
        </button>
    )
  }
  return (
    <main className="flex flex-col bg-[url('/background.webp')] p-3 bg-center bg-contain bg-no-repeat items-center justify-center min-h-screen w-full bg-background text-foreground">
      <Card className="min-w-[350px] lg:w-1/4 w-full">
        <CardHeader>
          <h1 className="font-extrabold text-3xl font-sans">Iniciar sesión.</h1>
        </CardHeader>
        <CardBody>
          <Form className="flex flex-col gap-2 w-full" validationBehavior='native'>
            <Input
              label="Usuario"
              placeholder="Ingresa tu usuario"
              name="username"
              isRequired
              autoFocus
              startContent={<User aria-hidden className='focus:outline-none'/>}
              
            />
            <Input
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
              name="password"
              type={showPassword ? 'text' : 'password'}
              isRequired
              endContent={<ShowPassword/>}
              startContent={<EyeSlash aria-hidden className='focus:outline-none'/>}
            />
            <Button className="w-full" variant="shadow" color="primary" startContent={<Lock aria-hidden className='focus:outline-none'/>}>
              Ingresar.
            </Button>
          </Form>
        </CardBody>
      </Card>
    </main>
  )
}
