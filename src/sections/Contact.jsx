import { WA_NUMBER, WA_NUMBER_2 } from '../data/packages';
import './Contact.css';

export default function Contact() {
  const waMain = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo Indah Weddings Gallery, saya ingin info paket.')}`;
  const mapsLink = 'https://maps.app.goo.gl/XJ84YUFtR6vANasJ7';

  return (
    <section id="contact" className="section tone-lilac contact">
      <div className="container">
        <span className="section-label">Kontak</span>
        <h2 className="section-title">Hubungi Kami</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Konsultasi gratis, dengar kebutuhan Anda dulu sebelum bicara harga. Klik tombol di bawah
          untuk chat langsung dengan tim kami.
        </p>

        <div className="contact-grid">
          <div className="contact-left">
            <a className="btn btn-lilac wa-big" href={waMain} target="_blank" rel="noreferrer">
              <span className="wa-emoji">💬</span> Chat WhatsApp Sekarang
            </a>

            <div className="contact-list">
              <div className="contact-item">
                <span className="ci-icon">📞</span>
                <div>
                  <strong>Telepon / WhatsApp</strong>
                  <p>
                    <a href={`tel:+${WA_NUMBER}`}>0812 9238 1707</a>
                    {' · '}
                    <a href={`tel:+${WA_NUMBER_2}`}>0857 7973 4273</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <span className="ci-icon">📍</span>
                <div>
                  <strong>Alamat Studio</strong>
                  <p>
                    Jl. Pagelarang No.8, RW.3, Lubang Buaya,<br />
                    Kec. Cipayung, Jakarta Timur 13810
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <span className="ci-icon">📸</span>
                <div>
                  <strong>Instagram</strong>
                  <p>
                    <a href="https://instagram.com/indahjabs_mua" target="_blank" rel="noreferrer">@indahjabs_mua</a><br />
                    <a href="https://instagram.com/decorindahweddings" target="_blank" rel="noreferrer">@decorindahweddings</a><br />
                    <a href="https://instagram.com/kebayaindahweddings" target="_blank" rel="noreferrer">@kebayaindahweddings</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <span className="ci-icon">👍</span>
                <div>
                  <strong>Facebook</strong>
                  <p>
                    <a href="https://facebook.com/indahijabsmua" target="_blank" rel="noreferrer">
                      facebook.com/indahijabsmua
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <div className="map-wrap">
              <iframe
                src="https://www.google.com/maps?q=Jl.+Pagelarang+No.8,+Lubang+Buaya,+Jakarta+Timur&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                title="Lokasi Indah Weddings Gallery"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a className="map-link" href={mapsLink} target="_blank" rel="noreferrer">
              Buka di Google Maps ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
