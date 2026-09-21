import Education from "@/components/Education";
import Experience from "@/components/Experience";
import FadeIn from "@/components/FadeIn";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import { projects } from "@/data/resume";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <Hero />
      <Skills />

      <section id="projects" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Projects</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.name} delay={(index % 2) * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </section>

      <Experience />
      <Education />
    </main>
  );
}
