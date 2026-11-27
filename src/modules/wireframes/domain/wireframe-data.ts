export type WireframeOptionId = "editorial" | "b2b" | "journey";

export interface WireframeOptionMeta {
  id: WireframeOptionId;
  code: string;
  name: string;
  tagline: string;
  summary: string;
  bestFor: string;
  traits: string[];
  headerStyle: string;
  heroStyle: string;
}

export interface WireframePageMeta {
  id: string;
  label: string;
  segment: string;
  purpose: string;
}

export interface SampleProduct {
  slug: string;
  name: string;
  category: "Grains & Rice" | "Whole Spices" | "Superfoods & Sweeteners";
  hsCode: string;
  origin: string;
  grade: string;
  moisture: string;
  moq: string;
  packaging: string;
  shelfLife: string;
  certifications: string[];
  summary: string;
  image: string;
  priceBand: string;
  flavour: string;
}

export const WIREFRAME_OPTIONS: readonly WireframeOptionMeta[] = [
  {
    id: "editorial",
    code: "Option A",
    name: "Editorial Heritage",
    tagline: "Calm, story-led, generous whitespace & timeless serif hierarchy",
    summary:
      "Leads with Indian heritage, craft, and quiet confidence. Uses centered editorial headers, asymmetrical 2-column spreads, and unhurried pacing before inviting export inquiries.",
    bestFor: "Premium international buyers, specialty food importers, and brand-first positioning.",
    traits: ["Centered masthead", "Asymmetric editorial grids", "Story-first product showcase"],
    headerStyle: "Split nav around centered wordmark",
    heroStyle: "Full-width editorial headline + 16:9 harvest frame",
  },
  {
    id: "b2b",
    code: "Option B",
    name: "Modern B2B Export",
    tagline: "Structured, spec-first clarity built for fast procurement decisions",
    summary:
      "Prioritizes buyer efficiency: top compliance utility bar, KPI proof strip, scannable spec tables with HS codes & MOQs, and persistent Quick-RFQ entry points on every page.",
    bestFor: "Wholesale distributors, institutional procurement teams, and high-volume export buyers.",
    traits: ["Compliance utility bar", "Above-the-fold Quick RFQ", "Tabular spec & HS code comparison"],
    headerStyle: "Utility strip + inline nav + primary RFQ button",
    heroStyle: "60/40 split: positioning + embedded Quick-RFQ card",
  },
  {
    id: "journey",
    code: "Option C",
    name: "Farm-to-World Journey",
    tagline: "Visual traceability, regional Indian origins & modular storytelling",
    summary:
      "Brings the brand promise, 'The Rise of Excellence', to life through step-by-step origin-to-port flows, regional sourcing spotlights, and alternating narrative blocks.",
    bestFor: "Traceability-conscious markets (EU, North America, Japan) and sustainable sourcing narratives.",
    traits: ["Origin-to-port timeline", "Regional farm spotlights", "Alternating narrative blocks"],
    headerStyle: "Clean horizontal bar with inquiry pill",
    heroStyle: "Narrative hero + 4-stage soil-to-port strip",
  },
] as const;

export const WIREFRAME_PAGES: readonly WireframePageMeta[] = [
  { id: "home", label: "01. Home", segment: "", purpose: "Primary positioning, product overview, proof points & RFQ CTA" },
  { id: "about", label: "02. About & Heritage", segment: "about", purpose: "Brand story, Indian roots, mission, leadership & governance" },
  { id: "products", label: "03. Products Catalog", segment: "products", purpose: "Filterable export catalog across core agricultural categories" },
  { id: "product-detail", label: "04. Product Detail", segment: "products/basmati-rice-1121", purpose: "Technical spec sheet, HS code, packaging, MOQ & quick inquiry" },
  { id: "sourcing", label: "05. Sourcing & Traceability", segment: "sourcing", purpose: "Farm network, regional origins, harvest-to-port checkpoints" },
  { id: "quality", label: "06. Quality & Certifications", segment: "quality", purpose: "APEDA, FSSAI, ISO 22000, HACCP, lab testing & COA workflow" },
  { id: "exports", label: "07. Global Reach & Exports", segment: "exports", purpose: "Markets served, Incoterms (FOB/CIF/DDP), FCL/LCL & ports" },
  { id: "contact", label: "08. Contact & RFQ", segment: "contact", purpose: "Structured B2B Request for Quote form, export desk & SLA" },
] as const;

