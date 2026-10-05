/**
 * Verzeichnis aller Seiten: HTML-Datei → Inhalt.
 * Neue Seite anlegen: HTML-Hülle im Projektordner erstellen (wie impressum.html)
 * und hier eintragen.
 */
import { datenschutz } from "./content/datenschutz.ts";
import { impressum } from "./content/impressum.ts";
import type { Seite } from "./templates/layout.ts";
import { rechtstextSeite } from "./templates/rechtstext.ts";
import { startseite } from "./templates/startseite.ts";

export const seiten: Record<string, () => Seite> = {
  "index.html": startseite,
  "impressum.html": () => rechtstextSeite(impressum),
  "datenschutz.html": () => rechtstextSeite(datenschutz),
};
