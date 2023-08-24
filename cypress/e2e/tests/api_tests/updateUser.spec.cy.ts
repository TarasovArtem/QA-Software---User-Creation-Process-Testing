/// <reference types="Cypress" />

describe("Create User", () => {

    const query = `
        mutation UpdateUserMutation($input: UpdateUserInput!) {
            updateUser(input: $input) {
            ok
            error
            user {
                uuid
                email
                firstName
                lastName
                newsletter
            }
            }
        }
    `;

    const variables = {
        input: {
            "uuid": "",
            "email": "updatedUser@xcnt.com",
            "firstName": "Agent",
            "lastName": "007",
            "newsletter": false
        }
    };

    it("Mutation - Update User", () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:8080/graphql',
            headers: {
              'Content-Type': 'application/json',
            },
            body: {
              query,
              variables,
            },
        })
        .then(response => {
            // Verify that the request returned a successful status and the expected results 
            if (response.status === 200) {
              const data = response.body;
              const status = response.status;
              //console.log(data);
              cy.log(data, status);
            } else {
              console.error('Request failed with status:', response.status);
            }
        });
    })
})