import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
};

export function Section({
  children,
  className,
  containerClassName,
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 sm:py-24", className)}>
      <div className={cn("mx-auto max-w-7xl px-5 sm:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

type EyebrowProps = { children: ReactNode; dark?: boolean };

export function Eyebrow({ children, dark }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        dark
          ? "bg-white/10 text-cyan-200 ring-1 ring-white/15"
          : "bg-blue-50 text-blue-700 ring-1 ring-blue-100"
      )}
    >
      {children}
    </span>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  dark?: boolean;
  center?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark,
  center,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        center ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <div className={cn(center && "flex justify-center")}>
          <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={cn(
          "mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]",
          dark ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            dark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
