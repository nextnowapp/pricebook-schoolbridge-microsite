import type { Metadata } from "next";
import {
  Smartphone,
  Bell,
  CalendarCheck,
  BookOpen,
  CalendarDays,
  GraduationCap,
  FileText,
  CreditCard,
  MessageSquare,
  CalendarHeart,
  FileSignature,
  ClipboardList,
  Award,
  Image as ImageIcon,
  PenLine,
  CheckSquare,
  ShieldAlert,
  LayoutDashboard,
  Activity,
  TrendingUp,
  Users,
  Baby,
  Briefcase,
  BellRing,
  Zap,
  Heart,
} from "lucide-react";
import PageShell from "@/components/PageShell";
import HeroSection from "@/components/HeroSection";
import AppMockup from "@/components/AppMockup";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { cn } from "@/lib/utils";
import { BOOK_DEMO_HREF } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "AppBridge — The Mobile App Layer for the School Community",
  description:
    "AppBridge connects parents, learners, teachers and school leaders through real-time mobile engagement — attendance, homework, results, payments and communication.",
  openGraph: {
    images: ["/og-image.png"],
    title: "AppBridge — The Mobile App Layer for the School Community",
    description:
      "Real-time mobile engagement for parents, learners, teachers and principals.",
  },
};

type AppDef = {
  key: string;
  icon: typeof Smartphone;
  audience: string;
  name: string;
  blurb: string;
  gradient: string;
  features: string[];
  mockupRows: { icon: typeof Smartphone; label: string; meta?: string }[];
  highlight?: { title: string; value: string };
};

const apps: AppDef[] = [
  {
    key: "parent",
    icon: Users,
    audience: "Parents",
    name: "Parent App",
    blurb:
      "Give every parent a real-time window into their child's school life — and a frictionless way to stay involved, informed and up to date on fees.",
    gradient: "from-blue-600 to-indigo-600",
    features: [
      "Attendance alerts",
      "Homework",
      "Timetable",
      "Results",
      "Fee statements",
      "Payments",
      "School communication",
      "Events",
      "Digital consent forms",
    ],
    highlight: { title: "Outstanding balance", value: "R0.00" },
    mockupRows: [
      { icon: CalendarCheck, label: "Attendance alert", meta: "Present · 07:42" },
      { icon: BookOpen, label: "Homework due", meta: "Mathematics" },
      { icon: CreditCard, label: "Pay school fees", meta: "Paid up to date" },
      { icon: FileSignature, label: "Consent form", meta: "Sports tour" },
    ],
  },
  {
    key: "learner",
    icon: Baby,
    audience: "Learners",
    name: "Learner App",
    blurb:
      "Help learners take ownership of their school day with everything they need — homework, timetables, assessments, results and rewards — in their pocket.",
    gradient: "from-cyan-500 to-blue-600",
    features: [
      "Homework",
      "Timetable",
      "Assessments",
      "Results",
      "Conduct & Rewards",
      "School media",
    ],
    highlight: { title: "Reward points", value: "248" },
    mockupRows: [
      { icon: BookOpen, label: "Homework", meta: "3 tasks today" },
      { icon: CalendarDays, label: "Timetable", meta: "Period 4 · Science" },
      { icon: ClipboardList, label: "Assessment", meta: "English · Friday" },
      { icon: Award, label: "Rewards earned", meta: "+15 this week" },
    ],
  },
  {
    key: "teacher",
    icon: GraduationCap,
    audience: "Teachers",
    name: "Teacher App",
    blurb:
      "Cut admin and reclaim teaching time — capture attendance and marks, track behaviour, manage homework and message parents in seconds.",
    gradient: "from-indigo-500 to-violet-600",
    features: [
      "Attendance capture",
      "Marks capture",
      "Behaviour tracking",
      "Communication",
      "Homework management",
    ],
    highlight: { title: "Class attendance", value: "28 / 30" },
    mockupRows: [
      { icon: CheckSquare, label: "Capture attendance", meta: "Grade 8B" },
      { icon: PenLine, label: "Capture marks", meta: "Term test" },
      { icon: ShieldAlert, label: "Behaviour note", meta: "Logged" },
      { icon: MessageSquare, label: "Message parents", meta: "Broadcast sent" },
    ],
  },
  {
    key: "principal",
    icon: Briefcase,
    audience: "School leaders",
    name: "Principal App",
    blurb:
      "Lead with a live picture of your whole school — attendance, communication and performance — wherever you are.",
    gradient: "from-violet-500 to-fuchsia-600",
    features: [
      "Real-time dashboards",
      "Attendance monitoring",
      "Communication oversight",
      "School performance insights",
    ],
    highlight: { title: "School attendance", value: "97.4%" },
    mockupRows: [
      { icon: LayoutDashboard, label: "Live dashboard", meta: "All systems green" },
      { icon: Activity, label: "Attendance monitor", meta: "97.4% today" },
      { icon: MessageSquare, label: "Communication", meta: "8.4K sent" },
      { icon: TrendingUp, label: "Performance", meta: "Trending up" },
    ],
  },
];

