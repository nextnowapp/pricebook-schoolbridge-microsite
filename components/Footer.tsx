import Link from "next/link";
import { GraduationCap, Mail } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/pricing";

const productLinks = [
  { label: "SchoolBridge", href: "/schoolbridge" },
  { label: "AppBridge", href: "/appbridge" },
  { label: "PayBridge", href: "/paybridge" },
  { label: "AdmissionBridge", href: "/#admissionbridge" },
  { label: "Pricing", href: "/pricing" },
];

const solutionLinks = [
  { label: "Independent Schools", href: "/pricing" },
  { label: "School Groups", href: "/pricing" },
  { label: "Finance Teams", href: "/paybridge" },
  { label: "Provincial Departments", href: "/#admissionbridge" },
  { label: "Parent Engagement", href: "/appbridge" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-slate-300">
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand blurb */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
                <GraduationCap className="h-5 w-5" strokeWidth={2.25} />
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                SchoolBridge
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              The digital operating system for modern schools. One platform for
              every school process and every stakeholder — administration,
              engagement, admissions, payments and analytics.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              {CONTACT_EMAIL}
            </a>
          </div>

          <FooterColumn title="Products" links={productLinks} />
          <FooterColumn title="Solutions" links={solutionLinks} />

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="text-slate-400">
                For demos, proposals and partnership enquiries:
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-slate-200 transition-colors hover:text-white"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="text-slate-400">South Africa</li>
              <li className="text-slate-400">Mon–Fri, 08:00–17:00 SAST</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center">
          <p>© {year} SchoolBridge Ecosystem. All rights reserved.</p>
          <p className="text-slate-500">
            One Platform. Every School Process. Every Stakeholder.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-slate-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
