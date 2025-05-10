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
    DropdownTrigger
} from '@heroui/react'

export default function NavBar() {
    return (
        <Navbar>
            <NavbarBrand>
                <h2 className="text-2xl font-extrabold">Mis trapitos</h2>
            </NavbarBrand>
            <NavbarContent>
                <NavbarItem>
                    <Dropdown>
                        <DropdownTrigger>
                            <Avatar />
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownSection title="Configuración" showDivider>
                                <DropdownItem key="theme">
                                    Cambiar tema
                                </DropdownItem>
                            </DropdownSection>
                            <DropdownSection title="Zona de peligro">
                                <DropdownItem key="logout">
                                    Cerrar sesión. 
                                </DropdownItem>
                            </DropdownSection>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
