import type { Metadata } from "next";

import "./globals.css";

const siteUrl = "https://bmi-calculator.example.com";
const title = "BMI Hesaplama | Uzman Diyetisyen Tuğba Gülay";
const description =
  "Uzman Diyetisyen Tuğba Gülay ile boy ve kilo bilgilerinizi kullanarak Vücut Kitle İndeksinizi (BMI) hızlıca hesaplayın.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "BMI hesaplama",
    "vücut kitle indeksi",
    "Uzman Diyetisyen Tuğba Gülay",
    "boy kilo hesaplama",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: "Uzman Diyetisyen Tuğba Gülay",
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
