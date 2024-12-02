"use client";

import { useState, useEffect, useRef } from "react";
import Career from "@/components/career/career";
import PersonalInfo from "@/components/personal-info/personal-info";
import Portfolio from "@/components/portfolio/portfolio";
import SpotlightBackground from "@/components/ui/spotlight-background";
import CVDownload from "@/components/cvdownload/cvdownload";

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false);
  const mainRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        const scrollPosition = mainRef.current.scrollTop;
        setIsScrolled(scrollPosition > 50);
      }
    };

    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <SpotlightBackground>
        <main
          ref={mainRef}
          className="relative z-10 h-screen w-full overflow-y-auto scrollbar-hide"
        >
          {/* Sticky Header Container */}
          <div className="sticky top-0 z-20">
            <div
              className={`transition-all duration-400 ease-in-out
                ${
                  isScrolled
                    ? "md:scale-90 md:opacity-90 md:-translate-y-4 bg-gradient-to-r from-slate-900 to-slate-950"
                    : "scale-100 opacity-100 translate-y-0"
                }`}
            >
              <PersonalInfo isScrolled={isScrolled} />
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            <div
              className={`transition-all duration-400 ${
                isScrolled ? "mt-0" : "mt-4"
              }`}
            >
              <CVDownload />
              {/* <Contact /> */}
              <Career />
              <Portfolio />
            </div>
          </div>
        </main>
      </SpotlightBackground>
    </>
  );
}
