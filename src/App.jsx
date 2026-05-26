import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import FloatingWA from './components/FloatingWA';
import InviteModal from './components/InviteModal';
import CornerFlowers from './components/CornerFlowers';

import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import PackagesSection from './sections/PackagesSection';
import DigitalInvitation from './sections/DigitalInvitation';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

import {
  makeupPackages,
  lamaranPackages,
  akadPackages,
  attirePackages,
  preweddingPackages,
  tendaPackages,
  dokumentasiPackages,
  khitanPackages,
} from './data/packages';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState(null);

  const openModal = (pkg = null) => {
    setSelectedPkg(pkg);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    return () => window.removeEventListener('load', refresh);
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />

        <PackagesSection
          id="makeup"
          label="Makeup Artist"
          title="Paket Makeup Profesional"
          subtitle="MUA berpengalaman untuk berbagai momen — dari party reguler sampai akad & resepsi."
          packages={makeupPackages}
          tone="base"
          onInviteClick={openModal}
        />

        <PackagesSection
          id="lamaran"
          label="Engagement"
          title="Paket Lamaran Lengkap"
          subtitle="Backdrop, dekorasi, makeup, dan dokumentasi — semua dalam satu paket."
          packages={lamaranPackages}
          tone="soft"
          onInviteClick={openModal}
        />

        <PackagesSection
          id="akad"
          label="Akad Nikah"
          title="Paket Akad Pilihan"
          subtitle="Sesuaikan dengan kebutuhan akad Anda — dari akad sederhana hingga akad lengkap dengan dekorasi premium."
          packages={akadPackages}
          tone="base"
          onInviteClick={openModal}
        />

        <PackagesSection
          id="attire"
          label="Bride & Family"
          title="Paket Busana Pengantin"
          subtitle="Bride only, sepasang, hingga lengkap dengan keluarga & pager ayu."
          packages={attirePackages}
          tone="soft"
          onInviteClick={openModal}
        />

        <PackagesSection
          id="planner"
          label="Wedding Planner"
          title="Paket Tenda &amp; Resepsi"
          subtitle="7 pilihan paket lengkap mulai dari Jasmine sampai Diamond — tenda, pelaminan, makeup, dokumentasi, hingga hiburan."
          packages={tendaPackages}
          tone="base"
          onInviteClick={openModal}
        />

        <PackagesSection
          id="dokumentasi"
          label="Dokumentasi"
          title="Paket Foto &amp; Video"
          subtitle="Fotografer, videografer, cinematic edit — hasil siap dibagikan dan disimpan seumur hidup."
          packages={dokumentasiPackages}
          tone="soft"
          onInviteClick={openModal}
        />

        <PackagesSection
          id="prewedding"
          label="Prewedding"
          title="Sesi Prewedding Studio"
          subtitle="Konsep adat, klasik, atau casual — siap pilih look dan kostum favorit Anda."
          packages={preweddingPackages}
          tone="soft"
          onInviteClick={openModal}
        />

        <PackagesSection
          id="khitan"
          label="Khitan"
          title="Paket Khitan Keluarga"
          subtitle="Acara khitan yang berkesan dengan dekorasi, makeup, dan dokumentasi profesional."
          packages={khitanPackages}
          tone="base"
          onInviteClick={openModal}
        />

        <DigitalInvitation onOpenModal={() => openModal(null)} />

        <Testimonials />

        <Contact />
      </main>

      <Footer />
      <CornerFlowers />
      <FloatingWA />
      <InviteModal open={modalOpen} onClose={closeModal} pkg={selectedPkg} />
    </>
  );
}

export default App;
