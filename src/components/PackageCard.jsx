import { formatRupiah, buildWaLink } from '../data/packages';
import './PackageCard.css';

export default function PackageCard({ pkg, onInviteClick }) {
  const items = pkg.includes ?? pkg.highlights ?? [];

  return (
    <article className={`package-card ${pkg.highlight ? 'is-highlight' : ''}`}>
      {pkg.highlight && <span className="best-pick">★ Best Pick</span>}

      <header className="card-header">
        {pkg.subtitle && <span className="card-subtitle">{pkg.subtitle}</span>}
        <h3 className="card-name">{pkg.name}</h3>
        {pkg.tent && <span className="card-tag">Tenda {pkg.tent}{pkg.entertainment && ' · 🎤 Hiburan'}</span>}
        <div className="card-price">
          {pkg.priceLabel && <small>{pkg.priceLabel}</small>}
          <strong>{formatRupiah(pkg.price)}</strong>
        </div>
      </header>

      <ul className="card-list">
        {items.map((it, i) => (
          <li key={i}><span className="check">✓</span> {it}</li>
        ))}
        <li className="invite-item" onClick={() => onInviteClick?.(pkg)}>
          <span className="check gift">🎁</span>
          <span>
            <strong>Gratis Undangan Digital</strong>
            <small className="invite-sk">*S&amp;K berlaku · klik untuk lihat contoh</small>
          </span>
        </li>
      </ul>

      {pkg.free?.length > 0 && (
        <div className="card-free">
          <span className="free-label">Bonus</span>
          <ul>
            {pkg.free.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </div>
      )}

      {pkg.bonus && <p className="card-note bonus">🌟 {pkg.bonus}</p>}
      {pkg.extra && <p className="card-note">+ {pkg.extra}</p>}
      {pkg.notes && <p className="card-note muted">{pkg.notes}</p>}

      <a className="btn btn-primary card-cta" href={buildWaLink(pkg.name)} target="_blank" rel="noreferrer">
        Pesan Sekarang →
      </a>
    </article>
  );
}
