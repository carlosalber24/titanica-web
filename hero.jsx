/* TITANICA — Hero variants */

const HERO_IMG = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1400&q=80&auto=format&fit=crop";
const HERO_IMG_2 = "https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?w=1600&q=80&auto=format&fit=crop";

function HeroA({ t }) {
  return (
    <section className="hero hero-a" data-screen-label="Hero · Editorial split">
      <div className="container">
        <div className="grid">
          <div className="copy">
            <span className="hero-kicker"><span className="dot"></span>{t.hero.kicker}</span>
            <h1>
              {t.hero.h1a_pre}<span className="red">{t.hero.h1a_red}</span>{t.hero.h1a_post}
            </h1>
            <p className="lead">{t.hero.lead}</p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#presupuesto">
                {t.cta.quote}<Icon name="arrow" className="arr"/>
              </a>
              <a className="btn btn-ghost" href="#servicios">{t.cta.explore}</a>
            </div>
            <div className="stats">
              <div className="stat"><div className="n">12+</div><div className="l">{t.hero.stat_years}</div></div>
              <div className="stat"><div className="n">04</div><div className="l">{t.hero.stat_sedes}</div></div>
              <div className="stat"><div className="n">60+</div><div className="l">{t.hero.stat_clients}</div></div>
              <div className="stat"><div className="n">40+</div><div className="l">{t.hero.stat_tech}</div></div>
            </div>
          </div>
          <div className="visual">
            <img src={HERO_IMG} alt="Industrial technician"/>
            <div className="frame-marks">
              <span>{t.hero.meta_doc} TTN-2026-001</span>
              <span>{t.hero.meta_rev} 05.2026</span>
            </div>
            <div className="badge-overlay">
              <div className="ov-card"><Icon name="shield"/>RACDA · INSAI</div>
              <div className="ov-card"><Icon name="check"/>{t.hero.meta_uptime} 98%</div>
              <div className="ov-card"><Icon name="clock"/>24/7</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroB({ t }) {
  return (
    <section className="hero hero-b" data-screen-label="Hero · Bold red full-bleed">
      <div className="live-bar">
        <span className="dot"></span>
        <span className="live">{t.hero.live}</span>
        <span className="sep"></span>
        <span>{t.hero.live_meta}</span>
      </div>
      <div className="container">
        <div className="grid">
          <div className="copy">
            <span className="hero-kicker kicker"><span className="dot"></span>{t.hero.kicker}</span>
            <h1>
              {t.hero.h1b_a}<br/>
              <span className="stroke">{t.hero.h1b_b}</span><br/>
              {t.hero.h1b_c}
            </h1>
            <p className="lead">{t.hero.lead}</p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#presupuesto">
                {t.cta.quote}<Icon name="arrow" className="arr"/>
              </a>
              <a className="btn btn-ghost-light" href="#servicios">{t.cta.explore}</a>
            </div>
          </div>
          <div className="right-stack">
            <div className="kpi-row">
              <div className="kpi"><div className="n">12+</div><div className="l">{t.hero.stat_years}</div></div>
              <div className="kpi"><div className="n">04</div><div className="l">{t.hero.stat_sedes}</div></div>
              <div className="kpi"><div className="n">60+</div><div className="l">{t.hero.stat_clients}</div></div>
            </div>
            <aside className="side">
              <h4>{t.hero.side_title}</h4>
              <ul>
                <li><span className="ic"><Icon name="bug"/></span>{t.hero.pillar1}</li>
                <li><span className="ic"><Icon name="shield"/></span>{t.hero.pillar2}</li>
                <li><span className="ic"><Icon name="doc"/></span>{t.hero.pillar3}</li>
                <li><span className="ic"><Icon name="map"/></span>{t.hero.pillar4}</li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroC({ t }) {
  return (
    <section className="hero hero-c" data-screen-label="Hero · Industrial blueprint">
      <div className="container">
        <div className="top">
          <span className="hero-kicker"><span className="dot"></span>{t.hero.kicker}</span>
          <div className="meta">
            <span className="key">{t.hero.meta_doc}</span>
            <span className="val">TTN-PROP-2026.001</span>
            <span className="key">{t.hero.meta_rev}</span>
            <span className="val">05 · 2026</span>
          </div>
        </div>
        <h1>
          {t.hero.h1c_pre}<br/>
          <span className="accent">{t.hero.h1c_red}.</span>
        </h1>
        <div className="row">
          <div className="copy">
            <p className="lead">{t.hero.lead}</p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#presupuesto">
                {t.cta.quote}<Icon name="arrow" className="arr"/>
              </a>
              <a className="btn btn-ghost" href="#servicios">{t.cta.explore}</a>
            </div>
          </div>
          <div className="cards">
            <div className="mcard"><div className="n">12<span className="pct">+</span></div><div className="l">{t.hero.stat_years}</div></div>
            <div className="mcard"><div className="n">04</div><div className="l">{t.hero.stat_sedes}</div></div>
            <div className="mcard"><div className="n">60<span className="pct">+</span></div><div className="l">{t.hero.stat_clients}</div></div>
            <div className="mcard"><div className="n">98<span className="pct">%</span></div><div className="l">{t.hero.meta_uptime}</div></div>
          </div>
        </div>
        <div className="strip">
          <div className="group">
            <div>
              <div className="label">RACDA</div>
              <div className="val">Vigente</div>
            </div>
            <div>
              <div className="label">INSAI</div>
              <div className="val">Vigente</div>
            </div>
            <div>
              <div className="label">{t.hero.meta_resp}</div>
              <div className="val">&lt; 24h</div>
            </div>
            <div>
              <div className="label">Cobertura</div>
              <div className="val">Oriente · Guayana</div>
            </div>
          </div>
          <a className="btn btn-primary" href="#presupuesto">{t.cta.quote}<Icon name="arrow" className="arr"/></a>
        </div>
      </div>
    </section>
  );
}

window.HeroA = HeroA;
window.HeroB = HeroB;
window.HeroC = HeroC;
