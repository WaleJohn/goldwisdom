import type { NavLink, ServiceItem, PricingPlan } from "@/types";

export const COMPANY_INFO = {
  name: "GoldWisdom",
  tagline: "Build the Business Credit You Deserve",
  phone: "954-278-5922",
  email: "moneydodoge@gmail.com",
  description:
    "GoldWisdom helps entrepreneurs and business owners build powerful business credit profiles to access the funding they need to grow.",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "business-credit-building",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "Business Credit Building",
    description:
      "Establish and grow your business credit profile with top reporting bureaus. We guide you from EIN setup to a fully funded credit portfolio.",
  },
  {
    id: "personal-credit-repair",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Personal Credit Repair",
    description:
      "Identify and dispute inaccurate items on your personal credit report to improve your score and unlock better funding opportunities.",
  },
  {
    id: "ein-llc-guidance",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    title: "EIN & LLC Setup Guidance",
    description:
      "Get your business structure right from the start. We walk you through entity formation and obtaining your EIN to maximize credit separation.",
  },
  {
    id: "net30-vendor-accounts",
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
    title: "Net-30 Vendor Accounts",
    description:
      "Open trade lines with Net-30 vendors that report to business credit bureaus — the fastest way to build a solid business credit history.",
  },
  {
    id: "business-funding-access",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Business Funding Access",
    description:
      "Once your credit profile is established, we connect you with lenders and funding sources offering business lines of credit and loans.",
  },
  {
    id: "credit-monitoring-coaching",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Credit Monitoring & Coaching",
    description:
      "Ongoing credit monitoring, personalized coaching, and strategy sessions to ensure your business credit continues to grow month over month.",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 297,
    annualPrice: 247,
    highlighted: false,
    stripePriceIdMonthly: process.env.STRIPE_PRICE_STARTER || "",
    stripePriceIdAnnual: process.env.STRIPE_PRICE_STARTER_ANNUAL || "",
    features: [
      "Business credit profile audit",
      "EIN & LLC setup guidance",
      "Net-30 vendor account list",
      "Email support",
      "Monthly progress report",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    monthlyPrice: 497,
    annualPrice: 417,
    highlighted: true,
    stripePriceIdMonthly: process.env.STRIPE_PRICE_GROWTH || "",
    stripePriceIdAnnual: process.env.STRIPE_PRICE_GROWTH_ANNUAL || "",
    features: [
      "Everything in Starter",
      "Tradeline strategy & placement",
      "Personal credit repair",
      "Bi-weekly coaching calls",
      "Funding readiness assessment",
      "Priority email support",
    ],
  },
  {
    id: "elite",
    name: "Elite",
    monthlyPrice: 997,
    annualPrice: 830,
    highlighted: false,
    stripePriceIdMonthly: process.env.STRIPE_PRICE_ELITE || "",
    stripePriceIdAnnual: process.env.STRIPE_PRICE_ELITE_ANNUAL || "",
    features: [
      "Everything in Growth",
      "Dedicated credit advisor",
      "Funding introductions & referrals",
      "Weekly 1-on-1 strategy sessions",
      "Dispute escalation support",
      "Priority phone & email support",
    ],
  },
];
