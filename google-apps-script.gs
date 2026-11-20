
const SPREADSHEET_ID = "COLLE_ICI_ID_DE_TON_GOOGLE_SHEETS";

function doPost(e) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);

    let sheet = ss.getSheetByName("Réponses");

    if (!sheet) {
      sheet = ss.insertSheet("Réponses");
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Date de réception",
        "Nom complet",
        "Présence",
        "Boisson",
        "Message"
      ]);
    }

    const p = e.parameter;

    sheet.appendRow([
      new Date(),
      p.nom || "",
      p.presence || "",
      p.boisson || "",
      p.message || ""
    ]);

    return ContentService.createTextOutput("OK");

  } catch (error) {
    return ContentService.createTextOutput(
      "Erreur : " + error.message
    );
  }
}
