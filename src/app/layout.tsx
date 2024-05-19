import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/nav/NavBar";
import { poppins, bungee } from "../atoms/fonts";
import ToTopButton from "../components/ToTopButton";

export const metadata: Metadata = {
  title: "KRAM Web",
  description: "Landing page for saas/business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${bungee.variable}`}>
        <NavBar />
        <ToTopButton></ToTopButton>
        {children}
      </body>
    </html>
  );
}
