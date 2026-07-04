import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sentrova.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sentrova \u2014 The AI Agent Gateway & Governance Control Plane",
  description: "Sentrova is the enterprise AI gateway and governance layer: route across models, enforce guardrails, redact PII, log every call, and stay SOC 2 & ISO 27001 ready.",
  applicationName: "Sentrova",
  authors: [{ name: "Sentrova" }],
  creator: "Sentrova",
  publisher: "Sentrova",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Sentrova",
    title: "Sentrova \u2014 The AI Agent Gateway & Governance Control Plane",
    description: "The control plane for enterprise AI agents. Route, govern, secure, and audit every model and agent call \u2014 SOC 2 & ISO 27001 ready.",
    images: ["/og.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentrova \u2014 The AI Agent Gateway & Governance Control Plane",
    description: "The control plane for enterprise AI agents. Route, govern, secure, and audit every model and agent call \u2014 SOC 2 & ISO 27001 ready.",
    images: ["/og.png"],
  },
  icons: { icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23f4c542' d='M12 1 3 5v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V5z'/%3E%3Cpath fill='%230b1220' d='m10.6 14.2-2.2-2.2-1.4 1.4 3.6 3.6 6-6-1.4-1.4z'/%3E%3C/svg%3E" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
