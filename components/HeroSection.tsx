"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import Button from "./Button";

type CTA = { label: string; href: string };

type HeroSectionProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle: string;
  primary?: CTA;
  secondary?: CTA;
  visual?: ReactNode;
  align?: "center" | "left";
};

export default function HeroSection({
  eyebrow,
  title,
  subtitle,
  primary,
  secondary,
  visual,
  align = "center",
}: HeroSectionProps) {
  const centered = align === "center" && !visual;

  return (
    <section className="relative overflow-hidden mesh-hero text-white">
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-navy-950/40" />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
        <div
          className={
            visual
              ? "grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]"
              : centered
                ? "mx-auto max-w-3xl text-center"
                : "max-w-3xl"
          }
        >
          <div className={centered ? "" : "max-w-2xl"}>
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={centered ? "flex justify-center" : ""}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-200 ring-1 ring-white/15 backdrop-blur">
                  {eyebrow}
                </span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={`mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl ${
                centered ? "mx-auto max-w-2xl" : "max-w-xl"
              }`}
            >
              {subtitle}
            </motion.p>

            {(primary || secondary) && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className={`mt-9 flex flex-col gap-3 sm:flex-row ${
                  centered ? "sm:justify-center" : ""
                }`}
              >
                {primary && (
                  <Button href={primary.href} variant="primary" size="lg">
                    {primary.label}
                  </Button>
                )}
                {secondary && (
                  <Button href={secondary.href} variant="outline-light" size="lg">
                    {secondary.label}
                  </Button>
                )}
              </motion.div>
            )}
          </div>

          {visual && (
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {visual}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
