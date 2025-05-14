import { useTheme } from '@heroui/use-theme'
import { Card, CardBody, CardHeader, Form, Input, Button, addToast } from '@heroui/react'
import { useState, type FormEvent } from 'react'
import {
  FaEye as Eye,
  FaEyeSlash as EyeSlash,
  FaUser as User,
  FaLock as Lock
} from 'react-icons/fa'
import { useNavigate } from 'react-router'
import { endpoint } from '@renderer/config'
export default function Home() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false); 
  const navigate = useNavigate()
  useTheme()

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    setLoading(true)
    const data = Object.fromEntries(new FormData(event.currentTarget))
    try {
      const response = await fetch(`${endpoint}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if (response.ok){
        navigate('/dashboard')
        return; 
      }
      addToast({
        title: 'Error',
        description: 'Usuario o contraseña incorrectos.',
        color: 'danger'
      })
    } catch (error) {
      addToast({
        title: 'Error',
        description: 'Error al conectar con el servidor.',
        color: 'danger'
      }); 
    } finally {
      setLoading(false);
    } 
  }

  function ShowPassword() {
    function handleCLick(): void {
      setShowPassword((prev: boolean) => !prev)
    }

    return (
      <button type="button" className="bg-transparent" onClick={handleCLick}>
        {showPassword ? (
          <EyeSlash aria-hidden className="focus:outline-none" />
        ) : (
          <Eye aria-hidden className="focus:outline-none" />
        )}
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
          <Form className="flex flex-col gap-2 w-full" validationBehavior="native" onSubmit={handleSubmit}>
            <Input
              label="Usuario"
              placeholder="Ingresa tu usuario"
              name="username"
              isRequired
              autoFocus
              startContent={<User aria-hidden className="focus:outline-none" />}
            />
            <Input
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
              name="password"
              type={showPassword ? 'text' : 'password'}
              isRequired
              endContent={<ShowPassword />}
              startContent={<Lock aria-hidden className="focus:outline-none" />}
            />
            <Button
              className="w-full"
              variant="shadow"
              color="primary"
              type='submit'
              isLoading={loading}
              startContent={<Lock aria-hidden className="focus:outline-none" />}
            >
              Ingresar.
            </Button>
          </Form>
        </CardBody>
      </Card>
    </main>
  )
}
