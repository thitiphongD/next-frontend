"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Manga", href: "/manga" },
    { label: "Profile", href: "/profile" },
  ];
  return (
    <nav className="flex items-center space-x-6 border-b mb-5 px-5 h-14">
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={`${
              link.href === currentPath ? "text-zinc-900" : "text-zinc-500"
            } hover:text-zinc-800 transition-colors`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
