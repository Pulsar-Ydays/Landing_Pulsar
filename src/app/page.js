"use client";

import Image from "next/image";
import Hero from "./components/Hero";
import Context from "./components/Context";
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
        <section data-scroll-section className="relative min-h-screen">
          {/* Image en arrière-plan */}
          <Image
            src={backgroundHero}
            alt="Background"
            fill
            // style={{ objectFit: "cover" }}
            quality={100}
            priority={true}
          />

          <div className="relative z-10 flex items-center justify-center min-h-screen">
            <Hero />
          </div>
        </section>
        <section data-scroll-section>
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-purple-900 to-fuchsia-800">
            <h1 className="text-4xl text-white">Deuxième section</h1>
            {/* <Context /> */}
          </div>
        </section>
        <section data-scroll-section>
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 to-purple-100  ">
            <h1 className="text-4xl text-white">Troisième section</h1>
          </div>
        </section>
      </div>
    </>
  );
}
