// Renderer

function render(ticket, type) {
    let out;
    if (type == "statistics") {
        out = HtmlService.createHtmlOutputFromFile("statistics");
    } else if (type == "form") {
        out = HtmlService.createHtmlOutputFromFile("form");
    } else if (type == "generator") {
        out = HtmlService.createHtmlOutputFromFile("generator");
    }
    out
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .setSandboxMode(HtmlService.SandboxMode.IFRAME);
    
    return out;
}


