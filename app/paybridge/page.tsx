import type { Metadata } from "next";
import {
  Users,
  Smartphone,
  CreditCard,
  Landmark,
  Building2,
  FileText,
  Wallet,
  RefreshCcw,
  Receipt,
  History,
  BellRing,
  Repeat,
  ShieldCheck,
  BarChart3,
  Megaphone,
  AlertTriangle,
  ScrollText,
  Banknote,
  TrendingUp,
} from "lucide-react";
import PageShell from "@/components/PageShell";
import HeroSection from "@/components/HeroSection";
import ArchitectureFlow, { type FlowNode } from "@/components/ArchitectureFlow";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { cn } from "@/lib/utils";
import {
  payBridgeTiers,
  PAYBRIDGE_PRICING_NOTE,
  BOOK_DEMO_HREF,
  formatPrice,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "PayBridge — Automated School Fee Collection",
  description:
    "PayBridge connects Sage Accounting, Netcash, SchoolBridge and the parent mobile app to help schools collect fees faster, reduce manual reconciliation and improve cash flow.",
  openGraph: {
    images: ["/og-image.png"],
    title: "PayBridge — Automated School Fee Collection, Built into the Parent Experience",
    description:
      "Connect Sage, Netcash and the parent app to collect fees faster and reduce manual reconciliation.",
  },
};

const flow: FlowNode[] = [
  { label: "Parents", sublabel: "Pay anywhere", icon: Users, gradient: "from-blue-500 to-blue-600" },
  { label: "SchoolBridge Mobile App", sublabel: "View & pay", icon: Smartphone, gradient: "from-cyan-500 to-blue-600" },
  { label: "PayBridge", sublabel: "Automation engine", icon: CreditCard, gradient: "from-indigo-500 to-violet-600" },
  { label: "Sage + Netcash", sublabel: "Service keys", icon: Landmark, gradient: "from-violet-500 to-fuchsia-600" },
  { label: "School Bank Account", sublabel: "Funds settled", icon: Building2, gradient: "from-emerald-500 to-teal-600" },
];

const parentFeatures = [
  { icon: FileText, label: "View fee statements" },
  { icon: Wallet, label: "View balances" },
  { icon: CreditCard, label: "Pay now" },
  { icon: Repeat, label: "Debit orders" },
  { icon: CreditCard, label: "Card payments" },
  { icon: Banknote, label: "EFT payments" },
  { icon: History, label: "Payment history" },
  { icon: Receipt, label: "Receipts" },
];

const schoolFeatures = [
  { icon: RefreshCcw, label: "Automated collections" },
  { icon: ShieldCheck, label: "Automated reconciliation" },
  { icon: Users, label: "Debtor management" },
  { icon: Megaphone, label: "Collection campaigns" },
  { icon: AlertTriangle, label: "Arrears reporting" },
  { icon: BellRing, label: "Payment notifications" },
  { icon: BarChart3, label: "Collection analytics" },
];

const financeFeatures = [
  { icon: Landmark, label: "Sage integration" },
  { icon: CreditCard, label: "Netcash integration" },
  { icon: RefreshCcw, label: "Daily reconciliation" },
  { icon: AlertTriangle, label: "Failed payment tracking" },
  { icon: ScrollText, label: "Audit trail" },
];

const columns = [
  {
    title: "Parent features",
    accent: "from-blue-600 to-indigo-600",
    icon: Users,
    items: parentFeatures,
  },
  {
    title: "School features",
    accent: "from-indigo-600 to-violet-600",
    icon: Building2,
    items: schoolFeatures,
  },
  {
    title: "Finance team features",
    accent: "from-violet-600 to-fuchsia-600",
    icon: Landmark,
    items: financeFeatures,
  },
];

// ROI illustration
const LEARNERS = 1000;
const ANNUAL_FEE = 40000; // illustrative per-learner annual fee
const COLLECTION_BASE = 0.85; // typical baseline collection rate
const IMPROVEMENT = 0.1; // 10% improvement
const annualBilled = LEARNERS * ANNUAL_FEE;
const baselineCollected = annualBilled * COLLECTION_BASE;
const improvedCollected =
  annualBilled * Math.min(COLLECTION_BASE * (1 + IMPROVEMENT), 1);
const unlocked = improvedCollected - baselineCollected;

