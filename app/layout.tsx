import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./design.css";

const manrope = localFont({
  src: "./fonts/Manrope.woff",
  variable: "--font-manrope",
  display: "swap",
  weight: "400 800",
});

const barlow = localFont({
  src: [
    { path: "./fonts/BarlowCondensed-SemiBold.woff", weight: "600" },
    { path: "./fonts/BarlowCondensed-Bold.woff", weight: "700" },
  ],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: {default:"Saneeraus Gurut | Remontit Järvenpää, Kerava ja Tuusula",template:"%s | Saneeraus Gurut"},
  description:"Kylpyhuone-, huoneisto- ja keittiöremontit Järvenpään, Keravan ja Tuusulan alueella. Kerro kohteestasi ja pyydä remonttikartoitus.",
  robots: process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true" ? {index:true,follow:true} : {index:false,follow:false},
  icons:{icon:"/favicon.svg"},
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="fi" className={`${manrope.variable} ${barlow.variable}`}><body>{children}</body></html>;
}
