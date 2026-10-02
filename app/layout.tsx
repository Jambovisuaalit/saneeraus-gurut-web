import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {default:"Saneeraus Gurut | Remontit Järvenpää, Kerava ja Tuusula",template:"%s | Saneeraus Gurut"},
  description:"Kylpyhuone-, huoneisto- ja keittiöremontit Järvenpään, Keravan ja Tuusulan alueella. Kerro kohteestasi ja pyydä remonttikartoitus.",
  robots: process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true" ? {index:true,follow:true} : {index:false,follow:false},
  icons:{icon:"/favicon.svg"},
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fi"><body>{children}</body></html>}
