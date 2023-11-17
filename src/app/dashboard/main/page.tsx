import { WidgetsGrid } from '@/components'

export const metadata = {
    title: 'Admin Dashboard',
    description: 'Admin Dashboard',
}

export default function MainPage() {
    return (
        <div className="flex flex-col gap-8 m-8">
            <h1 className="text-5xl">Dashboard</h1>
            <span className="text-xl text-blue-600">Informacion general</span>
            <WidgetsGrid />
        </div>
    )
}
