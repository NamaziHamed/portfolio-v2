"use client";
import React from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { useStore } from "@/store";

const HamburgerBtn = () => {
  const toggleOpen = useStore((state: any) => state.toggleOpen);
  const isOpen = useStore((state: any) => state.isOpen);

  return (
    <button className="text-blue-500 fixed top-0 left-0 z-50">
      <Hamburger toggled={isOpen} toggle={toggleOpen} />
    </button>
  );
};

export default HamburgerBtn;
