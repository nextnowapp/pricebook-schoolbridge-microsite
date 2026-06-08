import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type AppMockupProps = {
  appName: string;
  headerIcon: LucideIcon;
  gradient: string;
  /** small rows shown in the phone body */
  rows: { icon: LucideIcon; label: string; meta?: string }[];
  /** optional highlight card text */
  highlight?: { title: string; value: string };
};

export default function AppMockup({
  appName,
  headerIcon: HeaderIcon,
  gradient,
  rows,
  highlight,
}: AppMockupProps) {
  return (
    <div className="relative mx-auto w-[260px]">
      <div className="pointer-events-none absolute -inset-5 -z-10 rounded-[3rem] bg-gradient-to-tr from-blue-500/15 via-cyan-400/10 to-indigo-500/15 blur-2xl" />

      {/* Phone frame */}
      <div className="rounded-[2.5rem] border-[10px] border-slate-900 bg-slate-900 shadow-[0_24px_60px_rgba(2,8,23,0.4)]">
        <div className="relative overflow-hidden rounded-[1.9rem] bg-slate-50">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-slate-900" />

          {/* App header */}
          <div className={cn("bg-gradient-to-br px-5 pb-6 pt-9 text-white", gradient)}>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
                <HeaderIcon className="h-4 w-4" strokeWidth={2.2} />
              </span>
              <p className="text-sm font-bold">{appName}</p>
            </div>

            {highlight && (
              <div className="mt-4 rounded-xl bg-white/15 p-3 backdrop-blur">
                <p className="text-[10px] font-medium uppercase tracking-wider text-white/80">
                  {highlight.title}
                </p>
                <p className="mt-0.5 text-xl font-bold">{highlight.value}</p>
              </div>
            )}
          </div>

          {/* Rows */}
          <div className="space-y-2.5 px-3 py-4">
            {rows.map((row) => {
              const Icon = row.icon;
              return (
                <div
                  key={row.label}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                >
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-semibold text-slate-800">
                      {row.label}
                    </p>
                    {row.meta && (
                      <p className="truncate text-[10px] text-slate-400">
                        {row.meta}
                      </p>
                    )}
                  </div>
                  <span className="h-2 w-2 flex-none rounded-full bg-emerald-400" />
                </div>
              );
            })}
          </div>

          {/* Bottom nav */}
          <div className="flex items-center justify-around border-t border-slate-100 bg-white px-4 py-3">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className={cn(
                  "h-1.5 rounded-full",
                  i === 0 ? "w-6 bg-blue-600" : "w-1.5 bg-slate-300"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
