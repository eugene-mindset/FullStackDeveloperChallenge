# My Submission

To run the project you will need Python 3.10 for the server and Node.js 18.16 for the site.

To start the server, install the requirements.txt file into either a virtual machine or your local installation of 
python and then run `python main.py` in the backend subdirectory. You can also use the bash script in that directory to 
start the server.

To start the client, simply install the dependancies for the node app and then run `npm start`. Again, there is a bash 
script located in the directory to make it easier to run.

## Design Assumptions

* The different cases of a word are treated as different
* All users see the same document
* Used [Levenshtein Distance](https://en.wikipedia.org/wiki/Levenshtein_distance) to measure similarity of words, using an iterative approach.
* Followed Figma flow and design
* Top 3 results are the earliest excerpt per unique match, instead of the three earliest excerpts belonging to top three
* Text is updated when operations are completed

## Possible Improvements

There are definitely some things I wanted to add or improve, but didn't want to use more time, felt I already used a bit more than necesscary.

* Implement transitions for menu
* Write test cases and documentation
* Commit more to show better git history
* Cleanup front end code to reduce amount of props being passed
* Cleanup styling so there isn't so much redundant css
* Ideally the document is unique per user, would need to manage sessions and a better server architecture to support this
* Find ways to improve performance of corpus operations, like caching calculated distances
* I prefer TypeScript to JavaScript, but for a timed project, JavaScript is probably better here