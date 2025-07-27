import About from "@/components/landing/About";
import Contact from "@/components/landing/Contact";
import Experinece from "@/components/landing/Experinece";
import Hero from "@/components/landing/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experinece />
      <Contact />
    </main>
  );
}
