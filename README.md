## Description

- Small side project to get accustomed to `Nest.js` and its various features (Auth, DB Connection etc.).
- Objective number 2 will be to set up and manage CI properly, with proper testing in place set for various githubs events (on pull request etc)
- Objective number 3 will be to manage dependencies for "a long time", i.e. updating depencies often and figure out various strategies to deal with that.

## Aim of the API

- The aim of the API is a very selfish one: being able to figure out which restaurants are opened today around where I live. (Somehow the one where I want to go tends to be always closed on that day. And somehow I don't have a good enough memory to remember the days of the weeks where they actually close 🤦)

## API Endpoints

- `TBD`

## Authentication

- Authentication is done with **JWT**, associating the features of `Nest.js` and `Passport.js`.

## Authorization

Authorization rules:

- An admin user can do CRUD on any Entity / Database
- Non-logged users can read all restaurant information, cannot read the "wishlist" of users
- Each Restaurant owner can edit data regarding their own restaurant, cannot edit data related to other restaurants
- Each User can CRUD their own "restaurant favorites" list, but cannot see nor edit lists of other people

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License
