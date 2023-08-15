#!/bin/bash

if [ -d "./.venv" ] 
then
    . ./.venv/bin/activate
    pip install -r ./requirements.txt
else
    python -m venv ./.venv
    . ./.venv/bin/activate
    pip install -r ./requirements.txt
fi

python ./main.py