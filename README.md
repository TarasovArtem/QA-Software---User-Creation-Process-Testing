# "QA challenge" Software - User Creation Process Testing

## Objective:
The objective of this testing is to ensure the smooth and accurate functioning of the user creation process in the "QA challenge" Software, both through its GraphQL API and web interface.

## Testing Scope:
The testing will cover the following aspects of the user creation process:

1. User creation via GraphQL API and web interface.
2. Validation of user input for correctness and completeness.
3. Data integrity and consistency after user creation.
4. Error handling and user-friendly error messages.

## Testing Types:
### Functional Testing:
1. Verify that users can successfully be created using both the GraphQL API and the web interface.
2. Test various valid and invalid inputs to ensure proper validation.
3. Verify that user data is correctly stored in the database after creation.
4. Verify that appropriate error messages are displayed for invalid inputs.

## Test Scenarios:
### Successful User Registration:
Verify that a user can successfully be created using both the GraphQL API and the web interface.

### Invalid Inputs:
1. Test with missing or incomplete information (e.g., missing email).
2. Test with invalid email formats.

### Error Messages:
1. Verify that appropriate error messages are displayed for various error scenarios.

## Testing Environment:
1. Testing will be conducted in a controlled test environment to ensure no impact on actual users.
2. Test data will be generated to cover various scenarios.

## Conclusion:
By thoroughly testing the user creation process of the Cashcog Software, I aim to ensure that users can seamlessly be created, and their data is correctly stored.

# Test Instructions

## Installation:
1. Clone the repository: `git clone https://github.com/TarasovArtem/qa-challenge.git`
2. Install dependencies: `npm install`

## Opening Cypress GUI:
You can open the Cypress GUI using the following commands:

- Open Cypress: `npx cypress open`
- Open Cypress with a specific environment: `cy:testEnv:open`
- Open Cypress in Chrome: `cy:testEnv:chrome`
- Open Cypress in Firefox: `cy:testEnv:firefox`

## Running Tests in Terminal:
To run tests from the terminal, use the following command: `cy:testEnv:run`

## Folder Structure:
- API Tests: `qa-challenge/cypress/e2e/tests/api_tests`
- Reports: `qa-challenge/cypress/e2e/tests/reports`
- UI Tests: `qa-challenge/cypress/e2e/tests/ui_tests`

Make sure to navigate to the appropriate folder before running tests.

Please note that these instructions assume you have Node.js and npm installed on your machine.

For more details and options on running tests, refer to the Cypress documentation.


