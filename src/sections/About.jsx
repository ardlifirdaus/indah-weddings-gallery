import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Player } from '@lottiefiles/react-lottie-player';
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
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
      gsap.from('.about-stat', {
        y: 60,
        opacity: 0,
        stagger: 0.18,
        duration: 0.8,
        ease: 'back.out(1.5)',
        scrollTrigger: { trigger: '.about-stats', start: 'top 80%' },
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
    <section id="about" ref={sectionRef} className="section tone-gold about">
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
          <div className="about-lottie">
            <Player
              autoplay
              loop
              src="https://lottie.host/9c4f3a1c-7b71-4d9e-9b8d-ef41a5e08bd2/4lYqWWmZj7.json"
              style={{ height: 220, width: 220 }}
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
