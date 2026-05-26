import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { servicesOverview } from '../data/packages';
import './Services.css';

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.service-photo-card').forEach((card, i) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          delay: i * 0.08,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 90%' },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="services" ref={ref} className="section tone-soft services">
      <div className="container">
        <span className="section-label">Layanan</span>
        <h2 className="section-title">Semua yang Anda Butuhkan, dalam Satu Atap</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Pilih layanan yang sesuai kebutuhan — atau ambil paket lengkap dengan harga eksklusif.
          Klik kartu untuk melihat detail paket.
        </p>

        <div className="services-grid">
          {servicesOverview.map((svc) => (
            <button
              key={svc.id}
              className="service-photo-card"
              onClick={() => scrollTo(svc.target)}
              aria-label={`Lihat paket ${svc.title}`}
            >
              <img
                className="svc-bg"
                src={svc.image}
                alt=""
                loading="lazy"
                aria-hidden="true"
              />
              <div className="svc-overlay" />
              <div className="svc-content">
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
              </div>
              <span className="svc-arrow" aria-hidden="true">→</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
