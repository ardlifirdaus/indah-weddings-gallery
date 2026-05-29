import { useEffect, useState } from 'react';
import CrownLogo from './CrownLogo';
import './Navbar.css';

const LEFT_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
];

const RIGHT_ITEMS = [
  { id: 'planner', label: 'Portfolio' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

const ALL_ITEMS = [...LEFT_ITEMS, ...RIGHT_ITEMS];

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
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    ALL_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const renderLink = (item) => (
    <li key={item.id}>
      <button
        className={active === item.id ? 'is-active' : ''}
        onClick={() => scrollTo(item.id)}
      >
        {item.label}
      </button>
    </li>
  );

  return (
    <nav className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <ul className="nav-links left">{LEFT_ITEMS.map(renderLink)}</ul>

        <button
          className="nav-logo"
          onClick={() => scrollTo('hero')}
          aria-label="Ke beranda"
        >
          <CrownLogo size={scrolled ? 52 : 64} />
        </button>

        <ul className="nav-links right">{RIGHT_ITEMS.map(renderLink)}</ul>

        <button
          className={`nav-burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      <div
        className={`nav-backdrop ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div className={`nav-drawer ${open ? 'is-open' : ''}`}>
        <ul>{ALL_ITEMS.map(renderLink)}</ul>
      </div>
    </nav>
  );
}
