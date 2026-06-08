import { Check, X } from "lucide-react";

export type ComparisonRow = {
  dimension: string;
  traditional: string;
  schoolbridge: string;
};

export default function ComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="bg-slate-50">
              <th className="w-[28%] px-6 py-5 text-sm font-semibold uppercase tracking-wider text-slate-500">
                Capability
              </th>
              <th className="px-6 py-5 text-sm font-semibold text-slate-600">
                Traditional Systems
              </th>
              <th className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5 text-sm font-semibold text-white">
                SchoolBridge Ecosystem
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {rows.map((row) => (
              <tr key={row.dimension} className="align-top">
                <td className="px-6 py-5 text-sm font-semibold text-slate-900">
                  {row.dimension}
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-rose-50 text-rose-500">
                      <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm leading-relaxed text-slate-500">
                      {row.traditional}
                    </span>
                  </div>
                </td>
                <td className="bg-blue-50/40 px-6 py-5">
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.75} />
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-slate-800">
                      {row.schoolbridge}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
