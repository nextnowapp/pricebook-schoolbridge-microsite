import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

export type ModuleCategory = {
  category: string;
  icon: LucideIcon;
  items: string[];
};

export default function ModuleGrid({
  categories,
}: {
  categories: ModuleCategory[];
}) {
  return (
    <div className="space-y-10">
      {categories.map((cat, idx) => {
        const Icon = cat.icon;
        return (
          <Reveal key={cat.category} delay={idx * 0.05}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-soft">
                  <Icon className="h-5 w-5" strokeWidth={2.1} />
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  {cat.category}
                </h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
