import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/assets/logo_bw.png" alt="Indah Weddings Gallery" className="logo-gold" />
          <p>
            Wedding Planner &amp; Makeup Artist berbasis di Jakarta Timur.<br />
            Menemani hari istimewa Anda dengan sentuhan tulus.
          </p>
        </div>

        <div className="footer-links">
          <h4>Jelajahi</h4>
          <ul>
            <li><a href="#hero">Beranda</a></li>
            <li><a href="#services">Layanan</a></li>
            <li><a href="#akad">Paket Akad</a></li>
            <li><a href="#planner">Wedding Planner</a></li>
            <li><a href="#undangan">Undangan Digital</a></li>
            <li><a href="#contact">Kontak</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Hubungi</h4>
          <p>📞 0812 9238 1707</p>
          <p>📞 0857 7973 4273</p>
          <p>📍 Jl. Pagelarang No.8, Lubang Buaya, Jakarta Timur</p>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} Indah Weddings Gallery. All rights reserved.</span>
        <span>Made with ♥ for memorable days.</span>
      </div>
    </footer>
  );
}
