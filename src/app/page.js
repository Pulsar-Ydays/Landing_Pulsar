"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import Context from "./components/Context";
import Objectif from "./components/Objectif";
import { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

import backgroundHero from "../../Public/background_img_hero.jpg";

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("locomotive-scroll").then((LocomotiveScroll) => {
        // Initialise LocomotiveScroll lorsque le module est chargé et que la page est rendue côté client
        if (scrollRef.current) {
          const scroll = new LocomotiveScroll.default({
            el: scrollRef.current,
            smooth: true,
          });

          // Nettoyage de l'instance lors du démontage du composant
          return () => {
            if (scroll) scroll.destroy();
          };
        }
      });
    }
  }, []);

  return (
    <>
      <div
        data-scroll-container
        ref={scrollRef}
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
          <div className="min-h-screen items-center justify-center bg-gradient-to-b from-purple-900 to-purple-100  ">
            <Objectif />
          </div>
        </section>
      </div>
    </>
  );
}
