import type { Metadata } from "next";
import Link from "next/link";
import {
  Workflow,
  Users,
  CreditCard,
  ClipboardCheck,
  CalendarCheck,
  Globe,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import PageShell from "@/components/PageShell";
import HeroSection from "@/components/HeroSection";
import DashboardMockup from "@/components/DashboardMockup";
import ProductCard from "@/components/ProductCard";
import FeatureGrid, { type Feature } from "@/components/FeatureGrid";
import ComparisonTable, { type ComparisonRow } from "@/components/ComparisonTable";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { products } from "@/lib/content";
import { BOOK_DEMO_HREF } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "The Digital Operating System for Modern Schools",
  description:
    "SchoolBridge brings school administration, mobile engagement, admissions, payments, communication, websites and analytics into one integrated cloud platform for South African schools.",
  openGraph: {
    images: ["/og-image.png"],
    title: "SchoolBridge — The Digital Operating System for Modern Schools",
    description:
      "One platform for every school process and every stakeholder. Administration, mobile apps, admissions, payments and analytics in one integrated cloud platform.",
  },
};

const outcomes: Feature[] = [
  {
    icon: Workflow,
    title: "Reduce administration",
    description:
      "Replace disconnected spreadsheets and manual processes with one system that automates routine school admin from end to end.",
  },
  {
    icon: Users,
    title: "Improve parent engagement",
    description:
      "Reach every parent instantly through real-time mobile apps, messaging and notifications that keep families informed and involved.",
  },
  {
    icon: CreditCard,
    title: "Automate payments",
    description:
      "Collect fees faster with PayBridge — automated billing, debit orders and reconciliation integrated with Sage and Netcash.",
  },
  {
    icon: ClipboardCheck,
    title: "Digitize admissions",
    description:
      "Run applications, assessments, waiting lists and enrolment online with AdmissionBridge — no paper, no lost files.",
  },
  {
    icon: CalendarCheck,
    title: "Improve attendance visibility",
    description:
      "Capture attendance in seconds and surface real-time alerts so the right people act before a pattern becomes a problem.",
  },
  {
    icon: Globe,
    title: "Modernize school websites",
    description:
      "Manage your public website, content, media and theme from the same platform that runs your school — always up to date.",
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    dimension: "Operating model",
    traditional: "Disconnected tools for admin, comms, finance and website",
    schoolbridge: "Unified platform where every module shares one source of truth",
  },
  {
    dimension: "Fee collection",
    traditional: "Manual invoicing, follow-ups and reconciliation by hand",
    schoolbridge: "Automated PayBridge collections, debit orders and reconciliation",
  },
  {
    dimension: "Admissions",
    traditional: "Paper applications, printed forms and physical filing",
    schoolbridge: "Digital AdmissionBridge: online applications to enrolment",
  },
  {
    dimension: "Parent visibility",
    traditional: "Limited visibility via letters, SMS and the school bag",
    schoolbridge: "Real-time mobile apps for parents, learners and staff",
  },
  {
    dimension: "School website",
    traditional: "Static website maintained by an external developer",
    schoolbridge: "Integrated CMS managed directly by your school team",
  },
  {
    dimension: "Oversight",
    traditional: "No provincial oversight across schools and districts",
    schoolbridge: "ProvinceBridge command centre for departments and circuits",
  },
];

const trustStats = [
  { value: "1 platform", label: "for every school process" },
  { value: "5 products", label: "in one connected ecosystem" },
  { value: "Real-time", label: "engagement for every stakeholder" },
  { value: "Sage + Netcash", label: "finance integrations built in" },
];

export default function HomePage() {
  return (
    <PageShell>
      <HeroSection
        eyebrow="The SchoolBridge Ecosystem"
        title={
          <>
            The Digital Operating System
            <br className="hidden sm:block" />{" "}
            for <span className="text-gradient">Modern Schools</span>
          </>
        }
        subtitle="SchoolBridge brings school administration, mobile engagement, admissions, payments, communication, websites and analytics into one integrated cloud platform."
        primary={{ label: "Book a Demo", href: BOOK_DEMO_HREF }}
        secondary={{ label: "View Pricing", href: "/pricing" }}
        visual={<DashboardMockup />}
      />

      {/* Trust band */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <Reveal>
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500">
              A trusted school operating system, built for South African schools
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {trustStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.05}>
                <div className="text-center">
                  <p className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product ecosystem */}
      <Section>
        <Reveal>
          <SectionHeading
            center
            eyebrow="One Ecosystem"
            title="Five products. One connected platform."
            description="Each product solves a critical school process on its own — and together they form a complete digital operating system for your school."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.key} delay={i * 0.05}>
              <div className="h-full" id={product.key}>
                <ProductCard product={product} />
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.25}>
            <Link
              href="/pricing"
              className="group flex h-full flex-col justify-between rounded-2xl border border-dashed border-slate-300 bg-slate-50/60 p-7 transition-colors hover:border-blue-300 hover:bg-blue-50/50"
            >
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-soft ring-1 ring-slate-200">
                  <Sparkles className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  Build your ecosystem
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Start with one product and grow into the full platform. See
                  packages, bundles and transparent pricing.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                View pricing
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* Outcomes */}
      <Section className="mesh-soft border-y border-slate-200">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Key Outcomes"
            title="What your school gets from day one"
            description="SchoolBridge is built around the outcomes that matter most to school leaders, finance teams, staff and families."
          />
        </Reveal>
        <div className="mt-14">
          <FeatureGrid features={outcomes} />
        </div>
      </Section>

      {/* Competitive positioning */}
      <Section>
        <Reveal>
          <SectionHeading
            center
            eyebrow="Why SchoolBridge"
            title="Traditional systems vs the SchoolBridge Ecosystem"
            description="Most schools run on a patchwork of disconnected tools. SchoolBridge replaces them with one integrated platform — purpose-built for how schools actually work."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12">
            <ComparisonTable rows={comparisonRows} />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            Secure, cloud-based and built for South African schools.
          </div>
        </Reveal>
      </Section>

      <CTASection
        title="Ready to digitize your school?"
        copy="Book a demo and see how the SchoolBridge Ecosystem can help your school reduce administration, improve engagement and unlock a complete digital operating model."
      />
    </PageShell>
  );
}
