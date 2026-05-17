/* TITANICA — Logo SVG (T-shape with red columns) */
const Logo = ({ size = 28, dark = false }) => (
  <span className="logo">
    <svg viewBox="0 0 56 64" width={size} height={size * 64/56} fill="none">
      {/* Top slanted bar */}
      <path d="M8 8 L48 14 L44 18 L4 12 Z" fill="var(--red)"/>
      <path d="M48 14 L52 18 L48 22 L44 18 Z" fill="var(--red-deep)"/>
      {/* Left column */}
      <path d="M10 14 L22 16 L22 60 L10 60 Z" fill="var(--red)"/>
      <path d="M22 16 L26 18 L26 62 L22 60 Z" fill="var(--red-deep)"/>
      {/* Right column */}
      <path d="M30 17 L42 19 L42 60 L30 60 Z" fill="var(--red)"/>
      <path d="M42 19 L46 21 L46 62 L42 60 Z" fill="var(--red-deep)"/>
    </svg>
    <span className="wordmark">TITANICA</span>
  </span>
);
window.Logo = Logo;
