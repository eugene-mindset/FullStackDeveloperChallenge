# My Submission

To run the project you will need Python 3.10 for the server and Node.js 18.16 for the site.

To start the server, cd into the background direction and install the requirements.txt file into either a virtual machine or your local installation of 
python. Then simply run `python main.py` in the backend subdirectory. You can also use the bash script in that directory to handle setting up and starting the server.

To start the client, simply install the dependancies for the frontend node app and then run `npm start`. Again, there is a bash 
script located in the directory to make it easier to run.

## Design Assumptions

* The different cases of a word are treated as different
* All users see the same document
* Used [Levenshtein Distance](https://en.wikipedia.org/wiki/Levenshtein_distance) to measure similarity of words, using an iterative approach.
* Followed Figma design and demo as close as I could
* Top 3 results are the earliest excerpt per unique match, instead of the three earliest excerpts belonging to top three
* Text is updated when operations are completed

## Desired Improvements

There are definitely some things I wanted to add or improve, but didn't want to use more time, felt I already used a bit more than necesscary. Noted these in code.