import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Siderbar from "../components/Sidebar";
import Footer from "@/components/Footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "sharmalab",
  description: "Purdue University's Department of Chemistry and Biochemistry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Siderbar />
        <div className="sm:ml-64">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
