"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/#about", label: "About" },
        { href: "/#event", label: "Events" },
        { href: "/gallery", label: "Gallery" },
        { href: "/team", label: "Team" },
    ];

    const isActive = (href) => pathname === href;

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="bg-black/60 backdrop-blur-xl border-b border-green-500/20 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* LEFT LOGOS */}
                        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
                            <Image
                                src="/assets/viitlogo.png"
                                alt="VIIT Logo"
                                width={40}
                                height={40}
                                priority
                                quality={90}
                                className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full"
                            />
                            <Image
                                src="/assets/acmlogo.png"
                                alt="ACM Logo"
                                width={70}
                                height={70}
                                priority
                                quality={90}
                                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                            />
                        </div>

                        {/* DESKTOP NAV LINKS */}
                        <div className="hidden md:flex items-center gap-6 lg:gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative text-sm font-medium tracking-wide transition-colors ${
                                        isActive(link.href)
                                            ? "text-green-400"
                                            : "text-slate-300 hover:text-green-400"
                                    }`}
                                >
                                    {link.label}
                                    {isActive(link.href) && (
                                        <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-green-500 rounded-full" />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* RIGHT BUTTON (DESKTOP) */}
                        <div className="hidden md:flex items-center">
                            <a
                                href="/#contact"
                                className="px-5 py-2.5 rounded-full bg-green-600 text-black text-sm font-semibold
                hover:bg-green-500 transition shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                            >
                                Contact us
                            </a>
                        </div>

                        {/* MOBILE MENU BUTTON */}
                        <button
                            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:text-white hover:bg-green-500/20 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                            onClick={() => setIsOpen((prev) => !prev)}
                            aria-label="Toggle navigation"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* MOBILE MENU PANEL */}
                {isOpen && (
                    <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-green-500/20 animate-in slide-in-from-top">
                        <div className="px-4 pt-2 pb-4 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                                        isActive(link.href)
                                            ? "text-green-400 bg-green-500/10"
                                            : "text-slate-200 hover:text-green-400 hover:bg-green-500/10"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <a
                                href="/#contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-3 block w-full text-center px-4 py-2.5 rounded-full bg-green-600 text-black text-sm font-semibold
                hover:bg-green-500 transition shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                            >
                                Contact us
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
