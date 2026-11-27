/**
 * Prototype showcase content — illustrative dummy data for client review.
 * All people, buyers and shipment references are fictional.
 * Deterministic (no Math.random in render) so static export + hydration stay stable;
 * `rotate()` gives each direction a different-looking mix of the same pool.
 */
import type { WireframeOptionId } from "./wireframe-data";

const OPTION_SEED: Record<WireframeOptionId, number> = { editorial: 0, b2b: 2, journey: 4 };

/** Deterministic per-direction rotation of a list. */
export function rotate<T>(items: readonly T[], option: WireframeOptionId, count = items.length): T[] {
  const n = items.length;
  const start = OPTION_SEED[option] % n;
  return Array.from({ length: Math.min(count, n) }, (_, i) => items[(start + i) % n]!);
}

export const SCENE_IMAGES = {
  hero: "/images/hero-sunrise.jpg",
  farmer: "/images/farmer-harvest.jpg",
  estate: "/images/spice-estate.jpg",
  heritage: "/images/heritage.jpg",
  lab: "/images/qa-lab.jpg",
  port: "/images/port-containers.jpg",
  warehouse: "/images/warehouse.jpg",
} as const;

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  market: string;
}

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      "Three seasons, eleven containers, zero rejections at Rotterdam. The COA lands in our inbox before the vessel sails — that alone changed how we plan.",
    name: "Liesbeth van Duren",
    role: "Head of Sourcing · Specialty spice importer",
    market: "Netherlands",
  },
  {
    quote:
      "Their 1121 Basmati cooks with the length our restaurant clients notice. Grain consistency lot-to-lot is the best we have seen from India.",
    name: "Faisal Al-Rashid",
    role: "Procurement Director · Foodservice distributor",
    market: "United Arab Emirates",
  },
  {
    quote:
      "We moved our private-label turmeric to Acharyodaya after one trial pallet. Curcumin numbers matched the spec sheet to the decimal.",
    name: "Hannah Brooks",
    role: "Category Manager · Natural foods brand",
    market: "United States",
  },
  {
    quote:
      "Shade-dried moringa with a genuinely vivid colour, and the micro results were clean on the first test. Rare for this category.",
    name: "Kenji Morimoto",
    role: "Quality Lead · Wellness ingredients trader",
    market: "Japan",
  },
  {
    quote:
      "Cardamom graded exactly to 8mm, vacuum packed, cold-chain to Jeddah. They think like a partner, not a vendor.",
    name: "Omar Haddad",
    role: "Owner · Gulf spice wholesaler",
    market: "Saudi Arabia",
  },
  {
    quote:
      "Documentation is immaculate — phyto, fumigation, origin, all pre-checked. Our customs broker asked who the new supplier was.",
    name: "Claire Dubois",
    role: "Supply Chain Manager · Gourmet retailer",
    market: "France",
  },
] as const;

export type ShipmentStatus = "In transit" | "Loading" | "Customs cleared" | "Delivered";

export interface Shipment {
  ref: string;
  product: string;
  volume: string;
  route: string;
  status: ShipmentStatus;
  eta: string;
}

export const SHIPMENTS: readonly Shipment[] = [
  { ref: "ACY-26-1187", product: "1121 Basmati (Sella)", volume: "2 × 20ft", route: "Nhava Sheva → Jebel Ali", status: "In transit", eta: "ETA 02 Dec" },
  { ref: "ACY-26-1192", product: "Turmeric Fingers", volume: "18 MT", route: "Chennai → Rotterdam", status: "Loading", eta: "ETD 30 Nov" },
  { ref: "ACY-26-1179", product: "Green Cardamom 8mm+", volume: "1.2 MT · Air", route: "Cochin → Jeddah", status: "Delivered", eta: "Signed 26 Nov" },
  { ref: "ACY-26-1195", product: "Malabar Pepper MG-1", volume: "14 MT", route: "Cochin → Hamburg", status: "Customs cleared", eta: "Gate-in 29 Nov" },
  { ref: "ACY-26-1201", product: "Moringa Leaf Powder", volume: "3 MT · LCL", route: "Chennai → Los Angeles", status: "In transit", eta: "ETA 21 Dec" },
  { ref: "ACY-26-1204", product: "Jaggery Powder", volume: "1 × 20ft", route: "Mundra → Felixstowe", status: "Loading", eta: "ETD 03 Dec" },
  { ref: "ACY-26-1168", product: "1121 Basmati (Steam)", volume: "4 × 40ft", route: "Mundra → Dammam", status: "Delivered", eta: "Signed 22 Nov" },
] as const;

export interface Insight {
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  read: string;
  image: string;
}

