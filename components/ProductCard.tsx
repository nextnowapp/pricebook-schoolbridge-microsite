import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;

  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-card">
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-soft",
          product.gradient
        )}
      >
        <Icon className="h-6 w-6" strokeWidth={2} />
      </div>

      <div className="mt-5 flex items-center gap-2">
        <h3 className="text-lg font-bold text-slate-900">{product.name}</h3>
      </div>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
        {product.tagline}
      </p>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
        {product.description}
      </p>

      {product.href ? (
        <Link
          href={product.href}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors group-hover:text-indigo-600"
        >
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      ) : (
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-400">
          Coming soon
        </span>
      )}
    </div>
  );
}
