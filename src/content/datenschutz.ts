/**
 * DATENSCHUTZERKLÄRUNG – passend zur Seite: Hosting bei STRATO, Server-Logfiles,
 * Kontakt per E-Mail/Telefon, keine Cookies, kein Tracking, keine externen Inhalte.
 */
import { firma, kontakt, register } from "./site.ts";
import { link, ph, type Inline, type Rechtstext } from "./typen.ts";

const email: Inline = [
  link(`mailto:${kontakt.email.adresse}`, kontakt.email.adresse),
  kontakt.email.bestaetigt ? "" : [" ", ph("E-Mail noch bestätigen")],
];

export const datenschutz: Rechtstext = {
  titel: "Datenschutz\u00ADerklärung",
  beschreibung: `Datenschutzerklärung der ${firma.name}, ${firma.ort}.`,
  stand: "Oktober 2026",
  einleitung: [
    {
      typ: "absatz",
      inhalt:
        "Diese Website ist bewusst schlicht gehalten: Sie verwendet keine Cookies, keine Analyse- oder Trackingdienste, keine eingebetteten Inhalte Dritter und lädt keine Schriften oder Skripte von fremden Servern. Im Folgenden informieren wir Sie, welche personenbezogenen Daten dennoch verarbeitet werden.",
    },
  ],
  abschnitte: [
    {
      titel: "1. Verantwortlicher",
      bloecke: [
        {
          typ: "adresse",
          zeilen: [
            firma.name,
            ["vertreten durch ", register.geschaeftsfuehrer],
            `${firma.strasse}, ${firma.plz} ${firma.ort}`,
            ["Telefon: ", link(`tel:${kontakt.telefon.e164}`, kontakt.telefon.anzeige)],
            ["E-Mail: ", email],
          ],
        },
      ],
    },
    {
      titel: "2. Hosting",
      bloecke: [
        {
          typ: "absatz",
          inhalt: [
            "Diese Website wird bei der STRATO AG, Otto-Ostrowski-Straße 7, 10249 Berlin, gehostet. Wenn Sie die Website aufrufen, werden die unter Punkt 3 genannten Daten auf den Servern von STRATO verarbeitet. Mit STRATO besteht ein Vertrag über die Auftragsverarbeitung nach Art. 28 DSGVO. ",
            ph("AV-Vertrag im STRATO-Kundenbereich abschließen und hier bestätigen"),
          ],
        },
      ],
    },
    {
      titel: "3. Server-Logfiles",
      bloecke: [
        {
          typ: "absatz",
          inhalt:
            "Beim Aufruf der Website übermittelt Ihr Browser automatisch Informationen, die in sogenannten Server-Logfiles gespeichert werden:",
        },
        {
          typ: "liste",
          punkte: [
            "IP-Adresse des anfragenden Geräts",
            "Datum und Uhrzeit des Zugriffs",
            "aufgerufene Seite bzw. Datei und übertragene Datenmenge",
            "Browsertyp und -version, verwendetes Betriebssystem",
            "Referrer-URL (zuvor besuchte Seite)",
          ],
        },
        {
          typ: "absatz",
          inhalt: [
            "Die Verarbeitung erfolgt, um die Website technisch bereitzustellen und ihre Sicherheit und Stabilität zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt im sicheren und fehlerfreien Betrieb der Website. Eine Zusammenführung mit anderen Datenquellen findet nicht statt. Die Logfiles werden nach ",
            ph("Speicherdauer laut STRATO ergänzen, z. B. 7 Tagen"),
            " gelöscht bzw. anonymisiert.",
          ],
        },
      ],
    },
    {
      titel: "4. SSL-/TLS-Verschlüsselung",
      bloecke: [
        {
          typ: "absatz",
          inhalt:
            "Diese Website nutzt eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie am Schloss-Symbol und an „https://“ in der Adresszeile Ihres Browsers.",
        },
      ],
    },
    {
      titel: "5. Kontakt per E-Mail oder Telefon",
      bloecke: [
        {
          typ: "absatz",
          inhalt:
            "Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben (z. B. Name, Kontaktdaten, Inhalt Ihrer Anfrage), um Ihr Anliegen zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage mit einem bestehenden Mandat oder vorvertraglichen Maßnahmen zusammenhängt, im Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).",
        },
        {
          typ: "absatz",
          inhalt:
            "Wir löschen diese Daten, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten (insbesondere nach Handels- und Steuerrecht sowie dem Steuerberatungsgesetz) entgegenstehen. Als Steuerberater unterliegen wir der gesetzlichen Verschwiegenheitspflicht.",
        },
        {
          typ: "absatz",
          inhalt:
            "Bitte beachten Sie: Unverschlüsselte E-Mails können auf dem Übertragungsweg grundsätzlich von Dritten eingesehen werden. Senden Sie vertrauliche Unterlagen daher bitte nur nach Absprache auf einem sicheren Weg.",
        },
      ],
    },
    {
      titel: "6. Links zu externen Websites",
      bloecke: [
        {
          typ: "absatz",
          inhalt:
            "Diese Website enthält Links, etwa zu OpenStreetMap oder zur Bundessteuerberaterkammer. Es handelt sich um einfache Links, keine eingebetteten Inhalte: Daten werden an den jeweiligen Anbieter erst übertragen, wenn Sie den Link anklicken. Ab dann gilt die Datenschutzerklärung des jeweiligen Anbieters.",
        },
      ],
    },
    {
      titel: "7. Ihre Rechte",
      bloecke: [
        { typ: "absatz", inhalt: "Sie haben nach der DSGVO jederzeit das Recht auf" },
        {
          typ: "liste",
          punkte: [
            "Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO),",
            "Berichtigung unrichtiger Daten (Art. 16 DSGVO),",
            "Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO),",
            "Datenübertragbarkeit (Art. 20 DSGVO),",
            "Widerspruch gegen Verarbeitungen, die auf Art. 6 Abs. 1 lit. f DSGVO beruhen (Art. 21 DSGVO).",
          ],
        },
        { typ: "absatz", inhalt: "Wenden Sie sich dafür einfach an die oben genannten Kontaktdaten." },
      ],
    },
    {
      titel: "8. Beschwerderecht bei der Aufsichtsbehörde",
      bloecke: [
        {
          typ: "absatz",
          inhalt:
            "Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Für uns zuständig ist:",
        },
        {
          typ: "adresse",
          zeilen: [
            "Unabhängiges Landeszentrum für Datenschutz Schleswig-Holstein (ULD)",
            "Holstenstraße 98",
            "24103 Kiel",
            link("https://www.datenschutzzentrum.de", "www.datenschutzzentrum.de", true),
          ],
        },
      ],
    },
  ],
};
