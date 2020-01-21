# Cypress - Cucumber Example

## Installing

- Clone repo
- `npm install`
 
## Writing tests

Feature are written in `cypress/integration`

They can be kept in folders that group similar features

Step definitions are kept in folders that have the same name as the feature

Steps that are common across many features can be kept in `cypress/common`

## Environment files

environment data is kept in `cypress.env.json`. This is set up to not be pushed to github for security purposes

An example of this can can be found [here](./cypress.env.json.txt)

Copy the file and rename it to `cypress.env.json`

## Running tests

- `npm test`

a html report is generated, called `cucumber_report.hmtml`, and placed in the root of the project

## ESLint

There is a pre-commit hook configured when using git on the command line. 

The hook runs ESLint for all uncommited files

This will not work if Intellij's built in VCS tool is used. 


## Local debugging

To run the Cypress runner locally, for debugging:

`npm run cypress`
