import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Dock from "@/components/Dock";
import GlobalInteractions from "@/components/GlobalInteractions";

const dmSans = DM_Sans({ subsets: ["latin"], display: "swap", variable: "--font-dm-sans" });
const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Architecture, felt — HYLA Architects",
  description: "Architecture that considers people, place and the experience of space. An independent HYLA website concept by Zentura.",
  robots: "noindex,nofollow",
};

export const viewport: Viewport = {
  themeColor: "#171c18",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <body data-initial-tone="dark">
        <a href="#main" className="skip">Skip to content</a>
        <GlobalInteractions />
        <Header />
        <Navigation />
        {children}
        <Footer />
        <Dock />
      </body>
    </html>
  );
}
