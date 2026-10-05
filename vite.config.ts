/**
 * Vite-Konfiguration
 *
 * Besonderheit: Alle Inhalte werden schon beim Build (und im Dev-Server)
 * aus den TypeScript-Dateien in src/ als fertiges HTML in die Seiten
 * geschrieben („Prerendering“). Im Browser läuft danach praktisch kein
 * JavaScript – gut für Ladezeit, Suchmaschinen und Barrierefreiheit.
 */
import { basename, resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";
import { seiten } from "./src/seiten.ts";
import { gefundenePlatzhalter, platzhalterZuruecksetzen } from "./src/templates/html.ts";
import { body, head } from "./src/templates/layout.ts";

/** `npm run build:live` setzt diese Variable – dann sind Platzhalter verboten. */
const STRENG = process.env.PLATZHALTER_STRENG === "1";

function prerender(): Plugin {
  const offen = new Map<string, readonly string[]>();

  return {
    name: "tax-prerender",
    transformIndexHtml: {
      order: "pre",
      handler(html, ctx) {
        const datei = basename(ctx.filename);
        const seite = seiten[datei];
        if (!seite) throw new Error(`Keine Inhalte für ${datei} in src/seiten.ts eingetragen.`);

        platzhalterZuruecksetzen();
        const s = seite();
        const ergebnis = html
          .replace("<!-- seite:head – wird beim Build aus src/ befüllt -->", head(s))
          .replace("<!-- seite:body – wird beim Build aus src/ befüllt -->", body(s));
        offen.set(datei, gefundenePlatzhalter());
        return ergebnis;
      },
    },
    closeBundle() {
      const liste = [...offen].flatMap(([datei, p]) => p.map((h) => `  ${datei}: ${h}`));
      if (liste.length === 0) {
        this.info?.("Keine offenen Platzhalter – bereit für den Livegang.");
        return;
      }
      const meldung = `${liste.length} offene Platzhalter:\n${liste.join("\n")}`;
      if (STRENG) this.error(`Build abgebrochen. ${meldung}`);
      else this.warn(meldung);
    },
  };
}

export default defineConfig({
  plugins: [prerender()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    // Kein Polyfill nötig: es gibt nur ein einziges, winziges Skript
    modulePreload: { polyfill: false },
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, "index.html"),
        impressum: resolve(import.meta.dirname, "impressum.html"),
        datenschutz: resolve(import.meta.dirname, "datenschutz.html"),
      },
    },
  },
});
