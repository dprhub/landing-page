import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
  title: "DPR - Sistemas Inteligentes de Eficiencia Empresarial",
  description: "DPR - Redefiniendo los estándares de la eficiencia empresarial. Optimización operativa impulsada por IA y arquitectura Cloud-native para profesionales que exigen excelencia.",
  keywords: ["DPR", "dpr", "sistemas inteligentes", "eficiencia empresarial", "IA", "cloud-native", "optimización operativa"],
  authors: [{ name: "DPR" }],
  creator: "DPR",
  publisher: "DPR",
  applicationName: "DPR",
  openGraph: {
    title: "DPR - Sistemas Inteligentes de Eficiencia Empresarial",
    description: "DPR - Redefiniendo los estándares de la eficiencia empresarial con IA y Cloud-native.",
    siteName: "DPR",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DPR - Sistemas Inteligentes de Eficiencia Empresarial",
    description: "DPR - Redefiniendo los estándares de la eficiencia empresarial.",
    creator: "@dpr_py",
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
    canonical: "https://www.dpr.com.py",
  },
  icons: {
    icon: '/favicon.jpg',
    shortcut: '/favicon.jpg',
    apple: '/favicon.jpg',
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
        <div className="relative flex flex-col min-h-screen bg-black text-white selection:bg-zinc-800 font-sans overflow-hidden">
          {/* Background Gradients */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-900/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-900/30 rounded-full blur-[120px]" />
          </div>

          <Navbar />

          <main className="relative z-10 flex flex-col flex-1 px-6">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
