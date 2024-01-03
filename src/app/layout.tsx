import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Roboto_Mono, Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  //👇 Add variable to our object
  variable: "--font-opensans",
});

const roboto_mono = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ken Tung - Software Engineer",
  description: "Ken Tung - Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${roboto_mono.variable} scroll-smooth font-sans`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
