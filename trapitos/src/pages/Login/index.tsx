import { useTheme } from "@heroui/use-theme";
import { Card, CardBody, CardHeader, Form, Input, Button } from "@heroui/react";

export default function Login(){
    useTheme(); 
    return ( 
        <main className="text-foreground bg-background flex flex-flex w-full min-h-screen">
            <Card className="min-w-[340px] w-full lg:w-1/4">
                <CardHeader>
                    <h2 className="font-extrabold text-2xl">Iniciar sesión. </h2>
                </CardHeader>
                <CardBody>
                    
                </CardBody>
            </Card>
        </main>
    )
}