import { certificates, education, languages } from "@/data/resume";

export default function Education() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-16">
      <div className="flex flex-col gap-3 border-t border-slate-200 pt-8 text-sm">
        <div className="grid grid-cols-1 gap-x-3 gap-y-1 sm:grid-cols-[8rem_1fr]">
          <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
            Education
          </span>
          <span className="text-slate-600">
            {education
              .map((entry) => `${entry.title} — ${entry.institution} (${entry.period})`)
              .join("  ·  ")}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-x-3 gap-y-1 sm:grid-cols-[8rem_1fr]">
          <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
            Certificates
          </span>
          <span className="text-slate-600">
            {certificates.map((cert) => `${cert.title} (${cert.year})`).join("  ·  ")}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-x-3 gap-y-1 sm:grid-cols-[8rem_1fr]">
          <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
            Languages
          </span>
          <span className="text-slate-600">
            {languages.map((lang) => `${lang.name} (${lang.level})`).join("  ·  ")}
          </span>
        </div>
      </div>
    </section>
  );
}
