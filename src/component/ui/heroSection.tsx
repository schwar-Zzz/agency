import GradientShader from "./GradientShader";
import LayeredWebGLGlassText from "./WebGLGlassText";
import {useRef, type RefObject} from "react";
import {useParallaxEffect} from "../../hooks/paralexFunction";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useParallaxEffect(
    containerRef as RefObject<HTMLDivElement>,
    titleRef as RefObject<HTMLHeadingElement>,
  );

  return (
    <>
      <section
        id="hero"
        className="relative h-screen w-full overflow-hidden bg-black text-white"
        ref={containerRef}
      >
        {/* Background */}
        <div className="absolute inset-0 z-0 h-full w-full bg-black">
          <GradientShader />
        </div>

        {/* Vignette / contrast layer */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.18)_48%,rgba(0,0,0,0.72)_100%)]" />

        {/* Bottom text */}
        <LayeredWebGLGlassText
          text="MONO"
          align="center"
          verticalAlign="bottom"
          fontSize={750}
          planeWidth={15}
          planeHeight={6}
          textOffsetY={210}
          meshOffsetY={-0.85}
          revealDistance={1000}
          revealDuration={1.5}
        />

        {/* Header */}
        <header className="absolute left-0 top-0 z-30 flex w-full items-center justify-between px-5 py-5 md:px-8 md:py-7">
          <a
            href="#hero"
            className="text-sm font-semibold uppercase tracking-[0.26em] text-white/80 w-screen text-center md:text-left md:w-auto "
          >
            Mono
          </a>

        </header>

        {/* Side meta labels */}
        <div className="pointer-events-none absolute left-5 top-[36%] z-20 hidden flex-col items-start gap-2 text-left md:flex md:left-8">
          <p className=" text-[11px] font-medium uppercase tracking-[0.22em] text-white/40">
            Degital production and design studio
          </p>
          <p className=" text-[12px] font-medium text-white/70">
            Algeria, DZ
          </p>
        </div>

        <div className="pointer-events-none absolute right-5 top-[36%] z-20 hidden flex-col items-end gap-2 text-right md:flex md:right-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/40">
            Scroll to explore
          </p>

        </div>

        {/* Main center copy */}
        <div className="relative z-20 flex h-full w-full flex-col items-center justify-center px-6 pb-[18vh] text-center">
          <div className="mb-6 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.24em] text-white/45 backdrop-blur-md md:hidden">
            Global product design studio
          </div>

          <h1 
            className="max-w-[920px] text-balance text-[42px] font-semibold leading-[0.95] tracking-[-0.06em] text-white/90 md:text-[76px] lg:text-[96px]"
          >
            Design for those who want to become a better version of themselves.
          </h1>

          <p className="mt-7 max-w-[520px] text-pretty text-sm leading-6 text-white/45 md:text-base">
            We craft digital experiences with sharp UI, immersive motion, and
            product thinking from first idea to final launch.
          </p>
        </div>

        {/* Mobile bottom scroll label */}
        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-3 md:hidden">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/40">
            Scroll to explore
          </p>
          <div className="h-10 w-px overflow-hidden bg-white/10">
            <div className="h-5 w-px animate-[scrollLine_1.8s_ease-in-out_infinite] bg-white/60" />
          </div>
        </div>
      </section>
      <div className="h-[1000px] w-full bg-black" ref={titleRef} />
    </>
  );
};

export default HeroSection;