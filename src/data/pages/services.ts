export interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
}

export interface PricingCard {
  title: string;
  price: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const servicesPage = {
  seo: {
    title: "Paslaugos ir kainos — Verslo Pavadinimas",
    description:
      "Mūsų teikiamos paslaugos ir orientacinės kainos. Aiškus, sąžiningas pasiūlymas — be paslėptų mokesčių.",
  },
  pageHeader: {
    eyebrow: "Paslaugos",
    heading: "Paslaugos ir kainos.",
    dimLine: "Be paslėptų sąlygų.",
    subheading:
      "Aiškus pasiūlymas — ką tiksliai gausite ir kiek tai kainuos.",
  },
  services: {
    heading: "Ką tiksliai gausite",
    items: [
      {
        title: "Paslauga A",
        description:
          "Detalus paslaugos aprašymas. Kas įeina, kiek laiko užtrunka, koks rezultatas.",
      },
      {
        title: "Paslauga B",
        description:
          "Detalus paslaugos aprašymas. Kas įeina, kiek laiko užtrunka, koks rezultatas.",
      },
      {
        title: "Paslauga C",
        description:
          "Detalus paslaugos aprašymas. Kas įeina, kiek laiko užtrunka, koks rezultatas.",
      },
      {
        title: "Paslauga D",
        description:
          "Detalus paslaugos aprašymas. Kas įeina, kiek laiko užtrunka, koks rezultatas.",
      },
    ] as ServiceItem[],
  },
  pricing: {
    enabled: true,
    eyebrow: "Kainos",
    heading: "Aiškios kainos",
    subheading:
      "Orientacinės kainos. Tiksli kaina priklauso nuo apimties — susisiekite dėl konkretaus pasiūlymo.",
    cards: [
      {
        title: "Pradinis",
        price: "nuo 50 €",
        description: "Trumpas planas — kam tinka ir kas įeina.",
      },
      {
        title: "Standartinis",
        price: "nuo 100 €",
        description: "Populiariausias pasirinkimas — kam tinka ir kas įeina.",
      },
      {
        title: "Išplėstinis",
        price: "nuo 200 €",
        description: "Didesnės apimties planas — kam tinka ir kas įeina.",
      },
    ] as PricingCard[],
  },
  faq: {
    eyebrow: "DUK",
    heading: "Dažniausi klausimai",
    items: [
      {
        question: "Kiek užtrunka paslauga?",
        answer:
          "Atsakymas — paprastas, konkretus, be paslėptų sąlygų. Pakeiskite tikru atsakymu.",
      },
      {
        question: "Ar reikia iš anksto registruotis?",
        answer:
          "Atsakymas — paprastas, konkretus, be paslėptų sąlygų. Pakeiskite tikru atsakymu.",
      },
      {
        question: "Kaip vyksta apmokėjimas?",
        answer:
          "Atsakymas — paprastas, konkretus, be paslėptų sąlygų. Pakeiskite tikru atsakymu.",
      },
      {
        question: "Ar dirbate savaitgaliais?",
        answer:
          "Atsakymas — paprastas, konkretus, be paslėptų sąlygų. Pakeiskite tikru atsakymu.",
      },
    ] as FaqItem[],
  },
  cta: {
    heading: "Norite individualaus pasiūlymo?",
    dimLine: "Atsakome per dieną.",
    subtext: "Susisiekite — aptarsime jūsų situaciją ir pateiksime tikslią kainą.",
    primaryCta: { label: "Susisiekti", href: "/kontaktai" },
  },
};
