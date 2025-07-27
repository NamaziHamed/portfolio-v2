"use client";
import React from "react";
import HamburgerBtn from "../base/HamburgerBtn";
import Link from "next/link";
import SideDrawer from "./SideDrawer";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();
  const pathChecker = (currentPath: any) => {
    if (currentPath === "/" || currentPath.startsWith("/#")) {
      return false; // Show navbar elements
    } else {
      return true; // Hide navbar elements
    }
  };
  const hideLocalLinks = pathChecker(currentPath);
  const menuItems = [
    {
      text: "Home",
      href: "/",
      local: false,
    },
    {
      text: "About",
      href: "#about",
      local: true,
    },
    {
      text: "Projects",
      href: "/projects",
      local: false,
    },
    {
      text: "Experience",
      href: "#exp",
      local: true,
    },
    {
      text: "Contact",
      href: "#contact",
      local: true,
    },
    {
      text: "Blog",
      href: "/blog",
      local: false,
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 ">
      <nav className="flex justify-end pe-3 sm:pe-0 sm:justify-around sm:items-center py-6 bg-slate-900">
        <div>
          <h1
            className="text-2xl md:text-3xl lg:text-4xl w-fit bg-gradient-to-r from-blue-500 to-sky-500
          bg-clip-text text-transparent font-semibold"
          >
            <Link href="/">Hamed Namazi</Link>
          </h1>
        </div>

        <div className="sm:hidden">
          <HamburgerBtn />
        </div>

        <div className="hidden sm:block">
          <ul className="flex gap-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                {!item.local && <Link href={item.href}>{item.text}</Link>}
                {item.local && !hideLocalLinks && (
                  <Link href={item.href}>{item.text}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <SideDrawer menuList={menuItems} hideLocalLinks={hideLocalLinks} />
    </header>
  );
};

export default Navbar;
