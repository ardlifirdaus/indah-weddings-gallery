import { testimonials } from '../data/packages';
import './Testimonials.css';

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials];
  return (
    <section id="testimonials" className="section tone-gold testimonials">
      <div className="container">
        <span className="section-label">Testimoni</span>
        <h2 className="section-title">Kata Mereka Tentang Indah Weddings</h2>
        <div className="section-divider" />
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {loop.map((t, i) => (
            <article className="testi-card" key={`${t.name}-${i}`}>
              <div className="testi-stars">{'⭐'.repeat(t.stars)}</div>
              <p className="testi-quote">“{t.quote}”</p>
              <div className="testi-meta">
                <strong>{t.name}</strong>
                <small>{t.package}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
