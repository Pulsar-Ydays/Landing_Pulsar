import localFont from "next/font/local";
import "../styles/globals.css";

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

export const metadata = {
  title: "Landing Page Pulsar",
  description:
    "Pulsar est votre plateforme dédiée à l'étude des cours des cryptomonnaies. Suivez les tendances du marché, analysez les données en temps réel et restez informé des dernières fluctuations des cryptos. Rejoignez-nous pour mieux comprendre l'univers des monnaies numériques !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
