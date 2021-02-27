# Full-Stack-Interview - Tucker Hawkinson

## Overview

Hi! Thank you for taking the time to review my code! The code in this repo is what I was able to come up with within the 4 hour allotted time block. I completed the two api endpoints:

- getting all robots
- getting a robot by id

I built the corresponding front end to those requests. For the front end I took advantage of Vue. I would love to learn React, but not during an coding challenge... I kept the start command the same so `npm install` and `npm start` will still run both the front end portion and the back end portion simultaneously. I used `bulma` as a css framework since I like the way it looks and it is a pure css framework.

I took the extra credit section of the application

> You are encouraged to have fun with the project. Feel free to add anything you like to the app.

And I ran with it!

Lately I have been really interested in SSO services. I have a small personal instance of [Keycloak](https://www.keycloak.org/) running in GCP so I hooked up the application to that! If for some reason we run into bad luck when you are testing this application (the auth server is down) I created a variable [here](https://github.com/hawkeye2013/react-full-stack-interview/blob/ec3b4bb79ad1516b171c37245b3b562b8b1067e5/src/main.js#L9) that you can change to `false`. Changing the `USE_AUTH` to `false` will circumvent the authentication guard when the app is loaded and allow it to run without Keycloak.

The test username and password I was using was:

username: jdoe@hawkinson.dev

password: password

Feel free to make your own account so you can see it pull your own name as well!

A note on testing:

I am a **huge** fan of testing code. I think its a great way to pull out bugs in the code and I would never think of shipping an application until I had some tests in it. I set up the project to run tests, but I had such a time crunch I chose to show off what I could do in the four hours without the overhead of tests. Again, In a production environment I would **100%** be writing tests. I usually use Jest for unit and integration tests and Cypress for e2e tests.

Again, thank you so much for taking the time to review my submission! Hope you like it!

Tucker

## Setup

### Install dependencies:

`npm install`

### Run:

`npm run start`

App: `localhost:3000`
API `localhost:3001`

## Completed Features

### App

- ~~View all robots~~
- ~~View details of a single robot~~
- A way for a user to create a robot
- A way to delete a specific robot
- A way for robots to fight
- A way to view past battle results

### API

- Create robots, which have the following properties
  - Name
  - Color
  - Attack
  - Defense
- ~~Get a robot~~
- Modify the color, attack and defense of a robot
- Delete a robot
- Store battle results
