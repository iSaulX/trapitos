import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Avatar,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DropdownTrigger,
    DropdownSection,
} from "@heroui/react";

export default function NavBar() {
    return (
        <Navbar isBordered isBlurred>
            <NavbarBrand>
                <h1 className="text-2xl font-extrabold">Mis trapitos</h1>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Dropdown placement="bottom-end" backdrop="opaque">
                        <DropdownTrigger>
                            <Avatar className="cursor-pointer" />
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownSection title="Mi cuenta y configuración" showDivider>
                                <DropdownItem key="Perfil">Perfil.</DropdownItem>
                                <DropdownItem key="theme">
                                    Cambiar tema de la aplicación.
                                </DropdownItem>
                            </DropdownSection>
                            <DropdownSection title="Zona de peligro">
                                <DropdownItem color="danger" variant="flat" key="logout">
                                    Cerrar sesion
                                </DropdownItem>
                            </DropdownSection>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
