import { skillGroups } from "@/data/resume";

export default function Skills() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        What I work with
      </h2>
      <div className="mt-6 flex flex-col gap-3">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="grid grid-cols-1 gap-x-3 gap-y-1 sm:grid-cols-[8rem_1fr]"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
              {group.category}
            </span>
            <p className="text-sm leading-relaxed text-slate-700">
              {group.items.join("  ·  ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
