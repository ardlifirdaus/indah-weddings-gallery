import { useEffect } from 'react';
import gsap from 'gsap';
import './Hero.css';

const FEATURES = [
  { icon: 'ring', title: 'Personalized Planning', desc: 'Konsultasi paket sesuai gaya pernikahan Anda.' },
  { icon: 'flower', title: 'Beautiful Design', desc: 'Dekorasi pelaminan & rangkaian bunga elegan.' },
  { icon: 'heart', title: 'Memorable Experiences', desc: 'Tim kami membuat hari Anda terasa istimewa.' },
  { icon: 'medal', title: 'Professional Team', desc: 'MUA, fotografer & koordinator berpengalaman.' },
];

const FeatureIcon = ({ name }) => {
  const stroke = 'var(--gold-deep)';
  const props = { width: 32, height: 32, viewBox: '0 0 32 32', fill: 'none', stroke, strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'ring':
      return (<svg {...props}><circle cx="16" cy="20" r="8" /><path d="M11 12 L13 6 H19 L21 12" /><circle cx="16" cy="6" r="1.4" fill={stroke} /></svg>);
    case 'flower':
      return (<svg {...props}><circle cx="16" cy="16" r="3" /><path d="M16 13 C16 7 12 6 12 10 C12 12 14 13 16 13 Z" /><path d="M16 13 C16 7 20 6 20 10 C20 12 18 13 16 13 Z" /><path d="M16 19 C16 25 12 26 12 22 C12 20 14 19 16 19 Z" /><path d="M16 19 C16 25 20 26 20 22 C20 20 18 19 16 19 Z" /><path d="M13 16 C7 16 6 12 10 12 C12 12 13 14 13 16 Z" /><path d="M19 16 C25 16 26 12 22 12 C20 12 19 14 19 16 Z" /></svg>);
    case 'heart':
      return (<svg {...props}><path d="M16 26 C16 26 5 19 5 12 C5 8 8 6 11 6 C13 6 15 7 16 9 C17 7 19 6 21 6 C24 6 27 8 27 12 C27 19 16 26 16 26 Z" /></svg>);
    case 'medal':
      return (<svg {...props}><circle cx="16" cy="19" r="7" /><path d="M11 14 L8 4 L12 5 L16 2 L20 5 L24 4 L21 14" /><path d="M14 19 L16 21 L19 17" /></svg>);
    default: return null;
  }
};

const PillOrnament = ({ flip = false }) => (
  <svg width="42" height="14" viewBox="0 0 42 14" fill="none" style={{ transform: flip ? 'scaleX(-1)' : 'none' }} aria-hidden="true">
    <path d="M2 7 H30 M30 7 Q34 3 38 7 Q34 11 30 7 M38 7 L40 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    <circle cx="34" cy="7" r="1.2" fill="currentColor" />
  </svg>
);

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero-script', { y: 30, duration: 1.0, ease: 'expo.out' })
      .from('.hero-pill', { y: 14, duration: 0.6 }, '-=0.5')
      .from('.hero-sub', { y: 14, duration: 0.5 }, '-=0.3')
      .from('.hero-cta', { scale: 0.92, duration: 0.45, ease: 'back.out(1.4)' }, '-=0.2')
      .from('.hero-feature', { y: 14, stagger: 0.08, duration: 0.45 }, '-=0.1');
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-veil" />

      <div className="container hero-inner">
        <h1 className="hero-script">Indah Weddings Gallery</h1>

        <div className="hero-pill">
          <span className="pill-orn"><PillOrnament /></span>
          Your Moment, Our Passion
          <span className="pill-orn"><PillOrnament flip /></span>
        </div>

        <p className="hero-sub">
          We are dedicated to creating unforgettable wedding experiences
          with attention to detail, creativity, and love.
        </p>

        <button className="btn btn-primary hero-cta" onClick={() => scrollTo('services')}>
          Discover Our Services
        </button>

        <div className="hero-features">
          {FEATURES.map((f) => (
            <div key={f.title} className="hero-feature">
              <div className="feat-icon"><FeatureIcon name={f.icon} /></div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
