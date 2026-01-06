// "use client";
//
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
//
// const Navbar = () => {
//     const pathname = usePathname();
//
//     return (
//         <nav className="fixed top-0 left-0 w-full z-50">
//             {/* Glass Background */}
//             <div className="bg-black/60 backdrop-blur-xl border-b border-blue-500/20 shadow-lg">
//                 <div className="max-w-7xl mx-auto px-6">
//                     <div className="flex items-center justify-between h-20">
//
//                         {/* ===== LEFT LOGOS ===== */}
//                         <div className="flex items-center gap-6">
//                             <Image
//                                 src="/assets/viitlogo.png"
//                                 alt="VIIT Logo"
//                                 width={53}
//                                 height={53}
//                                 priority
//                                 className="object-contain rounded-full"
//                             />
//                             <Image
//                                 src="/assets/acmlogo.png"
//                                 alt="ACM Logo"
//                                 width={93}
//                                 height={93}
//                                 priority
//                                 className="object-contain"
//                             />
//                         </div>
//
//                         {/* ===== CENTER NAV LINKS (Manual Links) ===== */}
//                         <div className="hidden md:flex items-center gap-10">
//
//                             {/* Home Link */}
//                             <Link
//                                 href="/"
//                                 className={`relative text-sm font-medium tracking-wide transition-colors ${pathname === "/" ? "text-blue-400" : "text-slate-300 hover:text-blue-400"
//                                     }`}
//                             >
//                                 Home
//                                 {pathname === "/" && (
//                                     <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 rounded-full" />
//                                 )}
//                             </Link>
//
//                             <Link
//                                 href="/#about"
//                                 className={`relative text-sm font-medium tracking-wide transition-colors ${pathname === "/#about" ? "text-blue-400" : "text-slate-300 hover:text-blue-400"
//                                     }`}
//                             >
//                                 About
//                                 {pathname === "/#about" && (
//                                     <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 rounded-full" />
//                                 )}
//                             </Link>
//
//                             <Link
//                                 href="/#event"
//                                 className={`relative text-sm font-medium tracking-wide transition-colors ${pathname === "/#event" ? "text-blue-400" : "text-slate-300 hover:text-blue-400"
//                                     }`}
//                             >
//                                 Events
//                                 {pathname === "/#event" && (
//                                     <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 rounded-full" />
//                                 )}
//                             </Link>
//
//                             {/* Gallery Link */}
//                             <Link
//                                 href="/gallery"
//                                 className={`relative text-sm font-medium tracking-wide transition-colors ${pathname === "/gallery" ? "text-blue-400" : "text-slate-300 hover:text-blue-400"
//                                     }`}
//                             >
//                                 Gallery
//                                 {pathname === "/gallery" && (
//                                     <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 rounded-full" />
//                                 )}
//                             </Link>
//
//                             {/* Team Link */}
//                             <Link
//                                 href="/team"
//                                 className={`relative text-sm font-medium tracking-wide transition-colors ${pathname === "/team" ? "text-blue-400" : "text-slate-300 hover:text-blue-400"
//                                     }`}
//                             >
//                                 Team
//                                 {pathname === "/team" && (
//                                     <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 rounded-full" />
//                                 )}
//                             </Link>
//                         </div>
//
//                         {/* ===== RIGHT BUTTON ===== */}
//                         <div className="flex items-center">
//                             <a
//                                 href="/#contact"
//                                 className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-semibold
//                                 hover:bg-blue-700 transition shadow-[0_0_20px_rgba(59,130,246,0.4)]"
//                             >
//                                 Contact us
//                             </a>
//                         </div>
//
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };
//
// export default Navbar;


