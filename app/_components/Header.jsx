'use client'
import React, { useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const menuList = [
        { id: 1, icon: Linkedin, path: "https://www.linkedin.com/in/machicajustinalexis" },
        { id: 2, icon: Facebook, path: "https://www.facebook.com/justin.machics/" },
        { id: 3, icon: Instagram, path: "https://www.instagram.com/justinmachica/" },
    ];

    return (
        <div>
            <div className="flex items-center justify-between p-5 shadow-sm bg-cyan-950">

                <div className="flex gap-3 text-slate-200">
                    <span className="text-lg mt-2">Follow Me ── </span>
                    {menuList.map((menu) => (
                        <Link
                            key={menu.id}
                            href={menu.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-md hover:bg-cyan-400 transition-colors"
                        >
                            <menu.icon className="w-6 h-6 text-slate-200 hover:text-white hover:bg-cyan-400" />
                        </Link>
                    ))}
                </div>


                {/* Hamburger for small screens */}
                <button
                    onClick={toggleMenu}
                    className="sm:hidden flex flex-col justify-center items-center w-10 h-10 ml-4 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <div className={`w-7 h-1 bg-green-900 mb-1 rounded transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <div className={`w-7 h-1 bg-green-900 mb-1 rounded transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
                    <div className={`w-7 h-1 bg-green-900 rounded transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Desktop Nav */}

            {/* Mobile Nav */}
            {menuOpen && (
                <nav className="sm:hidden absolute right-5 top-20 mt-2 bg-slate-100 border border-cyan-900 rounded shadow-lg flex flex-col w-40 z-50">
                    <Link href="#home" className="px-4 py-2 hover:bg-cyan-400 border-b border-cyan-900" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link href="#about" className="px-4 py-2 hover:bg-cyan-400  border-b border-cyan-900" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link href="#skills" className="px-4 py-2 hover:bg-cyan-400  border-b border-cyan-900" onClick={() => setMenuOpen(false)}>Skills</Link>
                    <Link href="#work" className="px-4 py-2 hover:bg-cyan-400  border-b border-cyan-900" onClick={() => setMenuOpen(false)}>Work</Link>
                    <Link href="#services" className="px-4 py-2 hover:bg-cyan-400  border-b border-cyan-900" onClick={() => setMenuOpen(false)}>Services</Link>
                    <Link href="#contact" className="px-4 py-2 hover:bg-cyan-400  border-b border-cyan-900" onClick={() => setMenuOpen(false)}>Contact</Link>
                </nav>
            )}
        </div>
    );
}

export default Header;
