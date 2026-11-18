// Google Apps Script : enregistre les réponses dans une feuille Google Sheets.
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Réponses")
    || SpreadsheetApp.getActiveSpreadsheet().insertSheet("Réponses");
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Date de réception", "Nom complet", "Présence", "Boisson", "Message"]);
  }
  const p = e.parameter;
  sheet.appendRow([new Date(), p.nom || "", p.presence || "", p.boisson || "", p.message || ""]);
  return ContentService.createTextOutput("OK");
}
