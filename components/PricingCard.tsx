import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/pricing";
import Button from "./Button";
import { BOOK_DEMO_HREF, REQUEST_PROPOSAL_HREF } from "@/lib/pricing";

type PricingCardProps = {
  name: string;
  price: number;
  period: string;
  description: string;
  badge?: string;
  highlight?: boolean;
  featuresTitle?: string;
  features: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

export default function PricingCard({
  name,
  price,
  period,
  description,
  badge,
  highlight,
  featuresTitle,
  features,
  ctaLabel,
  ctaHref,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl border bg-white p-7 transition-all duration-300",
        highlight
          ? "border-blue-300 shadow-card ring-2 ring-blue-500/40 lg:-translate-y-2"
          : "border-slate-200 shadow-soft hover:-translate-y-1 hover:shadow-card"
      )}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-soft">
          {badge}
        </span>
      )}

      <h3 className="text-lg font-bold text-slate-900">{name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{description}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight text-slate-900">
          {formatPrice(price)}
        </span>
        <span className="text-sm font-medium text-slate-500">{period}</span>
      </div>

      <Button
        href={ctaHref ?? (highlight ? BOOK_DEMO_HREF : REQUEST_PROPOSAL_HREF)}
        variant={highlight ? "primary" : "outline"}
        size="md"
        className="mt-6 w-full"
      >
        {ctaLabel ?? (highlight ? "Book a Demo" : "Request Proposal")}
      </Button>

      {featuresTitle && (
        <p className="mt-7 text-xs font-semibold uppercase tracking-wider text-slate-400">
          {featuresTitle}
        </p>
      )}
      <ul className="mt-4 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span
              className={cn(
                "mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full",
                highlight
                  ? "bg-blue-100 text-blue-600"
                  : "bg-emerald-100 text-emerald-600"
              )}
            >
              <Check className="h-3.5 w-3.5" strokeWidth={2.75} />
            </span>
            <span className="text-sm leading-relaxed text-slate-700">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
