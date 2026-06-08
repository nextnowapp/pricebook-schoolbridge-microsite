import {
  Users,
  UserCog,
  GraduationCap,
  CalendarCheck,
  MessageSquare,
  CreditCard,
  ClipboardCheck,
  Globe,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const tiles = [
  { label: "Learners", value: "1,248", delta: "+34", icon: Users, tone: "text-blue-600 bg-blue-50" },
  { label: "Parents", value: "2,106", delta: "+58", icon: UserCog, tone: "text-indigo-600 bg-indigo-50" },
  { label: "Staff", value: "96", delta: "+3", icon: GraduationCap, tone: "text-violet-600 bg-violet-50" },
  { label: "Attendance", value: "97.4%", delta: "+1.2%", icon: CalendarCheck, tone: "text-emerald-600 bg-emerald-50" },
];

const secondary = [
  { label: "Communication", value: "8,420", sub: "messages sent", icon: MessageSquare, tone: "text-cyan-600 bg-cyan-50" },
  { label: "Payments", value: "R1.84M", sub: "collected this term", icon: CreditCard, tone: "text-blue-600 bg-blue-50" },
  { label: "Admissions", value: "184", sub: "applications open", icon: ClipboardCheck, tone: "text-fuchsia-600 bg-fuchsia-50" },
  { label: "Website", value: "12.6K", sub: "monthly visits", icon: Globe, tone: "text-sky-600 bg-sky-50" },
];

const bars = [52, 68, 61, 80, 74, 92, 85, 96];

export default function DashboardMockup() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-blue-500/20 via-cyan-400/10 to-indigo-500/20 blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-white/15 bg-white shadow-[0_30px_80px_rgba(2,8,23,0.55)]">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-1 text-[11px] font-medium text-slate-400 ring-1 ring-slate-200">
            app.schoolbridge.co.za
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
              <GraduationCap className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="bg-white p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                School Overview
              </p>
              <p className="text-sm font-bold text-slate-900">Greenfield College</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
              <TrendingUp className="h-3 w-3" /> Live
            </span>
          </div>

          {/* Primary tiles */}
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {tiles.map((tile) => {
              const Icon = tile.icon;
              return (
                <div
                  key={tile.label}
                  className="rounded-xl border border-slate-100 bg-slate-50/60 p-3"
                >
                  <span className={cn("flex h-7 w-7 items-center justify-center rounded-lg", tile.tone)}>
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <p className="mt-2.5 text-lg font-bold leading-none text-slate-900">
                    {tile.value}
                  </p>
                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-[11px] text-slate-500">{tile.label}</p>
                    <span className="inline-flex items-center text-[10px] font-semibold text-emerald-600">
                      <ArrowUpRight className="h-3 w-3" />
                      {tile.delta}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chart + secondary */}
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-5">
            {/* Chart */}
            <div className="rounded-xl border border-slate-100 bg-white p-4 sm:col-span-3">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-slate-700">
                  Fee Collection
                </p>
                <p className="text-[11px] font-medium text-slate-400">Last 8 weeks</p>
              </div>
              <div className="mt-4 flex h-24 items-end gap-2">
                {bars.map((h, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1">
                    <div
                      className="w-full rounded-md bg-gradient-to-t from-blue-600 to-cyan-400"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[9px] font-medium text-slate-400">
                <span>W1</span>
                <span>W4</span>
                <span>W8</span>
              </div>
            </div>

            {/* Secondary mini-tiles */}
            <div className="grid grid-cols-2 gap-3 sm:col-span-2">
              {secondary.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="rounded-xl border border-slate-100 bg-slate-50/60 p-3"
                  >
                    <span className={cn("flex h-6 w-6 items-center justify-center rounded-md", s.tone)}>
                      <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                    </span>
                    <p className="mt-2 text-sm font-bold leading-none text-slate-900">
                      {s.value}
                    </p>
                    <p className="mt-1 text-[10px] leading-tight text-slate-500">
                      {s.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
