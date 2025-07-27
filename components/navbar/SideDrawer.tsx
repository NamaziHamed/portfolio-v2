"use client";
import React from "react";
import { useStore } from "@/store";
import BackDrop from "../base/BackDrop";
import Link from "next/link";

const SideDrawer = ({
  menuList,
  hideLocalLinks,
}: {
  menuList: any;
  hideLocalLinks: boolean;
}) => {
  const isOpen = useStore((state: any) => state.isOpen);
  const toggleOpen = useStore((state: any) => state.toggleOpen);
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-49 w-50 bg-slate-800  h-screen items-center justify-center flex flex-col
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-500 ease-in-out overflow-hidden`}
      >
        <ul className="space-y-4">
          {menuList.map((item: any, index: number) => (
            <li key={index} onClick={() => toggleOpen()}>
              {!item.local && <Link href={item.href}>{item.text}</Link>}
              {item.local && !hideLocalLinks && (
                <Link href={item.href}>{item.text}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      {isOpen && <BackDrop onClose={() => toggleOpen()} />}
    </>
  );
};

export default SideDrawer;
