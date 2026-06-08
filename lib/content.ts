import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Smartphone,
  CreditCard,
  ClipboardCheck,
  LandmarkIcon,
} from "lucide-react";

export type Product = {
  key: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  href?: string;
  gradient: string;
};

export const products: Product[] = [
  {
    key: "schoolbridge",
    name: "SchoolBridge",
    icon: Building2,
    tagline: "School administration platform",
    description:
      "Cloud-based school administration, communication, attendance, academics, reporting, website and stakeholder management platform.",
    href: "/schoolbridge",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    key: "appbridge",
    name: "AppBridge",
    icon: Smartphone,
    tagline: "Mobile app layer",
    description:
      "Mobile-first parent, learner, teacher and principal app platform connecting the school community in real time.",
    href: "/appbridge",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    key: "paybridge",
    name: "PayBridge",
    icon: CreditCard,
    tagline: "Fee collection & finance",
    description:
      "School fee collection and financial automation platform integrated with Sage Accounting, Sage Pastel, Netcash and the SchoolBridge mobile app.",
    href: "/paybridge",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    key: "admissionbridge",
    name: "AdmissionBridge",
    icon: ClipboardCheck,
    tagline: "Admissions & enrolment",
    description:
      "Digital admissions and enrolment platform: applications, document upload, assessment scheduling, waiting lists, decisions and enrolment.",
    href: "/pricing",
    gradient: "from-violet-500 to-fuchsia-600",
  },
  {
    key: "provincebridge",
    name: "ProvinceBridge",
    icon: LandmarkIcon,
    tagline: "Provincial command centre",
    description:
      "Provincial education command centre for departments, districts and circuits to monitor schools, campaigns, attendance, admissions and performance.",
    gradient: "from-sky-500 to-cyan-600",
  },
];
