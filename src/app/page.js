"use client";
import Footer from "./components/Footer";
import Image from "next/image";
import Hero from "./components/Hero";
import Context from "./components/Context";
import Objectif from "./components/Objectif";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Chemin correct pour le CSS

import backgroundHero from "./public/background_img_hero.jpg";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const scrollContainer = document.querySelector("[data-scroll-container]");
      if (scrollContainer) {
        const scroll = new LocomotiveScroll({
          el: scrollContainer,
          smooth: true,
        });

        return () => {
          scroll.destroy(); // Nettoyage de l'instance lors du démontage
        };
      }
    }
  }, []);
  // Pas de dépendances pour exécuter uniquement au premier rendu

  return (
    <>
      <div
        data-scroll-container
        className="min-h-screen bg-gradient-to-b from-fuchsia-800 to-purple-900"
      >
        {/* Background Hero */}
        <section data-scroll-section className="relative min-h-screen">
          {/* Image en arrière-plan */}
          <Image
            src={backgroundHero}
            alt="Background"
            fill
            quality={100}
            priority={true}
          />

          {/* Hero Section */}
          <div className="relative z-10 flex items-center justify-center min-h-screen">
            <Hero />
          </div>
        </section>

        {/* Context Section */}
        <section data-scroll-section>
          <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-purple-900 to-fuchsia-800">
            <Context />
          </div>
        </section>

        {/* Objectif Section */}
        <section data-scroll-section>
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 to-purple-100  ">
            <Objectif />
          </div>
          <Footer />
        </section>
      </div>
    </>
  );
}
