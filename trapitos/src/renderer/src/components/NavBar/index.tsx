import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Avatar,
    DropdownMenu,
    Dropdown,
    DropdownItem,
    DropdownSection,
    DropdownTrigger,
    Button,
    Badge
} from '@heroui/react'
import { useGlobalContext } from '@renderer/providers/GlobalContent'
import { FaCartShopping as Cart } from 'react-icons/fa6'
import { Link } from 'react-router'
export default function NavBar() {
    const { cart } = useGlobalContext()
    return (
        <Navbar isBordered isBlurred>
            <NavbarBrand>
                <Link className="text-2xl font-extrabold" to="/dashboard">Mis trapitos</Link>
            </NavbarBrand>
            <NavbarContent justify="end" className="flex flex-row items-center jutify-center">
                <NavbarItem>
                    <Badge color="primary" content={cart.length}>
                        <Button isIconOnly aria-label="Ir al caritto" as={Link} to="/dashboard/cart">
                            <Cart aria-hidden className="focus:outline-none" />
                        </Button>
                    </Badge>
                </NavbarItem>
                <NavbarItem>
                    <Dropdown>
                        <DropdownTrigger>
                            <Avatar />
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownSection title="Configuración" showDivider>
                                <DropdownItem key="theme">Cambiar tema</DropdownItem>
                            </DropdownSection>
                            <DropdownSection title="Zona de peligro">
                                <DropdownItem key="logout">Cerrar sesión.</DropdownItem>
                            </DropdownSection>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
