import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "outline-light";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-soft hover:shadow-glow hover:from-blue-500 hover:to-indigo-500 active:scale-[0.98]",
  outline:
    "border border-slate-300 text-slate-800 bg-white hover:border-slate-400 hover:bg-slate-50 active:scale-[0.98]",
  "outline-light":
    "border border-white/25 text-white bg-white/5 backdrop-blur hover:bg-white/10 hover:border-white/40 active:scale-[0.98]",
  ghost: "text-slate-700 hover:text-blue-600 hover:bg-slate-100",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-6 py-3",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: ButtonProps) {
  const isInternal = href.startsWith("/") && !href.startsWith("//");
  const classes = cn(base, variants[variant], sizes[size], className);

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
