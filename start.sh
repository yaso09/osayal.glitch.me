# Setup dependencies
pip3 install -r requirements.txt
# Serve production server
gunicorn server:app -w --log-file server.log
