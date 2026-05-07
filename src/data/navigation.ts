export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: "Pradžia", href: "/" },
  { label: "Paslaugos ir kainos", href: "/paslaugos" },
  { label: "Kontaktai", href: "/kontaktai" },
];
