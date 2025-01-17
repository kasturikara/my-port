import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FaEnvelope, FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center px-5 mx-auto overflow-hidden sm:px-10 bg-black-100">
      <div className="w-full max-w-7xl">
        <FloatingNav
          navItems={[
            { name: "Home", link: "#", icon: <FaHome /> },
            { name: "About", link: "#about", icon: <FaUser /> },
            { name: "Projects", link: "#projects", icon: <FaProjectDiagram /> },
            { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
          ]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
