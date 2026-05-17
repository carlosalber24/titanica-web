/* TITANICA — App composer */

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "a",
  "lang": "es",
  "redIntensity": "balanced",
  "darkHeader": false,
  "showWhy": true,
  "showCerts": true,
  "showClients": true,
  "showTestimonio": true
}/*EDITMODE-END*/;

function Header({ t, lang, setLang, dark }) {
  return (
    <header className={"site" + (dark ? " dark" : "")}>
      <div className="container header-inner">
        <a href="#" className="logo-link"><Logo size={28}/></a>
        <nav className="nav">
          <a href="#servicios">{t.nav.servicios}</a>
          <a href="#trayectoria">{t.nav.trayectoria}</a>
          <a href="#sedes">{t.nav.sedes}</a>
          <a href="#presupuesto">{t.nav.presupuesto}</a>
          <a href="#" style={{ opacity: .5 }}>{t.nav.portal} →</a>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div className="lang-toggle">
            <button className={lang === "es" ? "on" : ""} onClick={() => setLang("es")}>ES</button>
            <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
          <a className="btn btn-primary" href="#presupuesto" style={{ padding: "10px 16px", fontSize: 13 }}>
            {t.cta.quote}<Icon name="arrow" className="arr"/>
          </a>
        </div>
      </div>
    </header>
  );
}

function App() {
  const [tweaks, setTweak] = useTweaks(DEFAULTS);
  const t = window.I18N[tweaks.lang] || window.I18N.es;

  React.useEffect(() => {
    document.documentElement.setAttribute("data-red-intensity", tweaks.redIntensity);
  }, [tweaks.redIntensity]);

  // Expose helpers for screenshot automation / export
  React.useEffect(() => {
    window.__setHero = (v) => setTweak("heroVariant", v);
    window.__setLang = (v) => setTweak("lang", v);
    // Honor ?hero=a|b|c on first load
    const params = new URLSearchParams(window.location.search);
    const h = params.get("hero");
    if (h && ["a","b","c"].includes(h) && h !== tweaks.heroVariant) {
      setTweak("heroVariant", h);
    }
  }, []);

  const Hero = tweaks.heroVariant === "b" ? HeroB
            : tweaks.heroVariant === "c" ? HeroC
            : HeroA;

  // Bold hero pairs naturally with dark header
  const headerDark = tweaks.darkHeader || tweaks.heroVariant === "b";

  return (
    <>
      <Header t={t} lang={tweaks.lang} setLang={(v) => setTweak("lang", v)} dark={headerDark}/>
      <Hero t={t}/>
      <Services t={t}/>
      <Trayectoria t={t}/>
      {tweaks.showWhy && <PorQue t={t}/>}
      <Sedes t={t}/>
      {tweaks.showCerts && <Certificaciones t={t}/>}
      {tweaks.showClients && <Clientes t={t}/>}
      {tweaks.showTestimonio && <Testimonio t={t}/>}
      <BudgetForm t={t}/>
      <Footer t={t}/>
      <TitanicaTweaks tweaks={tweaks} setTweak={setTweak}/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
