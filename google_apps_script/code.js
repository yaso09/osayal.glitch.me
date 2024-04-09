// Main code to Google Apps Script

const ssid = "1tGRE7Av0qB3NvSln8fn_SPS0z0d_7dF3VfluGwsTg4w";
const ss = SpreadsheetApp.openById(ssid);
const adaylar = ss.getSheetByName("Adaylar");
const oylar = ss.getSheetByName("Oylar");

function getTicket() {
    return PropertiesService
    .getScriptProperties().getProperty("ticket");
}

function getAdaylar() {
    return adaylar.getDataRange().getValues();
}

function getOylar() {
    return oylar.getDataRange().getValues();
}

function controlTicket() {
    let oys = getOylar();
    let found = 0<String(oys).search(getTicket());
    return found;
}

function controlTicketCell() {
    let oys = getOylar();
    let found = 0<String(oys).search(`${getTicket()},empty`);
    return found;
}

function oyVer(name) {
    let oys = getOylar();
    let adays = getAdaylar();
    let ticket = getTicket();
    let found0 = false;
    let found1 = false;
    for (let i = 0; i < oys.length; i++) {
        if (oys[i][0] == ticket) {
            oylar.getRange(i + 1, 2).setValue(name);
            found0 = true;
            break;
        }
    }
    for (let i = 0; i < adays.length; i++) {
        if (adays[i][0] == name) {
            adaylar.getRange(i + 1, 3).setValue(
                adays[i][2] + 1
            );
            found1 = true;
        }
    }
    return found0 && found1;
}

function doGet(e) {
    let ticket = e.parameter.ticket;
    PropertiesService.getScriptProperties()
    .setProperty("ticket", ticket);
    let type = e.parameter.type;
    return render(ticket, type);
}


