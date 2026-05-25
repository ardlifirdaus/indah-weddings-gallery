import { useEffect } from 'react';
import gsap from 'gsap';
import { WA_NUMBER } from '../data/packages';
import './Hero.css';

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from('.hero-script', { y: 80, opacity: 0, duration: 1.1, ease: 'expo.out' })
      .from('.hero-title span', { y: 60, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'expo.out' }, '-=0.5')
      .from('.hero-subtitle', { y: 30, opacity: 0, duration: 0.7 }, '-=0.4')
      .from('.hero-tagline', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
      .from('.hero-cta', { scale: 0.85, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' }, '-=0.2')
      .from('.hero-scroll', { opacity: 0, y: -10, duration: 0.6 }, '-=0.2');
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-petals" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className={`petal petal-${i}`} />
        ))}
      </div>

      <div className="container hero-inner">
        <div className="hero-monogram">IW</div>
        <span className="hero-script">Indah</span>
        <h1 className="hero-title">
          <span>W</span><span>E</span><span>D</span><span>D</span><span>I</span><span>N</span><span>G</span><span>S</span>
          <span>&nbsp;</span>
          <span>G</span><span>A</span><span>L</span><span>L</span><span>E</span><span>R</span><span>Y</span>
        </h1>
        <p className="hero-subtitle">Wedding Planner &amp; Makeup Artist</p>
        <p className="hero-tagline">Jakarta Timur · Sejak 2018</p>

        <div className="hero-ctas">
          <button
            className="btn btn-primary hero-cta"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Lihat Paket
          </button>
          <a
            className="btn btn-secondary hero-cta"
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo Indah Weddings Gallery, saya ingin konsultasi paket pernikahan.')}`}
            target="_blank"
            rel="noreferrer"
          >
            Hubungi Kami
          </a>
        </div>
      </div>

      <button
        className="hero-scroll"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll ke bawah"
      >
        <span /><span /><span />
      </button>
    </section>
  );
}
