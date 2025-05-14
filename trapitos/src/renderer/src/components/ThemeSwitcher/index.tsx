import { FaSun as Sun, FaMoon as Moon } from 'react-icons/fa'
import { Switch } from '@heroui/react'
import { useTheme } from '@heroui/use-theme'

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()

    function handleThemeChange(): void {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <Switch
            endContent={<Sun aria-hidden className="focus:outline-none" />}
            startContent={<Moon aria-hidden className="focus:outline-none" />}
            isSelected={theme === 'dark'}
            size='lg'
            onChange={handleThemeChange}
            aria-label="Cambiar tema de la aplicacion"
        />
    )   
}
