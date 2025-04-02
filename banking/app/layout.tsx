import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const ibm_pllex_serif = IBM_Plex_Serif({
  variable: "--font-geist-sans",
  display: "swap",
  style: "normal",
  subsets: ["latin"],
  weight: "100"
});

const inter = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MoonFort",
  description: "MonFort is your  endless booking solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibm_pllex_serif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
