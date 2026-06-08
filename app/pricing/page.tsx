import type { Metadata } from "next";
import {
  Smartphone,
  CreditCard,
  Wrench,
  ClipboardCheck,
  Settings2,
  Layers,
  Check,
  Info,
} from "lucide-react";
import PageShell from "@/components/PageShell";
import HeroSection from "@/components/HeroSection";
import PricingCard from "@/components/PricingCard";
import PriceListTable from "@/components/PriceListTable";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { cn } from "@/lib/utils";
import {
  schoolPackages,
  bundlePackages,
  appBridgePricing,
  payBridgeSetupFees,
  payBridgeMonthly,
  admissionBridgePricing,
  implementationFees,
  pricingFaqs,
  PRICING_DISCLAIMER,
  formatPrice,
  BOOK_DEMO_HREF,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing — Simple, Scalable Pricing for Every School",
  description:
    "Choose the right SchoolBridge package for your school and add AppBridge, PayBridge or AdmissionBridge as your digital transformation journey grows. All prices in South African Rand, VAT exclusive.",
  openGraph: {
    images: ["/og-image.png"],
    title: "SchoolBridge Pricing — Simple, Scalable Pricing for Every School",
    description:
      "Transparent packages, add-ons and bundled ecosystem pricing for South African schools.",
  },
};

export default function PricingPage() {
  return (
    <PageShell>
      <HeroSection
        eyebrow="Pricing"
        title={
          <>
            Simple, Scalable Pricing for{" "}
            <span className="text-gradient">Every School</span>
          </>
        }
        subtitle="Choose the right SchoolBridge package for your school and add AppBridge, PayBridge or AdmissionBridge as your digital transformation journey grows."
        primary={{ label: "Book a Demo", href: BOOK_DEMO_HREF }}
        secondary={{ label: "Talk to Sales", href: "#faq" }}
      />

      {/* SchoolBridge packages */}
      <Section>
        <Reveal>
          <SectionHeading
            center
            eyebrow="SchoolBridge Packages"
            title="Core platform packages"
            description="Every package is a complete cloud-based school platform. Start where you are today and upgrade as your school grows."
          />
        </Reveal>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {schoolPackages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.07}>
              <PricingCard
                name={pkg.name}
                price={pkg.price}
                period={pkg.period}
                description={pkg.description}
                badge={pkg.badge}
                highlight={pkg.highlight}
                featuresTitle={pkg.featuresTitle}
                features={pkg.features}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Add-ons */}
      <Section className="mesh-soft border-y border-slate-200">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Add-Ons & Modules"
            title="Extend your platform with connected products"
            description="Add AppBridge branding, PayBridge fee automation and AdmissionBridge enrolment to your core package — priced transparently."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0}>
            <PriceListTable
              table={appBridgePricing}
              icon={Smartphone}
              accent="from-cyan-500 to-blue-600"
            />
          </Reveal>
          <Reveal delay={0.05}>
            <PriceListTable
              table={payBridgeMonthly}
              icon={CreditCard}
              accent="from-indigo-500 to-violet-600"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <PriceListTable
              table={payBridgeSetupFees}
              icon={Wrench}
              accent="from-violet-500 to-fuchsia-600"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <PriceListTable
              table={admissionBridgePricing}
              icon={ClipboardCheck}
              accent="from-fuchsia-500 to-pink-600"
            />
          </Reveal>
          <Reveal delay={0.2}>
            <PriceListTable
              table={implementationFees}
              icon={Settings2}
              accent="from-blue-600 to-indigo-600"
            />
          </Reveal>
          <Reveal delay={0.25}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-slate-300 bg-white/60 p-6 text-center">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                <Info className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-slate-900">
                Need a custom configuration?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                School groups, multi-campus deployments and provincial roll-outs
                are quoted individually. We will build a proposal around your
                exact requirements.
              </p>
              <a
                href={BOOK_DEMO_HREF}
                className="mt-4 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-indigo-600"
              >
                Request a quotation &rarr;
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Bundled ecosystem packages */}
      <Section>
        <Reveal>
          <SectionHeading
            center
            eyebrow="Bundled Ecosystem Packages"
            title="Best value: the full ecosystem, bundled"
            description="Combine multiple products into one package and unlock the best monthly value as your school's digital operating model matures."
          />
        </Reveal>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {bundlePackages.map((bundle, i) => (
            <Reveal key={bundle.name} delay={i * 0.07}>
              <div
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 transition-all duration-300",
                  bundle.highlight
                    ? "border-transparent text-white shadow-card lg:-translate-y-2"
                    : "border-slate-200 bg-white shadow-soft hover:-translate-y-1 hover:shadow-card"
                )}
              >
                {bundle.highlight && (
                  <>
                    <div className="absolute inset-0 -z-10 mesh-hero" />
                    <div className="pointer-events-none absolute inset-0 -z-10 grid-pattern-light opacity-50" />
                  </>
                )}
                {bundle.highlight && (
                  <span className="absolute right-5 top-5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-200 ring-1 ring-white/20">
                    Best Value
                  </span>
                )}
                <span
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-xl shadow-soft",
                    bundle.highlight
                      ? "bg-white/15 text-white ring-1 ring-white/20"
                      : "bg-gradient-to-br from-blue-600 to-indigo-600 text-white"
                  )}
                >
                  <Layers className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3
                  className={cn(
                    "mt-5 text-lg font-bold",
                    bundle.highlight ? "text-white" : "text-slate-900"
                  )}
                >
                  {bundle.name}
                </h3>
                <p
                  className={cn(
                    "mt-1.5 text-sm leading-relaxed",
                    bundle.highlight ? "text-slate-300" : "text-slate-500"
                  )}
                >
                  {bundle.description}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span
                    className={cn(
                      "text-4xl font-bold tracking-tight",
                      bundle.highlight ? "text-white" : "text-slate-900"
                    )}
                  >
                    {formatPrice(bundle.price)}
                  </span>
                  <span
                    className={cn(
                      "text-sm font-medium",
                      bundle.highlight ? "text-slate-300" : "text-slate-500"
                    )}
                  >
                    {bundle.period}
                  </span>
                </div>

                <p
                  className={cn(
                    "mt-7 text-xs font-semibold uppercase tracking-wider",
                    bundle.highlight ? "text-slate-300" : "text-slate-400"
                  )}
                >
                  Includes
                </p>
                <ul className="mt-4 flex-1 space-y-3">
                  {bundle.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full",
                          bundle.highlight
                            ? "bg-white/15 text-cyan-200"
                            : "bg-emerald-100 text-emerald-600"
                        )}
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={2.75} />
                      </span>
                      <span
                        className={cn(
                          "text-sm leading-relaxed",
                          bundle.highlight ? "text-slate-200" : "text-slate-700"
                        )}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={BOOK_DEMO_HREF}
                  className={cn(
                    "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all active:scale-[0.98]",
                    bundle.highlight
                      ? "bg-white text-slate-900 hover:bg-slate-100"
                      : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500"
                  )}
                >
                  Book a Demo
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 text-sm text-slate-600">
            <Info className="mt-0.5 h-5 w-5 flex-none text-blue-500" />
            <p>{PRICING_DISCLAIMER}</p>
          </div>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="mesh-soft border-y border-slate-200">
        <Reveal>
          <SectionHeading
            center
            eyebrow="FAQ"
            title="Pricing questions, answered"
            description="Everything you need to know about contracts, setup, migration, training and integrations."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12">
            <FAQ items={pricingFaqs} />
          </div>
        </Reveal>
      </Section>

      <CTASection />
    </PageShell>
  );
}
