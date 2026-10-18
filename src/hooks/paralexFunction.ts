import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export function useParallaxEffect(containerRef: React.RefObject<HTMLDivElement>, title: React.RefObject<HTMLElement>) {
     useLayoutEffect(() => {
        if (!containerRef.current || !title.current) return;

        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            });

            tl.to(title.current, { y: -50, ease: "none" }, 0);
        });

        return () => context.revert();
    }, [containerRef, title]);
}