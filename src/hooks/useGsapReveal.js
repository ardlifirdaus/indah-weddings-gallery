import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useGsapReveal = (options = {}) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const anim = gsap.fromTo(
      el,
      { y: options.y ?? 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: options.duration ?? 0.9,
        ease: options.ease ?? 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: options.start ?? 'top 85%',
          toggleActions: 'play none none reverse',
        },
      },
    );
    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);
  return ref;
};
