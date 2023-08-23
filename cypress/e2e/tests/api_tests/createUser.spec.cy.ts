/// <reference types="Cypress" />
 

describe("Create User", () => {

    const query = `
    mutation CreateUserMutation($input: CreateUserInput!) {
        createUser(input: $input) {
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
        "email": "newUser@xcnt.com",
        "firstName": "Agent",
        "lastName": "007",
        "newsletter": false
        }
    };

    it("Mutation - Create User", () => {
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
            if (response.status === 200) {
                const data = response.body;
                console.log(data);
                expect(data.data.createUser).equal(null);
                expect(data.errors[0].message).equal('');
              } else {
                console.error('Request failed with status:', response.status);
              }
        });
    })
})








