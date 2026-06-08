"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { BOOK_DEMO_HREF, REQUEST_PROPOSAL_HREF } from "@/lib/pricing";
import Button from "./Button";

const navLinks = [
  { label: "SchoolBridge", href: "/schoolbridge" },
  { label: "AppBridge", href: "/appbridge" },
  { label: "PayBridge", href: "/paybridge" },
  { label: "AdmissionBridge", href: "/#admissionbridge" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200/70 bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(15,23,42,0.04)]"
          : "border-b border-transparent bg-white/0"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-soft transition-transform group-hover:scale-105">
            <GraduationCap className="h-5 w-5" strokeWidth={2.25} />
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            SchoolBridge
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2.5 lg:flex">
          <Button href={REQUEST_PROPOSAL_HREF} variant="outline" size="sm">
            Request Proposal
          </Button>
          <Button href={BOOK_DEMO_HREF} variant="primary" size="sm">
            Book a Demo
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden">
          <div className="space-y-1 border-t border-slate-200 bg-white px-5 pb-6 pt-4 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-3">
              <Button href={BOOK_DEMO_HREF} variant="primary" size="lg" className="w-full">
                Book a Demo
              </Button>
              <Button href={REQUEST_PROPOSAL_HREF} variant="outline" size="lg" className="w-full">
                Request Proposal
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
