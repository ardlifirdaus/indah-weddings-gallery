import { useEffect, useState } from 'react';
import './CornerFlowers.css';

export default function CornerFlowers() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let raf = null;
    const compute = () => {
      const h = window.innerHeight;
      const y = window.scrollY;
      // Full opacity while inside hero; fade across the next 30% of viewport.
      const fadeStart = h * 0.55;
      const fadeEnd = h * 0.95;
      let next;
      if (y <= fadeStart) next = 1;
      else if (y >= fadeEnd) next = 0;
      else next = 1 - (y - fadeStart) / (fadeEnd - fadeStart);
      setOpacity(next);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        compute();
        raf = null;
      });
    };
    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', compute);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', compute);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="corner-flowers"
      aria-hidden="true"
      style={{ opacity, pointerEvents: opacity < 0.05 ? 'none' : undefined }}
    >
      <img className="corner tl" src="/assets/floral-tl.png" alt="" />
      <img className="corner tr" src="/assets/floral-tr.png" alt="" />
      <img className="corner bl" src="/assets/floral-bl.png" alt="" />
      <img className="corner br" src="/assets/floral-br.png" alt="" />
    </div>
  );
}
