import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface ParallaxScrollProps {
  firstSection: React.ReactNode;
  nextSection: React.ReactNode;
  // Optional: custom selectors for the elements that should drop
  dropElementsSelector?: string;
}

export default function ParallaxScroll({
  firstSection,
  nextSection,
  dropElementsSelector = ".parallax-drop-element",
}: ParallaxScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLElement | null>(null);
  const nextRef = useRef<HTMLElement | null>(null);

  // useGSAP(
  //   () => {
  //     if (!firstRef.current || !nextRef.current || !containerRef.current) return;

  //     // Get elements that should "drop" (your side lines)
  //     const dropElements = gsap.utils.toArray(
  //       dropElementsSelector,
  //       containerRef.current
  //     ) as HTMLElement[];
  //     if (dropElements.length === 0) {
  //       console.warn("No elements with class .parallax-drop-element found");
  //     }

  //     // Create a ScrollTrigger that spans the height of the first section
  //     const scrollTrigger = ScrollTrigger.create({
  //       trigger: firstRef.current,
  //       start: "top top",     // when first section top hits viewport top
  //       end: "+=150%",       // end after scrolling 150% of the first section's height
  //       scrub: 1,             // smooth scrubbing (seconds to catch up)
  //       pin: firstRef.current, // pin only the first section to avoid DOM swap errors
  //     });

  //     // 1. Black section moves UP (negative translateY)
  //     // We animate the 'y' property: from 0% to -100% (relative to its own height)
  //     // Because the section is 100vh, -100% moves it exactly one screen up.
  //     const nextTween = gsap.fromTo(
  //       nextRef.current,
  //       { yPercent: 100 },
  //       {
  //         yPercent: 0,
  //         ease: "none",
  //         scrollTrigger: scrollTrigger,
  //       }
  //     );

  //     // 2. Drop elements: translateY from 0 to e.g. 40px
  //     let dropTween: gsap.core.Tween | undefined;
  //     if (dropElements.length) {
  //       dropTween = gsap.fromTo(
  //         dropElements,
  //         { y: 0 },
  //         {
  //           y: 40,            // drop down by 40px – adjust as you like
  //           ease: "none",
  //           scrollTrigger: scrollTrigger,
  //         }
  //       );
  //     }

  //     // Cleanup function for ScrollTrigger (automatically handled by useGSAP)
  //     return () => {
  //       dropTween?.kill();
  //       nextTween.kill();
  //       scrollTrigger.kill(true); // revert pin to avoid DOM swap errors
  //     };
  //   },
  //   { scope: containerRef } // scope limits querySelector to inside containerRef
  // );


  useGSAP(() => {
  if (!containerRef.current || !firstRef.current || !nextRef.current) return;

  const ctx = gsap.context(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

    tl.fromTo(
      nextRef.current,
      { yPercent: 100 },
      { yPercent: 0, ease: "none" },
      0
    );

    const dropElements = gsap.utils.toArray(
      ".parallax-drop-element",
      containerRef.current
    );

    if (dropElements.length) {
      tl.to(dropElements, {
        y: 40,
        ease: "none"
      }, 0);
    }

  }, containerRef);

  return () => ctx.revert();
}, []);


  return (
    <div ref={containerRef} className="relative bg-black text-white">
      
      {/* FIRST SECTION (normal flow) */}
      <section
        ref={firstRef}
        className="relative h-screen w-full bg-black"
      >
        {firstSection}
      </section>

      {/* NEXT SECTION (normal flow too) */}
      <section
        ref={nextRef}
        className="relative h-screen w-full bg-black"
      >
        {nextSection}
      </section>

    </div>
  );
}             