import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type FeatureGridProps = {
  features: Feature[];
  columns?: 2 | 3;
};

export default function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6 sm:grid-cols-2",
        columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
      )}
    >
      {features.map((feature, i) => {
        const Icon = feature.icon;
        return (
          <Reveal key={feature.title} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-base font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
