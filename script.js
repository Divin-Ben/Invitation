/*
  PERSONNALISATION : modifie les valeurs ci-dessous.
  Pour enregistrer les réponses, colle l'URL de ton déploiement Apps Script dans SCRIPT_URL.
*/
const CONFIG = {
  bride: "Ariane",
  groom: "Éloy",
  date: "SAMEDI · 11 JUILLET · 2026",
  day: "11",
  year: "2026",
  venue: "Chapelle La Grâce, Goma",
  church: "Chapelle La Grâce · Goma",
  reception: "Salle des fêtes · Goma",
  deadline: "30 juin 2026",
  // Remplace par l'URL Web App Google Apps Script après déploiement.
  scriptUrl: "COLLE_ICI_URL_WEB_APP"
};

document.querySelectorAll('[data-name="bride"]').forEach(el => el.textContent = CONFIG.bride);
document.querySelectorAll('[data-name="groom"]').forEach(el => el.textContent = CONFIG.groom);
document.querySelector('[data-date]').textContent = CONFIG.date;
document.querySelector('[data-day]').textContent = CONFIG.day;
document.querySelector('[data-year]').textContent = CONFIG.year;
document.querySelector('[data-venue]').textContent = CONFIG.venue;
document.querySelector('[data-church]').textContent = CONFIG.church;
document.querySelector('[data-reception]').textContent = CONFIG.reception;
document.querySelector('[data-deadline]').textContent = CONFIG.deadline;

const form = document.getElementById("rsvpForm");
const statusBox = document.getElementById("formStatus");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (CONFIG.scriptUrl === "COLLE_ICI_URL_WEB_APP") {
    statusBox.textContent = "Le formulaire est prêt. Configure d'abord l'URL Google Apps Script dans script.js.";
    return;
  }
  const button = form.querySelector("button");
  button.disabled = true;
  button.textContent = "ENVOI EN COURS…";
  statusBox.textContent = "";
  const data = Object.fromEntries(new FormData(form).entries());
  try {
    await fetch(CONFIG.scriptUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"},
      body: new URLSearchParams(data).toString()
    });
    statusBox.textContent = "Merci ! Votre réponse a été envoyée.";
    form.reset();
  } catch (error) {
    statusBox.textContent = "L'envoi a échoué. Vérifiez votre connexion et réessayez.";
  } finally {
    button.disabled = false;
    button.textContent = "ENVOYER MA RÉPONSE";
  }
});
