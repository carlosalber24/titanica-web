// TITANICA — atomic components: Logo, Icons, Buttons, Photo helpers
const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ─────────────────────────────────────────────────────────────
// Logo — recreated as inline SVG so we can scale & recolor.
// The mark is two angled red pillars forming a stylized "T"
// (skyscraper / industrial building cue).
// ─────────────────────────────────────────────────────────────
function LogoMark({ size = 36, color = "#D32F2F", dark = "#8C1B1B", style }) {
  return (
    <svg width={size} height={size * 0.82} viewBox="0 0 100 82" style={style} aria-hidden="true">
      {/* Crossbar (thin slant) */}
      <polygon points="32,6 70,6 64,14 38,14" fill={color} />
      <polygon points="32,6 38,14 38,18 32,12" fill={dark} />
      {/* Left pillar */}
      <polygon points="38,14 50,14 50,78 38,72" fill={color} />
      <polygon points="38,14 38,72 32,68 32,10" fill={dark} />
      {/* Right pillar */}
      <polygon points="52,14 64,14 64,68 52,72" fill={color} />
      <polygon points="52,14 52,72 46,76 46,14" fill={dark} opacity="0.55" />
    </svg>
  );
}

function Logo({ size = 32, color = "#D32F2F", dark = "#8C1B1B", textColor = "#0F1316", showText = true }) {
  return (
    <div className="logo-lockup">
      <LogoMark size={size} color={color} dark={dark} />
      {showText && (
        <span className="logo-text" style={{ color: textColor, fontSize: size * 0.7 }}>
          TITANICA
        </span>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Icon system — minimal hand-tuned line icons, stroke 1.75
// ─────────────────────────────────────────────────────────────
function Icon({ name, size = 24, stroke = "currentColor", className = "" }) {
  const props = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth: 1.75, strokeLinecap: "round", strokeLinejoin: "round", className };
  const paths = {
    bug: <><path d="M12 8v13" /><path d="M9 3l3 3 3-3" /><path d="M6 12h12" /><ellipse cx="12" cy="14" rx="6" ry="7" /><path d="M6 10 3 8" /><path d="M6 14H3" /><path d="M6 18l-3 2" /><path d="m18 10 3-2" /><path d="M18 14h3" /><path d="m18 18 3 2" /></>,
    leaf: <><path d="M11 20A7 7 0 0 1 4 13C4 7.5 11 3 20 3c0 9-4.5 17-9 17z" /><path d="M4 21c0-6 5-12 16-13" /></>,
    spray: <><path d="M3 6h7v4H3z" /><path d="M10 8h4l4 4v8a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V8z" /><circle cx="14" cy="14" r="0.5" fill={stroke} /><circle cx="14" cy="17" r="0.5" fill={stroke} /><path d="M18 4h-2v2h2zM21 6h-2v2h2zM18 8h-2" /></>,
    wrench: <><path d="M14.7 6.3a4 4 0 0 1 5 5l-9.4 9.4a2 2 0 0 1-3-3l9.4-9.4-2-2z" /><circle cx="6.5" cy="18.5" r="0.8" /></>,
    shield: <><path d="M12 2 4 5v7c0 5 3.5 9 8 10 4.5-1 8-5 8-10V5z" /><path d="m9 12 2 2 4-4" /></>,
    badge: <><circle cx="12" cy="9" r="6" /><path d="m9 13-2 8 5-3 5 3-2-8" /><path d="m9 9 2 2 4-4" /></>,
    file: <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6" /><path d="m9 15 2 2 4-4" /></>,
    map: <><polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21" /><line x1="9" y1="3" x2="9" y2="18" /><line x1="15" y1="6" x2="15" y2="21" /></>,
    scale: <><path d="M12 3v18" /><path d="M3 7h18" /><path d="M7 7v3a4 4 0 0 1-8 0z" transform="translate(0,0)" /><path d="m3 10 4-3 4 3a4 4 0 0 1-8 0z" /><path d="m13 10 4-3 4 3a4 4 0 0 1-8 0z" /><path d="M7 21h10" /></>,
    headset: <><path d="M4 12a8 8 0 1 1 16 0v5a3 3 0 0 1-3 3h-2v-7h5" /><path d="M4 13v4a3 3 0 0 0 3 3h2v-7H4" /></>,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    arrowDown: <><path d="M12 5v14" /><path d="m6 13 6 6 6-6" /></>,
    check: <path d="m5 13 4 4L19 7" />,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
    minus: <path d="M5 12h14" />,
    star: <polygon points="12,2 14.9,8.6 22,9.3 16.5,14 18.2,21 12,17.3 5.8,21 7.5,14 2,9.3 9.1,8.6" />,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L7.9 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z" />,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></>,
    pin: <><path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></>,
    moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />,
    menu: <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>,
    close: <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>,
    play: <polygon points="6,3 21,12 6,21" fill={stroke} stroke="none" />,
    upload: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></>,
    quote: <><path d="M3 7h6v7H4a1 1 0 0 1-1-1z" /><path d="M14 7h6v7h-5a1 1 0 0 1-1-1z" /></>,
    chevronLeft: <polyline points="15,6 9,12 15,18" />,
    chevronRight: <polyline points="9,6 15,12 9,18" />,
    chevronDown: <polyline points="6,9 12,15 18,9" />,
    sparkle: <><path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2M18.4 5.6l-4.2 4.2M9.8 14.2l-4.2 4.2" /></>,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill={stroke} /></>,
    eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>
  };
  return <svg {...props}>{paths[name] || paths.check}</svg>;
}

// ─────────────────────────────────────────────────────────────
// Buttons
// ─────────────────────────────────────────────────────────────
function Btn({ variant = "primary", size = "md", icon, iconAfter, children, onClick, type = "button", href, className = "" }) {
  const cls = `btn btn-${variant} btn-${size} ${className}`;
  const inner = (
    <>
      {icon && <Icon name={icon} size={size === "lg" ? 18 : 16} />}
      <span>{children}</span>
      {iconAfter && <Icon name={iconAfter} size={size === "lg" ? 18 : 16} />}
    </>
  );
  if (href) return <a href={href} className={cls} onClick={onClick}>{inner}</a>;
  return <button type={type} className={cls} onClick={onClick}>{inner}</button>;
}

// ─────────────────────────────────────────────────────────────
// Stock photo helper — Unsplash with reliable fallback
// We layer a subtle red duotone via CSS for brand cohesion.
// ─────────────────────────────────────────────────────────────
const STOCK = {
  hero: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1400&auto=format&fit=crop&q=80",
  heroAlt: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1400&auto=format&fit=crop&q=80",
  heroFactory: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&auto=format&fit=crop&q=80",
  mip: "https://images.unsplash.com/photo-1632935189964-6a8c0ceea03c?w=900&auto=format&fit=crop&q=80",
  green: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&auto=format&fit=crop&q=80",
  cleaning: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&auto=format&fit=crop&q=80",
  repair: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=900&auto=format&fit=crop&q=80",
  team: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1400&auto=format&fit=crop&q=80",
  warehouse: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1400&auto=format&fit=crop&q=80",
  technician: "https://images.unsplash.com/photo-1565891741441-64926e441838?w=900&auto=format&fit=crop&q=80",
  pipe: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1400&auto=format&fit=crop&q=80",
  worker: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&auto=format&fit=crop&q=80",
  // avatars
  av1: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&auto=format&fit=crop&q=80",
  av2: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80",
  av3: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=160&auto=format&fit=crop&q=80"
};

function Photo({ src, alt = "", className = "", style, treatment = "none" }) {
  return (
    <div className={`photo ${treatment !== "none" ? `photo-${treatment}` : ""} ${className}`} style={style}>
      <img src={src} alt={alt} loading="lazy" />
      {treatment === "duotone" && <div className="photo-overlay" />}
      {treatment === "carbon" && <div className="photo-overlay-carbon" />}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Eyebrow / section header pieces
// ─────────────────────────────────────────────────────────────
function Eyebrow({ children, dark }) {
  return (
    <div className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>
      <span className="eyebrow-bar" />
      <span>{children}</span>
    </div>
  );
}

function SectionHead({ eyebrow, title, subtitle, center, dark, accentWords = 0 }) {
  // accentWords: how many trailing words to colorize red
  const renderTitle = () => {
    if (!accentWords) return title;
    const parts = title.split(" ");
    const head = parts.slice(0, parts.length - accentWords).join(" ");
    const tail = parts.slice(parts.length - accentWords).join(" ");
    return (<>{head} <span className="t-red">{tail}</span></>);
  };
  return (
    <div className={`section-head ${center ? "section-head-center" : ""} ${dark ? "section-head-dark" : ""}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2 className="section-title">{renderTitle()}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Decorative — diagonal red stripe accent (echoes the logo bar)
// ─────────────────────────────────────────────────────────────
function DiagonalAccent({ className = "" }) {
  return (
    <svg className={`diag-accent ${className}`} viewBox="0 0 200 40" preserveAspectRatio="none" aria-hidden="true">
      <polygon points="0,40 60,0 200,0 140,40" fill="currentColor" />
    </svg>
  );
}

// Map service tag (MIP, AV, LD, RM) → icon name
const SERVICE_ICON = { MIP: "bug", IPM: "bug", AV: "leaf", LS: "leaf", LD: "spray", CD: "spray", RM: "wrench" };

Object.assign(window, { LogoMark, Logo, Icon, Btn, Photo, Eyebrow, SectionHead, DiagonalAccent, STOCK, SERVICE_ICON });
