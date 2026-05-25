import { useEffect, useState } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'hero', label: 'Beranda' },
  { id: 'services', label: 'Layanan' },
  { id: 'akad', label: 'Paket' },
  { id: 'undangan', label: 'Undangan Digital' },
  { id: 'contact', label: 'Kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <button className="nav-logo" onClick={() => scrollTo('hero')} aria-label="Ke beranda">
          <img src="/assets/logo_bw.png" alt="Indah Weddings Gallery" className="logo-gold" />
        </button>

        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                className={active === item.id ? 'is-active' : ''}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`nav-burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Buka menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`nav-drawer ${open ? 'is-open' : ''}`}>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                className={active === item.id ? 'is-active' : ''}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
