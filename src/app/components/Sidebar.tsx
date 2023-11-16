import Image from "next/image";
import React from "react";
import {
  IoBrowsersOutline,
  IoCalculator,
  IoFootball,
  IoLogoReact,
} from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";
import Link from "next/link";

const menuItems = [
  {
    path: "/dashboard/main",
    icono: <IoBrowsersOutline size={30} />,
    titulo: "Dashboard",
    subtitulo: "Visualizacion",
  },
  {
    path: "/dashboard/counter",
    icono: <IoCalculator size={30} />,
    titulo: "Contador",
    subtitulo: "Contador client side",
  },
  {
    path: "/dashboard/pokemons",
    icono: <IoFootball size={30} />,
    titulo: "Pokemons",
    subtitulo: "Generación Estática",
  },
];

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

        {/* <a
          href="#"
          className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">
              Counter
            </span>
            <span className="text-sm text-slate-500 hidden md:block">
              Estado Local
            </span>
          </div>
        </a> */}
      </div>
    </aside>
  );
};
