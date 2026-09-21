import { profile } from "@/data/resume";

export default function Contact() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-slate-200">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-widest text-indigo-600">
            Contact
          </h2>
          <p className="mt-2 text-sm text-slate-600">{profile.location}</p>
          <a
            href={`mailto:${profile.email}`}
            className="text-sm font-medium text-slate-900 hover:text-indigo-600"
          >
            {profile.email}
          </a>
        </div>
        <div className="flex gap-4 text-sm font-medium text-slate-600">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-600">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-indigo-600">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
