import type { Metadata } from "next";

import "./globals.css";

const siteUrl = "https://bmi-calculator.example.com";
const title = "BMI Calculator – Calculate Your Body Mass Index";
const description =
  "Calculate your Body Mass Index (BMI) from your height and weight, then see a clear explanation of the general BMI range.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "BMI calculator",
    "body mass index",
    "healthy weight range",
    "height and weight calculator",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "BMI Calculator",
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
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
