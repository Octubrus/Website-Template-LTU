export interface OpeningHours {
  day: string;
  hours: string;
}

export interface Cta {
  label: string;
  href: string;
}

export interface BusinessConfig {
  businessName: string;
  shortDescription: string;
  logoPath: string | null;
  logoAlt: string;
  city: string;
  phone: string;
  email: string;
  address: string;
  mapsUrl: string;
  facebookUrl: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  mobileCta: Cta;
  demoMode: boolean;
  allowIndexing: boolean;
  openingHours: OpeningHours[];
  contactFormEnabled: boolean;
  /**
   * When true, the sticky header becomes static so it doesn't overlap
   * content in full-page screenshots / PDF captures. Use this only when
   * recording the demo for a prospect; keep it false during normal browsing.
   */
  captureMode: boolean;
}

export const business: BusinessConfig = {
  businessName: "Verslo Pavadinimas",
  shortDescription:
    "Trumpas 1–2 sakinių aprašymas apie tai, ką verslas daro ir kam padeda. Pakeiskite konkrečiu klientu.",
  logoPath: null,
  logoAlt: "Verslo Pavadinimas logotipas",
  city: "Vilnius",
  phone: "+370 600 00000",
  email: "info@verslopavadinimas.lt",
  address: "Gatvės pavadinimas 1, Vilnius",
  mapsUrl: "https://maps.google.com/",
  facebookUrl: "https://facebook.com/",
  primaryCta: { label: "Susisiekti", href: "/kontaktai" },
  secondaryCta: { label: "Paslaugos", href: "/paslaugos" },
  mobileCta: { label: "Skambinti", href: "tel:+37060000000" },
  demoMode: true,
  allowIndexing: false,
  openingHours: [
    { day: "Pirmadienis–Penktadienis", hours: "09:00–18:00" },
    { day: "Šeštadienis", hours: "10:00–15:00" },
    { day: "Sekmadienis", hours: "Nedirbama" },
  ],
  contactFormEnabled: true,
  captureMode: false,
};
