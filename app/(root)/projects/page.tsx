import React from "react";
import { projects } from "@/projects";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const page = () => {
  return (
    <main className="space-y-5 p-8 md:p-16 lg:p-24">
      <h1 className="title">Projects</h1>
      <p className="subtitle">
        I have been working in the web development sector for about 8 years now
        and have gained a wide range of skills. I am proficient in HTML, CSS,
        JavaScript, React, Next.js, Node.js, Express, SQL, MongoDB, and many
        other technologies. I am also familiar with the Tailwind CSS framework,
        and have experience with UI/UX design. In addition, I have a good
        understanding of the development process, including testing, debugging,
        and deployment.
      </p>
      <section
        id="projects"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl gap-3 mx-auto"
      >
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col gap-3 shadow-white shadow-sm items-center p-4 rounded-2xl hover:shadow-md">
            <div className="w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                className=" hover:scale-120 duration-200 transition-all
                object-center object-cover w-full h-full"
              />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="flex gap-1 flex-wrap">
              {project.techStack.map((item: string, index: number) => (
                <span key={index} className="badge">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <Button asChild className="hover:text-blue-500">
                <Link href={project.githubUrl}>
                  <FaGithub />
                  <span>View Code</span>
                </Link>
              </Button>
              <Button asChild className="hover:text-blue-500">
                <Link href={project.liveUrl}>
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default page;
