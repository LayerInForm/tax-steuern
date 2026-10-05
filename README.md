# tax-steuern.de

Website der TAX Hanseatische Steuerberatungsgesellschaft mbH, gebaut mit
**Vite + TypeScript**, ohne Framework.

Alle Inhalte liegen typisiert in `src/content/` und werden **beim Build als
fertiges HTML** in die Seiten geschrieben (Prerendering über ein kleines
Vite-Plugin in `vite.config.ts`). Im Browser läuft nur ein Skript mit
wenigen Zeilen – die Seite funktioniert auch ohne JavaScript.
Keine externen Ressourcen, keine Cookies, kein Tracking.

## Voraussetzungen

Node.js ≥ 20.19

## Befehle

```bash
npm install          # einmalig
npm run dev          # lokale Vorschau mit Live-Reload (http://localhost:5173)
npm run build        # erzeugt den Ordner dist/ (warnt bei offenen Platzhaltern)
npm run build:live   # wie build, bricht aber ab, solange Platzhalter offen sind
npm run preview      # fertigen dist/-Ordner lokal ansehen
npm run typecheck    # nur TypeScript prüfen
```

## Projektaufbau

```
index.html, impressum.html, datenschutz.html   HTML-Hüllen (werden beim Build befüllt)
vite.config.ts            Build + Prerender-Plugin + Platzhalter-Prüfung
src/
  content/
    site.ts               ★ Firma, Kontakt, Register, Leistungen, Hinweistext
    impressum.ts          ★ Impressum
    datenschutz.ts        ★ Datenschutzerklärung
    typen.ts              Typen + Helfer ph() und link()
  templates/              HTML-Vorlagen (Kopf-/Fußzeile, Startseite, Rechtstexte)
  seiten.ts               Zuordnung HTML-Datei → Inhalt
  styles/style.css        Gestaltung (Farben ganz oben unter „FARBEN & MASSE“)
  main.ts                 Browser-Skript (Jahreszahl) + CSS-Import
public/                   wird unverändert nach dist/ kopiert
  .htaccess               HTTPS-Weiterleitung, Sicherheits-Header, Caching
  fonts/                  Fraunces + Inter Tight (SIL Open Font License)
  favicon.svg
```

★ = Hier werden Texte geändert.

## Texte ändern

Zum Beispiel die Faxnummer in `src/content/site.ts`:

```ts
fax: ph("Faxnummer ergänzen"),   // vorher
fax: "040 12345678",             // nachher
```

Danach `npm run build` ausführen. Im Dev-Server (`npm run dev`) lädt die
Seite nach dem Speichern automatisch neu.

## Platzhalter

Fehlende Angaben sind mit `ph("…")` markiert und erscheinen gelb auf der
Seite. `npm run build` listet alle offenen Platzhalter auf,
`npm run build:live` verweigert den Build, bis alle ersetzt sind.

- E-Mail bestätigen → in `site.ts` `bestaetigt: true` setzen
- Erreichbarkeit, Faxnummer
- Geschäftsführer, Registergericht, HRB, USt-IdNr.
- Berufshaftpflicht: Versicherer, Anschrift, räumlicher Geltungsbereich
- AV-Vertrag mit STRATO, Speicherdauer der Logfiles (`datenschutz.ts`)
- Impressum und Datenschutzerklärung juristisch prüfen lassen

## Veröffentlichen bei STRATO

1. `npm run build:live`
2. Den **Inhalt** von `dist/` per SFTP in das Verzeichnis der Domain
   tax-steuern.de hochladen (versteckte Dateien einblenden, damit
   `.htaccess` mitkommt). Alte Dateien in `assets/` können gelöscht werden –
   die Dateinamen enthalten einen Hash und ändern sich bei jedem Build.
3. SSL für die Domain im STRATO-Kundenbereich aktivieren.

Die Seite muss im Wurzelverzeichnis der Domain liegen (Pfade beginnen mit `/`).
