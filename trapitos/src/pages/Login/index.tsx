import { useTheme } from "@heroui/use-theme";
import { Card, CardBody, CardHeader, Form, Input, Button } from "@heroui/react";
import { type FormEvent, useState } from "react";
import { FaEye as Eye, FaEyeSlash as EyeSlash, FaUser as User, FaLock as Lock } from "react-icons/fa";

export default function Login() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    useTheme();

    async function handleSumbit(
        event: FormEvent<HTMLFormElement>
    ): Promise<void> {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.currentTarget));
    }

    function ButtonShowPassword() {
        return (
            <button
                className="border-none bg-transparent"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? (
                    <EyeSlash aria-hidden className="focus:outline-none" />
                ) : (
                    <Eye aria-hidden className="focus:outline-none" />
                )}
            </button>
        );
    }
    return (
        <main className="text-foreground bg-[url('/background.webp')] bg-cover bg-no-repeat bg-center bg-background flex flex-col items-center justify-center w-full min-h-screen">
            <Card className="min-w-[340px] w-full lg:w-1/4">
                <CardHeader>
                    <h2 className="font-extrabold text-3xl">Iniciar sesión. </h2>
                </CardHeader>
                <CardBody>
                    <Form validationBehavior="native" onSubmit={handleSumbit}>
                        <Input
                            autoFocus
                            placeholder="Ingresa tu nombre de usuario"
                            isRequired
                            startContent={<User aria-hidden/>}
                            label="Usuario"
                            name="username"
                        />
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Ingresa tu contraseña"
                            isRequired
                            startContent={<Lock aria-hidden />}
                            endContent={<ButtonShowPassword />}
                            label="Contraseña"
                            name="password"
                        />
                        <Button type="submit" className="w-full" color="primary">
                            Ingresar al sistema.
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        </main>
    );
}
