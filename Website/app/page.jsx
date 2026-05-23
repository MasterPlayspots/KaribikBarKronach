/* Café Bar Karibik — Landingpage
   Mit echten Fotos und authentischem Ambiente */

const TEL = "tel:+49926151361";
const WA_NUMBER = "4915227658034";
const WA_RESERVE =
  "https://wa.me/" + WA_NUMBER + "?text=" +
  encodeURIComponent("Hallo Café Bar Karibik — ich möchte gern einen Tisch reservieren für:");

// Image URLs from provided photos
const IMAGES = {
  exterior_evening: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/610001_211015_143345OK_galerie1_800px-bufgTDwHRw7iTLMR4f5uspZkYnhBVc.jpg",
  exterior_day: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bildschirmfoto_23-5-2026_13028_www.google.com-xYxmROqQemVvmkF2YSGWLqpbGWeEt2.jpeg",
  interior_seating: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/610001_211015_143345OK_galerie2_800px-PgL2qA6IP4qxBvR0q3PtuUpSyHLHLJ.jpg",
  bar_pirate: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/610001_211015_143345OK_galerie6_800px-2ZQZh9Tk5TSB3JQErIN59O4ZueuIxg.jpg",
  pug: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/610001_211015_143345OK_galerie10_800px-QmyJEmLYy3eXmmRpcNjaLNPzfMoGsH.jpg",
};

