from flask import *
app = Flask(__name__)

GOOGLE_APPS_SCRIPT_ID = "AKfycbyWY4yUDJVWUCPQLcKW6axqDP0bIECqz99IanBavXGQ4Xc2VuG6qmW-tLCo0TgzyHbO"

status = {
    "site": 0,
    "statistics": 0
}

@app.route("/")
def master():
    return render_template("index.html",
    site=status["site"])

@app.route("/bilet/<ticket>")
def bilet(ticket):
    return render_template(
        "ticket.html", ticket=ticket,
        GOOGLE_APPS_SCRIPT_ID=GOOGLE_APPS_SCRIPT_ID,
        site=status["site"]
    )

@app.route("/istatistikler")
def istatistikler():
    return render_template(
        "statistics.html",
        GOOGLE_APPS_SCRIPT_ID=GOOGLE_APPS_SCRIPT_ID,
        statistics=status["statistics"]
    )

@app.errorhandler(404)
def not_found(err):
    return render_template("404.html", err=err)




