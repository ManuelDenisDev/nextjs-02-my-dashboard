import Link from 'next/link'
import { Sidebar } from './components'

export default function NotFound() {
    return (
        <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
            <div className="flex">
                <Sidebar />

                <div className="w-full ">
                    <main className="h-screen w-full flex flex-col justify-center items-center">
                        <h1 className="text-9xl text-slate-900 font-extrabold tracking-widest">
                            404
                        </h1>
                        <div className="bg-blue-600 px-2 text-sm rounded rotate-12 absolute">
                            <span className="text-white">Page Not Found</span>
                        </div>
                        <button className="mt-5">
                            <a className="relative inline-block text-sm font-medium text-white group active:text-blue-600 focus:outline-none focus:ring">
                                <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blue-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>

                                <span className="relative block px-8 py-3 bg-slate-900 border border-current">
                                    <Link href="/dashboard/counter">Ir al counter</Link>
                                </span>
                            </a>
                        </button>
                    </main>
                </div>
            </div>
        </div>
    )
}
