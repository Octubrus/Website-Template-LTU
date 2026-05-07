export interface TrustPoint {
  icon?: string;
  text: string;
}

export interface ServicePreview {
  title: string;
  description: string;
  icon?: string;
}

export const homePage = {
  seo: {
    title: "Verslo Pavadinimas — pagrindinis puslapis",
    description:
      "Trumpas SEO aprašymas (150–160 simbolių). Įrašykite, ką verslas daro, kam ir mieste. Pakeiskite tikru turiniu prieš publikuojant.",
  },
  hero: {
    eyebrow: "Vilnius",
    headline: "Pagrindinis šūkis, atspindintis pagrindinę naudą klientui",
    subheadline:
      "Vienas–du sakiniai, paaiškinantys, kam ši paslauga skirta ir kokią naudą gauna klientas.",
    primaryCta: { label: "Susisiekti", href: "/kontaktai" },
    phoneLabel: "arba skambinkite",
    imagePlaceholderLabel:
      "Pagrindinė nuotrauka — komanda, patalpos arba paslauga veiksme",
  },
  trustPoints: [
    { icon: "✓", text: "Konkretus naudos punktas Nr. 1" },
    { icon: "✓", text: "Konkretus naudos punktas Nr. 2" },
    { icon: "✓", text: "Konkretus naudos punktas Nr. 3" },
  ] as TrustPoint[],
  servicesPreview: {
    eyebrow: "Paslaugos",
    heading: "Ką siūlome.",
    dimLine: "Aiškiai, sąžiningai.",
    subheading:
      "Trumpas vienos eilutės paaiškinimas — kam ši dalis svarbi klientui.",
    items: [
      {
        title: "Paslauga A",
        description:
          "Trumpas paslaugos aprašymas — kas įeina ir kokį rezultatą gauna klientas.",
      },
      {
        title: "Paslauga B",
        description:
          "Trumpas paslaugos aprašymas — kas įeina ir kokį rezultatą gauna klientas.",
      },
      {
        title: "Paslauga C",
        description:
          "Trumpas paslaugos aprašymas — kas įeina ir kokį rezultatą gauna klientas.",
      },
    ] as ServicePreview[],
  },
  splitContent: {
    heading: "Kodėl renkasi mus",
    body: "Čia aprašoma, kuo verslas patikimas: patirtis, požiūris, ką klientas gali tikėtis. Realūs faktai, jokių netikrų pažadų.",
    imagePlaceholderLabel: "Nuotrauka — savininkas, komanda arba patalpos",
    imageOnRight: true,
  },
  cta: {
    heading: "Pasiruošę pradėti?",
    dimLine: "Pradėkime nuo pokalbio.",
    subtext:
      "Susisiekite — aptarsime jūsų situaciją ir nuspręsime, ar galime padėti.",
    primaryCta: { label: "Susisiekti", href: "/kontaktai" },
  },
};