// "use client";
//
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
//
// const Navbar = () => {
//     const pathname = usePathname();
//     const [isOpen, setIsOpen] = useState(false);
//
//     const navLinks = [
//         { href: "/", label: "Home" },
//         { href: "/#about", label: "About" },
//         { href: "/#event", label: "Events" },
//         { href: "/gallery", label: "Gallery" },
//         { href: "/team", label: "Team" },
//     ];
//
//     const isActive = (href) => pathname === href;
//
//
//     return (
//         <nav className="fixed top-0 left-0 w-full z-50">
//             <div className="bg-black/60 backdrop-blur-xl border-b border-blue-500/20 shadow-lg">
//                 <div className="max-w-7xl mx-auto px-4 md:px-6">
//                     <div className="flex items-center justify-between h-16 md:h-20">
//                         {/* LEFT LOGOS */}
//                         <div className="flex items-center gap-4 md:gap-6">
//                             <Image
//                                 src="/assets/viitlogo.png"
//                                 alt="VIIT Logo"
//                                 width={48}
//                                 height={48}
//                                 priority
//                                 className="object-contain rounded-full"
//                             />
//                             <Image
//                                 src="/assets/acmlogo.png"
//                                 alt="ACM Logo"
//                                 width={80}
//                                 height={80}
//                                 priority
//                                 className="object-contain hidden xs:block"
//                             />
//                         </div>
//
//                         {/* DESKTOP NAV LINKS */}
//                         <div className="hidden md:flex items-center gap-8">
//                             {navLinks.map((link) => (
//                                 <Link
//                                     key={link.href}
//                                     href={link.href}
//                                     className={`relative text-sm font-medium tracking-wide transition-colors ${
//                                         isActive(link.href)
//                                             ? "text-blue-400"
//                                             : "text-slate-300 hover:text-blue-400"
//                                     }`}
//                                 >
//                                     {link.label}
//                                     {isActive(link.href) && (
//                                         <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 rounded-full" />
//                                     )}
//                                 </Link>
//                             ))}
//                         </div>
//
//                         {/* RIGHT BUTTON (DESKTOP) */}
//                         <div className="hidden md:flex items-center">
//                             <a
//                                 href="/#contact"
//                                 className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold
//                 hover:bg-blue-700 transition shadow-[0_0_20px_rgba(59,130,246,0.4)]"
//                             >
//                                 Contact us
//                             </a>
//                         </div>
//
//                         {/* MOBILE MENU BUTTON */}
//                         <button
//                             className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:text-white hover:bg-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             onClick={() => setIsOpen((prev) => !prev)}
//                             aria-label="Toggle navigation"
//                         >
//                             <svg
//                                 className="h-6 w-6"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 {isOpen ? (
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 ) : (
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M4 6h16M4 12h16M4 18h16"
//                                     />
//                                 )}
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//
//                 {/* MOBILE MENU PANEL */}
//                 {isOpen && (
//                     <div className="md:hidden bg-black/90 border-t border-blue-500/20">
//                         <div className="px-4 pt-2 pb-4 space-y-2">
//                             {navLinks.map((link) => (
//                                 <Link
//                                     key={link.href}
//                                     href={link.href}
//                                     onClick={() => setIsOpen(false)}
//                                     className={`block px-3 py-2 rounded-md text-sm font-medium ${
//                                         isActive(link.href)
//                                             ? "text-blue-400 bg-blue-500/10"
//                                             : "text-slate-200 hover:text-blue-400 hover:bg-blue-500/10"
//                                     }`}
//                                 >
//                                     {link.label}
//                                 </Link>
//                             ))}
//
//                             <a
//                                 href="/#contact"
//                                 onClick={() => setIsOpen(false)}
//                                 className="mt-2 block w-full text-center px-4 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold
//                 hover:bg-blue-700 transition shadow-[0_0_20px_rgba(59,130,246,0.4)]"
//                             >
//                                 Contact us
//                             </a>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// };
//
// export default Navbar;



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
        <nav className="fixed top-0 left-0 w-full max-w-screen overflow-x-hidden z-50">
            <div className="bg-black/60 backdrop-blur-xl border-b border-blue-500/20 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* LEFT LOGOS */}
                        <div className="flex items-center gap-4 md:gap-6">
                            <Image
                                src="/assets/viitlogo.png"
                                alt="VIIT Logo"
                                width={48}
                                height={48}
                                priority
                                className="object-contain rounded-full"
                            />
                            <Image
                                src="/assets/acmlogo.png"
                                alt="ACM Logo"
                                width={80}
                                height={80}
                                priority
                                className="object-contain"
                            />
                        </div>

                        {/* DESKTOP NAV LINKS */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative text-sm font-medium tracking-wide transition-colors ${
                                        isActive(link.href)
                                            ? "text-blue-400"
                                            : "text-slate-300 hover:text-blue-400"
                                    }`}
                                >
                                    {link.label}
                                    {isActive(link.href) && (
                                        <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 rounded-full" />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* RIGHT BUTTON (DESKTOP) */}
                        <div className="hidden md:flex items-center">
                            <a
                                href="/#contact"
                                className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold
                hover:bg-blue-700 transition shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                            >
                                Contact us
                            </a>
                        </div>

                        {/* MOBILE MENU BUTTON */}
                        <button
                            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:text-white hover:bg-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    <div className="md:hidden bg-black/90 border-t border-blue-500/20 w-full max-w-screen overflow-x-hidden">
                        <div className="px-4 pt-2 pb-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-sm font-medium ${
                                        isActive(link.href)
                                            ? "text-blue-400 bg-blue-500/10"
                                            : "text-slate-200 hover:text-blue-400 hover:bg-blue-500/10"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <a
                                href="/#contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-2 block w-full text-center px-4 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold
                hover:bg-blue-700 transition shadow-[0_0_20px_rgba(59,130,246,0.4)]"
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
