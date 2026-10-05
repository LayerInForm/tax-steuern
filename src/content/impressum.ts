/**
 * IMPRESSUM – Pflichtangaben für eine Steuerberatungsgesellschaft.
 * Firmen-, Kontakt- und Registerdaten kommen aus site.ts.
 */
import { firma, haftpflicht, kontakt, person, register } from "./site.ts";
import { link, ph, type Inline, type Rechtstext } from "./typen.ts";

const emailZeile: Inline = [
  "E-Mail: ",
  link(`mailto:${kontakt.email.adresse}`, kontakt.email.adresse),
  kontakt.email.bestaetigt ? "" : [" ", ph("E-Mail noch bestätigen")],
];

export const impressum: Rechtstext = {
  titel: "Impressum",
  beschreibung: `Impressum der ${firma.name}, ${firma.ort}.`,
  stand: "Oktober 2026",
  abschnitte: [
    {
      titel: "Angaben gemäß § 5 DDG",
      bloecke: [
        { typ: "adresse", zeilen: [firma.name, firma.strasse, `${firma.plz} ${firma.ort}`] },
        { typ: "zwischentitel", text: "Vertreten durch die Geschäftsführung" },
        { typ: "absatz", inhalt: register.geschaeftsfuehrer },
        { typ: "zwischentitel", text: "Kontakt" },
        {
          typ: "zeilen",
          zeilen: [
            ["Telefon: ", link(`tel:${kontakt.telefon.e164}`, kontakt.telefon.anzeige)],
            ["Telefax: ", kontakt.fax],
            emailZeile,
          ],
        },
        { typ: "zwischentitel", text: "Registereintrag" },
        {
          typ: "zeilen",
          zeilen: [
            "Eintragung im Handelsregister",
            ["Registergericht: ", register.registergericht],
            ["Registernummer: HRB ", register.hrb],
          ],
        },
        { typ: "zwischentitel", text: "Umsatzsteuer-Identifikationsnummer" },
        { typ: "absatz", inhalt: ["gemäß § 27a Umsatzsteuergesetz: ", register.ustId] },
      ],
    },
    {
      titel: "Berufsrechtliche Angaben",
      bloecke: [
        { typ: "zwischentitel", text: "Gesetzliche Berufsbezeichnungen" },
        {
          typ: "zeilen",
          zeilen: [
            "Die Gesellschaft ist als Steuerberatungsgesellschaft anerkannt.",
            `${person.titel} ${person.name} führt die gesetzliche Berufsbezeichnung „${person.beruf}“, verliehen in der Bundesrepublik Deutschland.`,
          ],
        },
        { typ: "zwischentitel", text: "Zuständige Kammer und Aufsichtsbehörde" },
        {
          typ: "adresse",
          zeilen: [
            "Steuerberaterkammer Schleswig-Holstein",
            "Körperschaft des öffentlichen Rechts",
            "Hopfenstraße 2 d",
            "24114 Kiel",
            link("https://www.stbk-sh.de", "www.stbk-sh.de", true),
          ],
        },
        { typ: "zwischentitel", text: "Berufsrechtliche Regelungen" },
        { typ: "absatz", inhalt: "Für die Berufsausübung gelten insbesondere:" },
        {
          typ: "liste",
          punkte: [
            "Steuerberatungsgesetz (StBerG)",
            "Durchführungsverordnung zum Steuerberatungsgesetz (DVStB)",
            "Berufsordnung der Bundessteuerberaterkammer (BOStB)",
            "Steuerberatervergütungsverordnung (StBVV)",
          ],
        },
        {
          typ: "absatz",
          inhalt: [
            "Die Regelungen können bei der Bundessteuerberaterkammer eingesehen werden: ",
            link("https://www.bstbk.de", "www.bstbk.de", true),
          ],
        },
        { typ: "zwischentitel", text: "Berufshaftpflichtversicherung" },
        {
          typ: "zeilen",
          zeilen: [
            haftpflicht.versicherer,
            haftpflicht.anschrift,
            ["Räumlicher Geltungsbereich: ", haftpflicht.geltungsbereich],
          ],
        },
      ],
    },
    {
      titel: "Verbraucherstreitbeilegung",
      bloecke: [
        {
          typ: "absatz",
          inhalt:
            "Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
        },
      ],
    },
    {
      titel: "Haftung für Links",
      bloecke: [
        {
          typ: "absatz",
          inhalt:
            "Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
        },
      ],
    },
  ],
};
