import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { site } from "@/data/site";
import { organizationSchema, localBusinessSchema, websiteSchema } from "@/lib/schema";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Victorian Energy Upgrades & Home Efficiency`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Victorian Energy Upgrades",
    "VEU program Victoria",
    "energy efficiency Victoria",
    "hot water heat pump",
    "reverse cycle heating cooling",
    "water saving showerhead",
    "weather sealing Victoria",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Victorian Energy Upgrades & Home Efficiency`,
    description: site.description,
    images: [{ url: "/images/og-default.svg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Victorian Energy Upgrades & Home Efficiency`,
    description: site.description,
    images: ["/images/og-default.svg"],
  },
  alternates: { canonical: site.url },
  icons: {
    icon: "/icons/favicon.svg",
    apple: "/icons/apple-touch-icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = [organizationSchema(), localBusinessSchema(), websiteSchema()];

  return (
    <html lang="en-AU" className={`${poppins.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
