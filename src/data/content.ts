// Verified company data from reference website:
// Scottsdale Property Management (SPM) / AZ Prop Group
// Address: 9259 E Raintree Dr ste 2019, Scottsdale, AZ 85260
// Phone: (602) 935-6539
// Portals: Owners (Propertyware), Tenants (ClickPay)

export const COMPANY_INFO = {
  name: "Scottsdale Property Management",
  shortName: "SPM",
  tagline: "Thoughtful Rental & Vacation Home Management",
  phone: "(602) 935-6539",
  phoneRaw: "6029356539",
  address: "9259 E Raintree Dr ste 2019, Scottsdale, AZ 85260",
  cityStateZip: "Scottsdale, AZ 85260",
  ownerPortalUrl: "https://app.propertyware.com/pw/login.jsp",
  tenantPortalUrl: "https://www.clickpay.com/custom/propertymgmt/login.html",
  serviceAreas: [
    "North Scottsdale",
    "Old Town Scottsdale",
    "DC Ranch",
    "Gainey Ranch",
    "Paradise Valley",
    "McCormick Ranch",
    "Troon North"
  ]
};

export interface ServiceItem {
  id: string;
  title: string;
  category: "residential" | "str" | "multifamily" | "maintenance";
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
  features: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "residential-single-family",
    title: "Residential & Single-Family",
    category: "residential",
    subtitle: "Long-term lease management with reliable, vetted tenants.",
    description: "End-to-end stewardship for your single-family rental home. We handle comprehensive marketing, rigorous tenant screening, prompt rent disbursement, routine preventive inspections, and frictionless tenant relations.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Rigorous 6-point tenant screening", "Direct deposit rent disbursements", "Routine documented inspections"],
    features: [
      "Targeted digital advertising & MLS marketing",
      "Drafting & executing Arizona-compliant leases",
      "Dedicated account manager for owners",
      "Strict zero-tolerance rent enforcement",
      "Regular move-in/move-out photo documentation"
    ]
  },
  {
    id: "vacation-rentals-str",
    title: "Vacation Rentals (Airbnb & Vrbo)",
    category: "str",
    subtitle: "High-yield short-term rental management with 5-star guest care.",
    description: "Scottsdale is one of the nation's premier vacation rental destinations. We optimize dynamic daily rates, coordinate hotel-grade cleanings, manage 24/7 guest communication, and safeguard your luxury asset.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Dynamic algorithmic pricing", "24/7 local guest concierge", "Turnover & professional housekeeping"],
    features: [
      "Optimized listing creation across Airbnb & Vrbo",
      "Pre-arrival noise monitoring & guest vetting",
      "City of Scottsdale short-term rental compliance",
      "Professional linen & turnover cleaning crews",
      "Proactive consumable replenishment"
    ]
  },
  {
    id: "multi-family-management",
    title: "Multi-Family Properties",
    category: "multifamily",
    subtitle: "Scaled operational efficiency and transparent portfolio accounting.",
    description: "Designed for small-to-mid sized apartment complexes, duplexes, and multi-unit residential portfolios. We streamline leasing pipelines, automate rent collections, and lower per-unit maintenance costs.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Automated billing systems", "Scaled vendor contractor pricing", "Accurate monthly P&L statements"],
    features: [
      "Consolidated multi-unit owner reporting",
      "On-demand tenant online service requests",
      "Strategic unit turnover and capital improvement plans",
      "Strict legal eviction processing if ever required",
      "Real-time visibility via Propertyware owner portal"
    ]
  },
  {
    id: "maintenance-irrigation",
    title: "Desert Landscaping & Maintenance",
    category: "maintenance",
    subtitle: "Proactive desert care, irrigation troubleshooting & repairs.",
    description: "Arizona's intense climate requires specialized maintenance. We provide preventive care programs, irrigation system troubleshooting, pool vendor coordination, and 24/7 emergency repair response.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Irrigation & drip system maintenance", "24/7 emergency dispatch", "No hidden contractor markups"],
    features: [
      "Routine seasonal irrigation inspections",
      "Vetted, insured local Arizona tradespeople",
      "HVAC pre-summer servicing checks",
      "Curb appeal maintenance & landscaping oversight",
      "Itemized invoices with photo verification"
    ]
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Complimentary Rental Analysis",
    description: "We evaluate your property's fair market rent, seasonal demand factors, and rent-ready optimization recommendations based on recent local Scottsdale comps."
  },
  {
    step: "02",
    title: "Seamless Onboarding & Marketing",
    description: "Professional high-definition photography, dynamic multi-channel listing syndication, and digital lockbox installation to attract qualified applicants."
  },
  {
    step: "03",
    title: "Rigorous Tenant Screening",
    description: "We verify credit history, nationwide criminal background, rental history, employment verification, and income ratios to select dependable residents."
  },
  {
    step: "04",
    title: "Hands-Off Management & Financials",
    description: "Sit back and receive reliable monthly direct deposits along with itemized statements and real-time portal access to every work order and dollar earned."
  }
];

export const TRUST_PILLARS = [
  {
    title: "We Think Like Landlords",
    description: "As rental owners ourselves, we understand that preserving capital and protecting asset condition are just as crucial as maximizing monthly cash flow.",
    iconName: "ShieldCheck"
  },
  {
    title: "Hands-On Local Presence",
    description: "Based right here in Scottsdale on Raintree Drive. When emergencies arise or routine inspections are due, our boots are on the ground within minutes.",
    iconName: "MapPin"
  },
  {
    title: "24/7 Proactive Communication",
    description: "You have a dedicated account representative. Owners and tenants have immediate access to round-the-clock emergency support and live updates.",
    iconName: "Clock"
  },
  {
    title: "Transparent Tech-Enabled Accounting",
    description: "Log in anytime from any device to see real-time financials, lease documents, inspection photo archives, and itemized vendor invoices.",
    iconName: "BarChart3"
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: "Strategic Local Rent Pricing",
    description: "We analyze hyper-local micro-markets across North Scottsdale, Old Town, and Paradise Valley to capture top-of-market yield without extended vacancy."
  },
  {
    title: "Thorough 6-Point Screening",
    description: "Comprehensive background, identity verification, eviction registry checks, credit analysis, and landlord references protect your property and neighbors."
  },
  {
    title: "Regular Documented Inspections",
    description: "Detailed photo and checklist audits conducted at move-in, move-out, and periodic intervals throughout tenancy ensure maintenance issues are resolved early."
  },
  {
    title: "Reliable Rent Collection & Direct Deposit",
    description: "Convenient electronic tenant payment portals ensure punctual rent collection with strict adherence to Arizona lease covenants and swift disbursement."
  },
  {
    title: "Desert Property Specialization",
    description: "Expertise in managing unique Arizona property dynamics: intense summer HVAC demands, desert xeriscaping, and complex pool & drip irrigation systems."
  },
  {
    title: "Efficient & Professional Legal Handling",
    description: "In the rare event tenant non-compliance occurs, our experienced team manages the legal notice and eviction procedures strictly following Arizona statutes."
  }
];
