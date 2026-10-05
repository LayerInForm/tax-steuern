/**
 * Einziges Skript im Browser.
 * Die Inhalte werden bereits beim Build als fertiges HTML erzeugt
 * (siehe vite.config.ts) – die Seite funktioniert also auch ohne JavaScript.
 */
import "./styles/style.css";

// Aktuelles Jahr in der Fußzeile (falls der Build aus dem Vorjahr stammt)
const jahr = String(new Date().getFullYear());
document.querySelectorAll<HTMLElement>("[data-jahr]").forEach((el) => {
  el.textContent = jahr;
});
