"""
"""

from pathlib import Path

corpus_path = Path('./corpus/hemingway.txt')

def read_corpus() -> str:
    """
    Read corpus from directory

    Returns: string of corpus text
    """

    with open(corpus_path, encoding="utf-8") as file:
        corpus_text = file.read()
        file.close()
        return corpus_text
