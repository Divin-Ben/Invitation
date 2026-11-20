
const SPREADSHEET_ID = "1sGAuH7Zqwq07QJ8A2lvU-IRU18gHO0AmATr4vnMUFDQ";

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
