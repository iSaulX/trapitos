import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Outlet } from "react-router";
import { useTheme } from "@heroui/use-theme";
export default function BaseLayout(){
    useTheme(); 
    return ( 
        <div className="flex flex-col min-h-screen w-full bg-background text-foreground">
            <NavBar />
            <main className="flex-1 w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}