"""
Contains the flask object handling all API endpoints.
"""
import sys

from flask import Flask, request
from flask_cors import CORS

from .corpus import read_corpus, search_similar_words, replace_words_corpus

# create flask app
app = Flask(__name__)
CORS(app)

app.corpus_live, app.corpus_live_counts = read_corpus()

# TODO: ideally document is unique per user, would need to manage sessions/use better server architecture
# TODO: write test cases for each route, function

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
        if not hasattr(app, 'corpus_live'):
            app.corpus_live, app.corpus_live_counts = read_corpus()

        return {"text": app.corpus_live}, 200
    except (OSError, IOError) as error:
        print(error, file=sys.stderr)
        return {'message': 'could not properly load corpus'}, 500

@app.route("/corpus/<query>", methods=['GET', 'POST', 'DELETE'])
def get_matching_words(query: str):
    """
    Perform corpus operations
    
    Returns: HTTP response
    """
    if request.method == 'POST':
        try:
            if not query:
                return {'message': 'incorrect query'}, 500

            if 'word' in request.json:
                new_word = request.json['word']
                app.corpus_live, app.corpus_live_counts = replace_words_corpus(query, new_word, app.corpus_live, app.corpus_live_counts)

            return {'corpus': app.corpus_live}, 200

        except (AttributeError) as error:
            print(error, file=sys.stderr)
            return {'message': 'Could not find word in corpus'}, 500
    elif request.method == 'DELETE':
        try:
            if not query:
                return {'message': 'incorrect query'}, 500

            app.corpus_live, app.corpus_live_counts = replace_words_corpus(query, '', app.corpus_live, app.corpus_live_counts)

            return {'corpus': app.corpus_live}, 200

        except (AttributeError) as error:
            print(error, file=sys.stderr)
            return {'message': 'could not find word in corpus'}, 500
    else:
        try:
            if not query:
                return {'message': 'incorrect query'}, 500

            words, results = search_similar_words(query, app.corpus_live, app.corpus_live_counts, 3)
            return {"counts": words, "results": results, "total": sum([x['count'] for x in words])}, 200

        except (AttributeError) as error:
            print(error, file=sys.stderr)
            return {'message': 'could not fetch similar words within corpus'}, 500
