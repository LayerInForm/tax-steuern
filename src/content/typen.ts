/**
 * Typen für alle Inhalte der Website.
 *
 * Texte werden in den Dateien unter src/content/ gepflegt. Fehlende Angaben
 * werden mit ph("Hinweis") markiert; sie erscheinen auf der Seite als gelber
 * Platzhalter. `npm run build:live` bricht ab, solange noch Platzhalter da sind.
 */

/** Noch fehlende Angabe – wird gelb hervorgehoben. */
export interface Platzhalter {
  readonly art: "platzhalter";
  readonly hinweis: string;
}

/** Ein Link im Fließtext. */
export interface Verweis {
  readonly art: "link";
  readonly href: string;
  readonly text: string;
  /** Externe Links öffnen in einem neuen Fenster. */
  readonly extern?: boolean;
}

/** Inline-Inhalt: einfacher Text, Platzhalter, Link oder eine Folge davon. */
export type Inline = string | Platzhalter | Verweis | readonly Inline[];

/** Ein Wert, der entweder bekannt ist oder noch als Platzhalter fehlt. */
export type Angabe = string | Platzhalter;

/** Bausteine für Rechtstexte (Impressum, Datenschutz). */
export type Block =
  | { readonly typ: "absatz"; readonly inhalt: Inline }
  | { readonly typ: "zeilen"; readonly zeilen: readonly Inline[] }
  | { readonly typ: "adresse"; readonly zeilen: readonly Inline[] }
  | { readonly typ: "zwischentitel"; readonly text: string }
  | { readonly typ: "liste"; readonly punkte: readonly Inline[] };

export interface Abschnitt {
  readonly titel: string;
  readonly bloecke: readonly Block[];
}

export interface Rechtstext {
  readonly titel: string;
  readonly beschreibung: string;
  /** Einleitung vor dem ersten Abschnitt (optional). */
  readonly einleitung?: readonly Block[];
  readonly abschnitte: readonly Abschnitt[];
  readonly stand: string;
}

export interface Leistung {
  readonly name: string;
  readonly beschreibung: string;
}

export interface Leistungsgruppe {
  readonly titel: string;
  readonly leistungen: readonly Leistung[];
}

/* ---------- Kurzschreibweisen für die Inhaltsdateien ---------- */

export const ph = (hinweis: string): Platzhalter => ({ art: "platzhalter", hinweis });

export const link = (href: string, text: string, extern = false): Verweis => ({
  art: "link",
  href,
  text,
  extern,
});

export const istPlatzhalter = (wert: unknown): wert is Platzhalter =>
  typeof wert === "object" && wert !== null && (wert as Platzhalter).art === "platzhalter";
