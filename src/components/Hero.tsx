import Image from "next/image";
import { profile } from "@/data/resume";

export default function Hero() {
  return (
    <section id="about" className="scroll-mt-16 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950">
      <div className="mx-auto flex max-w-3xl flex-col-reverse items-start gap-8 px-6 pb-16 pt-24 sm:flex-row sm:items-center sm:justify-between sm:pt-32">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
            {profile.title}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {profile.name}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-300">
            {profile.summary}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
            >
              Email me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-slate-400 hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-slate-400 hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
        <Image
          src="/imren.png"
          alt={profile.name}
          width={160}
          height={160}
          priority
          className="h-32 w-32 shrink-0 rounded-full object-cover ring-2 ring-indigo-500 sm:h-40 sm:w-40"
        />
      </div>
    </section>
  );
}
