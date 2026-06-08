import Button from "./Button";
import Reveal from "./Reveal";
import { BOOK_DEMO_HREF, REQUEST_PROPOSAL_HREF } from "@/lib/pricing";

type CTASectionProps = {
  title?: string;
  copy?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export default function CTASection({
  title = "Ready to modernize your school?",
  copy = "Book a demo and see how SchoolBridge can help your school reduce administration, improve engagement and unlock a complete digital operating model.",
  primaryLabel = "Book a Demo",
  secondaryLabel = "Request Proposal",
}: CTASectionProps) {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl mesh-hero px-6 py-16 text-center text-white sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-60" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                {copy}
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href={BOOK_DEMO_HREF} variant="primary" size="lg">
                  {primaryLabel}
                </Button>
                <Button href={REQUEST_PROPOSAL_HREF} variant="outline-light" size="lg">
                  {secondaryLabel}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
