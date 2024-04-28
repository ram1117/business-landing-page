import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Bubbles from "../components/Bubbles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KRAM Web",
  description: "Landing page for web developement business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Bubbles />
        {children}
      </body>
    </html>
  );
}
