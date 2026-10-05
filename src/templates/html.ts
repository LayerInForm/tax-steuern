/**
 * Kleine Hilfsfunktionen, um aus den typisierten Inhalten HTML zu erzeugen.
 * Alle Texte werden escaped – Inhalte können also kein HTML einschleusen.
 */
import { istPlatzhalter, type Block, type Inline, type Verweis } from "../content/typen.ts";

/** Alle beim Rendern gefundenen Platzhalter (für die Build-Prüfung). */
const gefunden: string[] = [];

export const platzhalterZuruecksetzen = (): void => {
  gefunden.length = 0;
};
export const gefundenePlatzhalter = (): readonly string[] => [...gefunden];

export const esc = (text: string): string =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const NEUES_FENSTER = '<span class="sr-only"> (öffnet in neuem Fenster)</span>';

/** Wandelt Inline-Inhalt (Text, Links, Platzhalter) in HTML um. */
export function inline(inhalt: Inline): string {
  if (typeof inhalt === "string") return esc(inhalt);
  if (Array.isArray(inhalt)) return (inhalt as readonly Inline[]).map(inline).join("");
  if (istPlatzhalter(inhalt)) {
    gefunden.push(inhalt.hinweis);
    return `<mark class="platzhalter">${esc(inhalt.hinweis)}</mark>`;
  }
  const v = inhalt as Verweis;
  const extern = v.extern ? ' rel="noopener noreferrer" target="_blank"' : "";
  return `<a href="${esc(v.href)}"${extern}>${esc(v.text)}${v.extern ? NEUES_FENSTER : ""}</a>`;
}

const zeilen = (z: readonly Inline[]): string => z.map(inline).join("<br>\n");

/** Wandelt einen Rechtstext-Baustein in HTML um. */
export function block(b: Block): string {
  switch (b.typ) {
    case "absatz":
      return `<p>${inline(b.inhalt)}</p>`;
    case "zeilen":
      return `<p>${zeilen(b.zeilen)}</p>`;
    case "adresse":
      return `<address>${zeilen(b.zeilen)}</address>`;
    case "zwischentitel":
      return `<h3>${esc(b.text)}</h3>`;
    case "liste":
      return `<ul>\n${b.punkte.map((p) => `  <li>${inline(p)}</li>`).join("\n")}\n</ul>`;
  }
}
