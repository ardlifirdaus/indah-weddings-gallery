import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PackageCard from '../components/PackageCard';
import './PackagesSection.css';

export default function PackagesSection({
  id,
  label,
  title,
  subtitle,
  packages,
  tone = 'gold',
  onInviteClick,
  children,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(`#${id} .pkg-head > *`, {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: `#${id} .pkg-head`, start: 'top 85%' },
      });

      gsap.utils.toArray(`#${id} .package-card`).forEach((card, i) => {
        gsap.from(card, {
          x: i % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, [id]);

  return (
    <section id={id} ref={ref} className={`section tone-${tone} pkg-section`}>
      <span className={`ornament-corner top-left`} />
      <span className={`ornament-corner bottom-right`} />

      <div className="container">
        <div className="pkg-head">
          <span className="section-label">{label}</span>
          <h2 className="section-title">{title}</h2>
          <div className="section-divider" />
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>

        {children}

        <div className={`packages-grid count-${packages.length}`}>
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} onInviteClick={onInviteClick} />
          ))}
        </div>

        <p className="pkg-footnote">
          🎁 <strong>Gratis Undangan Digital</strong> berlaku untuk setiap paket.
          *Syarat &amp; ketentuan berlaku.
        </p>
      </div>
    </section>
  );
}
