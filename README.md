# Friendliest Friend Finder

A compatibility-based Full Stack web application using Node and Express servers

This full-stack site will take in results from the users' input based on an 11 question survey. The answers range on a scale of 1 to 5. The program compares their answers with those from other users and displays the name and picture of the friend with the best overall match.

## Building F3: Required tools & tech:

### NPM Packages installed and required by the server.js file:

- Express
- Path
- Body-Parser

### The htmlRoutes.js file contains two routes:

- a GET Route to the survey which displays the survey page once the user clicks the button on the homepage.
- a default, catch-all route that leads the user back to the home page.

### The apiRoutes.js file also contains two routes:

- a GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
- a POST route with the url /api/friends. This will be used to handle incoming survey results and handle the comparison logic

### When the user hits submit:

A modal will pop-up displaying both the name and picutre of the closest match.

![](app/public/images/F3-part1.gif)

##### User arrives at home page and clicks through to survey

![](app/public/images/bridg-bird-pt2.gif)

##### Closest match pops up in modal

![](app/public/images/F3-part2-submit.gif)

##### Closest match pops up in modal
