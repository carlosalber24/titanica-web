// TITANICA — header, hero variants, services, trajectory, why us
const { useState: _us1, useEffect: _ue1, useMemo: _um1 } = React;

// ─────────────────────────────────────────────────────────────
// Header — sticky, with logo, nav, lang toggle, primary CTA
// ─────────────────────────────────────────────────────────────
function Header({ t, lang, onLang, onNav }) {
  const [scrolled, setScrolled] = _us1(false);
  const [open, setOpen] = _us1(false);
  _ue1(() => {
    const onS = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onS);
    return () => window.removeEventListener("scroll", onS);
  }, []);
  const links = [
    { k: "services", id: "services" },
    { k: "trajectory", id: "trajectory" },
    { k: "locations", id: "locations" },
    { k: "contact", id: "contact" }
  ];
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <a className="header-logo" href="#top">
          <Logo size={30} />
        </a>
        <nav className="header-nav">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>{t.nav[l.k]}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button className={`lang-toggle`} onClick={onLang} title="Idioma / Language">
            <span className={lang === "es" ? "is-on" : ""}>ES</span>
            <span className="lang-sep" />
            <span className={lang === "en" ? "is-on" : ""}>EN</span>
          </button>
          <Btn variant="primary" size="sm" iconAfter="arrow" onClick={() => onNav("contact")}>
            {t.nav.cta}
          </Btn>
          <button className="header-burger" onClick={() => setOpen(!open)} aria-label="Menu">
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>
      {open && (
        <div className="header-mobile">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>{t.nav[l.k]}</a>
          ))}
        </div>
      )}
    </header>
  );
}

// ─────────────────────────────────────────────────────────────
// HERO — 3 variants selectable via Tweaks
// ─────────────────────────────────────────────────────────────

