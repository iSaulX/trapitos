import { Breadcrumbs, Divider, BreadcrumbItem } from '@heroui/react'

function getMessage(): string {
  const hour: number = new Date().getHours()
  if (hour < 12) {
    return 'Buenos días'
  }
  if (hour < 18) {
    return 'Buenas tardes'
  }
  return 'Buenas noches'
}

export default function Dashboard() {
  return (
    <div className="flex flex-col items-start justify-center gap-2 w-full h-full p-3">
      <Breadcrumbs>
        <BreadcrumbItem>Inicio</BreadcrumbItem>
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
      </Breadcrumbs>
      <h1 className="font-bold text-2xl">{getMessage()}, Ricardo.</h1>
      <p className="font-semibold text-neutral-400">Tus productos. Justo donde los dejaste.</p>
      <Divider />
    </div>
  )
}
