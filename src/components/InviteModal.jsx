import { useEffect } from 'react';
import './InviteModal.css';

const INVITE_URL = 'https://ardlifirdaus.github.io/wedding-invitation-pages/url/undangan_TAMU003_cucu_mbah_rayem.html';

export default function InviteModal({ open, onClose, pkg }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="invite-overlay" onClick={onClose}>
      <div className="invite-modal" onClick={(e) => e.stopPropagation()}>
        <button className="invite-close" onClick={onClose} aria-label="Tutup">×</button>

        <div className="invite-content">
          <div className="invite-text">
            <span className="section-label">Bonus Eksklusif</span>
            <h3>🎁 Gratis Undangan Digital</h3>
            <p className="invite-sub">
              Setiap paket pernikahan dari Indah Weddings Gallery sudah termasuk undangan digital cantik
              yang bisa langsung Anda bagikan ke tamu via WhatsApp.
            </p>
            <ul className="invite-bullets">
              <li>✓ Desain elegan, mobile-friendly</li>
              <li>✓ Foto pasangan + countdown otomatis</li>
              <li>✓ Tautan lokasi, RSVP, & galeri</li>
              <li>✓ Bisa di-share unlimited via link</li>
            </ul>
            {pkg && (
              <p className="invite-pkg">Anda memilih: <strong>{pkg.name}</strong></p>
            )}
            <a
              className="btn btn-primary"
              href={`https://wa.me/6281292381707?text=${encodeURIComponent(
                `Halo Indah Weddings Gallery, saya tertarik dengan paket${pkg ? ` ${pkg.name}` : ''} dan ingin tahu detail undangan digitalnya.`,
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              Dapatkan dengan Paket Apapun →
            </a>
          </div>

          <div className="invite-preview">
            <div className="phone-frame">
              <iframe
                src={INVITE_URL}
                title="Contoh Undangan Digital"
                loading="lazy"
              />
            </div>
            <a className="invite-open-new" href={INVITE_URL} target="_blank" rel="noreferrer">
              Buka di tab baru ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
