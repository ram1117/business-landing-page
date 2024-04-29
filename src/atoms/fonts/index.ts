import { Poppins, Bungee } from "next/font/google";

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const bungee = Bungee({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bungee",
});
