/**
 * Startseite (One-Pager): Einstieg, Leistungen, Kontakt.
 * Texte werden in src/content/site.ts gepflegt, nicht hier.
 */
import {
  firma, hero, hinweisMandate, kartenLink, kontakt, leistungen, person,
} from "../content/site.ts";
import { ph } from "../content/typen.ts";
import { esc, inline } from "./html.ts";
import type { Seite } from "./layout.ts";

const heroBereich = (): string => `
    <section class="hero" aria-labelledby="hero-titel">
      <div class="wrap">
        <h1 class="hero__titel" id="hero-titel">
${hero.zeilen.map((z) => `          <span class="hero__zeile"><span>${esc(z)}</span></span>`).join("\n")}
        </h1>

        <div class="hero__unten">
          <p class="hero__person">
            ${esc(`${person.titel} ${person.name}`)}
            <span>${esc(person.beruf)}</span>
          </p>
          <p class="hero__ort">
            ${esc(firma.name)}<br>
            ${esc(`${firma.strasse}, ${firma.plz} ${firma.ort}`)}
          </p>
        </div>
      </div>

      <!-- Großes Kürzel als Linienzeichnung (rein dekorativ) -->
      <div class="hero__marke" aria-hidden="true">
        <svg viewBox="0 0 1000 420" preserveAspectRatio="xMidYMin meet" focusable="false">
          <text x="500" y="405" text-anchor="middle" font-size="560">${esc(firma.kurzname)}</text>
        </svg>
      </div>
    </section>`;

const leistungsBereich = (): string => `
    <section class="leistungen" id="leistungen" aria-labelledby="leistungen-titel">
      <div class="wrap leistungen__raster">
        <div class="leistungen__kopf">
          <h2 class="abschnitt-titel" id="leistungen-titel">${esc(leistungen.titel)}</h2>
          <p>${esc(leistungen.zielgruppen)}</p>
        </div>

        <div class="leistungen__liste">
${leistungen.gruppen
  .map(
    (g) => `          <div class="gruppe">
            <h3 class="gruppe__titel">${esc(g.titel)}</h3>
${g.leistungen
  .map(
    (l) => `            <div class="leistung">
              <h4>${esc(l.name)}</h4>
              <p>${esc(l.beschreibung)}</p>
            </div>`,
  )
  .join("\n")}
          </div>`,
  )
  .join("\n")}
        </div>
      </div>
    </section>`;

const kontaktBereich = (): string => {
  const email = inline([
    { art: "link", href: `mailto:${kontakt.email.adresse}`, text: kontakt.email.adresse },
    kontakt.email.bestaetigt ? "" : [" ", ph("E-Mail noch bestätigen")],
  ]);

  return `
    <section class="kontakt" id="kontakt" aria-labelledby="kontakt-titel">
      <div class="wrap">
${hinweisMandate ? `        <p class="kontakt__hinweis">${esc(hinweisMandate)}</p>\n` : ""}
        <h2 class="abschnitt-titel" id="kontakt-titel">Kontakt</h2>

        <a class="kontakt__tel" href="tel:${kontakt.telefon.e164}">
          <span class="sr-only">Telefon: </span>${esc(kontakt.telefon.anzeige)}
        </a>

        <div class="kontakt__raster">
          <div>
            <h3>E-Mail</h3>
            <p>${email}</p>
          </div>
          <div>
            <h3>Anschrift</h3>
            <address>${esc(firma.strasse)}<br>${esc(`${firma.plz} ${firma.ort}`)}</address>
            <p class="kontakt__karte">${inline({ art: "link", href: kartenLink, text: "Auf OpenStreetMap ansehen", extern: true })}</p>
          </div>
          <div>
            <h3>Erreichbarkeit</h3>
            <p>${inline(kontakt.erreichbarkeit)}</p>
          </div>
          <div>
            <h3>Telefax</h3>
            <p>${inline(kontakt.fax)}</p>
          </div>
        </div>
      </div>
    </section>`;
};

export const startseite = (): Seite => ({
  titel: "",
  beschreibung: `Steuerberatung und Buchhaltung in ${firma.ort}. ${firma.name}, ${person.titel} ${person.name}, ${person.beruf}.`,
  istStartseite: true,
  inhalt: heroBereich() + leistungsBereich() + kontaktBereich(),
});
