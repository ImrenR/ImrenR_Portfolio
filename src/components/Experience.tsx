import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Experience</h2>
      <div className="relative mt-8 flex flex-col gap-10">
        <div className="absolute bottom-2 left-[5px] top-2 w-px bg-slate-200" aria-hidden />
        {experience.map((entry) => {
          const isCurrent = entry.period.toLowerCase().includes("current");
          return (
            <div key={`${entry.company}-${entry.period}`} className="relative pl-8">
              <span
                className={`absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full ${
                  isCurrent
                    ? "bg-red-500 ring-4 ring-red-100"
                    : "bg-indigo-500 ring-4 ring-indigo-100"
                }`}
              />
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                {entry.period}
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-900">{entry.role}</h3>
              <p className="text-sm text-slate-600">
                {entry.company} · {entry.location}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-slate-600">
                {entry.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
