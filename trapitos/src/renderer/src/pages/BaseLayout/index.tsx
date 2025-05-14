import NavBar from "@renderer/components/NavBar";
import Footer from "@renderer/components/Footer";
import { useTheme } from "@heroui/use-theme";
import { Outlet } from "react-router";
export default function BaseLayout(){
    useTheme(); 
    return ( 
        <div className="w-full flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
            <NavBar />
            <main className="flex flex-1 items-start justify-center w-full lg:w-3/4">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}