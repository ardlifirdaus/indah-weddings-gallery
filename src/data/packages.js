export const formatRupiah = (amount) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  })
    .format(amount)
    .replace('IDR', 'Rp');

export const WA_NUMBER = '6281292381707';
export const WA_NUMBER_2 = '6285779734273';

export const buildWaLink = (packageName) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Halo Indah Weddings Gallery, saya tertarik dengan ${packageName}. Boleh info lebih lanjut?`,
  )}`;

export const makeupPackages = [
  {
    id: 'makeup-reguler',
    name: 'Makeup Reguler Party',
    price: 350000,
    includes: ['Makeup', 'Hijab Do'],
    free: [],
    tone: 'gold',
  },
  {
    id: 'makeup-lamaran',
    name: 'Makeup Lamaran',
    price: 450000,
    includes: ['Makeup', 'Hijab Do'],
    notes: 'By owner charger +Rp 100.000',
    free: [],
    tone: 'gold',
  },
  {
    id: 'makeup-wedding',
    name: 'Makeup Wedding Only',
    subtitle: 'Akad & Resepsi',
    price: 2500000,
    includes: [
      'Makeup Pengantin',
      'Hijab Do Akad & Resepsi',
      'Retouch Free',
      'Henna White',
      'Fake Nails',
    ],
    free: [],
    tone: 'gold',
    highlight: true,
  },
];

export const lamaranPackages = [
  {
    id: 'lamaran-engagement',
    name: 'Paket Engagement',
    subtitle: 'Lamaran Package',
    price: 2900000,
    priceLabel: 'Mulai dari',
    includes: [
      'Backdrop 3–4m (Dekorasi Papan, Backdrop, 2 Kursi Mempelai, Welcome Sign, Inisial Nama)',
      'MUA + Hijab Do (Free Request Look)',
      'Dokumentasi & Foto',
    ],
    notes: 'Artificial Flower',
    free: [],
    tone: 'gold',
    highlight: true,
  },
];

export const akadPackages = [
  {
    id: 'akad-only',
    name: 'Paket Akad Only',
    price: 2500000,
    includes: [
      'Makeup Pengantin',
      'Sepasang Busana Akad Pengantin',
      'Melati Akad (Fresh)',
      'Retouch',
    ],
    free: ['Henna', 'Fake Nails'],
    tone: 'gold',
  },
  {
    id: 'akad-roses',
    name: 'Paket Akad Roses',
    price: 4500000,
    includes: [
      'Dekorasi Backdrop',
      'Kursi Tifani Pengantin',
      'Welcome Sign',
      'Makeup Pengantin',
      'Sepasang Busana Akad',
      'Melati Akad (Fresh)',
      'Retouch',
    ],
    free: ['Henna', 'Fake Nails'],
    tone: 'gold',
    highlight: true,
  },
  {
    id: 'akad-lily',
    name: 'Paket Akad Lily',
    price: 5700000,
    includes: [
      'Dekorasi Backdrop',
      'Set Lesehan Akad',
      'Welcome Sign Pengantin',
      'Kursi Tifani',
      'Makeup Pengantin',
      'Sepasang Busana Akad',
      'Melati Akad (Fresh)',
      'Retouch',
      'Dokumentasi',
    ],
    free: ['Henna', 'Fake Nails'],
    bonus: 'Konsultasi & Koordinasi Acara GRATIS',
    tone: 'gold',
    highlight: true,
  },
];

export const attirePackages = [
  {
    id: 'bride-only',
    name: 'Bride Only',
    price: 4500000,
    includes: [
      'Makeup & Hijab Do Pengantin',
      'Makeup & Busana Pengantin Akad',
      'Makeup & Busana Pengantin Resepsi',
      'Aksesoris (Ready Stock)',
      'Sepasang Melati Nasional',
    ],
    free: ['Softlens (Normal)', 'Henna White', 'Fake Nails'],
    tone: 'lilac',
  },
  {
    id: 'geumala',
    name: 'Geumala',
    price: 6500000,
    includes: [
      'Makeup Pengantin',
      'Busana Sepasang Pengantin Akad',
      'Makeup & Busana Sepasang Resepsi (Ready Stock)',
      'Makeup Busana Ibu CPW & CPP (Ready Stock)',
      'Beskap Bapak CPW & CPP (Ready Stock)',
      'Makeup dan Busana Pager Ayu 2 Orang',
      'Aksesoris (Ready Stock)',
      'Sepasang Melati Nasional',
    ],
    free: ['Henna White', 'Fake Nails', 'Softlens (Normal)'],
    tone: 'lilac',
    highlight: true,
  },
  {
    id: 'silver',
    name: 'Silver',
    price: 7500000,
    includes: [
      'Makeup & Hijab Pengantin Akad & Resepsi',
      'Busana Pengantin Akad',
      'Busana & Makeup Resepsi Sesi 1 CPW & CPP',
      'Busana & Makeup Resepsi Sesi 2 CPW & CPP',
      'Makeup & Busana Ibu CPW & CPP (Ready Stock)',
      'Beskap Bapak CPW & CPP (Ready Stock)',
      '4 Makeup & Busana Pager Ayu',
      'Aksesoris Pengantin dan Mama Pengantin',
    ],
    free: [
      'Sepasang Melati Nasional',
      'Softlens (Normal)',
      'Henna White/Maroon',
      'Fake Nails',
    ],
    tone: 'lilac',
    highlight: true,
  },
];

