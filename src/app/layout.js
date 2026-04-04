import "../index.css";
import ClarityAnalytics from "../components/ClarityAnalytics";
import LenisProvider from "../components/LenisProvider";
import Script from "next/script";

export const metadata = {
  title: {
    default: "r—vis: Visual Communication for Architecture.",
    template: "%s | r—vis",
  },
  description:
    "Specializing in architectural photography and film, visualization, and graphic design, r—vis is a creative studio focused on creating lasting impressions of built and unbuilt spaces.",
  metadataBase: new URL("https://r-vis.io"),
  keywords: [
    "architecture",
    "photography",
    "film",
    "visualization",
    "graphic design",
    "r—vis",
    "rendering",
    "architectural",
  ],
  authors: [{ name: "r—vis" }],
  robots: "index,follow",
  openGraph: {
    title: "r—vis: Visual Communication for Architecture",
    description:
      "Specializing in architectural photography and film, visualization, and graphic design, r—vis is a creative studio focused on creating lasting impressions of built and unbuilt spaces.",
    url: "https://r-vis.io",
    siteName: "r—vis",
    images: [
      {
        url: "https://r-vis.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "r—vis: Visual Communication for Architecture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "r—vis: Visual Communication for Architecture",
    description:
      "Specializing in architectural photography and film, visualization, and graphic design, r—vis is a creative studio focused on creating lasting impressions of built and unbuilt spaces.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  other: {
    "theme-color": "#092b33",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>{children}</LenisProvider>
        <ClarityAnalytics />
        <Script
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