export const INSIGHTS: readonly Insight[] = [
  {
    title: "2026–27 Basmati Crop Outlook: Longer Grains, Firmer Prices",
    excerpt: "Punjab arrivals are up 8% with excellent grain length. What it means for Q1 forward contracts.",
    tag: "Market Report",
    date: "24 Nov 2026",
    read: "6 min read",
    image: "/images/basmati-rice.jpg",
  },
  {
    title: "EU Pesticide MRL Revisions for Spices — A Buyer's Checklist",
    excerpt: "The new limits on chlorpyrifos and ethylene oxide, and how our pre-shipment panel covers them.",
    tag: "Compliance",
    date: "17 Nov 2026",
    read: "4 min read",
    image: "/images/qa-lab.jpg",
  },
  {
    title: "Inside Idukki: How Bold Cardamom Is Graded by Hand",
    excerpt: "A morning with the growers who sort every pod by colour, size and oil content.",
    tag: "Origin Story",
    date: "09 Nov 2026",
    read: "5 min read",
    image: "/images/farmer-harvest.jpg",
  },
  {
    title: "Moringa Moves Mainstream in North American Wellness Aisles",
    excerpt: "Import volumes doubled in two years. Specs that clean-label brands now ask for.",
    tag: "Category Trends",
    date: "02 Nov 2026",
    read: "3 min read",
    image: "/images/moringa.jpg",
  },
  {
    title: "Red Sea Rerouting: Realistic Transit Times to Europe This Winter",
    excerpt: "Cape routing adds 10–14 days. Here is how we buffer stock for EU retail programmes.",
    tag: "Logistics",
    date: "27 Oct 2026",
    read: "4 min read",
    image: "/images/port-containers.jpg",
  },
] as const;

export const MARKETS: readonly { country: string; code: string; port: string }[] = [
  { country: "United Arab Emirates", code: "AE", port: "Jebel Ali" },
  { country: "Saudi Arabia", code: "SA", port: "Jeddah" },
  { country: "Netherlands", code: "NL", port: "Rotterdam" },
  { country: "Germany", code: "DE", port: "Hamburg" },
  { country: "United Kingdom", code: "GB", port: "Felixstowe" },
  { country: "United States", code: "US", port: "New York / NJ" },
  { country: "Canada", code: "CA", port: "Toronto" },
  { country: "Japan", code: "JP", port: "Tokyo" },
  { country: "Singapore", code: "SG", port: "Singapore" },
  { country: "Australia", code: "AU", port: "Sydney" },
  { country: "France", code: "FR", port: "Le Havre" },
  { country: "Oman", code: "OM", port: "Sohar" },
  { country: "Malaysia", code: "MY", port: "Port Klang" },
  { country: "Kuwait", code: "KW", port: "Shuwaikh" },
  { country: "Belgium", code: "BE", port: "Antwerp" },
  { country: "Qatar", code: "QA", port: "Hamad" },
] as const;

export const LEADERS: readonly { name: string; initials: string; role: string; bio: string }[] = [
  {
    name: "Arjun Acharya",
    initials: "AA",
    role: "Founder & Managing Director",
    bio: "Third-generation grain trader from the Karnal belt; 18 years building direct farmer partnerships across six states.",
  },
  {
    name: "Meera Raghavan",
    initials: "MR",
    role: "Head of Quality & Compliance",
    bio: "Food technologist (CFTRI) leading ISO 22000 systems, lab partnerships and destination-market MRL readiness.",
  },
  {
    name: "Vikram Desai",
    initials: "VD",
    role: "Director, Global Trade",
    bio: "Former shipping-line executive running freight, Incoterms and buyer programmes across the GCC, EU and Americas.",
  },
] as const;

export const MILESTONES: readonly { year: string; title: string; text: string }[] = [
  { year: "2009", title: "Roots in Karnal", text: "The Acharya family begins aggregating Basmati paddy from 40 smallholder farms." },
  { year: "2016", title: "Spice belts added", text: "Direct sourcing extends to Erode turmeric and Idukki cardamom cooperatives." },
  { year: "2021", title: "Export house formed", text: "APEDA, FSSAI and Spices Board registrations; first containers to Jebel Ali." },
  { year: "2024", title: "Certified processing", text: "ISO 22000 partner facility and in-house moisture & sieve lab commissioned." },
  { year: "2026", title: "Global company", text: "Registered as a global trading company, now shipping to 24 destination markets." },
] as const;

export const CONTACT = {
  company: "Acharyodaya Global Exports Pvt. Ltd.",
  address: "Level 9, Trade Centre, Bandra Kurla Complex, Mumbai 400051, India",
  phone: "+91 22 4000 1121",
  whatsapp: "+91 98200 11210",
  email: "exports@acharyodaya.com",
  hours: "Mon–Sat · 09:00–19:00 IST",
  iec: "IEC 03XXXXXXX1",
} as const;
