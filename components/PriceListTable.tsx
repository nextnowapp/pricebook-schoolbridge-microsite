import type { LucideIcon } from "lucide-react";
import { type PriceTable, formatAmount } from "@/lib/pricing";
import { cn } from "@/lib/utils";

type PriceListTableProps = {
  table: PriceTable;
  icon: LucideIcon;
  accent?: string;
};

const cadenceSuffix: Record<NonNullable<PriceTable["cadence"]>, string> = {
  month: "/month",
  once: "once-off",
  mixed: "",
};

export default function PriceListTable({
  table,
  icon: Icon,
  accent = "from-blue-600 to-indigo-600",
}: PriceListTableProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
      <div className="flex items-center gap-3 border-b border-slate-100 p-6">
        <span
          className={cn(
            "flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-soft",
            accent
          )}
        >
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>
        <div>
          <h3 className="text-base font-bold text-slate-900">{table.title}</h3>
          {table.subtitle && (
            <p className="text-xs text-slate-500">{table.subtitle}</p>
          )}
        </div>
      </div>

      <ul className="flex-1 divide-y divide-slate-100">
        {table.rows.map((row) => {
          const isIncluded = row.amount === "Included";
          const isQuote = row.amount === "Quotation";
          const showSuffix =
            typeof row.amount === "number" &&
            table.cadence &&
            table.cadence !== "mixed";

          return (
            <li
              key={row.label}
              className="flex items-center justify-between gap-4 px-6 py-4"
            >
              <span className="text-sm font-medium text-slate-700">
                {row.label}
              </span>
              <span className="flex flex-none items-baseline gap-1 text-right">
                <span
                  className={cn(
                    "text-sm font-bold",
                    isIncluded
                      ? "text-emerald-600"
                      : isQuote
                        ? "text-slate-500"
                        : "text-slate-900"
                  )}
                >
                  {formatAmount(row.amount)}
                </span>
                {showSuffix && (
                  <span className="text-xs font-medium text-slate-400">
                    {table.cadence === "once"
                      ? cadenceSuffix.once
                      : cadenceSuffix.month}
                  </span>
                )}
                {row.note && (
                  <span className="text-xs font-medium text-slate-400">
                    {row.note}
                  </span>
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
