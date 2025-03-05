import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-future",
});

const jetBrainsMono = localFont({
  src: "../public/fonts/JetBrainsMono-Regular.woff2",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Nico Herrera | Software Engineer",
  description:
    "Full-stack software engineer specializing in cutting-edge web technologies and innovative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} font-future bg-space-dark text-white antialiased`}
      >
        <div className="fixed inset-0 bg-cyber-grid opacity-10 pointer-events-none" />
        <div className="relative">{children}</div>
      </body>
    </html>
  );
}
