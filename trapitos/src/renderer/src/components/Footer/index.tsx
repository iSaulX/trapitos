import ThemeSwitcher from "../ThemeSwitcher"
export default function Footer(){
    return ( 
        <footer className="flex items-center justify-between p-8 border-t-1 dark:border-gray-700 border-gray-200 w-full">
            <p className="text-center text-neutral-400 font-semibold">© {new Date().getFullYear()} Mis trapitos. Todos los derechos reservados.</p>
            <ThemeSwitcher />
        </footer>
    )
}