# Word Game

In this project, I have recreated a popular online word game, Wordle:

![Demo showing the finished product, our Wordle clone](docs/wordle-demo.gif)

In Wordle, users have 6 attempts to guess a 5-letter word. You're helped along the way by ruling out letters that aren't in the word, and being told whether the correct letters are in the correct location or not.There are 3 possible statuses:

- **correct** — this slot is perfect. It's the right letter in the right place.
- **misplaced** — this letter does exist in the word, but in a different slot.
- **incorrect** — this letter is not found in the word at all.

If all your guesses goes wrong, you're given the correct answer at the end!

### Want to run this project on your local?
- Clone the repository from https://github.com/n-jhanwar/project-wordle
- To run a local development server, we first need to install third-party dependencies (eg. React, Parcel). This can be done by cd-ing into the root project folder and running the following command: `npm install`
- Once the dependencies have been downloaded, you can run a dev server with the following command: `npm run dev`
- You can see from this output that a local development server is running at http://localhost:1234


### Happy Wordling!
