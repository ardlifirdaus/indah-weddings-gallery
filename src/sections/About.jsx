import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

const STATS = [
  { value: 500, suffix: '+', label: 'Pasangan dipercaya' },
  { value: 8, suffix: '+ tahun', label: 'Pengalaman melayani' },
  { value: 4.9, suffix: ' / 5', label: 'Rating kepuasan', decimal: true },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-left > *', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
      gsap.from('.about-arch', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.about-arch', start: 'top 80%' },
      });
      gsap.from('.about-stat', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: 'back.out(1.4)',
        scrollTrigger: { trigger: '.about-stats', start: 'top 85%' },
      });

      STATS.forEach((stat, i) => {
        const el = document.querySelector(`.stat-${i}`);
        if (!el) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.value,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
          onUpdate: () => {
            el.textContent = stat.decimal ? obj.val.toFixed(1) : Math.round(obj.val);
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section tone-base about">
      <img className="about-floral tl" src="/assets/floral-tl.png" alt="" aria-hidden="true" />
      <img className="about-floral tr" src="/assets/floral-tr.png" alt="" aria-hidden="true" />
      <img className="about-floral bl" src="/assets/floral-bl.png" alt="" aria-hidden="true" />
      <img className="about-floral br" src="/assets/floral-br.png" alt="" aria-hidden="true" />

      <div className="container about-grid">
        <div className="about-left">
          <span className="section-label">Tentang Kami</span>
          <h2 className="section-title">Sentuhan Tulus untuk Hari Istimewa Anda</h2>
          <p>
            <strong>Indah Weddings Gallery</strong> adalah wedding planner sekaligus makeup artist yang
            berbasis di Jakarta Timur. Sejak 2018 kami menemani ratusan pasangan menyusun
            hari pernikahan mereka — dari makeup pengantin yang tahan seharian, dekorasi pelaminan
            yang elegan, sampai dokumentasi yang abadi.
          </p>
          <p>
            Kami percaya setiap pasangan berhak atas pengalaman yang tenang, terkoordinasi, dan
            estetis. Itulah mengapa setiap paket sudah inklusif: dekorasi, busana, makeup keluarga,
            sampai undangan digital — semuanya dalam satu sentuhan.
          </p>
        </div>

        <div className="about-right">
          <div className="about-arch">
            <img
              src="/assets/about-pelaminan.png"
              alt="Dekorasi pelaminan Indah Weddings Gallery"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="container about-stats">
        {STATS.map((stat, i) => (
          <div key={i} className="about-stat">
            <div className="stat-number">
              <span className={`stat-${i}`}>0</span>
              <small>{stat.suffix}</small>
            </div>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
