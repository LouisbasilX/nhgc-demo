import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/ui/Toast";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "National Health Supply Chain Digital Knowledge & Learning Platform | NPSCMP",
  description:
    "Enterprise-grade Integrated Learning Management System and Digital E-Library for Nigeria's National Health Supply Chain. Built for NPSCMP & GHSC-PSM Nigeria under U.S. Department of State EOI.",
  keywords: [
    "Nigeria Health Supply Chain",
    "NPSCMP",
    "GHSC-PSM",
    "Digital Learning Platform",
    "LMS",
    "E-Library",
    "Cold Chain",
    "Health Logistics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