export default function PayBridgePage() {
  return (
    <PageShell>
      <HeroSection
        eyebrow="PayBridge"
        title={
          <>
            Automated School Fee Collection, Built into the{" "}
            <span className="text-gradient">Parent Experience</span>
          </>
        }
        subtitle="PayBridge connects Sage Accounting, Netcash, SchoolBridge and the parent mobile app to help schools collect fees faster, reduce manual reconciliation and improve cash flow."
        primary={{ label: "Book a Demo", href: BOOK_DEMO_HREF }}
        secondary={{ label: "View Pricing", href: "/pricing" }}
      />

      {/* Architecture flow */}
      <Section>
        <Reveal>
          <SectionHeading
            center
            eyebrow="How It Works"
            title="A connected payment flow, end to end"
            description="From the parent's phone to your bank account, PayBridge orchestrates every step and reconciles automatically into your accounting system."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-14">
            <ArchitectureFlow nodes={flow} />
          </div>
        </Reveal>
      </Section>

      {/* Three feature columns */}
      <Section className="mesh-soft border-y border-slate-200">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Capabilities"
            title="Value for parents, the school and the finance team"
            description="PayBridge is designed around the three groups who touch school fees every day — making the whole process faster, clearer and easier to reconcile."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {columns.map((col, i) => {
            const ColIcon = col.icon;
            return (
              <Reveal key={col.title} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-soft">
                  <span
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-soft",
                      col.accent
                    )}
                  >
                    <ColIcon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {col.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {col.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <li
                          key={item.label}
                          className="flex items-center gap-3 text-sm text-slate-700"
                        >
                          <span className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                            <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                          </span>
                          {item.label}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ROI section */}
      <Section>
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card">
            <div className="grid lg:grid-cols-2">
              {/* Copy */}
              <div className="p-8 sm:p-12">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 ring-1 ring-emerald-100">
                  <TrendingUp className="h-3.5 w-3.5" />
                  Return on Investment
                </span>
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Small improvements in collection, significant working capital
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  For a school with 1,000 learners, even a 10% improvement in
                  collections can unlock significant working capital and reduce
                  administrative pressure. PayBridge automates the collection,
                  reconciliation and follow-up that drive that improvement.
                </p>
                <p className="mt-6 text-xs text-slate-400">
                  Illustrative model based on {LEARNERS.toLocaleString("en-ZA")}{" "}
                  learners and an indicative annual fee of{" "}
                  {formatPrice(ANNUAL_FEE)} per learner. Actual results vary by
                  school.
                </p>
              </div>

              {/* Calculation visual */}
              <div className="bg-slate-50 p-8 sm:p-12">
                <div className="space-y-5">
                  <RoiRow
                    label="Annual fees billed"
                    value={formatPrice(annualBilled)}
                    sub={`${LEARNERS.toLocaleString("en-ZA")} learners`}
                  />
                  <RoiBar
                    label="Baseline collection"
                    pct={COLLECTION_BASE}
                    value={formatPrice(baselineCollected)}
                    tone="bg-slate-400"
                  />
                  <RoiBar
                    label="With PayBridge (+10%)"
                    pct={Math.min(COLLECTION_BASE * (1 + IMPROVEMENT), 1)}
                    value={formatPrice(improvedCollected)}
                    tone="bg-gradient-to-r from-blue-600 to-cyan-500"
                  />

                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                      Potential working capital unlocked
                    </p>
                    <p className="mt-1 text-3xl font-bold tracking-tight text-emerald-700">
                      {formatPrice(unlocked)}
                      <span className="text-base font-medium text-emerald-600">
                        {" "}
                        / year
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Pricing preview */}
      <Section className="mesh-soft border-y border-slate-200">
        <Reveal>
          <SectionHeading
            center
            eyebrow="PayBridge Pricing"
            title="Choose the right level of automation"
            description="Start with essential payments and grow into full finance automation and analytics as your school scales."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {payBridgeTiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.07}>
              <PricingCard
                name={tier.name}
                price={tier.price}
                period={tier.period}
                description={tier.blurb}
                highlight={tier.highlight}
                badge={tier.highlight ? "Recommended" : undefined}
                featuresTitle="Includes"
                features={tier.features}
                ctaLabel="View full pricing"
                ctaHref="/pricing"
              />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-sm text-slate-500">
            {PAYBRIDGE_PRICING_NOTE}{" "}
            <a
              href="/pricing"
              className="font-semibold text-blue-600 hover:text-indigo-600"
            >
              See full pricing &rarr;
            </a>
          </p>
        </Reveal>
      </Section>

      <CTASection />
    </PageShell>
  );
}

function RoiRow({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="flex items-end justify-between border-b border-slate-200 pb-4">
      <div>
        <p className="text-sm font-medium text-slate-600">{label}</p>
        {sub && <p className="text-xs text-slate-400">{sub}</p>}
      </div>
      <p className="text-xl font-bold text-slate-900">{value}</p>
    </div>
  );
}

function RoiBar({
  label,
  pct,
  value,
  tone,
}: {
  label: string;
  pct: number;
  value: string;
  tone: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-600">{label}</p>
        <p className="text-sm font-bold text-slate-900">{value}</p>
      </div>
      <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className={cn("h-full rounded-full", tone)}
          style={{ width: `${Math.round(pct * 100)}%` }}
        />
      </div>
      <p className="mt-1 text-xs text-slate-400">
        {Math.round(pct * 100)}% of billed fees
      </p>
    </div>
  );
}
