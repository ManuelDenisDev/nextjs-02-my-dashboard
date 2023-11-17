import Image from 'next/image'
import React from 'react'
import {
    IoBrowsersOutline,
    IoCalculator,
    IoFootball,
    IoHeartOutline,
    IoLogoReact,
} from 'react-icons/io5'
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
    {
        path: '/dashboard/favorites',
        icono: <IoHeartOutline size={30} />,
        titulo: 'Favorites',
        subtitulo: 'Global State',
    },
]

export const Sidebar = () => {
    return (
        <aside
            id="menu"
            className="bg-gray-900 space-y-8 py-8 px-4 min-h-screen z-10 text-slate-300 w-32 lg:w-96 left-0 overflow-y-scroll">
            <header id="logo" className='h-20 flex lg:flex-col items-center justify-center lg:items-start lg:px-4'>
                <h1 className="flex items-center text-lg lg:text-2xl font-bold text-white -rotate-90 lg:rotate-0">
                    <IoLogoReact className="mr-4 hidden lg:flex" />
                    ManDen
                    <span className="text-blue-500">Dev</span>.
                </h1>
                <p className="text-slate-500 text-sm hidden lg:block">Futuro desarrollador Front-End</p>
            </header>
            <div id="profile" className='flex items-center justify-center lg:flex-col lg:items-start lg:px-4'>
                <p className="hidden lg:block text-slate-500 text-xs">Bienvenido de nuevo,</p>
                <Link href="#" className="inline-flex pt-4 space-x-4 items-center">
                    <span>
                        <Image
                            className="rounded-full w-10 h-10"
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                            width={50}
                            height={50}
                            alt="Foto de perfil"
                        />
                    </span>
                    <span className="hidden lg:block text-xs lg:text-base font-bold">Manuel Denis</span>
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
