// PI CAPS Product Data - Updated per client PDF specifications
export interface GalleryImage {
  src: string;
  alt: string;
  category: "exterior" | "interior" | "detail" | "lifestyle";
}

export interface ProductSpecs {
  dimensions: { label: string; value: string }[];
  structure: { label: string; value: string }[];
  installations: { label: string; value: string }[];
  finishes: { label: string; value: string }[];
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  size: string;
  sizeCategory: string;
  price: string;
  priceValue: number;
  idealFor: string[];
  keyBenefits: string[];
  features: string[];
  model3D: string;
  virtualTour: string;
  heroImage: string;
  galleryImages: GalleryImage[];
  specs: ProductSpecs;
  included: string[];
}

export const products: Product[] = [
  {
    slug: "alpha",
    name: "Alpha",
    tagline: "Compactă și eficientă, concepută pentru spații restrânse sau proiecte de tip studio.",
    size: "18m²",
    sizeCategory: "Compact",
    price: "€23.500 + TVA",
    priceValue: 23500,
    idealFor: [
      "Birou home-office",
      "Studio creativ",
      "Cameră oaspeți",
      "Spațiu de meditație",
    ],
    // Updated: removed "Complet Echipată" from here - it's shown as separate badge
    keyBenefits: [
      "Compartimentare optimizată",
      "Dormitor, baie și zonă sanitară"
    ],
    features: [
      "Design minimalist futurist",
      "Ferestre panoramice curbate",
      "Sistem HVAC integrat",
      "Iluminare LED ambientală",
      "Izolație termică premium",
      "Smart Home Assist integrat",
      "Videoproiector",
      "Jaluzele comandă vocală",
      "Încălzire în pardoseală",
      "Aer condiționat",
      "Apă caldă",
    ],
    model3D: "/models/optimized/alpha.glb",
    virtualTour:
      "https://tour.panoee.net/6953736f421fbb9b9a0f96a9/695373c4421fbb51720f96ba",
    heroImage: "/p-alpha/exterior1-alpha.jpeg",
    galleryImages: [
      {
        src: "/p-alpha/camera-alpha.jpeg",
        alt: "Capsula Alpha - Cameră interioară",
        category: "interior",
      },
      {
        src: "/p-alpha/baie-alpha.jpeg",
        alt: "Capsula Alpha - Baie",
        category: "interior",
      },
      {
        src: "/p-alpha/exterior1-alpha.jpeg",
        alt: "Capsula Alpha - Vedere exterioară frontală",
        category: "exterior",
      },
      {
        src: "/p-alpha/exterior2-alpha.jpeg",
        alt: "Capsula Alpha - Vedere exterioară laterală",
        category: "exterior",
      },
    ],
    specs: {
      dimensions: [
        { label: "Suprafață utilă", value: "18 m²" },
        { label: "Lungime", value: "6.0 m" },
        { label: "Lățime", value: "3.0 m" },
        { label: "Înălțime interioară", value: "2.6 m" },
      ],
      structure: [
        { label: "Structură", value: "Oțel galvanizat" },
        { label: "Izolație", value: "Poliuretan 100mm" },
        { label: "Acoperiș", value: "Membrană EPDM" },
        { label: "Pardoseală", value: "SPC ecologică" },
      ],
      installations: [
        { label: "Electrică", value: "Tablou complet, 16A" },
        { label: "Climatizare", value: "Aer condiționat inverter" },
        { label: "Încălzire", value: "În pardoseală" },
        { label: "Ventilație", value: "Sistem recuperare căldură" },
      ],
      finishes: [
        { label: "Pereți interiori", value: "Finisaje moderne" },
        { label: "Exterior", value: "Aluminiu durabil" },
        { label: "Ferestre", value: "Sticlă LOW-E securizată" },
        { label: "Iluminat", value: "LED integrat, dimabil" },
      ],
    },
    included: [
      "Structură completă izolată",
      "Instalație electrică",
      "Sistem climatizare",
      "Ferestre și uși",
      "Finisaje interioare",
      "Transport și montaj",
      "Garanție 2 ani capsulă",
      "Garanție 1 an electrocasnice",
    ],
  },
  {
    slug: "beta",
    name: "Beta",
    tagline: "Un echilibru ideal între dimensiune, confort și funcționalitate.",
    size: "28m²",
    sizeCategory: "Medium",
    price: "€33.500 + TVA",
    priceValue: 33500,
    idealFor: [
      "Casă de vacanță",
      "Airbnb premium",
      "Anexă locuibilă",
      "Birou + zonă relaxare",
    ],
    // Updated: specific benefits for Beta per PDF
    keyBenefits: [
      "Dormitor separat și grup sanitar complet cu duș",
      "Posibilitate mini chicinetă/zonă dining compactă",
    ],
    features: [
      "Living deschis cu bucătărie opțională",
      "Dormitor separat",
      "Baie completă cu duș",
      "Proiector integrat",
      "Smart Home Assist",
      "Terasă opțională",
      "Acces separat prin hol central",
      "Panou de control",
      "Videoproiector",
      "Jaluzele comandă vocală",
      "Încălzire în pardoseală",
      "Aer condiționat",
      "Apă caldă",
    ],
    model3D: "/models/optimized/beta.glb",
    virtualTour:
      "https://tour.panoee.net/69511a97b671305ce6b38af9/69511b13b67130150eb38b06",
    heroImage: "/p-beta/exterior1-beta.jpeg",
    galleryImages: [
      {
        src: "/p-beta/camera-beta.jpeg",
        alt: "Capsula Beta - Cameră interioară",
        category: "interior",
      },
      {
        src: "/p-beta/camera1-beta.jpeg",
        alt: "Capsula Beta - Living",
        category: "interior",
      },
      {
        src: "/p-beta/baie-beta.jpeg",
        alt: "Capsula Beta - Baie",
        category: "interior",
      },
      {
        src: "/p-beta/exterior1-beta.jpeg",
        alt: "Capsula Beta - Vedere exterioară frontală",
        category: "exterior",
      },
      {
        src: "/p-beta/exterior2-beta.jpeg",
        alt: "Capsula Beta - Vedere exterioară laterală",
        category: "exterior",
      },
    ],
    specs: {
      dimensions: [
        { label: "Suprafață utilă", value: "28 m²" },
        { label: "Lungime", value: "8.0 m" },
        { label: "Lățime", value: "3.5 m" },
        { label: "Înălțime interioară", value: "2.7 m" },
      ],
      structure: [
        { label: "Structură", value: "Oțel galvanizat premium" },
        { label: "Izolație", value: "Poliuretan 120mm" },
        { label: "Acoperiș", value: "Membrană EPDM + izolație" },
        { label: "Pardoseală", value: "SPC ecologică premium" },
      ],
      installations: [
        { label: "Electrică", value: "Tablou smart, 25A" },
        { label: "Climatizare", value: "Multi-split inverter" },
        { label: "Încălzire", value: "În pardoseală" },
        { label: "Apă", value: "Boiler 50L, racord apă/canal" },
      ],
      finishes: [
        { label: "Pereți interiori", value: "Finisaje moderne + accente lemn" },
        { label: "Exterior", value: "Aluminiu premium" },
        { label: "Ferestre", value: "Sticlă LOW-E termoizolantă" },
        { label: "Bucătărie", value: "Mini chicinetă opțională" },
      ],
    },
    included: [
      "Structură completă izolată",
      "Instalații complete (electric, apă, canal)",
      "Sistem climatizare premium",
      "Mini chicinetă opțională",
      "Baie complet echipată cu duș",
      "Ferestre și uși premium",
      "Finisaje interioare complete",
      "Transport și montaj",
      "Garanție 2 ani capsulă",
      "Garanție 1 an electrocasnice",
    ],
  },
  {
    slug: "gamma",
    name: "Gamma",
    tagline: "Spațiu amplu, conceput pentru confort complet și utilizare fără compromisuri.",
    size: "38m²",
    sizeCategory: "Large",
    price: "€42.500 + TVA",
    priceValue: 42500,
    idealFor: [
      "Locuință permanentă",
      "Resort & Glamping",
      "Showroom premium",
      "Spațiu comercial",
    ],
    // Updated: specific benefits for Gamma per PDF
    keyBenefits: [
      "Dormitor separat, zonă living spațioasă",
      "Canapea extensibilă și sistem video cu proiector integrat",
    ],
    features: [
      "Două zone distincte",
      "Living generos cu bucătărie completă",
      "Dormitor master",
      "Baie completă cu duș",
      "Zonă multifuncțională",
      "Smart Home Assist complet",
      "Configurație flexibilă",
      "Grup sanitar modern cu duș",
      "Opțiune terasă sau extindere zonă de zi",
      "Videoproiector",
      "Jaluzele comandă vocală",
      "Încălzire în pardoseală",
      "Aer condiționat",
      "Apă caldă",
    ],
    model3D: "/models/optimized/gamma.glb",
    virtualTour:
      "https://tour.panoee.net/69537427421fbbb22e0f96be/6953747978bc93d1c874af6c",
    heroImage: "/p-gamma/exterior1-gamma.jpeg",
    galleryImages: [
      {
        src: "/p-gamma/living-gamma.jpeg",
        alt: "Capsula Gamma - Living",
        category: "interior",
      },
      {
        src: "/p-gamma/camera-gamma.jpeg",
        alt: "Capsula Gamma - Dormitor",
        category: "interior",
      },
      {
        src: "/p-gamma/bucatarie-gamma.jpeg",
        alt: "Capsula Gamma - Bucătărie",
        category: "interior",
      },
      {
        src: "/p-gamma/baie-gamma.jpeg",
        alt: "Capsula Gamma - Baie premium",
        category: "interior",
      },
      {
        src: "/p-gamma/exterior1-gamma.jpeg",
        alt: "Capsula Gamma - Vedere exterioară frontală",
        category: "exterior",
      },
      {
        src: "/p-gamma/exterior2-gamma.jpeg",
        alt: "Capsula Gamma - Vedere exterioară laterală",
        category: "exterior",
      },
    ],
    specs: {
      dimensions: [
        { label: "Suprafață utilă", value: "38 m²" },
        { label: "Lungime", value: "12.0 m" },
        { label: "Lățime", value: "3.2 m" },
        { label: "Înălțime interioară", value: "2.8 m" },
      ],
      structure: [
        { label: "Structură", value: "Oțel galvanizat HD" },
        { label: "Izolație", value: "Poliuretan 150mm" },
        { label: "Acoperiș", value: "Sistem green roof ready" },
        { label: "Pardoseală", value: "Parchet engineered oak" },
      ],
      installations: [
        { label: "Electrică", value: "Smart panel, 32A, backup" },
        { label: "Climatizare", value: "VRF multi-zonă" },
        { label: "Încălzire", value: "În pardoseală + pompă căldură" },
        { label: "Apă", value: "Boiler 80L, recirculare" },
      ],
      finishes: [
        { label: "Pereți interiori", value: "Panouri lemn natural + vopsea" },
        { label: "Exterior", value: "Panouri compozit premium" },
        { label: "Ferestre", value: "Tripan, rame minimaliste" },
        { label: "Baie", value: "Ceramică premium, cabină walk-in" },
      ],
    },
    included: [
      "Structură premium completă",
      "Instalații complete all-in-one",
      "Sistem climatizare multi-zonă",
      "Bucătărie complet mobilată",
      "Baie complet echipată cu duș",
      "Ferestre și uși premium",
      "Finisaje interioare premium",
      "Smart Home Assist pack",
      "Transport și montaj complet",
      "Garanție 2 ani capsulă (extensibil)",
      "Garanție 1 an electrocasnice",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(currentSlug: string): Product[] {
  return products.filter((p) => p.slug !== currentSlug);
}