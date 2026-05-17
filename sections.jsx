/* TITANICA — Page sections */

const SVC_ICONS = ["bug", "leaf", "spray", "wrench"];
const WHY_ICONS = ["award", "users", "shield", "map"];

const TRAY_IMG = "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1200&q=80&auto=format&fit=crop";

function Services({ t }) {
  return (
    <section id="servicios" data-screen-label="Servicios">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2>{t.services.title}</h2>
          <p className="lead">{t.services.lead}</p>
        </div>
        <div className="services-grid">
          {t.services.items.map((s, i) => (
            <article className="svc-card" key={i}>
              <div className="num">{s.num}</div>
              <div className="ic"><Icon name={SVC_ICONS[i]}/></div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <ul>
                {s.b.map((x, j) => <li key={j}>{x}</li>)}
              </ul>
              <a className="link" href="#">Más detalles<Icon name="arrow"/></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trayectoria({ t }) {
  return (
    <section id="trayectoria" className="op" data-screen-label="Trayectoria">
      <div className="container">
        <div className="tray-grid">
          <div className="copy">
            <span className="eyebrow">{t.tray.eyebrow}</span>
            <h2 style={{ marginTop: 14 }}>{t.tray.title}</h2>
            <p>{t.tray.p1}</p>
            <p>{t.tray.p2}</p>
            <div className="stats">
              <div className="s"><div className="n">{t.tray.stat1.n}</div><div className="l">{t.tray.stat1.l}</div></div>
              <div className="s"><div className="n">{t.tray.stat2.n}</div><div className="l">{t.tray.stat2.l}</div></div>
              <div className="s"><div className="n">{t.tray.stat3.n}</div><div className="l">{t.tray.stat3.l}</div></div>
              <div className="s"><div className="n">{t.tray.stat4.n}</div><div className="l">{t.tray.stat4.l}</div></div>
            </div>
          </div>
          <div className="visual">
            <img src={TRAY_IMG} alt="Personal técnico"/>
            <div className="tag">
              <span>{t.tray.tagsub}</span>
              {t.tray.tag}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PorQue({ t }) {
  return (
    <section className="tight" data-screen-label="Por qué TITANICA">
      <div className="container">
        <div className="why-wrap">
          <div className="why-intro">
            <span className="eyebrow">{t.why.eyebrow}</span>
            <h2>{t.why.title}</h2>
            <p>{t.why.lead}</p>
            <div className="mark">
              <div className="label">{t.why.marklabel}</div>
              <p className="q">{t.why.mark}</p>
              <div className="chips">
                {t.why.chips.map((c, i) => <span className="chip" key={i}>{c}</span>)}
              </div>
            </div>
          </div>
          <div className="why-grid">
            {t.why.items.map((w, i) => (
              <div className="why-cell" key={i}>
                <div className="top">
                  <div className="ic"><Icon name={WHY_ICONS[i]}/></div>
                  <div className="num">0{i+1} / 04</div>
                </div>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
                <span className="accent"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Sedes({ t }) {
  const [active, setActive] = React.useState(0);
  // Geographic positions on stylized map (E. Venezuela)
  const pins = [
    { x: 38, y: 38 },   // Maturín
    { x: 52, y: 30 },   // Punta de Mata
    { x: 24, y: 30 },   // Barcelona
    { x: 64, y: 62 },   // Puerto Ordaz
  ];
  const a = t.sedes.items[active];
  return (
    <section id="sedes" className="op" data-screen-label="Sedes">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.sedes.eyebrow}</span>
          <h2>{t.sedes.title}</h2>
          <p className="lead">{t.sedes.lead}</p>
        </div>
        <div className="sedes-grid">
          <div className="sede-list">
            {t.sedes.items.map((s, i) => (
              <div
                key={i}
                className={"sede-card" + (i === active ? " active" : "")}
                onClick={() => setActive(i)}
              >
                <div className="marker">{s.code}</div>
                <div>
                  <h4>{s.t}</h4>
                  <p className="sub">{s.sub}</p>
                </div>
                <span className="tag">{s.tag}</span>
              </div>
            ))}
          </div>
          <div className="sede-map">
            <svg className="bg" viewBox="0 0 100 80" preserveAspectRatio="xMidYMid slice">
              {/* Subtle grid */}
              <defs>
                <pattern id="grid" width="6" height="6" patternUnits="userSpaceOnUse">
                  <path d="M 6 0 L 0 0 0 6" fill="none" stroke="rgba(255,255,255,.05)" strokeWidth=".2"/>
                </pattern>
                <radialGradient id="glow" cx="50%" cy="40%" r="50%">
                  <stop offset="0%" stopColor="rgba(211,47,47,.18)"/>
                  <stop offset="100%" stopColor="rgba(211,47,47,0)"/>
                </radialGradient>
              </defs>
              <rect width="100" height="80" fill="url(#grid)"/>
              <rect width="100" height="80" fill="url(#glow)"/>
              {/* Stylized coastline / region */}
              <path
                d="M 5 28 Q 18 22, 28 26 Q 38 28, 50 26 Q 62 24, 72 30 Q 80 34, 78 44 Q 76 56, 66 64 Q 50 70, 38 66 Q 22 62, 12 52 Q 4 42, 5 28 Z"
                fill="rgba(255,255,255,.04)"
                stroke="rgba(255,255,255,.18)"
                strokeWidth=".3"
              />
              {/* Connection lines from HQ */}
              {pins.map((p, i) => i === 0 ? null : (
                <line key={i} x1={pins[0].x} y1={pins[0].y} x2={p.x} y2={p.y} stroke="rgba(211,47,47,.3)" strokeWidth=".15" strokeDasharray=".8 .6"/>
              ))}
              {/* Pins */}
              {pins.map((p, i) => (
                <g key={i} onClick={() => setActive(i)} style={{ cursor: "pointer" }}>
                  {i === active && (
                    <circle cx={p.x} cy={p.y} r="3" fill="rgba(211,47,47,.25)">
                      <animate attributeName="r" values="2.5;4;2.5" dur="2s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values=".6;0;.6" dur="2s" repeatCount="indefinite"/>
                    </circle>
                  )}
                  <circle cx={p.x} cy={p.y} r={i === active ? "1.3" : "1"} fill={i === active ? "#fff" : "rgba(255,255,255,.6)"} stroke={i === active ? "#D32F2F" : "rgba(255,255,255,.4)"} strokeWidth=".3"/>
                  <text x={p.x + 2} y={p.y - 1.5} fontSize="2" fill={i === active ? "#fff" : "rgba(255,255,255,.55)"} fontWeight="600" fontFamily="Inter, sans-serif">{t.sedes.items[i].t}</text>
                </g>
              ))}
            </svg>
            <div className="info">
              <div>
                <h4>{a.t}</h4>
                <p className="addr">{a.addr}</p>
              </div>
              <div className="ph">{a.phone}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Certificaciones({ t }) {
  return (
    <section data-screen-label="Certificaciones">
      <div className="container">
        <div className="cert-wrap">
          <div className="cert-intro">
            <span className="eyebrow">{t.certs.eyebrow}</span>
            <h2>{t.certs.title}</h2>
            <p>{t.certs.lead}</p>
            <div className="status">
              <div className="head">
                <span className="dot"></span>
                <span className="label">{t.certs.statuslabel}</span>
                <span className="when">{t.certs.statusdate}</span>
              </div>
              <p className="msg">{t.certs.statusmsg}</p>
              <a className="download" href="#">
                {t.certs.download}<Icon name="arrow"/>
              </a>
            </div>
          </div>
          <div className="cert-grid">
            {t.certs.items.map((c, i) => (
              <div className="cert-cell" key={i}>
                <div className="stamp">
                  <Icon name={i < 2 ? "shield" : i < 4 ? "award" : "doc"}/>
                </div>
                <div>
                  <h4>{c.t}</h4>
                  <p className="desc">{c.d}</p>
                </div>
                <span className="meta">{t.certs.vigente}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Clientes({ t }) {
  const logos = ["SUPRA", "VerdeOasis", "EDOteef", "Proenergía", "LUXENT", "ZUKIVA"];
  return (
    <section className="tight op" data-screen-label="Clientes">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <span className="eyebrow center" style={{ justifyContent: "center" }}>{t.clients.eyebrow}</span>
          <h3 style={{ marginTop: 12, fontSize: 22, color: "var(--carbon-3)", fontWeight: 500, fontFamily: "var(--f-body)" }}>{t.clients.title}</h3>
        </div>
        <div className="client-row">
          {logos.map((l, i) => <div className="client-cell" key={i}>{l}</div>)}
        </div>
      </div>
    </section>
  );
}

function Testimonio({ t }) {
  const avatars = [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop",
  ];
  return (
    <section data-screen-label="Testimonios">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.testimonial.eyebrow}</span>
          <h2>{t.testimonial.title}</h2>
          <p className="lead">{t.testimonial.lead}</p>
        </div>
        <div className="tm-grid">
          {t.testimonial.items.map((tm, i) => (
            <article className={"tm-card" + (i === 1 ? " featured" : "")} key={i}>
              <span className="qmark">"</span>
              <div className="stars">
                {[0,1,2,3,4].map(s => (
                  <svg key={s} viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <p className="quote">{tm.quote}</p>
              <div className="who">
                <div className="av"><img src={avatars[i]} alt={tm.name}/></div>
                <div>
                  <div className="nm">{tm.name}</div>
                  <div className="rl">{tm.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer className="site">
      <div className="container">
        <div className="grid">
          <div className="brand">
            <Logo size={32}/>
            <p style={{ marginTop: 18 }}>{t.footer.desc}</p>
          </div>
          <div>
            <h5>{t.footer.col1_t}</h5>
            <ul>{t.footer.col1.map((x, i) => <li key={i}><a href="#servicios">{x}</a></li>)}</ul>
          </div>
          <div>
            <h5>{t.footer.col2_t}</h5>
            <ul>{t.footer.col2.map((x, i) => <li key={i}><a href="#">{x}</a></li>)}</ul>
          </div>
          <div>
            <h5>{t.footer.col3_t}</h5>
            <ul>{t.footer.col3.map((x, i) => <li key={i}><a href="#">{x}</a></li>)}</ul>
          </div>
        </div>
        <div className="legal">
          <div>{t.footer.rights}</div>
          <div className="right">{t.footer.legal.map((x, i) => <a href="#" key={i}>{x}</a>)}</div>
        </div>
      </div>
    </footer>
  );
}

window.Services = Services;
window.Trayectoria = Trayectoria;
window.PorQue = PorQue;
window.Sedes = Sedes;
window.Certificaciones = Certificaciones;
window.Clientes = Clientes;
window.Testimonio = Testimonio;
window.Footer = Footer;
