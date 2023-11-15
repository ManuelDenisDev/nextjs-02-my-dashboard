"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarMenuItemProps {
  path: string;
  icono: JSX.Element;
  titulo: string;
  subtitulo: string;
}

export const SidebarMenuItem = ({
  path,
  icono,
  titulo,
  subtitulo,
}: SidebarMenuItemProps) => {
  const actualPath = usePathname();

  return (
    <Link
      href={path}
      className={`w-full p-4 inline-flex space-x-4 items-center border-b rounded border-slate-700 hover:bg-white/5 transition ease-linear duration-15 ${
        actualPath === path ? "bg-blue-800" : ""
      }`}>
      <div>{icono}</div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{titulo}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {subtitulo}
        </span>
      </div>
    </Link>
  );
};
