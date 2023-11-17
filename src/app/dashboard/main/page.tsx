import { SimpleWidget } from '@/app/components'

export default function MainPage() {
    return (
        <div className="flex flex-col gap-8 m-8">
            <h1 className="text-5xl">Dashboard</h1>
            <span className="text-xl text-blue-600">Informacion general</span>
            <div className="flex flex-wrap p-4">
                <SimpleWidget />
            </div>
        </div>
    )
}
