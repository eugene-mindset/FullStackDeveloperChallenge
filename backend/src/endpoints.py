"""
Contains the flask object handling all API endpoints.
"""
import sys

from flask import Flask
from flask_cors import CORS

from .corpus import read_corpus

# create flask app
app = Flask(__name__)
CORS(app)


@app.route("/")
def hello_world():
    """
    Home endpoint.

    Returns: string
    """

    return "Hello, World!"

@app.route("/corpus", methods=['GET'])
def get_corpus():
    """
    Returns the corpus thats being viewed.

    Returns: HTTP response
    """

    try:
        if not hasattr(app, 'corpus'):
            app.corpus = read_corpus()

        return {"text": app.corpus}, 200
    except (OSError, IOError) as error:
        print(error, file=sys.stderr)
        return {}, 500