export const preweddingPackages = [
  {
    id: 'prewedding-iwg',
    name: 'IWG Package',
    subtitle: 'Prewedding',
    price: 1200000,
    includes: [
      'Makeup by MUA',
      'Kostum Adat Formal/Klasik',
      'Hijab Do',
      'Studio',
      'Fotografer',
      'Edit File',
      'File by Google Drive',
    ],
    free: ['Kostum Casual (Kostum Pribadi)', 'Photo Layar Biru'],
    tone: 'gold',
    highlight: true,
  },
];

export const tendaPackages = [
  {
    id: 'jasmine',
    name: 'Jasmine',
    price: 15000000,
    tent: '60m',
    highlights: [
      '1 Pasang Busana & Makeup Akad',
      '1 Pasang Makeup & Busana Resepsi',
      '2 Pasang Makeup Orang Tua',
      'Fotografer + Video WCC',
      'Album Foto + Cetak Frame 30x50cm',
    ],
    free: ['Melati Akad CPW', 'Kalung Melati CPP', 'Henna Art', 'Fake Nails', 'Softlen'],
    entertainment: false,
    tone: 'gold',
  },
  {
    id: 'tenda-roses',
    name: 'Tenda Roses',
    price: 22000000,
    tent: '70m',
    highlights: [
      '1 Pasang Busana & Makeup Akad',
      '2 Pasang Makeup & Resepsi',
      '2 Makeup & Busana Pager Ayu',
      '2 Pasang Busana & Makeup Orang Tua',
      'Fotografer + Video + Album + Cinematic',
    ],
    free: ['Melati Akad CPW', 'Kalung Melati CPP', 'Henna Art', 'Fake Nails', 'Softlen'],
    entertainment: false,
    tone: 'gold',
  },
  {
    id: 'aurora',
    name: 'Aurora',
    price: 24000000,
    tent: '100m',
    highlights: [
      'Makeup & Busana Akad & Resepsi Lengkap',
      'Makeup Ibu & Beskap Bapak',
      '2 Pager Ayu',
      'Aksesoris Pengantin',
      'Dokumentasi Lengkap + Album Kanvas 20 Page',
      'Video Cinematic 4–5 Menit',
    ],
    free: ['Softlens', 'Henna Softlens', 'Fake Nails'],
    entertainment: false,
    tone: 'gold',
    highlight: true,
  },
  {
    id: 'tenda-c',
    name: 'Tenda C',
    price: 28000000,
    tent: '100m',
    highlights: [
      'Makeup Lengkap Akad + 2x Resepsi',
      'Makeup Orang Tua + Besan',
      '4 Kostum Pager Ayu',
      'Dekorasi Fresh Flower',
      'Orgen Tunggal',
      'Foto + Video + Album',
    ],
    free: ['Henna White', 'Softlens', 'Hand Bouquet'],
    entertainment: true,
    tone: 'gold',
  },
  {
    id: 'asoka',
    name: 'Asoka (Aula)',
    price: 30000000,
    tent: 'Aula',
    highlights: [
      'Makeup & Busana Lengkap Termasuk Keluarga',
      '4 Pager Ayu',
      'Pelaminan 8M',
      'Mini Garden + Standing Flower',
      'Dokumentasi Full + Video Cinematic',
      'Orgen Tunggal + 2 Singer + 1 Player',
    ],
    free: ['Softlens', 'Henna Softlens', 'Fake Nails', 'Riasan Adat Hijab'],
    entertainment: true,
    tone: 'gold',
  },
  {
    id: 'bugenville',
    name: 'Bugenville',
    price: 33000000,
    tent: '120m',
    highlights: [
      'Makeup & Busana Lengkap + Resepsi 2',
      'Beskap Bapak CPW & CPP',
      'Doa Pengaraya',
      'Tenda 120m + Pelaminan 8M',
      'Photobooth + Lantai Akrilik',
      'MC Akad GRATIS',
    ],
    free: ['Softlens', 'Henna Softlens', 'Fake Nails'],
    entertainment: true,
    tone: 'gold',
  },
  {
    id: 'diamond',
    name: 'Diamond',
    price: 35000000,
    tent: '150m',
    highlights: [
      'Makeup & Busana Lengkap + Keluarga 2 Org',
      '4 Pager Ayu',
      'Tenda 150m + Pelaminan 8M + Dekor Pagar Ayu',
      'Dekor Panggung Hiburan',
      'Lantai Akrilik',
      'Prewedding GRATIS',
      'MC Akad GRATIS',
    ],
    free: ['Softlens', 'Henna Softlens', 'Fake Nails', 'Riasan Adat Hijab'],
    entertainment: true,
    tone: 'lilac',
    highlight: true,
  },
];

