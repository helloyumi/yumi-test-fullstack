# Yumi 2021 Fullstack Role Take Home Test

## Introduction

Thank you for taking the time to complete this test! This test replicates a development environment very similar to our own. This will be a good introduction to what it is like to develop at Yumi.

## Background (30 minutes reading)

Our backend uses [Feathers](https://feathersjs.com/) which is a Node framework that utilizes Express and Socket.io.

Please read the following Feathers documentation pages for relevant information on completing your tasks below:

- https://docs.feathersjs.com/guides/basics/services.html#feathers-services

- https://docs.feathersjs.com/guides/basics/hooks.html#hooks

- https://docs.feathersjs.com/api/hooks.html#hook-context

## Setup

NOTE: I have included expected task times for each step. Sometimes bugs or unexpected problems during installation can come up so those times may get inflated by unforeseen issues.

### Setup MySQL (5-30 minutes)

- You need to install MySQL 5.7 or utilize a cloud MySQL database that you have control over.
- If you are using a Mac, I suggest using brew or https://dbngin.com/.
- Create a database table called `yumi-test-fullstack`.
- Import the `sql/yumi-test-fullstack.sql` file into the `yumi-test-fullstack` database you just created.

### Install NVM (5-15 minutes)

- Please install it following these instructions: https://github.com/nvm-sh/nvm#installing-and-updating

### Setup the Node application (5-15 minutes)

- Clone this repository to your local machine.
- Navigate to the folder in a console/terminal and run `nvm install && nvm use`.
- If that works successfully, run `npm install`.
- If the installation is sucessful, run `npm run dev` to start the Feathers server.
- To verify the server is running, visit `http://localhost:3030/meals` in your browser. You should see a large JSON object filled with meals.

## Assignment

### 1. Get the server setup and running (15 - 60 minutes)

This will probably take at least an hour, though installation issues definitely can occur that can take more time. If this is the only step you are able to complete, please submit a screenshot of the `/meals/` path visited in the browser.

### 2. Modify the meals find/get responses to include ingredients (1 - 2 hours)

When you GET all meals or GET a specific meal, please add a key to the response called `ingredients` that is an ordered array of ingredients, ordered by the `preppred_ingredient_amount`, where the first array element has the largest `preppred_ingredient_amount` value.

HINT: You will have create a hook and add to the meal's hooks file.
HINT: You can use the same hook for several endpoints
HINT: Understanding the hook context is very important, especially the result property: https://docs.feathersjs.com/api/hooks.html#context-result

### 3. Modify the homepage to show a list of meals and their ingredients (30 - 60 minutes)

- In the public/ folder, modify the index.html so it displays a list of all the meals from the /meals endpoint. Next to each meal should be the ordered list of ingredients.

### (Bonus #1) Prevent updates to the meals, ingredients, & ingredient-meals services (15 - 30 minutes)

Please prevent records from being modified through feathers (ex: POST, PATCH, DELETE, etc requests).

HINT: https://hooks-common.feathersjs.com/hooks.html#disallow

### (Bonus #2) Host your work on Heroku (30 - 60 minutes)

- Signup for a free account
- Create a MySQL db using ClearDB or one of the other free add-on providers.
- Access the DB and load the data from the provided SQL file.
- Associate the Heroku application with your Github project repository.

## Submission

Please create a public Github repo with your work and submit it to the Yumi team.
