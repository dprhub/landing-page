import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DPRHub - DPR Hub | Sistemas Inteligentes de Eficiencia Empresarial",
  description: "DPRHub (DPR Hub) - Redefiniendo los estándares de la eficiencia empresarial. Optimización operativa impulsada por IA y arquitectura Cloud-native para profesionales que exigen excelencia.",
  keywords: ["DPRHub", "dprhub", "DPR Hub", "DPR", "Hub", "sistemas inteligentes", "eficiencia empresarial", "IA", "cloud-native", "optimización operativa"],
  authors: [{ name: "DPRHub" }],
  creator: "DPRHub",
  publisher: "DPRHub",
  applicationName: "DPRHub",
  openGraph: {
    title: "DPRHub - Sistemas Inteligentes de Eficiencia Empresarial",
    description: "DPRHub (DPR Hub) - Redefiniendo los estándares de la eficiencia empresarial con IA y Cloud-native.",
    siteName: "DPRHub",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DPRHub - Sistemas Inteligentes de Eficiencia Empresarial",
    description: "DPRHub - Redefiniendo los estándares de la eficiencia empresarial.",
    creator: "@dprhub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.dprhub.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