export const dokumentasiPackages = [
  {
    id: 'photo-only',
    name: 'Photo Only',
    price: 1000000,
    includes: ['Fotografer', 'Editing File', '6 Jam Kerja'],
    free: [],
    tone: 'lilac',
  },
  {
    id: 'akad-advands',
    name: 'Akad / Advands',
    price: 1800000,
    includes: [
      'Fotografer',
      'Video Grafer',
      'Editing File',
      'Video Cinematic Sosmed',
      'Video Cinematic 4–5 Menit',
      'Flashdisk',
      'Cetak Frame 30cm x 40cm',
    ],
    free: [],
    tone: 'lilac',
    highlight: true,
  },
  {
    id: 'resepsi-doc',
    name: 'Paket Resepsi',
    price: 3000000,
    includes: [
      'Fotografer',
      'Video Grafer',
      'Editing File',
      'Video Cinematic Sosmed',
      'Video Cinematic 4–5 Menit',
      'Flashdisk',
      'Album Kanvas 20 Page',
      'Cetak Frame 30cm x 40cm',
      '10 Jam Kerja',
    ],
    free: [],
    tone: 'lilac',
    highlight: true,
  },
];

export const khitanPackages = [
  {
    id: 'khitan',
    name: 'Khitan Package',
    price: 13000000,
    includes: [
      'Tenda 50m + Pelaminan Mini + Kursi Futura 50',
      'Meja Prasmanan + 6 Pemanas + Sendok Garpu 100',
      'Blower + Kotak Uang + Meja Penerima Tamu',
      'Makeup Kostum Pengantin Sunat',
      'Makeup Orang Tua + Sepasang Busana',
      '2 Makeup Pager Ayu + Busana',
      'Fotografer + Edit File + Album Kanvas + Cetak Frame',
    ],
    free: ['Fake Nails', 'Softlens For Mama'],
    extra: 'Kalung Melati Pengantin',
    tone: 'gold',
    highlight: true,
  },
];

export const servicesOverview = [
  { id: 'makeup', icon: '💄', title: 'Makeup', desc: 'Reguler, lamaran, akad & resepsi', target: 'makeup' },
  { id: 'lamaran', icon: '💍', title: 'Lamaran', desc: 'Paket engagement lengkap', target: 'lamaran' },
  { id: 'akad', icon: '🕌', title: 'Akad Nikah', desc: 'Paket akad dengan dekorasi', target: 'akad' },
  { id: 'attire', icon: '👗', title: 'Busana & Bride', desc: 'Bride only, Geumala, Silver', target: 'attire' },
  { id: 'planner', icon: '🎪', title: 'Wedding Planner', desc: 'Tenda + dekorasi + EO', target: 'planner' },
  { id: 'doc', icon: '📸', title: 'Dokumentasi', desc: 'Photo, video & cinematic', target: 'dokumentasi' },
];

export const testimonials = [
  { name: 'Siti & Rahmat', package: 'Paket Diamond', stars: 5, quote: 'Dari dekorasi sampai makeup semuanya sempurna. Tim Indah profesional banget dan responsif.' },
  { name: 'Dewi & Fajar', package: 'Paket Aurora', stars: 5, quote: 'Hari pernikahan kami terasa seperti mimpi. Pelaminan, dokumentasi, semua sesuai ekspektasi.' },
  { name: 'Rina & Bagas', package: 'Paket Akad Roses', stars: 5, quote: 'Dekorasi backdrop cantik banget, MUA-nya sabar dan hasil makeup tahan lama.' },
  { name: 'Putri & Arif', package: 'Geumala', stars: 5, quote: 'Pelayanan friendly, harga sesuai dengan kualitas. Recommended buat calon pengantin Jaktim!' },
  { name: 'Lia & Hendro', package: 'IWG Prewedding', stars: 5, quote: 'Sesi prewedding seru, MUA dan fotografer punya selera yang sama dengan kami.' },
  { name: 'Maya & Doni', package: 'Paket Resepsi (Dokumentasi)', stars: 5, quote: 'Video cinematic-nya keren banget, sampai sekarang masih sering ditonton ulang.' },
];
