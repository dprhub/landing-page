"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: "/acerca", label: "Acerca de nosotros" },
        { href: "/proyectos", label: "Proyectos" },
        { href: "/contacto", label: "Contacto" },
    ];

    return (
        <header className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 py-6 md:px-12 gap-4 md:gap-0">
            <div className="flex items-center gap-2">
                <Link href="/" className="text-lg font-bold tracking-tight text-white/90 hover:text-white transition-colors">
                    DPR
                </Link>
            </div>
            <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-center">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`text-sm font-medium transition-colors duration-200 ${pathname === link.href ? "text-white" : "text-zinc-400/50 hover:text-white"
                            }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