const notifications = [
  {
    icon: CalendarCheck,
    title: "Attendance alerts",
    description: "Instant notifications the moment a learner is marked absent or late.",
  },
  {
    icon: CreditCard,
    title: "Fee reminders",
    description: "Gentle, automated reminders that keep fee payments on track.",
  },
  {
    icon: CalendarHeart,
    title: "Event reminders",
    description: "Timely nudges for events, deadlines and important school dates.",
  },
  {
    icon: FileText,
    title: "Results & reports",
    description: "Notify parents the instant results and report cards are released.",
  },
];

export default function AppBridgePage() {
  return (
    <PageShell>
      <HeroSection
        eyebrow="AppBridge"
        title={
          <>
            The Mobile App Layer for the{" "}
            <span className="text-gradient">School Community</span>
          </>
        }
        subtitle="AppBridge connects parents, learners, teachers and school leaders through real-time mobile engagement."
        primary={{ label: "Book a Demo", href: BOOK_DEMO_HREF }}
        secondary={{ label: "View Pricing", href: "/pricing" }}
      />

      {/* App sections */}
      <Section>
        <Reveal>
          <SectionHeading
            center
            eyebrow="Four Apps, One Community"
            title="Purpose-built apps for every role"
            description="AppBridge delivers a tailored mobile experience for parents, learners, teachers and principals — all powered by the same SchoolBridge platform."
          />
        </Reveal>

        <div className="mt-16 space-y-20">
          {apps.map((app, i) => {
            const reversed = i % 2 === 1;
            const Icon = app.icon;
            return (
              <Reveal key={app.key}>
                <div
                  className={cn(
                    "grid items-center gap-12 lg:grid-cols-2",
                    reversed && "lg:[&>*:first-child]:order-2"
                  )}
                >
                  {/* Copy */}
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 ring-1 ring-blue-100">
                      <Icon className="h-3.5 w-3.5" />
                      {app.audience}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                      {app.name}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">
                      {app.blurb}
                    </p>
                    <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {app.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2.5 text-sm text-slate-700"
                        >
                          <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                            <CheckSquare className="h-3 w-3" strokeWidth={2.5} />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mockup */}
                  <div className="flex justify-center">
                    <AppMockup
                      appName={app.name}
                      headerIcon={app.icon}
                      gradient={app.gradient}
                      rows={app.mockupRows}
                      highlight={app.highlight}
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Push notifications */}
      <Section className="mesh-soft border-y border-slate-200">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Push Notifications"
                title="The right message, to the right person, at the right moment"
                description="AppBridge turns critical school moments into instant, actionable notifications — so nothing important slips through the cracks."
              />
              <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-soft ring-1 ring-slate-200">
                <BellRing className="h-5 w-5 text-blue-600" />
                Real-time delivery to every device, on iOS and Android.
              </div>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {notifications.map((n, i) => {
              const Icon = n.icon;
              return (
                <Reveal key={n.title} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h4 className="mt-4 text-sm font-bold text-slate-900">
                      {n.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {n.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Parent engagement value prop */}
      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-card sm:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-blue-500/15 to-cyan-400/10 blur-2xl" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 ring-1 ring-blue-100">
                  <Heart className="h-3.5 w-3.5" />
                  Parent Engagement
                </span>
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Engaged parents are the foundation of a thriving school
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  When parents have real-time visibility of attendance, homework,
                  results and fees, they engage more, pay faster and trust the
                  school more deeply. AppBridge makes that engagement effortless —
                  one app that becomes part of every family&apos;s daily routine.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap, label: "Instant", sub: "real-time updates" },
                  { icon: Smartphone, label: "Mobile-first", sub: "iOS & Android" },
                  { icon: Bell, label: "Proactive", sub: "smart notifications" },
                  { icon: Users, label: "Inclusive", sub: "every stakeholder" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 text-center"
                    >
                      <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-soft ring-1 ring-slate-200">
                        <Icon className="h-5 w-5" />
                      </span>
                      <p className="mt-3 text-sm font-bold text-slate-900">
                        {item.label}
                      </p>
                      <p className="text-xs text-slate-500">{item.sub}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTASection />
    </PageShell>
  );
}
