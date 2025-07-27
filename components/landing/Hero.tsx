import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row-reverse items-center justify-center py-10 relative
      px-6 md:px-10 lg:px-20 gap-10 "
    >
      <div
        className="absolute inset-0 bg-[url('/hero-bg-2.png')] bg-cover bg-center 
      bg-no-repeat opacity-60 z-[-1]"
      ></div>

      <div className="">
        <Image
          src={"/123.png"}
          alt="hero"
          width={400}
          height={400}
          className="w-75 h-75 md:h-100 md:w-100 rounded-full"
        />
      </div>

      <div className="flex-1/2 max-w-xl flex flex-col gap-7 items-center md:items-baseline">
        <h3 className="title ">I'm a Web Developer</h3>
        <p className="subtitle">
          I design and build scalable web applications from the ground up. As a
          full-stack developer, I focus on performance, accessibility, and great
          user experiences. I’m always up for challenging projects that push the
          boundaries of modern web development.
        </p>

        <div className="flex gap-5 items-center">
          <Button className="bg-blue-500 hover:bg-blue-600 text-foreground hover:scale-105 hover:-translate-y-1 transition-all duration-200 ease-in">
            <Link href={"#contact"}>Contact Me</Link>
          </Button>

          <Button className="bg-violet-500 hover:bg-violet-600 text-foreground hover:scale-105 hover:-translate-y-1 transition-all duration-200 ease-in">
            <Link href={"#contact"}>About Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
