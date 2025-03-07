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
  title: "Nico Herrera | Lead Software Engineer",
  description:
    "Lead Full-stack Software Engineer specializing in cutting-edge web technologies and innovative solutions.",
  metadataBase: new URL("https://nicoherrera.com"),
  openGraph: {
    title: "Nico Herrera | Lead Software Engineer",
    description:
      "Lead Full-stack Software Engineer specializing in cutting-edge web technologies and innovative solutions.",
    url: "https://nicoherrera.com",
    siteName: "Nico Herrera Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://nicoherrera.com/preview.png",
        width: 1200,
        height: 630,
        alt: "Nico Herrera - Lead Software Engineer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nico Herrera | Lead Software Engineer",
    description:
      "Lead Full-stack Software Engineer specializing in cutting-edge web technologies and innovative solutions.",
    images: ["https://nicoherrera.com/preview.png"],
    creator: "@nicoherrera",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.png"],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/favicon.png",
      },
    ],
  },
  alternates: {
    canonical: "https://nicoherrera.com",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Nico Herrera",
    startupImage: ["https://nicoherrera.com/preview.png"],
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "og:image": "https://nicoherrera.com/preview.png",
    "og:image:secure_url": "https://nicoherrera.com/preview.png",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt": "Nico Herrera - Lead Software Engineer",
    "og:image:type": "image/png",
    "og:description":
      "Lead Full-stack Software Engineer specializing in cutting-edge web technologies and innovative solutions.",
    "og:url": "https://nicoherrera.com",
    "og:type": "website",
    "og:title": "Nico Herrera | Lead Software Engineer",
    "msapplication-TileImage": "/favicon.png",
    "msapplication-TileColor": "#0a0e17",
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
