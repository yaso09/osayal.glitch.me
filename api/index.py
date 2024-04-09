from flask import *
app = Flask(__name__)

GOOGLE_APPS_SCRIPT_ID = "AKfycbwRhsj2zQNYUDlwSVlhs8LKbnPZuvh_M7A_l347I3USLVhwurf4-Y_QpgC0bt9g0Df34w"

status = {
    "site": 0,
    "statistics": 0
}

@app.route("/")
def master():
    return render_template("index.html",
    site=status["site"], statistics=status["statistics"])

@app.route("/bilet/<ticket>")
def bilet(ticket):
    return render_template(
        "ticket.html", ticket=ticket,
        GOOGLE_APPS_SCRIPT_ID=GOOGLE_APPS_SCRIPT_ID
    )

@app.route("/istatistikler")
def istatistikler():
    return render_template(
        "statistics.html",
        GOOGLE_APPS_SCRIPT_ID=GOOGLE_APPS_SCRIPT_ID
    )

@app.errorhandler(404)
def not_found(err):
    return render_template("404.html", err=err)




