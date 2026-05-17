/* TITANICA — Quote form */

function BudgetForm({ t }) {
  const [services, setServices] = React.useState([]);
  const [freq, setFreq] = React.useState(null);

  const toggleSvc = (s) => setServices(prev =>
    prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
  );
  const progress = Math.min(100,
    20 +
    (services.length ? 25 : 0) +
    (freq != null ? 20 : 0)
  );

  return (
    <section id="presupuesto" className="form-section" data-screen-label="Presupuesto">
      <div className="container">
        <div className="form-grid">
          <div className="form-info">
            <span className="eyebrow">{t.form.eyebrow}</span>
            <h2 style={{ marginTop: 14 }}>{t.form.title}</h2>
            <p style={{ marginTop: 18, maxWidth: 460 }}>{t.form.lead}</p>
            <h5 style={{ color: "#fff", marginTop: 40, fontSize: 13, fontFamily: "var(--f-body)", fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase" }}>{t.form.contact_t}</h5>
            <ul>
              {t.form.contact.map((c, i) => (
                <li key={i}>
                  <span className="ic"><Icon name={i === 0 ? "phone" : i === 1 ? "mail" : "clock"}/></span>
                  <div className="ct">
                    <strong>{c.t}</strong>
                    <span>{c.d}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form className="budget-form" onSubmit={(e) => { e.preventDefault(); alert("Solicitud enviada (mock)"); }}>
            <div className="step-head">
              <span className="title">{t.form.step_t}</span>
              <span className="step">{t.form.step}</span>
            </div>
            <div className="step-bar"><div className="fill" style={{ width: progress + "%" }}/></div>

            <div className="field-row">
              <div className="field">
                <label>{t.form.f_razon} <span className="req">*</span></label>
                <input type="text" placeholder="—" required/>
              </div>
              <div className="field">
                <label>{t.form.f_rif} <span className="req">*</span></label>
                <input type="text" placeholder="J-00000000-0" required/>
              </div>
            </div>

            <div className="field">
              <label>{t.form.f_rif_file} <span className="req">*</span></label>
              <div className="upload">
                <div className="ic"><Icon name="upload"/></div>
                <div className="t">{t.form.f_upload_t}</div>
                <div className="s">{t.form.f_upload_s}</div>
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <label>{t.form.f_name} <span className="req">*</span></label>
                <input type="text" placeholder="—" required/>
              </div>
              <div className="field">
                <label>{t.form.f_phone} <span className="req">*</span></label>
                <input type="tel" placeholder="+58 ..." required/>
              </div>
            </div>

            <div className="field">
              <label>{t.form.f_email} <span className="req">*</span></label>
              <input type="email" placeholder="empresa@dominio.com" required/>
            </div>

            <div className="field">
              <label>{t.form.f_addr} <span className="req">*</span></label>
              <input type="text" placeholder="—" required/>
            </div>

            <div className="field-row">
              <div className="field">
                <label>{t.form.f_sede} <span className="req">*</span></label>
                <select required>
                  <option value="">{t.form.f_sede_opt}</option>
                  {t.sedes.items.map((s, i) => <option key={i} value={s.code}>{s.t}</option>)}
                </select>
              </div>
              <div className="field">
                <label>{t.form.f_type} <span className="req">*</span></label>
                <select required>
                  <option value="">{t.form.f_type_opt}</option>
                  <option>Planta industrial</option>
                  <option>Almacén / Depósito</option>
                  <option>Espacio comercial</option>
                  <option>Oficinas</option>
                  <option>Otra</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label>{t.form.f_services} <span className="req">*</span></label>
              <div className="check-grid">
                {t.form.svc_opts.map((s, i) => (
                  <label className={"check" + (services.includes(s) ? " on" : "")} key={i}
                    onClick={(e) => { e.preventDefault(); toggleSvc(s); }}>
                    <span className="box"></span>{s}
                  </label>
                ))}
              </div>
            </div>

            <div className="field">
              <label>{t.form.f_freq} <span className="req">*</span></label>
              <div className="radio-row">
                {t.form.f_freq_opts.map((f, i) => (
                  <div key={i} className={"radio" + (freq === i ? " on" : "")} onClick={() => setFreq(i)}>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="field">
              <label>{t.form.f_notes}</label>
              <textarea placeholder="—"></textarea>
            </div>

            <div className="form-actions">
              <span className="note">{t.form.note}</span>
              <button className="btn btn-primary" type="submit">
                {t.form.submit}<Icon name="arrow" className="arr"/>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

window.BudgetForm = BudgetForm;