export default function Home() {
  return (
    <>
      {/* ---------- Header ---------- */}
      <header className="site-header">
        <div className="wrap">
          <div className="brand">
            <span className="main-title">
              <span className="cafe-bar">Café Bar</span> <b>Karibik</b>
            </span>
            <span className="sub">Ambiente &amp; Cocktails</span>
          </div>
          <nav className="nav">
            <a href="#ambiente">Ambiente</a>
            <a href="#kueche">Küche &amp; Bar</a>
            <a href="#events">Events</a>
            <a href="#galerie">Galerie</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <a className="header-cta" href={TEL}>09261 51361</a>
        </div>
      </header>

      <main>
        {/* ---------- Hero ---------- */}
        <section className="hero">
          <div className="wrap">
            <p className="eyebrow">Café · Bar · Galerie — Kronach</p>
            <h1>Karibik.<br />Mitten in Kronach.</h1>
            <p className="lead">
              Der tropische Innenhof macht aus deinem Feierabend einen kleinen Urlaub.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={WA_RESERVE}>Per WhatsApp reservieren</a>
              <a className="btn btn-light" href="#kueche">Zur Karte</a>
            </div>
            <div className="hero-meta">
              <span>Stadtgraben 15, Kronach</span>
              <span>Mi – So geöffnet</span>
              <span>4,6 bei Google</span>
            </div>
          </div>
        </section>

        {/* ---------- Drei Säulen ---------- */}
        <section>
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Ein Ort, drei Welten</p>
              <h2>Warum es sich anfühlt wie woanders</h2>
              <p>
                Wir verkaufen keine Produkte, wir verkaufen Stimmung — einen kleinen
                Ausstieg aus dem Alltag, freundlich, farbig und entspannt.
              </p>
            </div>
            <div className="pillars">
              <div className="pillar">
                <div className="dot">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M8 6c0-1.5 1.5-3 4-3s4 1.5 4 3c0 4-4 3-4 8M8 18c0 1.5 1.5 3 4 3s4-1.5 4-3" />
                  </svg>
                </div>
                <h3>Die Oase</h3>
                <p>
                  Ein begrünter Innenhof mit Strelitzie, Palmenblättern und Teich.
                  Überdacht und beheizt — fast bei jedem Wetter dein Lieblingsplatz.
                </p>
              </div>
              <div className="pillar">
                <div className="dot">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 22h8M12 11v11M5.5 11h13a1 1 0 0 0 .93-1.37L17 3H7L4.57 9.63A1 1 0 0 0 5.5 11Z" />
                  </svg>
                </div>
                <h3>Genuss mit Haltung</h3>
                <p>
                  Karibisch inspirierte Küche, regional gedacht: Roti, hausgemachte
                  Kuchen, fränkisches Bier vom Fass. Viel Vegetarisches.
                </p>
              </div>
              <div className="pillar">
                <div className="dot">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 12h5M17 12h5M12 2v5M12 17v5M4.93 4.93l3.54 3.54M15.54 15.54l3.54 3.54M4.93 19.07l3.54-3.54M15.54 8.46l3.54-3.54" />
                  </svg>
                </div>
                <h3>Kunst und Live-Musik</h3>
                <p>
                  An den Wänden hängt die Galerie Ambiente, auf der Bühne spielt
                  Live-Musik. Jeder Besuch ist ein bisschen mehr als nur Kaffee.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Ambiente ---------- */}
        <section id="ambiente" className="alt">
          <div className="wrap">
            <div className="split">
              <div className="copy">
                <p className="eyebrow">Das Ambiente</p>
                <h2>Dein Tapetenwechsel um die Ecke</h2>
                <p>
                  Das historische Sandsteingebäude mit weißen Fensterläden bildet 
                  den perfekten Rahmen für karibisches Flair mitten in Franken.
                  Zwischen Kunstwerken, warmer Beleuchtung und gemütlichen Sitzecken 
                  vergisst man schnell die Zeit.
                </p>
                <p>
                  Ob an der Bar mit Blick auf die Rum-Auswahl, im gemütlichen 
                  Gastraum mit der wechselnden Kunstausstellung oder draußen 
                  vor der historischen Fassade — hier darf man bleiben.
                </p>
                <div className="tags">
                  <span className="tag">Gemütliche Atmosphäre</span>
                  <span className="tag">Kunstgalerie</span>
                  <span className="tag">Historisches Gebäude</span>
                  <span className="tag">Kinderfreundlich</span>
                </div>
              </div>
              <div className="shot">
                <img
                  src={IMAGES.interior_seating}
                  alt="Gemütlicher Gastraum mit Kunstwerken, Muschel-Kronleuchter und warmer Beleuchtung"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Bar Section ---------- */}
        <section>
          <div className="wrap">
            <div className="split" style={{ gridTemplateColumns: '1fr 1.05fr' }}>
              <div className="shot">
                <img
                  src={IMAGES.bar_pirate}
                  alt="Die Bar mit Karibik-Karte, Rum-Flaschen und dem freundlichen Piraten"
                />
              </div>
              <div className="copy">
                <p className="eyebrow">Die Bar</p>
                <h2>Caribbean Vibes seit 2004</h2>
                <p>
                  Unser Pirat begrüßt dich an der Bar mit einer Auswahl an 
                  karibischen Rums, tropischen Cocktails und regionalen Weinen.
                  Von Tobago Rum Punch bis zum selbstgemachten Eiskaffee — 
                  hier wird mit Liebe gemixt.
                </p>
                <p>
                  Die karibische Karte zeigt unsere Inspiration: Jamaika, 
                  Trinidad, Tobago und all die Inseln, deren Geschmäcker 
                  du hier in Kronach erleben kannst.
                </p>
                <div className="tags">
                  <span className="tag">Karibische Rums</span>
                  <span className="tag">Tropical Cocktails</span>
                  <span className="tag">Regionale Weine</span>
                  <span className="tag">Alkoholfreie Cocktails</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Küche ---------- */}
        <section id="kueche" className="alt">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Küche und Bar</p>
              <h2>Karibisch inspiriert, fränkisch geerdet</h2>
              <p>
                Karibik-Lebensgefühl trifft bewussten Genuss: regionale Bio-Partner,
                viel Vegetarisches, Hafermilch auf Wunsch.
              </p>
            </div>
            <div className="cards">
              <div className="card">
                <div className="thumb" />
                <div className="body">
                  <h3>Roti</h3>
                  <p>Die Spezialität des Hauses: gefüllte indisch-karibische Teigfladen mit verschiedenen Füllungen.</p>
                </div>
              </div>
              <div className="card">
                <div className="thumb c2" />
                <div className="body">
                  <h3>Burger</h3>
                  <p>Tobago Boy mit 100% Weiderind, dazu Fish Burger und vegetarische Varianten.</p>
                </div>
              </div>
              <div className="card">
                <div className="thumb c3" />
                <div className="body">
                  <h3>Tropical Cocktails</h3>
                  <p>Original Tobago Rum Punch, Piña Colada, Mai Tai und acht alkoholfreie Varianten.</p>
                </div>
              </div>
              <div className="card">
                <div className="thumb c4" />
                <div className="body">
                  <h3>Café und Kuchen</h3>
                  <p>Hausgemachte Kuchen und Torten aus Urdinkelmehl, Hot Roti Pistacchio.</p>
                </div>
              </div>
            </div>
            <p className="menu-note">
              Die ganze Karte: Roti, Burger, Toast, Salate und Karibik-Specials —
              dazu Bier vom Fass, regionale Weine und erfrischende Cocktails.
            </p>
          </div>
        </section>

        {/* ---------- Am Tisch bestellen ---------- */}
        <section>
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Scan und Order</p>
              <h2>Am Tisch bestellen, ohne Warten</h2>
              <p>
                An jedem Tisch klebt ein QR-Code. Scannen, Speisen und Getränke
                wählen, absenden — die Bestellung geht direkt an unser Team.
              </p>
            </div>
            <a className="btn btn-ghost" href="/tisch/1">Beispiel ansehen — Tisch 1</a>
          </div>
        </section>

        {/* ---------- Events ---------- */}
        <section id="events" className="green-band">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow" style={{ color: "var(--gold-light)" }}>Live in der Karibik</p>
              <h2>Was bei uns los ist</h2>
              <p>
                Open-Air-Bühne im Garten, Musikerstammtisch, Themenabende — Events
                machen aus dem Café einen Treffpunkt.
              </p>
            </div>
            <div className="events">
              <div className="event">
                <div className="date">Di · 17.06.</div>
                <div className="what">
                  <h3>Musikerstammtisch</h3>
                  <p>Offene Session — Hobby- und Profimusiker musizieren spontan.</p>
                </div>
                <div className="time">19:30–22:30</div>
              </div>
              <div className="event">
                <div className="date">27.06.–18.07.</div>
                <div className="what">
                  <h3>Kunst im Sommergarten</h3>
                  <p>Bilder von Martin Ludwig im Innenhof — bei trockenem Wetter.</p>
                </div>
                <div className="time">täglich ab 18:00</div>
              </div>
              <div className="event">
                <div className="date">Fr · 18.07.</div>
                <div className="what">
                  <h3>TELEEMA — live</h3>
                  <p>Singer-Songwriter-Band auf der großen Open-Air-Bühne.</p>
                </div>
                <div className="time">ab 20:00</div>
              </div>
            </div>
            <p style={{ marginTop: "28px", color: "#CFE0D4", fontSize: ".95rem" }}>
              Tische für Events bitte per WhatsApp oder telefonisch reservieren: 09261 51361.
            </p>
          </div>
        </section>

        {/* ---------- Galerie Ambiente ---------- */}
        <section id="galerie" className="alt">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Galerie Ambiente</p>
              <h2>Die Kunst im Café Bar Karibik</h2>
              <p>
                An den Wänden hängt die Kunst von Martin Ludwig — und sie ist käuflich.
                Ein Café, das nebenbei eine lebende Galerie ist.
              </p>
            </div>
            <div className="split">
              <div className="copy">
                <h2 style={{ fontSize: "1.6rem" }}>Ansehen, kaufen, selber malen</h2>
                <p>
                  Originale und Digitaldrucke direkt vor Ort. Wenn dich ein Bild
                  nicht mehr loslässt, darf es mit nach Hause.
                </p>
                <p>
                  Donnerstags ist Maltag: Malkurse für Kinder und Erwachsene, kein
                  Talent nötig — Material ist dabei. Dazu kreative Malreisen mit
                  Martin Ludwig.
                </p>
                <div className="tags">
                  <span className="tag">Bilder käuflich</span>
                  <span className="tag">Malkurse donnerstags</span>
                  <span className="tag">Malreisen</span>
                </div>
              </div>
              <div className="shot">
                <img
                  src="https://www.galerie-ambiente.de/images/martinneu_sbp.jpg"
                  alt="Martin Ludwig, Künstler der Galerie Ambiente"
                />
              </div>
            </div>
            <div className="gallery">
              <div className="shot">
                <img
                  src="https://www.galerie-ambiente.de/images/pictures/April_Wuestenoase.jpg"
                  alt="Werk von Martin Ludwig — Wüstenoase"
                />
              </div>
              <div className="shot">
                <img
                  src="https://www.galerie-ambiente.de/images/pictures/Juli_die_Insel.jpg"
                  alt="Werk von Martin Ludwig — Die Insel"
                />
              </div>
              <div className="shot">
                <img
                  src="https://www.galerie-ambiente.de/images/pictures/Dezember_Paradies.jpg"
                  alt="Werk von Martin Ludwig — Paradies"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Unser Maskottchen ---------- */}
        <section>
          <div className="wrap">
            <div className="split" style={{ gridTemplateColumns: '1fr 1.05fr' }}>
              <div className="shot">
                <img
                  src={IMAGES.pug}
                  alt="Unser Mops macht es sich auf dem Sofa gemütlich"
                />
              </div>
              <div className="copy">
                <p className="eyebrow">Zum Wohlfühlen</p>
                <h2>Hier darf man bleiben</h2>
                <p>
                  Wie unser Hausmops weißt auch du: manchmal ist der beste Plan, 
                  einfach zu bleiben. Mit einem Cocktail in der Hand, guter Musik 
                  im Ohr und der entspannten Karibik-Atmosphäre um dich herum.
                </p>
                <p>
                  Ob für einen schnellen Kaffee, einen langen Abend mit Freunden 
                  oder einfach nur zum Durchatmen — bei uns bist du willkommen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- CTA-Band ---------- */}
        <section className="cta-band">
          <div className="wrap">
            <h2>Komm rein — und für ein paar Stunden bist du woanders.</h2>
            <a className="btn btn-light" href={WA_RESERVE}>Per WhatsApp reservieren</a>
          </div>
        </section>

        {/* ---------- Bewertungen ---------- */}
        <section className="reviews">
          <div className="wrap">
            <div className="stars">★★★★★</div>
            <p className="rating-line">4,6 von 5 bei Google</p>
            <p className="rating-sub">aus 288 Rezensionen — und einem zweiten 4,6 bei Restaurant Guru</p>
            <div className="praise">
              <span>{'"wie Urlaub"'}</span>
              <span>der Garten</span>
              <span>die Cocktails</span>
              <span>die Atmosphäre</span>
              <span>die Kunst</span>
              <span>das Personal</span>
            </div>
          </div>
        </section>

        {/* ---------- Gebäude Impression ---------- */}
        <section className="full-image-section">
          <img 
            src={IMAGES.exterior_day}
            alt="Das historische Sandsteingebäude am Stadtgraben mit der einladenden Fassade"
          />
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="site-footer" id="kontakt">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="brand-f">
                Café Bar <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Karibik</span>
              </div>
              <p style={{ fontSize: '.75rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '12px' }}>
                Ambiente &amp; Cocktails
              </p>
              <p>Die karibische Oase mitten in Kronach — Cocktails, Küche, Live-Musik und die Galerie Ambiente.</p>
              <p style={{ marginTop: "16px" }}>
                Stadtgraben 15<br />
                96317 Kronach
              </p>
              <p style={{ marginTop: "12px" }}>
                <a href={TEL}>09261 51361</a> · <a href={WA_RESERVE}>WhatsApp 0152 27658034</a><br />
                <a href="mailto:info@galerie-ambiente.de">info@galerie-ambiente.de</a>
              </p>
            </div>
            <div>
              <h3>Öffnungszeiten</h3>
              <table className="hours">
                <tbody>
                  <tr><td>Mittwoch</td><td>19–22 Uhr</td></tr>
                  <tr><td>Donnerstag</td><td>19–22 Uhr</td></tr>
                  <tr><td>Freitag</td><td>17–24 Uhr</td></tr>
                  <tr><td>Samstag</td><td>14–24 Uhr</td></tr>
                  <tr><td>Sonntag</td><td>14–22 Uhr</td></tr>
                  <tr><td>Mo + Di</td><td>Ruhetag</td></tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3>Gut zu wissen</h3>
              <ul>
                <li>Kostenlose Parkplätze</li>
                <li>Barrierefreier Zugang</li>
                <li>WLAN und Kartenzahlung</li>
                <li>Kinderfreundlich</li>
                <li>Reservierung telefonisch</li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Café Bar Karibik · Galerie Ambiente · Martin Ludwig</span>
            <span>
              <a href="#">Impressum</a> · <a href="#">Datenschutz</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
