// Verified company data from reference website:
// Scottsdale Property Management (SPM) / AZ Prop Group
// Address: 9259 E Raintree Dr ste 2019, Scottsdale, AZ 85260
// Phone: (602) 935-6539
// Portals: Owners (Propertyware), Tenants (ClickPay)
// Verified Team: Trevor Reeves (Partner & Controller), Braxton Heise (Partner & Maintenance Manager), Sarah Walden (Office Manager), Zoe Amos (Property Manager)
// Verified Genuine Testimonials: Tammy & Jim Hull, Randall Trimm, Jane Gottfried

export const COMPANY_INFO = {
  name: "Scottsdale Property Management",
  shortName: "SPM",
  tagline: "Property ownership. Managed with intention.",
  phone: "(602) 935-6539",
  phoneRaw: "6029356539",
  address: "9259 E Raintree Dr ste 2019, Scottsdale, AZ 85260",
  cityStateZip: "Scottsdale, AZ 85260",
  ownerPortalUrl: "https://app.propertyware.com/pw/login.jsp",
  tenantPortalUrl: "https://www.clickpay.com/custom/propertymgmt/login.html",
  serviceAreas: [
    "North Scottsdale",
    "Old Town Scottsdale",
    "Paradise Valley",
    "DC Ranch",
    "Gainey Ranch",
    "McCormick Ranch",
    "Troon North"
  ]
};

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
  bio: string;
  image: string;
}

export const VERIFIED_TEAM: TeamMember[] = [
  {
    name: "Trevor Reeves",
    role: "Partner & Controller",
    focus: "Financial Operations & Portfolio Strategy",
    bio: "As partner and controller, Trevor oversees asset accounting, accurate P&L distributions, and strategic financial transparency for property owners across Maricopa County.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Braxton Heise",
    role: "Partner & Maintenance Manager",
    focus: "Field Operations, Trades & Desert Systems",
    bio: "Braxton directs field operations, irrigation infrastructure, HVAC preventive schedules, contractor quality control, and rapid response maintenance teams.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Sarah Walden",
    role: "Office Manager",
    focus: "Owner Communications & Administration",
    bio: "Sarah manages day-to-day operations, tenant onboarding coordination, portal support, and ensures seamless, responsive communication between owners and SPM.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Zoe Amos",
    role: "Property Manager",
    focus: "Leasing, Tenant Screening & Compliance",
    bio: "Zoe leads tenant screening, Arizona lease compliance, property audits, move-in/move-out inspections, and hands-on resident relationship management.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
  }
];

export interface VerifiedTestimonial {
  quote: string;
  author: string;
  context: string;
  propertyType: string;
}

export const VERIFIED_TESTIMONIALS: VerifiedTestimonial[] = [
  {
    quote: "I finally bit the bullet and hired a company for my three rent houses and I'm so glad I did. A simple automated statement each month and THATS IT!",
    author: "Randall Trimm",
    context: "Long-term residential rental portfolio owner",
    propertyType: "Single-Family Rentals"
  },
  {
    quote: "Trevor has been incredible to work with over the last year, huge upgrade from our last company.",
    author: "Tammy & Jim Hull",
    context: "Property owners in Scottsdale",
    propertyType: "Residential Management"
  },
  {
    quote: "I wanted a premium STR service for my properties and SPM has helped a ton catering to bachelor and bachelorette groups while keeping the place in great shape!",
    author: "Jane Gottfried",
    context: "Short-term rental & vacation property investor",
    propertyType: "Vacation Rental (Airbnb & Vrbo)"
  }
];

export interface ManagementTrack {
  id: "long-term" | "short-term";
  title: string;
  tagline: string;
  idealFor: string;
  heroImage: string;
  overview: string;
  keyDifferentiators: string[];
  responsibilities: string[];
}

