import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import { siteContent } from "@/lib/content";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteContent.couple.displayNames} | ${siteContent.anniversary.label}`,
  description:
    "Invitación a la celebración de Bodas de Oro. Viernes, 16 de octubre de 2026 en Salón Jardín Del Cedro.",
  openGraph: {
    title: `${siteContent.couple.displayNames} - ${siteContent.anniversary.label}`,
    description:
      "Celebremos cincuenta años de amor, fe y familia. Tu presencia nos honraría.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${libreBaskerville.variable} ${sourceSans.variable}`}
    >
      <body>
        <div className="paper-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
