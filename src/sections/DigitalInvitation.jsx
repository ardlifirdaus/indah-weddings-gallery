import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './DigitalInvitation.css';

const INVITE_URL = 'https://ardlifirdaus.github.io/wedding-invitation-pages/url/undangan_TAMU003_cucu_mbah_rayem.html';

export default function DigitalInvitation({ onOpenModal }) {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pin = ScrollTrigger.create({
        trigger: ref.current,
        start: 'top top',
        end: '+=600',
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          gsap.set('.undangan-preview', { scale: 1 + self.progress * 0.12 });
          gsap.set('.undangan-overlay-text', { opacity: Math.max(0, 1 - self.progress * 1.6) });
          gsap.set('.undangan-final', { opacity: Math.max(0, self.progress * 1.4 - 0.4) });
        },
      });
      return () => pin.kill();
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="undangan" ref={ref} className="section tone-cream undangan-section">
      <div className="container undangan-inner">
        <div className="undangan-text">
          <div className="undangan-overlay-text">
            <span className="section-label">Bonus Eksklusif</span>
            <h2 className="section-title">🎁 Gratis Undangan Digital</h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Dapatkan undangan digital cantik untuk setiap paket yang Anda pilih.
              Bagikan tanpa batas ke seluruh tamu via WhatsApp.
            </p>
          </div>

          <div className="undangan-final">
            <h3>Termasuk di semua paket</h3>
            <button className="btn btn-lilac" onClick={onOpenModal}>
              Lihat Contoh Undangan ↗
            </button>
          </div>
        </div>

        <div className="undangan-preview-wrap">
          <div className="undangan-preview">
            <iframe
              src={INVITE_URL}
              title="Preview Undangan Digital"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
