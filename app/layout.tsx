import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0e17",
};

export const metadata: Metadata = {
  title: "Nico Herrera | Software Engineer",
  description:
    "Lead Full-stack Software Engineer specializing in cutting-edge web technologies and innovative solutions.",
  metadataBase: new URL("https://nicoherrera.com"),
  openGraph: {
    title: "Nico Herrera | Software Engineer",
    description:
      "Lead Full-stack Software Engineer specializing in cutting-edge web technologies and innovative solutions.",
    url: "https://nicoherrera.com",
    siteName: "Nico Herrera Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Nico Herrera - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nico Herrera | Software Engineer",
    description:
      "Lead Full-stack Software Engineer specializing in cutting-edge web technologies and innovative solutions.",
    images: ["/og-image.svg"],
    creator: "@nicoherrera",
  },
  icons: {
    icon: [{ url: "/favicon.svg", sizes: "any" }],
    apple: [{ url: "/favicon.svg" }],
  },
  alternates: {
    canonical: "https://nicoherrera.com",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Nico Herrera",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${robotoMono.variable} ${jetBrainsMono.variable}`}>
        <div className="fixed inset-0 bg-grid-lines opacity-5 pointer-events-none" />
        <div className="fixed inset-0 bg-radial-fade pointer-events-none" />
        <div className="scan-line" />
        <div className="relative">{children}</div>
      </body>
    </html>
  );
}
