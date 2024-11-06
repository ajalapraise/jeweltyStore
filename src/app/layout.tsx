import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-playfair",
});
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Verosa Jewelry Store",
  description: "A jewelry Store",

  metadataBase: new URL("https://www.verosajewelrystore.com"),
  themeColor: "#ffffff",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  keywords: "jewelry, diamonds, Verosa, rings, necklaces, bracelets, earrings",
  // authors: "Verosa Jewelry Store",

  openGraph: {
    type: "website",
    url: "",
    title: "Verosa Jewelry Store",
    description:
      "Experience the excellence of Verosa's craftsmanship and high-quality jewelry collections.",
    siteName: "Verosa Jewelry Store",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Verosa Jewelry Store - Exquisite Jewelry",
      },
    ],
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.className} antialiased overflow-x-hidden  w-screen h-full p-0 m-0`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
