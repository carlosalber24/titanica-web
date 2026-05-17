/* TITANICA — Tweaks panel content */

function TitanicaTweaks({ tweaks, setTweak }) {
  const [exporting, setExporting] = React.useState(false);

  const exportPNG = async () => {
    setExporting(true);
    try {
      // Load html-to-image
      if (!window.htmlToImage) {
        await new Promise((res, rej) => {
          const s = document.createElement('script');
          s.src = 'https://unpkg.com/html-to-image@1.11.11/dist/html-to-image.js';
          s.onload = res; s.onerror = rej;
          document.head.appendChild(s);
        });
      }
      // Hide tweak panel during capture
      const panel = document.querySelector('[class*="twk-panel"]');
      const toggle = document.querySelector('[class*="twk-toggle"]');
      const wasPanelDisplay = panel ? panel.style.display : '';
      const wasToggleDisplay = toggle ? toggle.style.display : '';
      if (panel) panel.style.display = 'none';
      if (toggle) toggle.style.display = 'none';
      // Make header static so it doesn't double in the long image
      const header = document.querySelector('header.site');
      const wasPos = header ? header.style.position : '';
      if (header) header.style.position = 'static';

      await new Promise(r => setTimeout(r, 300));

      const dataUrl = await window.htmlToImage.toJpeg(document.body, {
        quality: 0.92,
        backgroundColor: '#ffffff',
        pixelRatio: 1.5,
      });

      // Restore
      if (panel) panel.style.display = wasPanelDisplay;
      if (toggle) toggle.style.display = wasToggleDisplay;
      if (header) header.style.position = wasPos;

      // Trigger download
      const link = document.createElement('a');
      const variantLabel = { a: 'split', b: 'bold', c: 'tech' }[tweaks.heroVariant] || tweaks.heroVariant;
      link.download = `TITANICA-landing-${variantLabel}-${tweaks.lang}.jpg`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.error('Export failed', e);
      alert('Export failed: ' + e.message);
    } finally {
      setExporting(false);
    }
  };

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Variante de Hero"/>
      <TweakRadio
        label="Estilo"
        value={tweaks.heroVariant}
        options={[
          { value: "a", label: "Split" },
          { value: "b", label: "Bold" },
          { value: "c", label: "Tech" },
        ]}
        onChange={(v) => setTweak("heroVariant", v)}
      />

      <TweakSection label="Idioma"/>
      <TweakRadio
        label="Lang"
        value={tweaks.lang}
        options={[
          { value: "es", label: "Español" },
          { value: "en", label: "English" },
        ]}
        onChange={(v) => setTweak("lang", v)}
      />

      <TweakSection label="Intensidad del rojo"/>
      <TweakRadio
        label="Nivel"
        value={tweaks.redIntensity}
        options={[
          { value: "subtle", label: "Sutil" },
          { value: "balanced", label: "Medio" },
          { value: "dominant", label: "Alto" },
        ]}
        onChange={(v) => setTweak("redIntensity", v)}
      />

      <TweakSection label="Header"/>
      <TweakToggle label="Header oscuro" value={tweaks.darkHeader}
        onChange={(v) => setTweak("darkHeader", v)}/>

      <TweakSection label="Secciones"/>
      <TweakToggle label="Por qué TITANICA" value={tweaks.showWhy}
        onChange={(v) => setTweak("showWhy", v)}/>
      <TweakToggle label="Certificaciones" value={tweaks.showCerts}
        onChange={(v) => setTweak("showCerts", v)}/>
      <TweakToggle label="Clientes" value={tweaks.showClients}
        onChange={(v) => setTweak("showClients", v)}/>
      <TweakToggle label="Testimonio" value={tweaks.showTestimonio}
        onChange={(v) => setTweak("showTestimonio", v)}/>

      <TweakSection label="Exportar"/>
      <TweakButton label={exporting ? "Generando…" : "Descargar landing (JPG)"} onClick={exportPNG} disabled={exporting}/>
    </TweaksPanel>
  );
}

window.TitanicaTweaks = TitanicaTweaks;