export const MANAGEMENT_TRACKS: ManagementTrack[] = [
  {
    id: "long-term",
    title: "Long-Term Residential Management",
    tagline: "Consistent yield, verified tenants, zero day-to-day friction.",
    idealFor: "Single-family homes, luxury estates & multi-family properties seeking predictable occupancy and long-term asset preservation.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    overview: "We steward your long-term Arizona investment with uncompromising tenant screening, strict lease enforcement, proactive inspections, and prompt monthly direct deposits.",
    keyDifferentiators: [
      "Rigorous 6-point background, income & credit screening",
      "Drafting & execution of Arizona-compliant residential leases",
      "Routine move-in, mid-lease & move-out photo audit inspections",
      "Strict zero-tolerance rent enforcement & swift legal handling"
    ],
    responsibilities: [
      "Comprehensive digital marketing across Arizona MLS & syndicates",
      "Direct owner disbursements with automated monthly P&L statements",
      "24/7 emergency dispatch for maintenance and mechanical failures",
      "Regular lease renewals and fair market rent rate evaluations"
    ]
  },
  {
    id: "short-term",
    title: "Scottsdale Vacation Rentals (Airbnb & Vrbo)",
    tagline: "Maximizing ADR & occupancy with 5-star guest hospitality.",
    idealFor: "Luxury desert retreats, Old Town entertainment homes, and vacation properties aiming for peak seasonal returns.",
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    overview: "Scottsdale is an internationally renowned vacation destination. We manage the high volume day-to-day operations: dynamic daily pricing, 24/7 guest communication, hotel-grade cleanings, and city STR regulatory compliance.",
    keyDifferentiators: [
      "Algorithmic daily rate optimization (WM Phoenix Open, Spring Training, golf season)",
      "Strict pre-arrival guest verification and noise monitoring integration",
      "Coordination of dedicated hotel-grade turnover cleaners & linen service",
      "City of Scottsdale short-term rental license & code adherence"
    ],
    responsibilities: [
      "Full multi-platform listing management across Airbnb, Vrbo & direct channels",
      "24/7 local guest concierge and emergency assistance",
      "Regular consumable restocking (toiletries, coffee, kitchen staples)",
      "Post-checkout property inspections and immediate damage reporting"
    ]
  }
];

export const OPERATIONAL_CAPABILITIES = [
  {
    id: "maintenance",
    title: "In-House Maintenance & Repairs",
    description: "Led by Partner Braxton Heise, our maintenance team handles preventive care schedules, plumbing, electrical, and swift 24/7 emergency dispatch without inflated vendor markups.",
    detail: "Move-in / move-out photographic reports, preventative pre-summer HVAC checks, and itemized receipts on every service ticket."
  },
  {
    id: "landscaping",
    title: "Desert Landscaping & Xeriscaping",
    description: "Scottsdale's climate demands specialized exterior care. From desert cacti and citrus maintenance to gravel weed remediation and shade canopy trimming, we maintain impeccable curb appeal.",
    detail: "Ensures tenant enjoyment and maintains HOA compliance across Scottsdale communities."
  },
  {
    id: "irrigation",
    title: "Irrigation Repairs & Troubleshooting",
    description: "A compromised drip line can ruin Sonoran flora or inflate water bills overnight. We routinely audit controllers, valves, backflow preventers, and drip emitters.",
    detail: "Optimum seasonal watering schedules that conserve water while sustaining desert landscape health."
  },
  {
    id: "inspections",
    title: "Documented Property Inspections",
    description: "Detailed photo audits conducted at move-in, move-out, and periodic intervals throughout the tenancy ensure lease adherence and early detection of minor wear.",
    detail: "Directly uploaded to your Propertyware owner portal with high-resolution imagery and notes."
  },
  {
    id: "accounting",
    title: "Accounting & Transparent P&L",
    description: "Under Controller Trevor Reeves, owners receive clean, audit-ready financial statements, transparent 1099 tax summaries, and automated electronic owner draws.",
    detail: "Real-time access to ledger balances, invoice attachments, and deposit timelines."
  }
];

export const TECH_PORTAL_DETAILS = [
  {
    title: "24/7 Real-Time Owner Visibility",
    desc: "Through our Propertyware owner portal, check the status of your property anywhere in the world from any smartphone or computer."
  },
  {
    title: "Live Maintenance Tracking",
    desc: "View work orders as they are created, reviewed, and completed, complete with before/after photos and vendor invoices."
  },
  {
    title: "Streamlined Tenant Experience",
    desc: "Tenants utilize ClickPay for frictionless ACH and card rent payments, maintenance submissions, and clear lease covenant guidelines."
  },
  {
    title: "Automated Financial Dispatches",
    desc: "Monthly owner disbursements sent directly to your account, accompanied by easy-to-read balance sheets and year-end tax documentation."
  }
];
