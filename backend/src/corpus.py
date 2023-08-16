"""
"""

from pathlib import Path
from string import punctuation

corpus_path = Path('./corpus/hemingway.txt')

def read_corpus():
    """
    Read corpus from directory

    Returns: string of corpus text
    """

    with open(corpus_path, encoding="utf-8") as file:
        corpus_text = file.read()
        file.close()

        words = [word.strip(punctuation) for word in corpus_text.split()]
        word_count = {}

        for word in words:
            new_word = word
            if len(new_word):
                if new_word in word_count:
                    word_count[word] += 1
                else:
                    word_count[word] = 1

        return corpus_text, word_count

def calculate_distance(a: str, b: str) -> int:
    """
    Calculates the similarity between two words using Levenshtein distance.

    Returns: an int representing distance between two words

    # TODO: cache results?
    # TODO: use more optimal lev. distance
    
    """
    m = len(a)
    n = len(b)

    matrix = [[0 for y in range (n + 1)] for x in range (m + 1)]

    for i in range(1, m + 1):
        matrix[i][0] = i

    for j in range(1, n + 1):
        matrix[0][j] = j

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if a[i - 1] == b[j - 1]:
                delta = 0
            else:
                delta = 1

            matrix[i][j] = min(matrix[i-1][j] + 1, matrix[i][j-1] + 1, matrix[i-1][j-1] + delta)

    return matrix[m][n]

def search_similar_words(query: str, corpus: str, corpus_words: dict, count=3):
    """
    Get highest similar words in corpus.

    Returns: list of top words and their scores, and example location in corpus for each top word
    """

    scores = [(word, calculate_distance(word, query)) for word in corpus_words]
    scores.sort(key=lambda x: x[1])
    top_scores = [{'word': word, 'count': corpus_words[word]} for word, _ in scores[:count]]

    top_results = []

    for word_score in top_scores:
        word = word_score['word']
        start = corpus.lower().find(word)
        end = start + len(word)
        text = corpus[max(start - 10, 0):min(end + 10, len(corpus))]
        top_results.append({
            'text': text,
            'start': 10,
            'end': 10 + len(word)
        })

    return top_scores, top_results

def replace_words_corpus(word: str, new_word: str, corpus: str, corpus_words: dict):
    """
    Update corpus with replacing a term.

    Returns: new corpus text and update corpus word count
    """
    if new_word:
        corpus_words[new_word] = corpus_words[word]
    
    del corpus_words[word]

    new_corpus = corpus.replace(word, new_word)

    return new_corpus, corpus_words
