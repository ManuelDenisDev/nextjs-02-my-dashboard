import Image from 'next/image'
import React from 'react'
import { IoBrowsersOutline, IoCalculator, IoFootball, IoLogoReact } from 'react-icons/io5'
import { SidebarMenuItem } from './SidebarMenuItem'
import Link from 'next/link'

const menuItems = [
    {
        path: '/dashboard/main',
        icono: <IoBrowsersOutline size={30} />,
        titulo: 'Dashboard',
        subtitulo: 'Visualizacion',
    },
    {
        path: '/dashboard/counter',
        icono: <IoCalculator size={30} />,
        titulo: 'Contador',
        subtitulo: 'Contador client side',
    },
    {
        path: '/dashboard/pokemons',
        icono: <IoFootball size={30} />,
        titulo: 'Pokemons',
        subtitulo: 'Generación Estática',
    },
]

export const Sidebar = () => {
    return (
        <aside
            id="menu"
            className="bg-gray-900 space-y-8 p-8 min-h-screen z-10 text-slate-300 w-96 left-0 overflow-y-scroll">
            <header id="logo">
                <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact className="mr-4" />
                    ManDen
                    <span className="text-blue-500">Dev</span>.
                </h1>
                <p className="text-slate-500 text-sm">Futuro desarrollador Front-End</p>
            </header>
            <div id="profile">
                <p className="text-slate-500">Bienvenido de nuevo,</p>
                <Link href="#" className="inline-flex p-4 space-x-4 items-center">
                    <span>
                        <Image
                            className="rounded-full w-10 h-10"
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                            width={50}
                            height={50}
                            alt="Foto de perfil"
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">Manuel Denis</span>
                </Link>
            </div>
            <div id="nav" className="w-full">
                {menuItems.map((item) => (
                    <SidebarMenuItem key={item.path} {...item} />
                ))}
            </div>
        </aside>
    )
}
