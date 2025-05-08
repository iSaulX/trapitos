
export default function Footer(){
    return ( 
        <footer className="w-full h-auto flex items-center justify-center p-10 border-t-1 dark:border-gray-800 border-gray-200">
            <p className="font-semibold">&copy; {new Date().getFullYear()}. Mis trapitos. Todos los derechos reservados.</p>
        </footer>
    )
}