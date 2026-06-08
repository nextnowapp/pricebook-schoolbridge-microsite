import type { Metadata } from "next";
import {
  Users,
  BookOpen,
  MessageSquare,
  CalendarCheck,
  Globe,
  ShieldCheck,
  BarChart3,
  Bell,
  LayoutDashboard,
  GraduationCap,
  Briefcase,
  Baby,
  Search,
  Rocket,
  DatabaseZap,
  PlayCircle,
  Headphones,
  UploadCloud,
} from "lucide-react";
import PageShell from "@/components/PageShell";
import HeroSection from "@/components/HeroSection";
import ModuleGrid, { type ModuleCategory } from "@/components/ModuleGrid";
import FeatureGrid, { type Feature } from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { BOOK_DEMO_HREF } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "SchoolBridge — Run Every School Process from One Platform",
  description:
    "SchoolBridge gives schools a complete cloud-based system for managing learners, parents, staff, academics, communication, attendance, websites and reporting.",
  openGraph: {
    images: ["/og-image.png"],
    title: "SchoolBridge — Run Every School Process from One Integrated Platform",
    description:
      "A complete cloud-based system for learners, parents, staff, academics, communication, attendance, websites and reporting.",
  },
};

const modules: ModuleCategory[] = [
  {
    category: "People",
    icon: Users,
    items: [
      "Learners",
      "Parents",
      "Staff",
      "Staff of the Month",
      "Wall of Fame",
      "Conduct & Rewards",
      "Logins",
      "SGB User Accounts",
    ],
  },
  {
    category: "Academics",
    icon: BookOpen,
    items: [
      "Classes",
      "Homework",
      "Timetable",
      "Parent Messages",
      "Report Card Dispatch",
    ],
  },
  {
    category: "Communication",
    icon: MessageSquare,
    items: [
      "Chat",
      "School Communication",
      "Fee Statement Dispatch",
      "Report Card Dispatch",
      "Template Messaging",
      "Events",
      "Event Reminders",
    ],
  },
  {
    category: "Attendance",
    icon: CalendarCheck,
    items: ["Attendance Engine", "Attendance Monitor", "Alert Settings"],
  },
  {
    category: "Website",
    icon: Globe,
    items: [
      "Photos & Videos",
      "Website Content",
      "Website Modules",
      "Menu Manager",
      "Category Manager",
      "Colour Theme",
    ],
  },
];

const platformFeatures: Feature[] = [
  {
    icon: LayoutDashboard,
    title: "One unified dashboard",
    description:
      "Every module shares a single source of truth, so data captured once flows everywhere it is needed — no double entry.",
  },
  {
    icon: ShieldCheck,
    title: "Role-based access control",
    description:
      "Granular permissions for principals, staff, admin, SGB members and parents keep sensitive school data secure.",
  },
  {
    icon: BarChart3,
    title: "Reporting & analytics",
    description:
      "Turn day-to-day school activity into clear reports on attendance, performance, communication and engagement.",
  },
  {
    icon: Bell,
    title: "Automated dispatch",
    description:
      "Send report cards, fee statements and template messages to the right recipients automatically, at scale.",
  },
  {
    icon: Globe,
    title: "Integrated school website",
    description:
      "Manage your public website, content, media, menus and theme from the same platform that runs the school.",
  },
  {
    icon: MessageSquare,
    title: "Two-way communication",
    description:
      "Chat, broadcasts and event reminders keep the whole school community connected through one trusted channel.",
  },
];

const roles: Feature[] = [
  {
    icon: LayoutDashboard,
    title: "Principal",
    description:
      "A real-time view of the whole school — attendance, communication, finance and performance — to lead with confidence and act on issues early.",
  },
  {
    icon: GraduationCap,
    title: "Teachers",
    description:
      "Capture attendance and marks, set homework, track conduct and message parents in seconds, with less paperwork and more teaching time.",
  },
  {
    icon: Briefcase,
    title: "Admin Staff",
    description:
      "Manage learners, parents, staff and records from one place, and automate fee statements, report cards and routine communication.",
  },
  {
    icon: Users,
    title: "Parents",
    description:
      "Stay informed with real-time attendance alerts, homework, results, fee statements and direct messaging from the school.",
  },
  {
    icon: Baby,
    title: "Learners",
    description:
      "Access homework, timetables, assessments, results and rewards in one place, building independence and accountability.",
  },
];

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We map your current processes, systems and goals to scope the right configuration for your school.",
  },
  {
    icon: Rocket,
    title: "Onboarding",
    description:
      "Your school is provisioned, configured and branded, with modules switched on to match your package.",
  },
  {
    icon: DatabaseZap,
    title: "Data Migration",
    description:
      "We migrate learners, parents, staff and historical records, validating every record with your team.",
  },
  {
    icon: PlayCircle,
    title: "Training",
    description:
      "Hands-on training for principals, staff and admin so your team is confident from go-live.",
  },
  {
    icon: UploadCloud,
    title: "Go Live",
    description:
      "Your school goes live with parent and learner onboarding to drive immediate adoption.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "Continuous support, updates and optimisation as your school grows into the full ecosystem.",
  },
];

export default function SchoolBridgePage() {
  return (
    <PageShell>
      <HeroSection
        eyebrow="SchoolBridge"
        title={
          <>
            Run Every School Process from{" "}
            <span className="text-gradient">One Integrated Platform</span>
          </>
        }
        subtitle="SchoolBridge gives schools a complete cloud-based system for managing learners, parents, staff, academics, communication, attendance, websites and reporting."
        primary={{ label: "Book a Demo", href: BOOK_DEMO_HREF }}
        secondary={{ label: "View Pricing", href: "/pricing" }}
      />

      {/* Modules */}
      <Section>
        <Reveal>
          <SectionHeading
            center
            eyebrow="Modules"
            title="Everything your school runs on, in one place"
            description="SchoolBridge is organised into clear modules across People, Academics, Communication, Attendance and Website — switch on what you need and grow from there."
          />
        </Reveal>
        <div className="mt-14">
          <ModuleGrid categories={modules} />
        </div>
      </Section>

      {/* Platform features */}
      <Section className="mesh-soft border-y border-slate-200">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Platform"
            title="Built like a modern SaaS product"
            description="A unified data model, role-based security and powerful automation — engineered for the realities of running a school."
          />
        </Reveal>
        <div className="mt-14">
          <FeatureGrid features={platformFeatures} />
        </div>
      </Section>

      {/* Role-based benefits */}
      <Section>
        <Reveal>
          <SectionHeading
            center
            eyebrow="For Every Stakeholder"
            title="One platform, tailored to every role"
            description="SchoolBridge gives each member of your school community exactly what they need — and nothing they don't."
          />
        </Reveal>
        <div className="mt-14">
          <FeatureGrid features={roles} />
        </div>
      </Section>

      {/* Implementation */}
      <Section className="mesh-soft border-y border-slate-200">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Implementation"
            title="A clear path from sign-up to success"
            description="Our proven process gets your school live quickly and confidently — with support that continues long after go-live."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={i * 0.05}>
                <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-soft">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <span className="text-3xl font-bold tracking-tight text-slate-200">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <CTASection />
    </PageShell>
  );
}