export const SAMPLE_PRODUCTS: readonly SampleProduct[] = [
  {
    slug: "basmati-rice-1121",
    name: "1121 Extra-Long Grain Basmati Rice",
    category: "Grains & Rice",
    hsCode: "1006.30.20",
    origin: "Punjab & Haryana Foothills, India",
    grade: "Export Grade A · Aged 12–24 Months",
    moisture: "≤ 12.5%",
    moq: "1 × 20ft FCL (24 MT)",
    packaging: "5 kg, 10 kg, 25 kg, 50 kg PP / BOPP / Jute Bags (Private Label Ready)",
    shelfLife: "24 Months",
    certifications: ["APEDA", "FSSAI", "ISO 22000", "Phytosanitary"],
    summary: "Extra-long slender aromatic grain with high elongation ratio, sorted via optical color sorters for international retail and foodservice buyers.",
    image: "/images/basmati-rice.jpg",
    priceBand: "US$ 1,180 – 1,260 / MT FOB",
    flavour: "Floral, buttery aroma · 2.2× elongation on cooking",
  },
  {
    slug: "turmeric-fingers-salem",
    name: "Salem & Erode Whole Turmeric Fingers",
    category: "Whole Spices",
    hsCode: "0910.30.20",
    origin: "Salem & Erode Belt, Tamil Nadu",
    grade: "Single / Double Polished · Curcumin 3.5%–5.0%",
    moisture: "≤ 10.0%",
    moq: "5 MT (LCL) / 18 MT (20ft FCL)",
    packaging: "25 kg / 50 kg Multi-wall Paper or PP Bags with Liner",
    shelfLife: "24 Months",
    certifications: ["Spices Board", "FSSAI", "HACCP", "Lab COA"],
    summary: "Deep golden-yellow cured rhizomes with verified curcumin levels, tested for heavy metals, aflatoxin, and pesticide residues.",
    image: "/images/turmeric.jpg",
    priceBand: "US$ 1,950 – 2,240 / MT FOB",
    flavour: "Earthy, warm, peppery · deep golden cut",
  },
  {
    slug: "green-cardamom-idukki",
    name: "Idukki Bold Green Cardamom (8mm+)",
    category: "Whole Spices",
    hsCode: "0908.31.20",
    origin: "Idukki Hills, Kerala",
    grade: "AGB / 8mm+ Bold Green · High Essential Oil",
    moisture: "≤ 10.5%",
    moq: "500 kg (Air) / 5 MT (Sea)",
    packaging: "5 kg Vacuum Packs inside 25 kg Export Cartons",
    shelfLife: "18 Months",
    certifications: ["Spices Board", "FSSAI", "ISO 22000"],
    summary: "Hand-harvested aromatic green pods graded by sieve size and color uniformity for Middle East, European, and specialty spice markets.",
    image: "/images/cardamom.jpg",
    priceBand: "US$ 21.5 – 24.0 / kg FOB",
    flavour: "Eucalyptus-bright, sweet resinous finish",
  },
  {
    slug: "black-pepper-malabar",
    name: "Malabar Garbled Black Pepper (MG-1)",
    category: "Whole Spices",
    hsCode: "0904.11.30",
    origin: "Malabar Coast, Kerala & Karnataka",
    grade: "MG-1 · 550–580 g/L Bulk Density",
    moisture: "≤ 11.0%",
    moq: "2 MT (LCL) / 14 MT (20ft FCL)",
    packaging: "25 kg / 50 kg Craft Paper Bags with Moisture Barrier",
    shelfLife: "24 Months",
    certifications: ["Spices Board", "HACCP", "Steam Sterilized Option"],
    summary: "Sun-dried peppercorns prized for balanced piperine pungency and volatile oil content, available raw or steam-sterilized.",
    image: "/images/black-pepper.jpg",
    priceBand: "US$ 6,900 – 7,400 / MT FOB",
    flavour: "Bold pungency · citrus-pine top notes",
  },
  {
    slug: "organic-jaggery-powder",
    name: "Natural Sugarcane Jaggery Powder",
    category: "Superfoods & Sweeteners",
    hsCode: "1701.13.10",
    origin: "Western Maharashtra & Uttar Pradesh",
    grade: "Unrefined Chemical-Free · Fine Free-Flow",
    moisture: "≤ 4.0%",
    moq: "5 MT (LCL) / 20 MT (20ft FCL)",
    packaging: "500 g / 1 kg Retail Pouches or 25 kg Bulk Liner Bags",
    shelfLife: "12 Months",
    certifications: ["FSSAI", "NPOP Organic", "ISO 22000"],
    summary: "Minimally processed traditional sweetener retaining natural trace minerals, tailored for health-food importers and clean-label brands.",
    image: "/images/jaggery.jpg",
    priceBand: "US$ 980 – 1,120 / MT FOB",
    flavour: "Caramel, molasses and toffee notes",
  },
  {
    slug: "dehydrated-moringa-leaf",
    name: "Shade-Dried Moringa Leaf Powder",
    category: "Superfoods & Sweeteners",
    hsCode: "0712.90.90",
    origin: "Coimbatore & Madurai, Tamil Nadu",
    grade: "80–100 Mesh · Vibrant Green · Microbial Tested",
    moisture: "≤ 7.0%",
    moq: "1 MT (Air / Sea LCL)",
    packaging: "20 kg Food-Grade HDPE Drums or Foil-Lined Cartons",
    shelfLife: "18 Months",
    certifications: ["FSSAI", "HACCP", "NPOP Organic", "Third-Party COA"],
    summary: "Low-temperature shade-dried Moringa oleifera leaves milled in hygienic facilities to preserve chlorophyll and nutrient profile.",
    image: "/images/moringa.jpg",
    priceBand: "US$ 4.2 – 5.1 / kg FOB",
    flavour: "Grassy, spinach-like, clean mineral finish",
  },
] as const;

export function isWireframeOptionId(value: string): value is WireframeOptionId {
  return value === "editorial" || value === "b2b" || value === "journey";
}

export function getOptionMeta(id: WireframeOptionId): WireframeOptionMeta {
  const found = WIREFRAME_OPTIONS.find((o) => o.id === id);
  return found ?? WIREFRAME_OPTIONS[0]!;
}

export function getProductBySlug(slug: string): SampleProduct {
  const found = SAMPLE_PRODUCTS.find((p) => p.slug === slug);
  return found ?? SAMPLE_PRODUCTS[0]!;
}

export function optionHref(option: WireframeOptionId, segment: string): string {
  return segment ? `/wireframes/${option}/${segment}` : `/wireframes/${option}`;
}

export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
