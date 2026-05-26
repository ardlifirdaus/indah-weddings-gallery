export default function CrownLogo({ size = 64, className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 96"
      width={size}
      height={(size * 96) / 80}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Indah Weddings Gallery"
      role="img"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E6C46B" />
          <stop offset="50%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#9C7F2F" />
        </linearGradient>
      </defs>

      {/* Crown */}
      <g fill="url(#goldGrad)">
        <path d="M40 4 L43.5 13 L48 9 L48 17 L52 13 L54 22 L60 17 L62 26 L68 22 L66 32 L72 28 L68 36 L40 36 L12 36 L16 28 L8 32 L14 22 L20 17 L26 13 L28 22 L32 13 L32 17 L36.5 9 Z" />
        <circle cx="40" cy="8" r="3" fill="#E6C46B" stroke="#A8862F" strokeWidth="0.6" />
        <circle cx="14" cy="22" r="2" fill="#E6C46B" />
        <circle cx="66" cy="22" r="2" fill="#E6C46B" />
        <circle cx="26" cy="14" r="1.6" fill="#E6C46B" />
        <circle cx="54" cy="14" r="1.6" fill="#E6C46B" />
      </g>

      {/* Crown base bar */}
      <rect x="10" y="36" width="60" height="3" fill="url(#goldGrad)" />

      {/* Circle frame */}
      <circle cx="40" cy="64" r="22" fill="none" stroke="url(#goldGrad)" strokeWidth="2.2" />
      <circle cx="40" cy="64" r="26" fill="none" stroke="url(#goldGrad)" strokeWidth="0.6" />

      {/* IW monogram */}
      <text
        x="40"
        y="72"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontSize="22"
        fontWeight="700"
        fill="url(#goldGrad)"
        letterSpacing="-1"
      >
        IW
      </text>

      {/* Side flourishes */}
      <path d="M14 64 Q10 60 14 56" fill="none" stroke="url(#goldGrad)" strokeWidth="1" />
      <path d="M14 64 Q10 68 14 72" fill="none" stroke="url(#goldGrad)" strokeWidth="1" />
      <path d="M66 64 Q70 60 66 56" fill="none" stroke="url(#goldGrad)" strokeWidth="1" />
      <path d="M66 64 Q70 68 66 72" fill="none" stroke="url(#goldGrad)" strokeWidth="1" />
    </svg>
  );
}
