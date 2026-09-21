import Image from "next/image";
import type { ProjectEntry } from "@/data/resume";

function screenshotUrl(liveUrl: string) {
  const encoded = encodeURIComponent(liveUrl);
  return `https://api.microlink.io/?url=${encoded}&screenshot=true&meta=false&embed=screenshot.url&waitForTimeout=4000`;
}

export default function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-video w-full overflow-hidden bg-slate-50">
        {project.liveUrl ? (
          <Image
            src={screenshotUrl(project.liveUrl)}
            alt={`${project.name} screenshot`}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 640px) 50vw, 100vw"
            unoptimized
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-slate-400">
            <span className="text-xs font-medium uppercase tracking-widest">
              Source available on GitHub
            </span>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-sm font-semibold text-slate-900">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-indigo-500"
            >
              Live Demo
            </a>
          )}
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-300 px-4 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
