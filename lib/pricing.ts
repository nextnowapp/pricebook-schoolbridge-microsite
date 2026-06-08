/**
 * SINGLE SOURCE OF TRUTH FOR ALL PRICING.
 * Edit numbers, package names, feature lists and copy here — every pricing
 * component across the site reads from this file. All prices are in South
 * African Rand (R) and are VAT EXCLUSIVE.
 */

export const CURRENCY = "R";
export const CONTACT_EMAIL = "hello@schoolbridge.co.za";
export const BOOK_DEMO_HREF = `mailto:${CONTACT_EMAIL}?subject=Book%20a%20SchoolBridge%20Demo`;
export const REQUEST_PROPOSAL_HREF = `mailto:${CONTACT_EMAIL}?subject=Request%20a%20SchoolBridge%20Proposal`;

export const PRICING_DISCLAIMER =
  "All prices are VAT exclusive. Netcash transaction fees apply. Custom enterprise pricing available.";

/* ------------------------------------------------------------------ */
/* SchoolBridge core packages                                          */
/* ------------------------------------------------------------------ */

export type SchoolPackage = {
  name: string;
  price: number;
  period: string;
  badge?: string;
  highlight?: boolean;
  description: string;
  featuresTitle: string;
  features: string[];
};

export const schoolPackages: SchoolPackage[] = [
  {
    name: "Starter",
    price: 2999,
    period: "/month",
    description: "Small schools starting their digital journey.",
    featuresTitle: "Includes",
    features: [
      "Learners",
      "Parents",
      "Staff",
      "Attendance",
      "Communication",
      "Homework",
      "Website",
    ],
  },
  {
    name: "Professional",
    price: 4999,
    period: "/month",
    badge: "Most Popular",
    highlight: true,
    description: "Growing schools that need full engagement.",
    featuresTitle: "Everything in Starter, plus",
    features: [
      "Timetable",
      "Conduct & Rewards",
      "Wall of Fame",
      "Events",
      "Parent Messaging",
      "Mobile Apps",
    ],
  },
  {
    name: "Enterprise",
    price: 6999,
    period: "/month",
    description: "Large schools and advanced digital operations.",
    featuresTitle: "Everything in Professional, plus",
    features: [
      "AdmissionBridge",
      "Advanced Analytics",
      "API Integrations",
      "Provincial Reporting",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Add-on / line-item pricing tables                                   */
/* ------------------------------------------------------------------ */

export type PriceRow = {
  label: string;
  /** numeric price for monthly/once-off, or a string for "Included" / "Quotation" */
  amount: number | string;
  note?: string;
};

export type PriceTable = {
  title: string;
  subtitle?: string;
  cadence?: "month" | "once" | "mixed";
  rows: PriceRow[];
};

export const appBridgePricing: PriceTable = {
  title: "AppBridge Pricing",
  subtitle: "Mobile app layer for the school community.",
  cadence: "month",
  rows: [
    { label: "Standard App", amount: "Included" },
    { label: "Premium School Branding", amount: 999 },
    { label: "White Label School App", amount: 1999 },
  ],
};

export const payBridgeSetupFees: PriceTable = {
  title: "PayBridge Setup Fees",
  subtitle: "Once-off integration and migration.",
  cadence: "once",
  rows: [
    { label: "Sage Integration Setup", amount: 4999 },
    { label: "Netcash Integration Setup", amount: 2999 },
    { label: "Finance Data Migration", amount: 4999 },
    { label: "Training", amount: "Included" },
  ],
};

export const payBridgeMonthly: PriceTable = {
  title: "PayBridge Monthly",
  subtitle: "Fee collection and financial automation.",
  cadence: "month",
  rows: [
    { label: "PayBridge Lite", amount: 499 },
    { label: "PayBridge Standard", amount: 999 },
    { label: "PayBridge Premium", amount: 1499 },
  ],
};

export const admissionBridgePricing: PriceTable = {
  title: "AdmissionBridge",
  subtitle: "Digital admissions and enrolment.",
  cadence: "mixed",
  rows: [
    { label: "Standalone School", amount: 999, note: "per month" },
    { label: "Included in Enterprise", amount: "Included" },
  ],
};

export const implementationFees: PriceTable = {
  title: "Implementation Fees",
  subtitle: "One-time onboarding and configuration.",
  cadence: "once",
  rows: [
    { label: "School Onboarding", amount: 4999 },
    { label: "Historical Data Migration", amount: 4999 },
    { label: "Staff Training", amount: "Included" },
    { label: "Parent Onboarding Campaign", amount: 2999 },
    { label: "Custom Configuration", amount: "Quotation" },
  ],
};

/* ------------------------------------------------------------------ */
/* Bundled ecosystem packages                                          */
/* ------------------------------------------------------------------ */

export type BundlePackage = {
  name: string;
  price: number;
  period: string;
  highlight?: boolean;
  description: string;
  includes: string[];
};

export const bundlePackages: BundlePackage[] = [
  {
    name: "Digital School Package",
    price: 5499,
    period: "/month",
    description: "Engagement-first bundle for schools going mobile.",
    includes: ["SchoolBridge Professional", "AppBridge Premium"],
  },
  {
    name: "Digital School Plus Finance",
    price: 6499,
    period: "/month",
    highlight: true,
    description: "Add automated fee collection to a fully engaged school.",
    includes: [
      "SchoolBridge Professional",
      "AppBridge Premium",
      "PayBridge Standard",
    ],
  },
  {
    name: "Complete School Ecosystem",
    price: 8999,
    period: "/month",
    description: "Every product, fully integrated, for advanced operations.",
    includes: [
      "SchoolBridge Enterprise",
      "AppBridge White Label",
      "PayBridge Premium",
      "AdmissionBridge",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* PayBridge preview cards (used on /paybridge)                         */
/* ------------------------------------------------------------------ */

export type PayBridgeTier = {
  name: string;
  price: number;
  period: string;
  highlight?: boolean;
  blurb: string;
  features: string[];
};

export const payBridgeTiers: PayBridgeTier[] = [
  {
    name: "PayBridge Lite",
    price: 499,
    period: "/month",
    blurb: "Essential fee visibility and online payments.",
    features: ["Fee statements", "Pay now", "Payment history", "Receipts"],
  },
  {
    name: "PayBridge Standard",
    price: 999,
    period: "/month",
    highlight: true,
    blurb: "Automated collections and reconciliation.",
    features: [
      "Everything in Lite",
      "Debit orders",
      "Automated reconciliation",
      "Arrears reporting",
    ],
  },
  {
    name: "PayBridge Premium",
    price: 1499,
    period: "/month",
    blurb: "Full finance automation and analytics.",
    features: [
      "Everything in Standard",
      "Collection campaigns",
      "Collection analytics",
      "Full Sage + Netcash audit trail",
    ],
  },
];

export const PAYBRIDGE_PRICING_NOTE =
  "Setup fees apply. Netcash transaction fees apply.";

/* ------------------------------------------------------------------ */
/* FAQ (pricing page)                                                  */
/* ------------------------------------------------------------------ */

export type FaqItem = { q: string; a: string };

export const pricingFaqs: FaqItem[] = [
  {
    q: "Is there a minimum contract term?",
    a: "SchoolBridge is billed monthly on a 12-month minimum term, after which it continues month-to-month. Annual agreements are available and unlock preferential pricing for multi-product bundles. There are no long lock-in penalties — we earn your renewal every year.",
  },
  {
    q: "How long does setup and onboarding take?",
    a: "Most schools are live within 2 to 4 weeks. Timelines depend on the products selected and the volume of historical data to migrate. PayBridge with full Sage and Netcash integration typically adds one to two weeks for testing and reconciliation sign-off.",
  },
  {
    q: "Can you migrate our existing data?",
    a: "Yes. Our team handles learner, parent, staff and financial data migration from spreadsheets and most legacy systems. Historical Data Migration and Finance Data Migration are scoped as once-off line items, and we validate every record with your team before go-live.",
  },
  {
    q: "Is staff and parent training included?",
    a: "Staff training is included with every implementation. We also run an optional Parent Onboarding Campaign to drive mobile app adoption among families, which is the single biggest driver of engagement and faster fee collection.",
  },
  {
    q: "Which financial systems does PayBridge integrate with?",
    a: "PayBridge integrates with Sage Accounting, Sage Pastel and Netcash, and connects directly to the SchoolBridge parent mobile app. Parents pay by card, EFT or debit order, and collections reconcile automatically back into your accounting system.",
  },
  {
    q: "Are the prices inclusive of VAT?",
    a: "No. All listed prices are VAT exclusive. Netcash transaction fees apply per payment processed and are billed separately by Netcash. We will provide a fully itemised quotation before you commit.",
  },
  {
    q: "Can we start small and add products later?",
    a: "Absolutely — that is how most schools work with us. Start with a SchoolBridge package and add AppBridge, PayBridge or AdmissionBridge as your digital transformation journey grows. Bundled ecosystem packages give the best value once you adopt multiple products.",
  },
  {
    q: "Do you offer pricing for school groups and provinces?",
    a: "Yes. ProvinceBridge provides a provincial command centre for departments, districts and circuits, and we offer custom enterprise pricing for school groups and multi-school deployments. Contact us for a tailored proposal.",
  },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

export function formatPrice(amount: number): string {
  return `${CURRENCY}${amount.toLocaleString("en-ZA")}`;
}

export function formatAmount(amount: number | string): string {
  return typeof amount === "number" ? formatPrice(amount) : amount;
}
