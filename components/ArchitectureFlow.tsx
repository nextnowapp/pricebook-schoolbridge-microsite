import type { LucideIcon } from "lucide-react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

export type FlowNode = {
  label: string;
  sublabel?: string;
  icon: LucideIcon;
  gradient: string;
};

export default function ArchitectureFlow({ nodes }: { nodes: FlowNode[] }) {
  return (
    <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:justify-center">
      {nodes.map((node, i) => {
        const Icon = node.icon;
        const isLast = i === nodes.length - 1;
        return (
          <div
            key={node.label}
            className="flex flex-col items-stretch gap-3 lg:flex-1 lg:flex-row lg:items-center"
          >
            <Reveal delay={i * 0.08} className="lg:flex-1">
              <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-soft">
                <span
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-soft",
                    node.gradient
                  )}
                >
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-sm font-bold leading-tight text-slate-900">
                    {node.label}
                  </p>
                  {node.sublabel && (
                    <p className="mt-1 text-xs text-slate-500">{node.sublabel}</p>
                  )}
                </div>
              </div>
            </Reveal>

            {!isLast && (
              <div className="flex flex-none items-center justify-center text-blue-400">
                <ArrowDown className="h-5 w-5 lg:hidden" strokeWidth={2.5} />
                <ArrowRight className="hidden h-5 w-5 lg:block" strokeWidth={2.5} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
