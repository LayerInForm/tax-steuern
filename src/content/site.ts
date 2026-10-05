/**
 * ZENTRALE INHALTE der Website.
 * Name, Adresse, Kontaktdaten und Leistungen werden hier einmal gepflegt
 * und automatisch auf allen Seiten (Startseite, Impressum, Datenschutz) verwendet.
 */
import { ph, type Angabe, type Leistungsgruppe } from "./typen.ts";

export const firma = {
  kurzname: "TAX",
  zusatz: "Hanseatische Steuerberatungsgesellschaft mbH",
  name: "TAX Hanseatische Steuerberatungsgesellschaft mbH",
  strasse: "Hagener Allee 2",
  plz: "22926",
  ort: "Ahrensburg",
  domain: "tax-steuern.de",
} as const;

export const person = {
  titel: "Dipl.-Betrw.",
  name: "Stephan Kremer",
  beruf: "Steuerberater",
} as const;

export const kontakt: {
  telefon: { anzeige: string; e164: string };
  email: { adresse: string; bestaetigt: boolean };
  fax: Angabe;
  erreichbarkeit: Angabe;
} = {
  telefon: { anzeige: "040 22946318", e164: "+494022946318" },
  // Auf true setzen, sobald die Adresse bestätigt ist – dann verschwindet der Platzhalter.
  email: { adresse: "info@tax-steuern.de", bestaetigt: false },
  // Faxnummer als Text eintragen, z. B. "040 12345678"
  fax: ph("Faxnummer ergänzen"),
  erreichbarkeit: ph("z. B. Mo–Do 8–17 Uhr, Fr 8–13 Uhr"),
};

/** Handelsregister & Geschäftsführung (für Impressum und Datenschutz). */
export const register: {
  geschaeftsfuehrer: Angabe;
  registergericht: Angabe;
  hrb: Angabe;
  ustId: Angabe;
} = {
  geschaeftsfuehrer: ph("Name(n) der Geschäftsführer ergänzen"),
  registergericht: ph("Amtsgericht ergänzen"),
  hrb: ph("Nummer ergänzen"),
  ustId: ph("DE … ergänzen"),
};

/** Berufshaftpflichtversicherung (Pflichtangabe im Impressum). */
export const haftpflicht: { versicherer: Angabe; anschrift: Angabe; geltungsbereich: Angabe } = {
  versicherer: ph("Name des Versicherers ergänzen"),
  anschrift: ph("Anschrift des Versicherers ergänzen"),
  geltungsbereich: ph("z. B. Bundesrepublik Deutschland / Europa – laut Police ergänzen"),
};

/** Startbereich: jede Zeile wird einzeln eingeblendet. */
export const hero = {
  zeilen: ["Steuerberatung", "und Buchhaltung", "in Ahrensburg."],
} as const;

export const leistungen = {
  titel: "Leistungen",
  zielgruppen: "Für Unternehmen, Selbstständige und Privatpersonen.",
  gruppen: [
    {
      titel: "Beratung",
      leistungen: [
        {
          name: "Steuerberatung",
          beschreibung: "Laufende und anlassbezogene Beratung in allen steuerlichen Fragen.",
        },
        {
          name: "Begleitung bei Betriebs\u00ADprüfungen",
          beschreibung:
            "Vorbereitung, Begleitung während der Prüfung und Abstimmung mit dem Finanzamt.",
        },
      ],
    },
    {
      titel: "Abschlüsse und Erklärungen",
      leistungen: [
        { name: "Jahresabschlüsse", beschreibung: "Bilanz sowie Einnahmen-Überschuss-Rechnung (EÜR)." },
        { name: "Steuererklärungen", beschreibung: "Betriebliche und private Steuererklärungen." },
      ],
    },
    {
      titel: "Laufende Buchhaltung",
      leistungen: [
        { name: "Finanzbuchhaltung", beschreibung: "Laufende Buchführung für Ihr Unternehmen." },
        {
          name: "Lohn- und Gehalts\u00ADabrechnung",
          beschreibung: "Monatliche Abrechnungen für Ihre Mitarbeiterinnen und Mitarbeiter.",
        },
      ],
    },
  ] satisfies Leistungsgruppe[],
};

/**
 * Hinweis über dem Kontaktbereich.
 * Auf null setzen, um ihn auszublenden.
 */
export const hinweisMandate: string | null =
  "Wir betreuen einen festen Mandantenkreis und nehmen derzeit keine neuen Mandate an.";

/** Kartenlink (nur Link, keine eingebettete Karte – datenschutzfreundlich). */
export const kartenLink =
  "https://www.openstreetmap.org/search?query=" +
  encodeURIComponent(`${firma.strasse}, ${firma.plz} ${firma.ort}`);
