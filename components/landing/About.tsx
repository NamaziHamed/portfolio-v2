import React from "react";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "TailwindCSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL Server",
    "PostgreSQL",
    "WebPack",
    "Vite",
    "ESLint",
    "Git",
    "npm",
    "ShadCN/UI",
    "Zustand",
    "Redux",
    "Auth.js",
  ];
  return (
    <section id="about" className="ct-container mx space-y-4">
      <h2 className="title">About</h2>
      <p className="subtitle">
        I'm a full-stack web developer specializing in JavaScript, React, and
        Node.js. I build fast, accessible, and scalable applications, and have
        solid experience with database management using tools like MongoDB and
        SQL. I'm detail-oriented, self-motivated, and always eager to learn and
        take on new challenges that solve real-world problems through clean,
        efficient code.
      </p>

      <div className="space-y-5 max-w-3xl flex items-center flex-col mx-auto mt-20">
        <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-500">
          Web Development Skills:{" "}
        </h3>
        <div className="flex flex-wrap gap-1 items-center justify-center">
          {skills.map((skill) => (
            <span key={skill} className="badge">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
