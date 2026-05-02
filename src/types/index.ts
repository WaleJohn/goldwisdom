export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  highlighted: boolean;
  stripePriceIdMonthly: string;
  stripePriceIdAnnual: string;
}
