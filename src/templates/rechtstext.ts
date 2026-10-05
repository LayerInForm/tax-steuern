/**
 * Vorlage für Impressum und Datenschutzerklärung.
 */
import type { Rechtstext } from "../content/typen.ts";
import { block, esc } from "./html.ts";
import type { Seite } from "./layout.ts";

export const rechtstextSeite = (text: Rechtstext): Seite => ({
  titel: text.titel.replace(/\u00AD/g, ""),
  beschreibung: text.beschreibung,
  mainKlasse: "wrap recht",
  inhalt: `
    <h1 class="recht__titel">${esc(text.titel)}</h1>
    <div class="recht__text">
${(text.einleitung ?? []).map(block).join("\n")}
${text.abschnitte
  .map((a) => `      <h2>${esc(a.titel)}</h2>\n${a.bloecke.map(block).join("\n")}`)
  .join("\n\n")}
      <p class="recht__stand">Stand: ${esc(text.stand)}</p>
    </div>`,
});
