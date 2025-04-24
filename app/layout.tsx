import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Club Central Argentino Olímpico",
  description: "Sitio Oficial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${oswald.variable} ${geistSans.variable} font-sans antialiased`}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
