import type { Metadata } from "next";
import { Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-primary", 
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-secondary", 
});

export const metadata: Metadata = {
  title: "Yuvabe Education - Empowering Future Leaders",
  description: "Join Yuvabe Education and unlock your potential through transformative learning experiences. Empowering change for a sustainable future.",
  keywords: ["Yuvabe Education", "Sustainability", "Bridge Program", "Youth Empowerment", "Education"],
  authors: [{ name: "Yuvabe Education", url: "https://yuvabe.com" }],
  creator: "Yuvabe Education",
  publisher: "Yuvabe Education",
  icons: {
    icon: "/images/favicon.ico",
    apple: "/favicon.ico", // For Apple devices
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
        className={`${poppins.variable} ${nunitoSans.variable} antialiased`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
