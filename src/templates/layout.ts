/**
 * Gemeinsame Bausteine aller Seiten: Kopfbereich (<head>), Kopfzeile, Fußzeile.
 */
import { firma, kontakt } from "../content/site.ts";
import { esc } from "./html.ts";

export interface Seite {
  /** Titel im Browser-Tab (ohne Firmennamen). Leer = nur Firmenname. */
  readonly titel: string;
  readonly beschreibung: string;
  /** HTML des Hauptbereichs. */
  readonly inhalt: string;
  /** Zusätzliche Klassen für <main>. */
  readonly mainKlasse?: string;
  /** true = Navigationslinks zeigen auf Abschnitte der Startseite. */
  readonly istStartseite?: boolean;
}

export function head(seite: Seite): string {
  const titel = seite.titel ? `${seite.titel} – ${firma.name}` : `${firma.name} – ${firma.ort}`;
  return `
    <title>${esc(titel)}</title>
    <meta name="description" content="${esc(seite.beschreibung)}">
    <meta name="theme-color" content="#0E1B2C">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="preload" href="/fonts/fraunces.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/fonts/inter-tight.woff2" as="font" type="font/woff2" crossorigin>`;
}

export function kopfzeile(istStartseite = false): string {
  const anker = (id: string): string => (istStartseite ? `#${id}` : `/#${id}`);
  return `
  <a class="skip" href="#inhalt">Zum Inhalt springen</a>

  <header class="wrap kopf">
    <a class="marke" href="/" aria-label="${esc(firma.name)}, zur Startseite">
      <span class="marke__kurz">${esc(firma.kurzname)}</span>
      <span class="marke__lang">${esc(firma.zusatz.replace("Steuerberatungsgesellschaft", "Steuerberatungs\u00ADgesellschaft"))}</span>
    </a>
    <nav class="nav" aria-label="Hauptnavigation">
      <a href="${anker("leistungen")}">Leistungen</a>
      <a href="${anker("kontakt")}">Kontakt</a>
      <a class="nav__tel" href="tel:${kontakt.telefon.e164}">${esc(kontakt.telefon.anzeige)}</a>
    </nav>
  </header>`;
}

export function fusszeile(): string {
  const jahr = new Date().getFullYear();
  return `
  <footer class="fuss">
    <div class="wrap">
      <p>© <span data-jahr>${jahr}</span> ${esc(firma.name)}</p>
      <nav aria-label="Rechtliches">
        <a href="/impressum.html">Impressum</a>
        <a href="/datenschutz.html">Datenschutz</a>
      </nav>
    </div>
  </footer>`;
}

export function body(seite: Seite): string {
  const klasse = seite.mainKlasse ? ` class="${seite.mainKlasse}"` : "";
  return `${kopfzeile(seite.istStartseite)}

  <main id="inhalt"${klasse}>
${seite.inhalt}
  </main>
${fusszeile()}`;
}
