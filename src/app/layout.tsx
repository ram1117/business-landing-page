import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/nav/NavBar";
import { poppins, bungee } from "../atoms/fonts";

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
      <body className={`${poppins.variable} ${bungee.variable}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
