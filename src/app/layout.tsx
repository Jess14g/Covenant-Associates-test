import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Covenant Associates — Premium PTFE Products Manufacturer",
    template: "%s | Covenant Associates",
  },
  description:
    "Covenant Associates is a leading manufacturer and supplier of high-quality PTFE (Teflon) products and precision-engineered components for diverse industrial applications. Established 2025.",
  keywords: [
    "PTFE",
    "Teflon",
    "PTFE manufacturer",
    "PTFE products",
    "PTFE supplier",
    "industrial components",
    "gaskets",
    "seals",
    "O-rings",
    "PEEK",
    "Covenant Associates",
  ],
  authors: [{ name: "Covenant Associates" }],
  openGraph: {
    title: "Covenant Associates — Premium PTFE Products Manufacturer",
    description:
      "Leading manufacturer and supplier of high-quality PTFE (Teflon) products for diverse industrial applications.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/logo.png", width: 512, height: 512 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Covenant Associates — Premium PTFE Products",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${merriweather.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
