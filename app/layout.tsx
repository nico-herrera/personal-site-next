import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Nico Herrera | Software Engineer",
  description:
    "Lead Full-stack Software Engineer specializing in cutting-edge web technologies and innovative solutions.",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
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