// Variant A: Industrial editorial (dark carbon bg, oversized typography, photo right)
function HeroIndustrial({ t, redIntensity }) {
  return (
    <section className="hero hero-industrial" id="top">
      <div className="hero-grid-bg" />
      <div className="hero-noise" />
      <div className="hero-inner">
        <div className="hero-content">
          <Eyebrow dark>{t.hero.eyebrow}</Eyebrow>
          <h1 className="hero-title">
            <span className="hero-title-l1">{t.hero.title_a}</span>
            <span className="hero-title-l2 t-red">{t.hero.title_b}</span>
            <span className="hero-title-l3">{t.hero.title_c}</span>
          </h1>
          <p className="hero-sub">{t.hero.subtitle}</p>
          <div className="hero-cta-row">
            <Btn variant="primary" size="lg" iconAfter="arrow" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              {t.hero.cta_primary}
            </Btn>
            <Btn variant="ghost-dark" size="lg" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
              {t.hero.cta_secondary}
            </Btn>
          </div>
          <div className="hero-badge">
            <Icon name="badge" size={18} stroke="#D32F2F" />
            <span>{t.hero.badge}</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo-frame">
            <Photo src={STOCK.hero} alt="Equipo técnico TITANICA" treatment="carbon" />
            <div className="hero-photo-tag">
              <span className="dot" />
              <div>
                <div className="hero-tag-l1">SEDE MATURÍN</div>
                <div className="hero-tag-l2">09°44'N · 63°10'W</div>
              </div>
            </div>
          </div>
          <div className="hero-photo-stack">
            <Photo src={STOCK.green} alt="Áreas verdes" treatment="duotone" />
            <Photo src={STOCK.cleaning} alt="Desinfección" treatment="duotone" />
          </div>
        </div>
      </div>
      <div className="hero-stats">
        {[t.hero.stat1, t.hero.stat2, t.hero.stat3, t.hero.stat4].map((s, i) => (
          <div key={i} className="hero-stat">
            <div className="hero-stat-n">{s.n}</div>
            <div className="hero-stat-l">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Variant B: Bold red — red protagonist, full-bleed angular composition
function HeroBold({ t }) {
  return (
    <section className="hero hero-bold" id="top">
      <div className="hero-red-wash" />
      <div className="hero-diagonal-cut" />
      <div className="hero-inner hero-bold-inner">
        <div className="hero-content">
          <Eyebrow dark>{t.hero.eyebrow}</Eyebrow>
          <h1 className="hero-title hero-title-bold">
            <span>{t.hero.title_a}</span>
            <span className="hero-title-huge">{t.hero.title_b}.</span>
            <span className="hero-title-tail">{t.hero.title_c}</span>
          </h1>
          <p className="hero-sub hero-sub-light">{t.hero.subtitle}</p>
          <div className="hero-cta-row">
            <Btn variant="white" size="lg" iconAfter="arrow" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              {t.hero.cta_primary}
            </Btn>
            <Btn variant="ghost-on-red" size="lg" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
              {t.hero.cta_secondary}
            </Btn>
          </div>
        </div>
        <div className="hero-bold-mark">
          <LogoMark size={420} color="#FFFFFF" dark="rgba(255,255,255,0.5)" style={{ opacity: 0.14 }} />
        </div>
      </div>
      <div className="hero-stats hero-stats-bold">
        {[t.hero.stat1, t.hero.stat2, t.hero.stat3, t.hero.stat4].map((s, i) => (
          <div key={i} className="hero-stat">
            <div className="hero-stat-n">{s.n}</div>
            <div className="hero-stat-l">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Variant C: Premium corporate — white/airy, full photo, restrained red
function HeroPremium({ t }) {
  return (
    <section className="hero hero-premium" id="top">
      <div className="hero-inner hero-premium-inner">
        <div className="hero-content">
          <Eyebrow>{t.hero.eyebrow}</Eyebrow>
          <h1 className="hero-title hero-title-premium">
            {t.hero.title_a} <span className="t-red">{t.hero.title_b}</span> {t.hero.title_c}
          </h1>
          <p className="hero-sub">{t.hero.subtitle}</p>
          <div className="hero-cta-row">
            <Btn variant="primary" size="lg" iconAfter="arrow" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              {t.hero.cta_primary}
            </Btn>
            <Btn variant="outline" size="lg" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
              {t.hero.cta_secondary}
            </Btn>
          </div>
          <div className="hero-stats-inline">
            {[t.hero.stat1, t.hero.stat2, t.hero.stat3, t.hero.stat4].map((s, i) => (
              <div key={i} className="hero-stat-inline">
                <div className="hero-stat-n">{s.n}</div>
                <div className="hero-stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-premium-visual">
          <Photo src={STOCK.heroFactory} alt="Operación industrial" />
          <div className="hero-premium-card">
            <div className="hero-premium-card-row">
              <Icon name="badge" size={20} stroke="#D32F2F" />
              <div>
                <div className="hpc-t">{t.hero.badge}</div>
                <div className="hpc-s">RACDA · INSAI · IVSS · Banavih</div>
              </div>
            </div>
          </div>
          <div className="hero-premium-card hero-premium-card-2">
            <div className="hero-premium-card-row">
              <Icon name="map" size={20} stroke="#D32F2F" />
              <div>
                <div className="hpc-t">4 sedes operativas</div>
                <div className="hpc-s">Maturín · Punta de Mata · Barcelona · Pto. Ordaz</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Hero({ t, variant, redIntensity }) {
  if (variant === "bold") return <HeroBold t={t} />;
  if (variant === "premium") return <HeroPremium t={t} />;
  return <HeroIndustrial t={t} redIntensity={redIntensity} />;
}

// ─────────────────────────────────────────────────────────────
// Services — 4 cards with icon, title, desc, bullets, hover state
// ─────────────────────────────────────────────────────────────
function Services({ t }) {
  const [hover, setHover] = _us1(null);
  return (
    <section className="section section-services" id="services">
      <div className="container">
        <SectionHead eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} accentWords={2} />
        <div className="services-grid">
          {t.services.items.map((s, i) => (
            <article key={i} className={`service-card ${hover === i ? "is-hover" : ""}`}
                     onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
              <div className="service-card-head">
                <div className="service-icon">
                  <Icon name={SERVICE_ICON[s.tag] || "wrench"} size={28} stroke="#D32F2F" />
                </div>
                <div className="service-tag">{s.tag}</div>
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-bullets">
                {s.bullets.map((b, j) => (
                  <li key={j}><Icon name="check" size={14} stroke="#D32F2F" /><span>{b}</span></li>
                ))}
              </ul>
              <div className="service-foot">
                <span>{t.services.detail}</span>
                <Icon name="arrow" size={16} />
              </div>
              <div className="service-num">0{i + 1}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Trajectory — historia + timeline horizontal
// ─────────────────────────────────────────────────────────────
function Trajectory({ t }) {
  return (
    <section className="section section-trajectory" id="trajectory">
      <div className="container">
        <div className="trajectory-top">
          <div className="trajectory-text">
            <Eyebrow>{t.trajectory.eyebrow}</Eyebrow>
            <h2 className="section-title">{t.trajectory.title}</h2>
            <p className="trajectory-lede">{t.trajectory.lede}</p>
            <p className="trajectory-p">{t.trajectory.p1}</p>
            <p className="trajectory-p">{t.trajectory.p2}</p>
          </div>
          <div className="trajectory-visual">
            <Photo src={STOCK.team} alt="Equipo TITANICA" />
            <div className="trajectory-badge">
              <div className="tb-n">16+</div>
              <div className="tb-l">años<br />operando</div>
            </div>
          </div>
        </div>
        <div className="timeline">
          <div className="timeline-line" />
          {t.trajectory.milestones.map((m, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-year">{m.y}</div>
              <div className="timeline-title">{m.t}</div>
              <div className="timeline-desc">{m.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Why Us — 6 reasons grid
// ─────────────────────────────────────────────────────────────
function WhyUs({ t }) {
  const icons = ["shield", "badge", "file", "map", "scale", "headset"];
  return (
    <section className="section section-whyus">
      <div className="whyus-bg-pattern" />
      <div className="container">
        <SectionHead dark eyebrow={t.whyus.eyebrow} title={t.whyus.title} accentWords={3} />
        <div className="whyus-grid">
          {t.whyus.items.map((it, i) => (
            <div key={i} className="whyus-card">
              <div className="whyus-icon">
                <Icon name={icons[i]} size={24} stroke="#D32F2F" />
              </div>
              <div className="whyus-num">0{i + 1}</div>
              <h4 className="whyus-title">{it.t}</h4>
              <p className="whyus-desc">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Header, Hero, HeroIndustrial, HeroBold, HeroPremium, Services, Trajectory, WhyUs });
