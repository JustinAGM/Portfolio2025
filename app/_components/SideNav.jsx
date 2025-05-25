"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    AtSign,
    BicepsFlexed,
    BriefcaseBusiness,
    FileUser,
    HandPlatter,
    House,
} from "lucide-react";

function SideNav() {
    const path = usePathname();

    const menuList = [

        { id: 1, name: "Home", icon: House, path: "#home" },
        { id: 2, name: "About", icon: FileUser, path: "#about" },
        { id: 3, name: "Skills", icon: BicepsFlexed, path: "#skills" },
        { id: 4, name: "Work", icon: BriefcaseBusiness, path: "#work" },
        { id: 5, name: "Services", icon: HandPlatter, path: "#services" },
        { id: 6, name: "Contact", icon: AtSign, path: "#contact" }

    ];

    return (
        <div className="h-screen p-5 flex flex-col">
            <div className="flex items-center justify-center mb-20">
                <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={70}
                    height={70}
                    className="rounded-full object-cover"
                />
            </div>
            <div className="mt-10 flex-grow space-y-10">
                {menuList.map((menu) => (
                    <Link
                        key={menu.id}
                        href={menu.path}
                        className={`flex gap-3 items-center p-4 rounded-md text-xl transition-all duration-200 ${path === menu.path
                            ? "bg-blue-200 text-black font-bold"
                            : "text-cyan-900 hover:text-white hover:bg-cyan-400"
                            }`}
                    >
                        <menu.icon className="w-6 h-6" />
                        {menu.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SideNav;
