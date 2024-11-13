import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google"; // Import de JetBrains Mono optimisé
import "../styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import des polices locales
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

// Import de la police Google JetBrains Mono
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono", // Définition d'une variable CSS pour JetBrains Mono
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"], // Charger les différentes variantes de poids
  display: "swap", // Amélioration de la performance du rendu
});

export const metadata = {
  title: "Landing Page Pulsar",
  description:
    "Pulsar est votre plateforme dédiée à l'étude des cours des cryptomonnaies. Suivez les tendances du marché, analysez les données en temps réel et restez informé des dernières fluctuations des cryptos. Rejoignez-nous pour mieux comprendre l'univers des monnaies numériques !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetBrainsMono.variable} antialiased`} // Application des variables des polices
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
