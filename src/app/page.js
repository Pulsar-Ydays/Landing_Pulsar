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
        className="min-h-screen"
      >

        {/* Background Hero */}
        <section data-scroll-section className="relative min-h-screen">

          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
                className="absolute left-[max(50%,25rem)] bottom-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-border [mask-image:radial-gradient(64rem_64rem_at_bottom,white,transparent)]"
                aria-hidden="true"
            >
              <defs>
                <pattern
                    id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                    width="100"
                    height="100"
                    x="50%"
                    y="-1"
                    patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none"/>
                </pattern>
              </defs>
              <rect
                  width="100%"
                  height="100%"
                  stroke-width="0"
                  fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              />
            </svg>
          </div>

          {/* Hero Section */}
          <div className="relative z-10 flex items-center justify-center min-h-screen">
            <Hero/>
          </div>
        </section>

        {/* Context Section */}
        <section data-scroll-section>
          <div
              className="min-h-screen flex flex-col items-center justify-center ">
            <Context/>
          </div>
        </section>

        {/* Objectif Section */}
        <section data-scroll-section>
          <div className="min-h-screen items-center justify-center">
            <Objectif/>
          </div>
        </section>
      </div>
    </>
  );
}
